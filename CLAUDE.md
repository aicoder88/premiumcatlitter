# CLAUDE.md - Premium Cat Litter Website

## Project Overview

Static marketing website for premium cat litter products built with Astro. Multi-page site with luxury aesthetic featuring gold accents and sophisticated typography.

## Tech Stack

- **Framework:** Astro 5.16.6 (static site generator with partial hydration)
- **Components:** React 19 for interactive elements
- **Styling:** SCSS with CSS modules for component scoping
- **TypeScript:** Strict mode enabled

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── pages/           # Astro pages (file-based routing)
│   ├── index.astro
│   ├── why-premium.astro
│   ├── comparison.astro
│   ├── guide.astro
│   └── ingredients.astro
├── components/      # Reusable components (.astro and .tsx)
├── layouts/         # Layout wrapper with SEO/meta
└── styles/          # Global SCSS and design tokens
    ├── global.scss
    ├── _variables.scss
    └── _mixins.scss
```

## Design System

### Colors
- **Primary (Gold):** `#C9A962` — use for accents, CTAs, highlights
- **Gold Light:** `#E4D5A8` | **Gold Dark:** `#A88C4A`
- **Charcoal:** `#1C1C1C` — dark backgrounds
- **Cream:** `#FAF8F5` — light backgrounds

### Typography
- **Headings:** Playfair Display (serif, luxury feel)
- **Body:** Inter (sans-serif, readable)

### Available SCSS Mixins (from `_mixins.scss`)
```scss
@include md { }        // Responsive breakpoint (768px+)
@include lg { }        // 1024px+
@include button-primary;
@include card;
@include gold-accent;  // Gold underline/highlight
@include gradient-text; // Gold gradient text
```

## Code Patterns

### Astro Pages
- Use `Layout.astro` wrapper for consistent SEO/meta
- Import SCSS modules for component-specific styles
- Add `client:load` directive for interactive React components

### React Components
- Keep components small and focused
- Use `.module.scss` for scoped styles
- Props should be typed with TypeScript interfaces

## Content Guidelines

- Luxury, premium tone (avoid casual/cheap language)
- Focus on quality, natural ingredients, pet health
- SEO: Each page has unique meta title/description
