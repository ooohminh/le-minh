# LE MINH - Landing Page Specification Document

## 1. Overall Layout Structure

### Desktop (≥ 768px)
- Single-column, full-width dark background (#0d1117)
- Sticky navbar (top) spanning full width with inner max-w-6xl centered container
- Each section stacked vertically, centered content, max-w-5xl / max-w-6xl
- Terminal-window container wraps main body content (hero through contact) - a rounded `#161b22` card with fake OS chrome dots at top-left
- Footer at bottom, full-width, lighter background (#161b22)

### Mobile (< 768px)
- Navbar collapses to hamburger (slide-down overlay menu)
- Sections use full-width with generous horizontal padding (px-4 to px-6)
- Terminal window border radius reduces slightly, top dots shrink
- Service cards stack in single column (2-column grid → 1-column)
- Project cards stack in single column (3-column grid → 1-column)
- Contact details block becomes vertical list with icons stacked
- CTA buttons become full-width, touch-friendly (min 44px tap target)

## 2. Color Palette (Exact Hex Codes)

| Token | Hex | Usage |
|---|---|---|
| `bg-base` | `#0d1117` | Page background |
| `bg-surface` | `#161b22` | Terminal window, navbar, cards, footer |
| `bg-surface-hover` | `#1c2128` | Card hover, nav link hover |
| `bg-accent-subtle` | `rgba(34,197,94,0.08)` | Subtle accent backgrounds (service icon bg) |
| `border-default` | `#30363d` | Terminal window border, card borders, dividers |
| `border-accent` | `#22c55e` | Focus rings, active states |
| `text-primary` | `#e6edf3` | Body text, headings |
| `text-secondary` | `#8b949e` | Muted text, labels, timestamps |
| `text-tertiary` | `#484f58` | Placeholder text, very muted |
| `accent-green` | `#22c55e` | Primary accent (CTAs, highlights, borders, cursor) |
| `accent-cyan` | `#67e8f9` | Secondary accent (service cards, links) |
| `accent-glow` | `rgba(34,197,94,0.15)` | Terminal glow effect behind hero |
| `terminal-red` | `#ff5f57` | Window dot (close) |
| `terminal-yellow` | `#febc2e` | Window dot (minimize) |
| `terminal-green` | `#28c840` | Window dot (maximize) |
| `success` | `#3fb950` | Status indicators |
| `danger` | `#f85149` | Error states |

## 3. Typography Scale

| Element | Size Desktop | Size Mobile | Weight | Font |
|---|---|---|---|---|
| Hero prompt line 1 | 1.5rem (24px) | 1.125rem (18px) | 600 | JetBrains Mono |
| Hero prompt line 2 | 1.125rem (18px) | 0.9375rem (15px) | 400 | JetBrains Mono |
| Section heading (h2) | 1.75rem (28px) | 1.375rem (22px) | 700 | JetBrains Mono |
| Card title | 1.25rem (20px) | 1.0625rem (17px) | 600 | JetBrains Mono |
| Body text | 1rem (16px) | 0.9375rem (15px) | 400 | system sans-serif |
| Small text / labels | 0.875rem (14px) | 0.8125rem (13px) | 400 | JetBrains Mono |
| Nav links | 0.9375rem (15px) | 1rem (16px) | 500 | JetBrains Mono |
| CTA button | 1rem (16px) | 0.9375rem (15px) | 600 | JetBrains Mono |
| Terminal dots size | 12px | 10px | - | - |
| Code prompt `>` | same as adjacent text | same | 700 | JetBrains Mono |

- **Line heights**: headings 1.3, body 1.7, terminal lines 1.8
- **Letter-spacing**: headings -0.01em, body normal

## 4. Component Breakdown

### 4.1 Navbar
- Fixed/sticky at top, bg-surface (#161b22) with bottom border (#30363d)
- Logo: `> LE MINH` in accent-green with blinking cursor animation on the `>` (static, not typing)
- Desktop: inline nav links (Home, Services, Projects, Contact) + subtle accent-green hover underline
- Mobile: hamburger icon (three-line SVG, green), opens full-screen overlay menu with links stacked vertically, close button (X icon)
- Nav links scroll-smooth to section anchors

### 4.2 Terminal Window Container
- Wraps hero, about, services, projects, contact
- Rounded corners (12px desktop, 8px mobile)
- 1px solid border (#30363d)
- Top bar: 44px height with three dots (red/yellow/green, 12px each, 8px gap) on far-left, 16px left padding
- Subtle box-shadow: 0 0 60px rgba(34,197,94,0.06)
- Inner padding: 48px desktop, 32px mobile

### 4.3 Hero Section
- Top-aligned inside terminal window
- No heading - starts directly with typed lines
- Two `> ` prefixed lines typed character-by-character with 50-80ms delay
- Blinking underscore cursor after second line (animated via CSS `@keyframes blink`)
- After typing completes (with 400ms pause after line 2), CTA button fades in
- CTA: "Explore Our Services" - accent-green bg, dark text (#0d1117), rounded-lg, hover: scale 1.03 + brighter green
- Subtle radial gradient glow behind terminal (accent-glow, 300px, centered behind window)

### 4.4 About Section
- Light separator line (border-default) before section
- Section heading: `## About` with terminal-comment-style (`// About Us` in text-secondary as sub-label)
- Two short paragraphs in system sans-serif body text (primary)
- Subtle `$ cat about.md` prefix line in text-secondary (monospace, small)

### 4.5 Services Section
- Separator line + heading (`## Services`, `// What We Deliver`)
- 3x2 grid (desktop), 1-column (mobile)
- Each service is a terminal-style card:
  - Border: 1px border-default
  - Hover: border-accent-green, bg-surface-hover, translateY(-2px) transition
  - Top-left: `[service-01]` label in text-tertiary
  - Title: accent-cyan for odd cards, accent-green for even
  - Description: text-secondary, body size, sans-serif
  - Small status dot and `// operational` text in success green at bottom-right
- All 6 services as specified

### 4.6 Projects Section
- Separator line + heading (`## Projects`, `// Recent Work`)
- 3-column grid (desktop), 1-column (mobile)
- Project cards:
  - bg-surface with border-default, rounded-lg
  - Tech tags: small monospace pills in accent-green-on-subtle-bg
  - Title, short description, accent-cyan inline link arrow `->`
  - Subtle `// completed` footer text in success
- 3 projects as specified

### 4.7 Contact Section
- Separator line + heading (`## Contact`, `// Get In Touch`)
- Two-column layout (desktop), stacked (mobile)
- Left: contact details with SVG icons (map pin, envelope, phone) in accent-green
  - Address, Email, Phone as specified (hyphens, no em-dashes)
- Right: prominent callout box with bg-accent-subtle, border-accent (1px, dashed)
  - "Ready to build something?" heading
  - "We are actively taking on new clients." text
  - Large email CTA in terminal-green with mailto: link
  - Phone number repeated in smaller text
- Make the email very prominent - large monospace, copy-friendly

### 4.8 Footer
- Full width, bg-surface, top border (#30363d)
- Centered text: `© 2026 LE MINH. All rights reserved.` in text-tertiary
- Small monospace, 0.875rem
- Above it: subtle `[exit 0]` line in accent-green (terminal flavor)

## 5. Responsiveness Plan

| Breakpoint | Behavior |
|---|---|
| ≥ 1024px | Desktop layout: 3-col project grid, 3x2 service grid, 2-col contact |
| 768px - 1023px | Tablet: 2-col service grid, 2-col project grid, 2-col contact |
| < 768px | Mobile: all grids 1-col, hamburger menu, full-width CTAs, reduced padding |
| < 480px | Small mobile: smaller font sizes, reduced terminal padding (24px), tighter gaps |

- Use Tailwind responsive prefixes: `md:`, `lg:`, `xl:`
- Container max-width: 1152px (max-w-5xl + padding)
- Gap system: gap-8 desktop, gap-6 tablet, gap-4 mobile for grids
- Touch targets: all interactive elements min 44px height

## 6. Animation Details

### 6.1 Typing Effect (Hero)
- JavaScript-driven, character by character
- Line 1: `> Initializing LE MINH Services...` typed at 60ms/char
- Pause 600ms
- Line 2: `> Specialized in Software Architecture, API Integration, and Cloud Infrastructure.` typed at 40ms/char
- On complete: blinking cursor appears at end of line 2, CTA button fades in (opacity 0 → 1, 800ms)

### 6.2 Cursor Blinking
- CSS animation: `@keyframes blink` 0s to 100% opacity, 1s cycle, infinite after typing done

### 6.3 Scroll Animations
- IntersectionObserver: cards fade up + translateY(20px → 0) when entering viewport
- Stagger delay: each card in grid gets 100ms * index delay
- Duration: 500ms ease-out, opacity 0 → 1
- Only on desktop (reduced motion media query respected, or simply disabled on mobile for performance)

### 6.4 Navbar
- Mobile menu: slide-down from top, 300ms ease, backdrop backdrop-blur-sm
- Active nav link: subtle green dot indicator in monospace `> _`

### 6.5 Hover States
- Service cards: border color transition 200ms, translateY(-2px) 200ms
- CTA button: scale(1.03) 200ms, brightness 1.1
- Nav links: green underline growing from center, 200ms
- Project cards: border color transition 200ms

## 7. Compliance / Grey.co Optimization Notes

- **Company name**: "LE MINH" appears prominently in hero, navbar logo, about section, and footer - no ambiguity
- **No first-person singular**: Use "We" and "LE MINH" throughout. Never "I" or "me"
- **Address**: Full physical address in contact section - 129/5A Hoàng Văn Thụ, Phường Phú Nhuận, Thành phố Hồ Chí Minh, Việt Nam
- **Contact**: Email and phone both present and clearly labeled
- **Services**: Clearly listed with descriptions matching professional IT consulting scope
- **Registration language**: "registered IT service firm based in Ho Chi Minh City" in About section
- **No em-dashes**: All copy uses hyphens or rephrased sentences. Checked at every text occurrence
- **Company footer**: Copyright notice with year and full name
- **Schema markup**: `structured data` for LocalBusiness (JSON-LD) included in HTML head for search engines

## 8. File Structure

Single file: `index.html`
- Inline `<style>` block for Tailwind CDN overrides and custom animations
- Tailwind CDN via `<script src="https://cdn.tailwindcss.com">`
- Minimal vanilla JavaScript at bottom of `<body>`
- Google Fonts: JetBrains Mono via `<link>` in `<head>`

## 9. Performance Notes

- Typing effect uses `requestAnimationFrame` or `setInterval` with cleanup on visibility change
- No external dependencies beyond Tailwind CDN and Google Fonts
- Images: none (pure CSS + SVG) - zero image loading
- Smooth scrolling via `scroll-behavior: smooth`
- All CSS animations use `transform` and `opacity` only (GPU-composited)