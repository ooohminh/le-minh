# LE MINH - macOS Premium Landing Page Specification v3

## 1. Theme: Ayu Dark Terminal (Ghostty/Orca inspired)

### 1.1 Typography
- **Primary mono font**: SF Mono (macOS system font), fallback: JetBrains Mono, Menlo, Monaco, monospace
- **Section headings**: lowercase (terminal style) -- "about", "services", "projects", "case studies", "contact"
- **Terminal text**: slightly larger for legibility (15px base, 14px mono)

### 1.2 Color Palette (Ayu Dark -- default)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-base` | `#0d1117` | Page background |
| `--color-bg-surface` | `#1a1f2a` | Window fill, cards, footer |
| `--color-bg-hover` | `#212837` | Card hover state |
| `--color-bg-menubar` | `#1a1f2a` | Menu bar background |
| `--color-text-primary` | `#c5c8c6` | Body text, headings (soft gray) |
| `--color-text-secondary` | `#8a8d92` | Muted text, labels |
| `--color-text-tertiary` | `#5c5f64` | Very muted text |
| `--color-accent` | `#9ece6a` | Primary accent (CTAs, cursor, highlights) - Ayu green |
| `--color-accent-secondary` | `#7dcfff` | Secondary accent (alternating cards, links) - Ayu cyan |
| `--color-accent-glow` | `rgba(158,206,106,0.07)` | Radial glow behind hero |
| `--color-border` | `#252b38` | Borders, dividers, window outline |
| `--color-success` | `#9ece6a` | Status dots |
| `--traffic-red` | `#ff5f57` | Close button |
| `--traffic-yellow` | `#ffbd2e` | Minimize button |
| `--traffic-green` | `#27c93f` | Maximize button |

### 1.3 Other Themes (preserved, colors refined)

Catppuccin Mocha: bg #1e1e2e, text #cdd6f4, accent #cba6f7, secondary #89b4fa
Catppuccin Macchiato: bg #24273a, text #cad3f5, accent #c6a0f6, secondary #8aadf4
GitHub Dark: bg #161b22, text #e6edf3, accent #58a6ff, secondary #3fb950
Tokyo Night: bg #1a1b26, text #a9b1d6, accent #7aa2f7, secondary #bb9af7

### 1.4 Traffic Lights remain standard macOS colors across all themes

## 2. Layout Changes

### 2.1 Menu Bar (cleaned up)
- Remove Apple/terminal icon
- Remove Wi-Fi icon, battery icon
- Left: "LE MINH" bold text only
- Right: theme picker (palette icon) + clock
- No non-functional elements
- Minimal, clean, ~28px height

### 2.2 Lowercase Headings
- All section titles now lowercase
- "about", "services", "projects", "case studies", "contact"
- Command labels remain $ lowercase style

### 2.3 Font Stack
- body/system text: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- monospace: SF Mono, JetBrains Mono, Menlo, Monaco, monospace
- SF Mono is macOS native so it renders natively on the user's machine

### 2.4 Font Sizes (larger for legibility)
- Terminal text: 15px (was 14px)
- Mono labels: 12px (was 11px)
- Section headings: 23px (was 22px)
- Body text: 15px (unchanged)

## 3. Everything else preserved

- macOS window frame with traffic lights and glassmorphism
- Terminal glow behind hero
- Typing animation (hero)
- Services (6 cards), Projects (3 cards), Case Studies (3 accordions), Contact
- Theme system with 5 themes, dropdown picker, localStorage persistence
- Mobile responsive, hamburger menu
- Zero em-dashes, JSON-LD structured data
- All compliance rules (We/LE MINH, address visible, etc.)