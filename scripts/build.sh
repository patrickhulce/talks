#!/bin/bash

for f in $(find . -type f -name "*.mdx"); do
 mdx-deck build "$f"
done
