# le-minh site revamp - handoff prompt

continue the revamp of the le-minh boutique IT consultancy landing page at `/root/le-minh/`. the site has already been rebuilt with a "quiet luxury" design and deployed. now we need to enhance it with shader/3D visual libraries.

## what's done

- next.js 15.5.19 app router project at `/root/le-minh/`, static export for github pages
- deployed at `https://ooohminh.github.io/le-minh/` via github actions (push to main triggers deploy)
- git remote: `https://github.com/ooohminh/le-minh.git`, branch: main, latest commit: `05be469`
- build passing: 48.7 kB page / 151 kB first load JS
- 9 components built and compiling:
  - `app/page.tsx` assembles all components
  - `app/layout.tsx` - fraunces (serif) + inter (sans) via next/font/google
  - `app/globals.css` - design system: onyx #0A0A0C, graphite #111114, smoke #1A1A1E, bone #EDEAE3, stone #6B6B70, champagne #BFA170, champagne-light #D4B88A
  - `components/nav.tsx` - floating nav with scroll blur, mobile overlay menu, availability pill
  - `components/hero.tsx` - full viewport hero with word-by-word mask reveal, champagne gradient glow
  - `components/philosophy.tsx` - two-column boutique positioning statement
  - `components/services.tsx` - numbered list (01-06) with hover reveal descriptions
  - `components/selected-work.tsx` - 3 case studies, alternating alignment, tags
  - `components/closing.tsx` - contact CTA, "based in vietnam. available for select engagements."
  - `components/footer.tsx` - minimal footer with wordmark, copyright, back-to-top
  - `components/film-grain.tsx` - SVG noise filter overlay
  - `components/custom-cursor.tsx` - spring physics cursor, hover detection, touch device detection
- design direction: architectural minimalism, dark onyx with bone text and champagne gold accents
- all text is lowercase. no em-dashes ever. no contact details - only "based in vietnam"
- tailwind CSS 4.1.4, framer motion 12.10, react 19.1

## library research findings

### shadergradient v2 (`@shadergradient/react`)
- install: `@shadergradient/react @react-three/fiber@^9 three three-stdlib camera-controls @types/three` (dev)
- MUST use R3F v9 for next.js 15 app router + react 19 (R3F v8 is incompatible)
- no transpilePackages needed
- API: `<ShaderGradientCanvas><ShaderGradient control='query' urlString='...' /></ShaderGradientCanvas>`
- supports pixelDensity, fov, camera props
- MIT license, 1.7k stars
- concern: needs testing with `output: "export"` static export - R3F/three.js SSR may have issues

### liquid-glass-js
- vanilla JS (not react), uses WebGL 2.0
- CSS classes: `.glass-container`, `.glass-button`, `.glass-button-text`
- params: edgeIntensity, rimIntensity, baseIntensity, blurRadius, rippleEffect, tintOpacity
- NOT on npm yet - roadmap includes npm bundling and react wrappers
- would need manual vendor copy or local integration
- requires chrome 80+, firefox 75+, safari 14+
- captures page snapshot via html2canvas, applies refraction/blur/tint via WebGL shaders
- global config via `window.glassControls` object

### liquid-logo (paper-design)
- next.js app, uses `@/app/share/[id]/page` pattern with resolve() function and IDs
- 742 stars, appears to use dynamic shader gradients applied to logo/brand shapes
- limited source info retrieved - may need further research for standalone integration

## what's not done

1. **creative vision** - how to use these libraries tastefully without gimmicky/slow feel
2. **implementation plan** - what goes where, performance considerations, mobile optimization
3. **install dependencies** and integrate shader/3D effects into components
4. **verify static export compatibility** - R3F/three.js with `output: "export"`
5. **resolve liquid-glass-js npm absence** - vendor copy or alternative
6. **re-research liquid-logo** - source extraction was incomplete
7. **build, test, commit, push** the enhanced site
8. **verify live site** at `https://ooohminh.github.io/le-minh/`

## key constraints

- no em-dashes, use hyphens only
- all lowercase text throughout the site
- no contact details (no phone, no email, no address) - only "based in vietnam"
- static export for github pages (`output: "export"` when not on vercel)
- must feel premium, elegant, visually striking - not gimmicky or slow
- performance matters: current 151 kB first load JS, three.js will add ~600 kB+ raw
- mobile must work well
- `next.config.ts` uses `process.env.VERCEL ? undefined : "export"` for conditional static export
- github actions deploy: node 22, npm ci, npm run build, upload ./out, deploy-pages@v4

## suggestions for creative direction

- shadergradient as a subtle ambient background in hero (low opacity, slow movement, champagne/onyx palette)
- liquid-glass effect on nav bar and possibly service cards (refractive blur over content)
- avoid liquid-logo unless a strong use case emerges - least researched, most uncertain integration
- always lazy-load 3D below the fold, provide static fallbacks for mobile/reduced-motion
- consider `next/dynamic` with `ssr: false` for all R3F components to work around static export
- reduce pixelDensity and disable on touch devices for performance