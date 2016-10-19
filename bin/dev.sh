#!/bin/bash

if ! [ -x "$(command -v jq)" ]; then
  echo "Please install 'jq' - brew install jq, apt install jq..."
  exit 1
fi
if ! [ -f "package.json" ]; then
  echo "This script needs to be run from the root of the repository"
  exit 1
fi

# TODO: Dev env vars
set -e

set -o allexport
source .env
set +o allexport
set +e

export NODE_ENV=development

set -x

./node_modules/.bin/gulp watch
