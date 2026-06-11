# LE MINH - Syntax Highlighting & Theme System Update

## Font Settings
- Primary: SF Mono, fallback JetBrains Mono
- Base size: 13px for terminal/monospace text
- Font weight: 500
- Line height: 1.35

## CSS Custom Properties (new)

Each theme now has syntax-specific color variables:

| Variable | Ayu Dark | Catppuccin Mocha | Catppuccin Macchiato | GitHub Dark | Tokyo Night |
|---|---|---|---|---|---|
| --color-prompt | #9ece6a | #a6e3a1 | #a6da95 | #3fb950 | #9ece6a |
| --color-text-primary | #c5c8c6 | #cdd6f4 | #cad3f5 | #c9d1d9 | #a9b1d6 |
| --color-accent | #9ece6a | #cba6f7 | #c6a0f6 | #58a6ff | #7aa2f7 |
| --color-string | #bb9af7 | #f5c2e7 | #f5bde6 | #a5d6ff | #bb9af7 |
| --color-comment | #6e738d | #6c7086 | #6e738d | #8b949e | #565f89 |
| --color-variable | #7dcfff | #89b4fa | #8aadf4 | #79c0ff | #73daca |
| --color-number | #e0af68 | #fab387 | #f5a97f | #ffa657 | #e0af68 |

## Syntax Mapping

| Element | Variable |
|---|---|
| `$` prompt symbol | --color-prompt |
| Command names (cat, ls) | --color-accent |
| Arguments/paths | --color-variable |
| `\|` separator | --color-comment |
| `//` comments | --color-comment |
| Section titles | --color-accent |
| Service descriptions | --color-string |
| Case study body text | --color-string |
| Metric values | --color-number |
| Metric labels | --color-comment |
| [service-N] labels | --color-comment |
| Technologies tags | --color-accent |

## Files to Update

1. `app/globals.css` - Add --color-prompt, --color-string, --color-variable, --color-number to all 5 themes; update body font (13px, 500, 1.35)
2. `components/hero-section.tsx` - Use --color-prompt for `$`
3. `components/section-header.tsx` - Use --color-prompt for `$`, --color-variable for args, --color-comment for `|` and comment
4. `components/service-card.tsx` - Use --color-string for description text
5. `components/case-study-card.tsx` - Use --color-string for body, --color-number for metrics
6. `components/case-studies-section.tsx` - Update metric values to use --color-number
7. `components/contact-section.tsx` - Use --color-string for descriptions