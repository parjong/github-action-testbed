#!/bin/bash

echo "OUTPUT_RPATH: $1"
echo "GITHUB_WORKSPACE: $GITHUB_WORKSPACE"

ls -al $GITHUB_WORKSPACE

touch "$GITHUB_WORKSPACE/$1"

time=$(date)
# https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter
echo "::set-output name=time::$time"
