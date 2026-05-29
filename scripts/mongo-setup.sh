#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=mongo-local.sh
source "${SCRIPT_DIR}/mongo-local.sh"

start_local_mongo
wait_for_mongo

ROOT_DIR="$(dirname "${SCRIPT_DIR}")"
cd "${ROOT_DIR}"

echo "Seeding demo data..."
npm run mongo:seed

echo ""
echo "Done. Next steps:"
echo "  npm run dev"
echo ""
echo "App:      http://localhost:3001"
echo "MongoDB:  $(mongo_uri)"
echo ""
echo "Stop MongoDB when finished: npm run mongo:down"
