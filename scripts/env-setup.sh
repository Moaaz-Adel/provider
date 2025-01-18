#!/bin/bash

# Load environment variables from .env file if it exists
if [ -f .env ]; then
    set -a # If all variables that are defined separately are exported to the environment of the subsequent commands
    source .env
    set +a # Turn of alexport
fi

# git related commands
export GITHUB_SHA=$(git rev-parse --short HEAD)
export GITHUB_BRANCH=$(git rev-parse --abbrev-ref HEAD)