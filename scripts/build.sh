#!/bin/bash
set -euo pipefail

export NODE_OPTIONS="${NODE_OPTIONS:+$NODE_OPTIONS }--openssl-legacy-provider"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

rm -rf ./dist ./dist-www
mkdir -p ./dist-www
touch ./dist-www/.nojekyll

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

# Slidev talks live at src/<year>/<talk>/slides.md and are not picked up by the
# mdx-deck loop above. Build each as a SPA under /<year>/<talk>/ so GitHub Pages
# can serve them next to the older decks.
while IFS= read -r slides; do
  dir="$(dirname "$slides")"
  year="$(basename "$(dirname "$dir")")"
  talk="$(basename "$dir")"
  out="$ROOT/dist-www/$year/$talk"
  echo "Building slidev $year/$talk..."
  (
    cd "$dir"
    pnpm exec slidev build slides.md \
      --base "/$year/$talk/" \
      --out "$out" \
      --router-mode hash \
      --without-notes
  )
  # Vite only hashes <img src> it can statically see. Component props like
  # MediaTile src="./images/..." stay as relative URLs, so copy media through.
  for media in images videos; do
    if [[ -d "$dir/$media" ]]; then
      mkdir -p "$out/$media"
      cp -R "$dir/$media/." "$out/$media/"
    fi
  done
  if [[ -d "$dir/public" ]]; then
    cp -R "$dir/public/." "$out/"
  fi
done < <(find ./src -type f -name 'slides.md' | sort)

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

node <<'NODE'
const fs = require('fs');
const path = require('path');

const DECK_TITLES = {
  '2018/devtools-lighthouse': 'DevTools + Lighthouse',
  '2018/ndb-lightning': 'ndb',
  '2019/chrome-internals': 'Chrome Internals',
  '2019/lighthouse-ci-lightning': 'Lighthouse CI',
  '2019/lighthouse-vue': 'Staying Off the Rocks (Lighthouse + Vue)',
  '2019/pwas': 'PWAs',
  '2020/lighthouse-ci-with-quiz': 'Lighthouse CI',
  '2020/puppeteer-lightning': 'Browser Integration Testing with Puppeteer',
};

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function frontmatterTitle(file) {
  const text = fs.readFileSync(file, 'utf8');
  const block = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) return null;
  const title = block[1].match(/^title:\s*(.+)$/m);
  if (!title) return null;
  return title[1].trim().replace(/^['"]|['"]$/g, '');
}

const talks = [];
for (const year of fs.readdirSync('src')) {
  const yearDir = path.join('src', year);
  if (!/^\d{4}$/.test(year) || !fs.statSync(yearDir).isDirectory()) continue;
  for (const name of fs.readdirSync(yearDir)) {
    const talkDir = path.join(yearDir, name);
    if (!fs.statSync(talkDir).isDirectory()) continue;
    const slug = `${year}/${name}`;
    const slides = path.join(talkDir, 'slides.md');
    const deckMdx = path.join(talkDir, 'deck.mdx');
    const deckJs = path.join(talkDir, 'deck.js');
    let title = null;
    if (fs.existsSync(slides)) {
      title = frontmatterTitle(slides) || name;
    } else if (fs.existsSync(deckMdx) || fs.existsSync(deckJs)) {
      title = DECK_TITLES[slug] || name;
    } else {
      continue;
    }
    talks.push({ year, slug, title });
  }
}

talks.sort((a, b) => b.year.localeCompare(a.year) || a.slug.localeCompare(b.slug));
const items = talks
  .map((t) => `    <li><a href="./${t.slug}/">${t.year} — ${escapeHtml(t.title)}</a></li>`)
  .join('\n');

const html = `<!DOCTYPE html>
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
${items}
  </ul>
</body>
</html>
`;

fs.writeFileSync('dist-www/index.html', html);
console.log(`Wrote index with ${talks.length} talks`);
NODE
