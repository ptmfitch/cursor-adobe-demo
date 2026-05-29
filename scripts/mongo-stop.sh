#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=mongo-local.sh
source "${SCRIPT_DIR}/mongo-local.sh"

stop_local_mongo
