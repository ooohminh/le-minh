# LE MINH - Ayu Dark Terminal Spec v4

## Changes from v3

### 1. All Lowercase (Terminal Style)
- Brand: "le minh" everywhere (was "LE MINH")
- Section headings: "about", "services", "case studies", "contact"
- Service titles: "custom software development", "api development & integration", etc.
- Case study titles: "ai-powered fraud detection system", etc.
- Buttons: "explore our services", "hire us", "view details"
- Labels: "services", "projects", "case studies" (nav), "what we deliver"
- Footer: "© 2026 le minh. all rights reserved."
- Preserved: proper nouns ("Ho Chi Minh City", "European Fintech", tech names like "XGBoost")
- Preserved: email addresses, URLs, phone numbers

### 2. Removed Section
- **Projects section completely removed** (was 3 project cards)

### 3. Terminal Syntax Highlighting
Consistent pseudo-syntax coloring throughout:
- `$` prompt symbol: accent green (#9ece6a)
- Command keywords (cat, ls, echo): accent green
- Arguments/paths (about.md, services/): secondary cyan (#7dcfff)
- Comments (`// ...`): muted #6e738d
- Brackets and delimiters [service-01]: tertiary color (#5c5f64)
- Status labels `// operational`: success green (#9ece6a)
- Section labels `$ command arg`: green prompt, cyan arg, gray pipe

### 4. True Ayu Dark Colors
- Window bg: #1a1f2a (unchanged from v3)
- Text primary: #c5c8c6
- Accent: #9ece6a (Ayu green)
- Secondary accent: #7dcfff (Ayu cyan)
- Comments/secondary: #6e738d

### 5. Menu Bar
- "le minh" left (lowercase)
- Theme picker + clock right
- Minimal, no icons

### 6. Sections preserved
- Hero (typing animation)
- About
- Services (6 cards)
- Case Studies (3 expandable accordions)
- Contact
- Footer