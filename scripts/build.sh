#!/bin/bash

rm -rf ./dist ./dist-www

for f in $(find ./src -type f -name "*.mdx"); do
  echo "Building $f..."
  mdx-deck build "$f"

  IFS=/ read -ra PARTS <<< "$f"
  # Parts is ./src/<year>/<talk>/deck.mdx split on /
  # We want <year> and <talk> so index 2 and 3
  OUT_DIR="./dist-www/${PARTS[2]}/${PARTS[3]}"
  mkdir -p "$OUT_DIR"
  mv ./dist/* "$OUT_DIR/"
done
