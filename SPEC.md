# LE MINH - Darker Ayu Dark Background & Button Update

## Background Changes (Ayu Dark)

| Token | Old | New |
|---|---|---|
| --color-bg-base (page) | #0d1117 | **#0b0e14** |
| --color-bg-surface (window) | #1a1f2a | **#0f1419** |
| --color-bg-hover | #212837 | **#161c24** |
| --color-bg-menubar | #1a1f2a | **#0f1419** |
| --color-border | #252b38 | **#1a2029** |

## Button Colors

| State | Property | Value |
|---|---|---|
| Default | Background | #9ece6a |
| Default | Text | #0b0e14 |
| Hover | Background | #b7e38a (brighter green) |
| Hover | Transform | scale(1.03) |

Other themes get their own --color-accent-hover values.

## Hero Text

Both typing lines fully lowercase to match terminal aesthetic:

- `$ initializing le minh services...`
- `$ specialized in software architecture, api integration, and cloud infrastructure.`

## Files to Update

1. `app/globals.css` - Darker bg colors, add --color-accent-hover for all 5 themes, update cta-btn class
2. `components/hero-section.tsx` - Lowercase hero text, remove inline CTA bg/color
3. `components/macos-menu-bar.tsx` - Remove inline CTA bg/color
4. `components/contact-section.tsx` - Remove inline CTA bg/color