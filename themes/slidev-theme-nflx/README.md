# slidev-theme-nflx

All-dark command-center HUD. Black field, neon red `#FF1E4E`, pale header wordmark, monospace kickers. No wordmark, N-mark, or licensed brand fonts. Display type is Rajdhani; body is Inter; meta is JetBrains Mono.

## Use

```yaml
---
theme: ../../../themes/slidev-theme-nflx
command: VIDEOGEN
sections:
  - AGENDA
  - DIFFUSION BASICS
  - CUSTOMIZATION
  - WALKTHROUGH
---
```

`command` is the header wordmark. `sections` is the center nav; the current slide `label` is the active item.

Preview the starter:

```bash
pnpm --dir themes/slidev-theme-nflx dev
```

## Layouts

Every layout sits in `HudShell` (header nav + footer index). `tone: light` / `tone: dark` are ignored.

| Layout | Frontmatter | Notes |
|---|---|---|
| `cover` | `event`, `date`, `speaker`, `email`, `bar`, `link`, `image`, `kicker` | Dual-tone title, framed media. Optional `::media::`. |
| `about` | `split` | Large title + staggered 4-up tiles via `::tiles::`. |
| `agenda` | `label`, `title`, `accent`, `kicker`, `image` | Briefing: numbered list left, framed media right. Optional `::media::`. |
| `section` | `label`, `kicker`, `image` | Huge word + subtitle. Optional half-bleed `::media::`. |
| `chapter` | `split`, `label` | Centered heavy title. Optional `::marks::`. |
| `statement` | `label`, `display`, `kicker` | Centered definition. `display: true` for a single giant word. |
| `quote` | `label`, `kicker` | Large pull quote. |
| `timeline` | `label`, `kicker` | Title + `NetflixTimeline` / `PhaseCard` row. |
| `default` | `label`, `title`, `accent`, `kicker` | HUD title + free canvas. Markdown `ol` becomes a HUD list. |
| `code` | `label`, `title`, `accent`, `kicker` | Dark terminal. Wrap fences in `WindowChrome`. |
| `image` | `label`, `title`, `accent`, `kicker`, `image`, `caption`, `target`, `bleed` | Media in `HudFrame`. Optional `::media::`. |
| `two-cols` | `label`, `title`, `accent`, `kicker` | `::left::` / `::right::` as chamfered cards. |
| `split` | `label` | Two dark elevations. `::left::` / `::right::`. |
| `beat` | `number`, `label`, `image` | Giant watermark number over a statement. |
| `demo` | `label`, `link`, `image` | Giant title, accent link, framed QR via `::media::`. |
| `end` | `image` | `Thank You.` + socials. Optional `::media::` for a QR tile. |

## Components

| Component | Props | Notes |
|---|---|---|
| `HudShell` | `label` | Header / nav / footer. Used by every layout. |
| `HudTitle` | `title`, `accent`, `kicker`, `stacked` | Last word in neon, short red rule. |
| `HudCard` | `title`, `kicker`, `accent`: `left` / `bottom` / `none`, `variant`: `content` (default, hug) / `full` (fill parent) | Chamfered surface panel. |
| `HudFrame` | `src`, `target`, `caption`, `scanlines`, `fit`, `hug`, `panel` | L-brackets, scanlines, overlay chip. `panel`: rich overlay slot (e.g. a `HudCard`). |
| `HudList` | `items`: `{ title, body }[]` | `01 >` numbered rows. Raw `ol` in agenda/default matches. |
| `HudMeta` | — | `// PHASE 3` kicker line. |
| `HudButton` | `kind`: `solid` / `ghost` | Execute / abort pair. |
| `PhaseCard` | `phase`, `kicker`, `title`, `src` | Sequence card. Body slot: `#body`. |
| `HudCodeRail` | `title`, `labels`: `string[]`, `ranges`: `{ start, end }[]` | One fence inside a `WindowChrome`. Each range is a start/end line regex; clicks highlight that span and the matching rail label. |
| `WindowChrome` | `title`, `kind`, `url` | `kind`: `code` (default), `browser`, `screenshot`. Always dark. |
| `DeviceFrame` | `kind`: `monitor` / `tablet` / `phone` | Device wireframe. |
| `NetflixTimeline` | `variant`: `axis` / `phases`; `items`: `{ year, label, body, src, images, side, tone }[]` | Axis: years on a red bar, copy/images alternate above/below. Phases: staggered `PhaseCard`s. |
| `MediaTile` | `icon`, `src`, `size`, `tone`, `caption` | Duotone tile with grain and brackets. |
| `Callout` | `label` | Chamfered frame with a red caption. |
| `NetflixArrow` | `label`, `direction`: `right` / `down` | Accent process arrow. |
| `NetflixIcon` | `name`: `mail` / `link` / `at` | Small line icons for the end slide. |
