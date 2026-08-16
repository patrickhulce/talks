# slidev-theme-compass

Local Slidev theme modeled on the Compass-era decks in `.data` (Montserrat, dark body slides, light cover, ALL-CAPS eyebrows, slide numbers).

No Compass wordmark, rose logo, or confidential footer.

## Use

```yaml
---
theme: ../../../themes/slidev-theme-compass
---
```

Preview the starter:

```bash
pnpm --dir themes/slidev-theme-compass dev
```

## Layouts

| Layout | Frontmatter | Notes |
|---|---|---|
| `cover` | `event`, `date`, `speaker`, `kicker` | Light cover. `kicker` defaults to `ENGINEERING`. |
| `section` | `eyebrow` | Chapter head: huge title + subtitle. |
| `default` | `eyebrow` | Dark content. Eyebrow like `AGENDA` or `SECTION • CONTEXT`. |
| `intro` | `eyebrow`, `image` | About / bio. Optional `::media::` slot. |
| `statement` | — | Full-bleed word (`DISCLAIMER!`). |
| `end` | `eyebrow` | Thank-you + socials. |
