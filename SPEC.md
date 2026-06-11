# LE MINH - macOS Premium Landing Page Specification v2

## 1. Overall Layout (unchanged from v1)

- Full-page dark background with noise texture and radial gradient overlay
- Global macOS Menu Bar (fixed, 28px, backdrop-blur)
- Main macOS Window with glassmorphism, traffic lights, centered title
- Footer outside window
- Fully responsive (hamburger on mobile)

## 2. Theme System (NEW)

### 2.1 CSS Custom Properties

All theme colors are driven by CSS custom properties on `:root` / `[data-theme="..."]`. Properties:

| Property | Purpose |
|---|---|
| `--color-bg-base` | Page background |
| `--color-bg-surface` | Window fill, cards, footer |
| `--color-bg-hover` | Card hover state |
| `--color-bg-menubar` | Menu bar background |
| `--color-text-primary` | Body text, headings |
| `--color-text-secondary` | Muted text, labels |
| `--color-text-tertiary` | Very muted text |
| `--color-accent` | Primary accent (CTAs, cursor, highlights) |
| `--color-accent-secondary` | Secondary accent (alternating cards, links) |
| `--color-accent-glow` | Radial glow behind hero (rgba version of accent) |
| `--color-border` | Borders, dividers, window outline |
| `--color-success` | Status dots (green) |

### 2.2 Theme Definitions

#### Ayu Dark (DEFAULT)
```
--color-bg-base: #0d1117
--color-bg-surface: #161b22
--color-bg-hover: #1c2128
--color-bg-menubar: #1e242c
--color-text-primary: #c9d1d9
--color-text-secondary: #8b949e
--color-text-tertiary: #484f58
--color-accent: #22c55e          (green)
--color-accent-secondary: #67e8f9 (cyan)
--color-accent-glow: rgba(34,197,94,0.07)
--color-border: #30363d
--color-success: #3fb950
```

#### Catppuccin Mocha
```
--color-bg-base: #11111b
--color-bg-surface: #1e1e2e
--color-bg-hover: #252536
--color-bg-menubar: #181825
--color-text-primary: #cdd6f4
--color-text-secondary: #a6adc8
--color-text-tertiary: #6c7086
--color-accent: #cba6f7          (mauve)
--color-accent-secondary: #89b4fa (blue)
--color-accent-glow: rgba(203,166,247,0.07)
--color-border: #313244
--color-success: #a6e3a1
```

#### Catppuccin Macchiato
```
--color-bg-base: #181926
--color-bg-surface: #24273a
--color-bg-hover: #2c3047
--color-bg-menubar: #1e2030
--color-text-primary: #cad3f5
--color-text-secondary: #a5adcb
--color-text-tertiary: #6e738d
--color-accent: #c6a0f6          (mauve)
--color-accent-secondary: #8aadf4 (blue)
--color-accent-glow: rgba(198,160,246,0.07)
--color-border: #363a4f
--color-success: #a6da95
```

#### GitHub Dark
```
--color-bg-base: #0d1117
--color-bg-surface: #161b22
--color-bg-hover: #1c2128
--color-bg-menubar: #21262d
--color-text-primary: #e6edf3
--color-text-secondary: #8b949e
--color-text-tertiary: #484f58
--color-accent: #58a6ff          (blue)
--color-accent-secondary: #3fb950 (green)
--color-accent-glow: rgba(88,166,255,0.07)
--color-border: #30363d
--color-success: #3fb950
```

#### Tokyo Night
```
--color-bg-base: #0f111a
--color-bg-surface: #1a1b26
--color-bg-hover: #222438
--color-bg-menubar: #1a1b26
--color-text-primary: #a9b1d6
--color-text-secondary: #787c99
--color-text-tertiary: #565f89
--color-accent: #7aa2f7          (blue)
--color-accent-secondary: #bb9af7 (purple)
--color-accent-glow: rgba(122,162,247,0.07)
--color-border: #32344a
--color-success: #9ece6a
```

### 2.3 Theme Switcher UI

- **Location**: macOS menu bar, right side, immediately before the clock
- **Trigger**: Small palette icon (paintbrush/Swatch SVG, 14x14px)
- **Dropdown**: macOS-native style, appears below the icon
  - Rounded bg-surface card with subtle shadow and border
  - Semi-transparent backdrop-blur
  - 5 theme items, each with theme name + colored accent dot
  - Active theme has a checkmark icon on the left
  - Hover highlight (bg-hover)
  - Click to switch, dropdown closes
- **Close behavior**: Click outside dropdown closes it
- **Mobile**: Palette icon still visible in menu bar; dropdown works identically

### 2.4 Persistence

- `localStorage.setItem('le-minh-theme', themeName)` on every switch
- On page load, check localStorage; if present, apply that theme; else default to `ayu-dark`
- `data-theme` attribute on `<html>` element controls which CSS block applies

### 2.5 Smooth Transitions

- `body, .window, .navbar, .service-card, etc.` get `transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease`
- Only transition visual properties (avoid transform/opacity transitions on theme switch)

## 3. Color Palette (default Ayu Dark)

Same as v1 spec, driven by CSS custom properties above.

## 4. Component Breakdown (unchanged from v1)

- macOS Menu Bar (with theme icon added)
- macOS Window with traffic lights + glassmorphism
- Hero, About, Services (6 cards), Projects (3 cards), Case Studies (3 expandable accordions), Contact
- Footer

## 5. Typography (unchanged)

- UI/headings: system-ui, -apple-system, sans-serif
- Terminal: JetBrains Mono, SF Mono, monospace

## 6. Responsiveness (unchanged)

- Theme dropdown collapses gracefully on mobile (smaller padding)
- All grids stack to single column below 768px

## 7. Compliance (unchanged)

- Zero em-dashes
- "We" / "LE MINH" only
- Full address, email, phone visible
- JSON-LD structured data

## 8. Technical (unchanged)

- Single HTML file, Tailwind CDN, Google Fonts, vanilla JS
- Theme system adds ~2KB to file size

---

## Theme Implementation Plan

1. Define all 5 themes as `[data-theme="..."]` CSS blocks with custom properties
2. Add `:root` defaults (Ayu Dark) so un-themed elements always have values
3. Menu bar palette button + dropdown (positioned absolute, right-aligned)
4. JS: `setTheme(name)` function that:
   - Sets `document.documentElement.dataset.theme = name`
   - Saves to `localStorage`
   - Updates checkmark in dropdown
5. JS: On load, read `localStorage.getItem('le-minh-theme')` || `'ayu-dark'`, apply
6. CSS `transition` on key elements