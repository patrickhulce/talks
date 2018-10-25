#!/bin/bash

RECENT_FILES=$(find ./src -type f -name "*.mdx" -print0 | xargs -0 stat -f "%m%t%Sm%t%N" | sort -rn | head -n 5 | cut -f2-)
echo "Most Recently Modified Files"
echo $RECENT_FILES

MOST_RECENT=$(echo $RECENT_FILES | head -n 1 | sed 's/.*src/src/g')
echo "Most recent is $MOST_RECENT"

mdx-deck "$MOST_RECENT"
