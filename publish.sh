#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Publish KB
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🤖

# Documentation:
# @raycast.description Commit and push KB repo

echo "Publishing KB"
git add .
git commit -m "update"
git push origin master

