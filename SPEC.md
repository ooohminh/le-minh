# LE MINH - macOS Premium Landing Page Specification

## 1. Overall Layout Structure

### Desktop
- Full-page dark background (#0d1117) with subtle noise/gradient overlay
- **Global macOS Menu Bar** (fixed top, ~28px height): #1e242c with backdrop-blur
- **Main macOS Window** (large centered card, ~max-w-5xl, 12px+ border-radius)
  - Window has glassmorphism: semi-transparent #161b22 fill with backdrop-blur(12px)
  - Strong box-shadow: large offset + dark ambient + subtle green tint
  - Traffic lights in top-left (accurate macOS colors, sizes, spacing)
  - Centered title: `le-minh@consulting:~` in window titlebar
- Inner content: subtle bezel with inset shadow
- Footer outside the window, full-width

### Mobile (< 768px)
- Menu bar collapses to minimal (just logo + hamburger)
- macOS window fills most of the viewport, reduced border-radius
- All grids collapse to single-column
- Case study expandable cards become full-width accordions
- Traffic lights shrink slightly

## 2. Exact Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg-base` | `#0d1117` | Page background |
| `menubar-bg` | `#1e242c` | macOS menu bar background |
| `window-bg` | `#161b22` | Main window fill (with blur) |
| `text-primary` | `#c9d1d9` | Body text, headings |
| `text-secondary` | `#8b949e` | Muted text, labels |
| `text-tertiary` | `#484f58` | Very muted, placeholder |
| `accent-green` | `#22c55e` | Primary accent (CTAs, highlights, cursor) |
| `accent-cyan` | `#67e8f9` | Secondary accent |
| `border` | `#30363d` | Borders, dividers, window outline |
| `traffic-red` | `#ff5f57` | Close button |
| `traffic-yellow` | `#ffbd2e` | Minimize button |
| `traffic-green` | `#27c93f` | Maximize button |
| `glow` | `rgba(34,197,94,0.08)` | Terminal glow behind hero |

## 3. Typography

| Element | Size | Weight | Font Family |
|---|---|---|---|
| Menu bar text | 13px | 500 | system-ui, -apple-system, sans-serif |
| Window title | 13px | 600 | system-ui, -apple-system, sans-serif |
| Section heading | 22px | 700 | system-ui, -apple-system, sans-serif |
| Card title | 16px | 600 | system-ui, -apple-system, sans-serif |
| Body text | 15px | 400 | system-ui, -apple-system, sans-serif |
| Terminal/prompt text | 14px | 400 / 600 | JetBrains Mono, SF Mono, monospace |
| Mono labels (small) | 11px | 500 | JetBrains Mono, SF Mono, monospace |
| Tech tags | 10px | 500 | JetBrains Mono, SF Mono, monospace |

Line heights: headings 1.3, body 1.65, terminal lines 1.7

## 4. Component Breakdown

### 4.1 Global macOS Menu Bar
- Fixed top, h-7 (28px), bg-[#1e242c]/95 backdrop-blur-md
- Left side: Apple/terminal icon (12px) + "LE MINH" in semibold
- Menu items: File, Edit, View, Window, Help (13px, text-secondary, hover to text-primary)
- Right: Wi-Fi icon, battery icon, current time (HH:MM, 13px)
- Bottom border: 1px solid #30363d

### 4.2 Main macOS Window
- Container: max-w-5xl, mx-auto, pt-16 (to clear menu bar)
- Window frame: rounded-xl (12px), bg-[#161b22]/95 backdrop-blur-xl
- Border: 1px solid #30363d
- Shadow: 0 25px 50px -12px rgba(0,0,0,0.5) + 0 0 40px rgba(34,197,94,0.05)
- Window titlebar: h-9 (36px), flex items-center, border-b border-[#30363d]
  - Left: 3 traffic light dots (12px each, 8px gap, 12px left padding)
  - Center: `le-minh@consulting:~` in 13px system-ui semibold text-secondary
  - Right: (empty, keeps balance with title)
- Inner content area: px-6 md:px-10 py-6 md:py-8
  - Subtle inset shadow via inner box-shadow

### 4.3 Sections (inside window, in order)
Every section follows the same heading pattern:
```
<span class="font-mono text-[11px] text-tertiary">$ command</span>
<span class="text-tertiary/50">|</span>
<span class="font-mono text-[11px] text-tertiary">// Section Label</span>
<h2>Section Heading</h2>
```

### 4.4 Hero
- Two typed lines, character-by-character (50ms line1, 35ms line2, 600ms gap)
- Line 1: `<span class="text-accent font-bold">></span> Initializing LE MINH Services...`
- Line 2: `<span class="text-accent font-bold">></span> Specialized in Software Architecture, API Integration, and Cloud Infrastructure.`
- Blinking cursor after line 2 (CSS keyframes)
- CTA: "Explore Our Services" button fades in after typing completes
- Subtle green radial glow behind hero area

### 4.5 About
- Two paragraphs, "registered IT service firm based in Ho Chi Minh City"
- System-ui body text, secondary gray for second paragraph

### 4.6 Services (6 cards)
- 3x2 grid (desktop), 1-col (mobile)
- Each card: border border-[#30363d], rounded-lg, p-5
- Hover: border-green-500, bg-[#1c2128], translateY(-2px)
- `[service-01]` label, title (alternating green/cyan), description, `// operational` dot

### 4.7 Recent Projects (3 cards)
- 3-col grid (desktop), 1-col (mobile)
- Tech tags, title, short desc, arrow link, completion year

### 4.8 Case Studies (NEW - 3 expandable cards)
- Each case study is a clickable card with:
  - Header with title + expand/collapse chevron
  - Expanded content with Challenge, Solution, Technologies, Results
  - Technologies shown as colorful tag pills
  - Results with metrics highlighted in green
- JavaScript toggle: only one open at a time (accordion behavior)
- Smooth height transition (200ms ease)
- Content: AI-heavy, realistic metrics

### 4.9 Contact
- Two-column layout: left = details with icons, right = prominent CTA callout box
- Address, Email, Phone clearly labeled
- "Ready to build something?" callout with email CTA

### 4.10 Footer
- Outside window, full-width, `[exit 0]` in green + copyright

## 5. Responsiveness Plan

| Breakpoint | Behavior |
|---|---|
| >= 1024px | Full desktop: 3-col projects, 3x2 services, 2-col contact, macOS menu bar visible |
| 768-1023px | Tablet: 2-col services, 2-col projects, 2-col contact |
| < 768px | Mobile: all grids 1-col, hamburger replaces menu bar items, window padding reduced |
| < 480px | Tight padding (px-4), smaller fonts, reduced window border-radius |

## 6. Animations

- **Typing effect**: JS-driven, 50ms/char (line1), 35ms/char (line2), 600ms pause
- **Cursor blink**: CSS keyframes, 1s cycle, infinite
- **Scroll reveal**: IntersectionObserver, fade-up + translateY(20px), 500ms ease-out
- **Service/project cards**: border-color + translateY on hover, 200ms
- **Case study expansion**: max-height transition, 300ms ease
- **CTA button**: scale(1.03) + brightness on hover, 200ms
- **Mobile menu**: slide-down, 300ms ease

## 7. Compliance / Grey.co

- "LE MINH" in menu bar, hero, about, footer
- "We" / "LE MINH" language only
- Full physical address + email + phone
- "registered IT service firm based in Ho Chi Minh City"
- Zero em-dashes (hyphens only)
- JSON-LD structured data for LocalBusiness

## 8. Technical

- Single `index.html` file
- Tailwind CSS via CDN
- Google Fonts: JetBrains Mono (CSS import)
- No images -- pure CSS + inline SVG icons
- Backdrop blur + glassmorphism via Tailwind's backdrop-blur utilities
- Background noise via CSS pseudo-element with SVG filter
- Vanilla JS at bottom of body
