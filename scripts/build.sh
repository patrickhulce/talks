#!/bin/bash
set -euo pipefail

export NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--openssl-legacy-provider"

rm -rf ./dist ./dist-www

for f in $(find ./src -type f -regex ".*/deck.*"); do
  echo "Building $f..."
  pnpm exec mdx-deck build "$f"

  IFS=/ read -ra PARTS <<< "$f"
  # Parts is ./src/<year>/<talk>/deck.mdx split on /
  # We want <year> and <talk> so index 2 and 3
  OUT_DIR="./dist-www/${PARTS[2]}/${PARTS[3]}"
  mkdir -p "$OUT_DIR"
  mv ./dist/* "$OUT_DIR/"
done

cp -R ./assets/favicons ./dist-www/favicons

# Generate meta-refresh redirect pages from the "redirects" map in package.json,
# e.g. "cyc2026": "2026/deploy-diffusion" -> domain.com/cyc2026 redirects to the talk.
# Absolute https:// URLs are used as-is.
node -e '
const redirects = require("./package.json").redirects || {};
for (const [from, to] of Object.entries(redirects)) {
  console.log(`${from}\t${to}`);
}
' | while IFS=$'\t' read -r FROM TO; do
  if [[ "$TO" == https://* ]]; then
    TARGET="$TO"
  else
    TARGET="/${TO%/}/"
  fi
  echo "Building redirect /$FROM -> $TARGET..."
  OUT_DIR="./dist-www/$FROM"
  mkdir -p "$OUT_DIR"
  cat > "$OUT_DIR/index.html" <<EOF
<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting to $TARGET</title>
<meta http-equiv="refresh" content="0; URL=$TARGET">
<link rel="canonical" href="$TARGET">
EOF
done

cat > ./dist-www/index.html <<'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Talks — Patrick Hulce</title>
  <link rel="icon" type="image/png" href="./favicons/favicon-96x96.png" sizes="96x96">
  <link rel="shortcut icon" href="./favicons/favicon.ico">
  <link rel="manifest" href="./favicons/site.webmanifest">
  <style>
    :root { color-scheme: dark; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      max-width: 40rem;
      margin: 4rem auto;
      padding: 0 1.5rem;
      line-height: 1.5;
      background: #111;
      color: #eee;
    }
    h1 { font-weight: 600; }
    a { color: #8cb4ff; }
    ul { padding-left: 1.2rem; }
    li { margin: 0.4rem 0; }
  </style>
</head>
<body>
  <h1>Talks</h1>
  <ul>
    <li><a href="./2020/puppeteer-lightning/">2020 — Browser Integration Testing with Puppeteer</a></li>
    <li><a href="./2020/lighthouse-ci-with-quiz/">2020 — Lighthouse CI</a></li>
    <li><a href="./2019/chrome-internals/">2019 — Chrome Internals</a></li>
    <li><a href="./2019/lighthouse-ci-lightning/">2019 — Lighthouse CI</a></li>
    <li><a href="./2019/lighthouse-vue/">2019 — Staying Off the Rocks (Lighthouse + Vue)</a></li>
    <li><a href="./2019/pwas/">2019 — PWAs</a></li>
    <li><a href="./2018/devtools-lighthouse/">2018 — DevTools + Lighthouse</a></li>
    <li><a href="./2018/ndb-lightning/">2018 — ndb</a></li>
  </ul>
</body>
</html>
EOF
