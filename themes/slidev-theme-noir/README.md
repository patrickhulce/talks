# slidev-theme-noir

Local Slidev theme using the black / red / white system from the later `.data` decks. Color scheme only — no wordmark, N-mark, layout-grid stamp, or licensed brand fonts. Headings use Inter; code uses IBM Plex Mono.

Black for covers, statements, sections, and beats. White with a full-bleed black title bar for titled content and code.

## Use

```yaml
---
theme: ../../../themes/slidev-theme-noir
---
```

Preview the starter:

```bash
pnpm --dir themes/slidev-theme-noir dev
```

## Layouts

| Layout | Frontmatter | Notes |
|---|---|---|
| `cover` | `event`, `date`, `speaker`, `email`, `bar`, `link`, `image`, `band` | Oversized title, red event · date line, mid-left media, right-aligned speaker. `bar` overrides `event · date`. Optional `::media::` and right `band` image. |
| `about` | `split` (default `ABOUT / THE TALK`) | Large title + staggered 4-up tiles via `::tiles::`. |
| `agenda` | `label`, `title`, `image` | Black left panel (title + media), numbered list on white. Optional `::media::`. |
| `section` | `label`, `image` | Huge word + subtitle. Optional half-bleed `::media::`. |
| `chapter` | `split`, `label` | Centered heavy title. `split: WEB / GPU` becomes a two-word footer. Optional `::marks::`. |
| `statement` | `label`, `display` | Centered 900-weight definition. `display: true` for a single giant word. |
| `quote` | `label`, `tone` | Large pull quote. `tone` is `dark` (default) or `light`. |
| `timeline` | `label` | Large title + `NoirTimeline` slot. |
| `default` | `label`, `tone`, `title` | `tone` is `light` (default, black title bar) or `dark`. |
| `code` | `label`, `title` | White content under the title bar. Wrap fences in `WindowChrome`. |
| `image` | `label`, `title`, `image`, `caption`, `bleed`, `tone` | Screenshot or diagram under the bar. Optional `::media::`. |
| `two-cols` | `label`, `tone`, `title` | `::left::` / `::right::` split. Light + title bar by default. |
| `split` | `label` | Black left / white right halves. `::left::` / `::right::`. |
| `beat` | `number`, `label`, `image` | Giant `#1` / `#2` over a two-line statement. Optional full-bleed `image`. |
| `demo` | `label`, `link`, `image` | Giant title, red link, QR via `::media::`. |
| `end` | `image` | `Thank You.` + socials. Optional `::media::` for a QR tile. |

## Components

| Component | Props | Notes |
|---|---|---|
| `TitleBar` | `title` | Black 108px bar, red rule, shadow. Used by light layouts. |
| `FooterLabel` | `label`, `split` | 8pt light footer with a 1px red tick. `split: WEB / GPU` stacks two words. |
| `SlideNumber` | — | 8pt page number, bottom right. |
| `WindowChrome` | `title`, `kind`, `url` | `kind`: `code` (default), `browser`, `screenshot`. |
| `DeviceFrame` | `kind`: `monitor` / `tablet` / `phone` | Device wireframe. Default slot fills the screen. |
| `NoirTimeline` | `items`: `{ year, label, tone }[]` | Horizontal year ticks. `tone` is `accent`, `deep`, or `dark`. |
| `MediaTile` | `icon`, `src`, `size`, `tone`, `caption` | Duotone tile with grain. Icons: `browser`, `chip`, `film`, `wave`, `layers`, `qr`. Tones: `dim`, `dark`, `deep`, `accent`. |
| `Callout` | `label` | Outlined rounded frame with a red caption. |
| `NoirArrow` | `label` | Red process arrow. |
| `NoirIcon` | `name`: `mail` / `link` / `at` | Small line icons for the end slide. |
