#!/usr/bin/env bash
set -euo pipefail

MONGO_PORT=27017
MONGO_BIND_IP=127.0.0.1
MONGO_URI="mongodb://${MONGO_BIND_IP}:${MONGO_PORT}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "${SCRIPT_DIR}")"
DATA_DIR="${ROOT_DIR}/.mongo-data"
PID_FILE="${DATA_DIR}/mongod.pid"
LOG_FILE="${DATA_DIR}/mongod.log"
MANAGED_MARKER="${DATA_DIR}/.managed-by-demo"

mongo_uri() {
  printf '%s' "${MONGO_URI}"
}

is_mongo_ready() {
  mongosh "$(mongo_uri)" --quiet --eval "db.adminCommand('ping')" >/dev/null 2>&1
}

is_managed_process_running() {
  [[ -f "${PID_FILE}" ]] || return 1
  local pid
  pid="$(cat "${PID_FILE}")"
  kill -0 "${pid}" 2>/dev/null
}

ensure_mongod_installed() {
  if ! command -v mongod >/dev/null 2>&1; then
    echo "mongod not found. Install MongoDB locally, e.g.:" >&2
    echo "  brew tap mongodb/brew && brew install mongodb-community" >&2
    exit 1
  fi
}

start_local_mongo() {
  ensure_mongod_installed

  if is_mongo_ready; then
    echo "MongoDB already accepting connections at ${MONGO_URI}"
    return 0
  fi

  mkdir -p "${DATA_DIR}"

  echo "Starting local MongoDB on ${MONGO_URI}..."
  mongod \
    --dbpath "${DATA_DIR}" \
    --port "${MONGO_PORT}" \
    --bind_ip "${MONGO_BIND_IP}" \
    --logpath "${LOG_FILE}" \
    --pidfilepath "${PID_FILE}" \
    --fork

  touch "${MANAGED_MARKER}"

  for _ in $(seq 1 30); do
    if is_mongo_ready; then
      echo "MongoDB is ready."
      return 0
    fi
    sleep 1
  done

  echo "MongoDB did not become ready in time. See ${LOG_FILE}" >&2
  exit 1
}

stop_local_mongo() {
  if [[ ! -f "${MANAGED_MARKER}" ]]; then
    echo "No demo-managed MongoDB instance found (missing ${MANAGED_MARKER})."
    echo "If MongoDB is running via Homebrew services, stop it with: brew services stop mongodb-community"
    exit 0
  fi

  if is_managed_process_running; then
    local pid
    pid="$(cat "${PID_FILE}")"
    echo "Stopping demo MongoDB (pid ${pid})..."
    kill "${pid}"
    for _ in $(seq 1 15); do
      if ! kill -0 "${pid}" 2>/dev/null; then
        rm -f "${PID_FILE}" "${MANAGED_MARKER}"
        echo "MongoDB stopped."
        return 0
      fi
      sleep 1
    done
    echo "MongoDB did not stop cleanly. Check ${LOG_FILE}" >&2
    exit 1
  fi

  rm -f "${PID_FILE}" "${MANAGED_MARKER}"
  echo "Demo MongoDB is not running."
}

wait_for_mongo() {
  for _ in $(seq 1 30); do
    if is_mongo_ready; then
      return 0
    fi
    sleep 1
  done
  echo "MongoDB is not reachable at ${MONGO_URI}" >&2
  exit 1
}
