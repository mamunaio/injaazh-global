# Injaazh Global - Design System & Guidelines

This document outlines the core design system, colors, typography, and styling conventions used across the **Injaazh Global** web application. **Always** refer to these guidelines before making any UI/UX changes to maintain the "Brutalist Luxury" and "Cinematic" aesthetic.

## 1. Core Architecture
- **Framework:** Next.js 16.2 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, GSAP
- **3D & Canvas:** Spline (@splinetool/react-spline)

## 2. Typography
We use a two-font system loaded via `next/font/google` in `app/layout.tsx`.
- **Primary/Body Font (`var(--font-sans)`):** `DM Sans` (Weights: 300, 400, 500, 700)
- **Heading/Interactive Font (`var(--font-heading)`):** `Cabin` (Weights: 400, 500, 600, 700)
  - Used for `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `button`, and `a`.
  - Heading tags automatically have `text-transform: capitalize;` applied globally.

## 3. Color Palette & Theming
The app supports both Light and Dark modes. Dark mode is the default and is defined using the `.dark` class on the `<html>` tag.

### Root CSS Variables (defined in `app/globals.css`)

**Accent Color (Global):**
- `--color-accent`: `#6324fc` (Deep Purple)

**Light Mode (Default `:root`):**
- Background (`--bg`): `#f5f5f0` (Off-white / Bone)
- Surface (`--surface`): `#ffffff` (Pure White)
- Text Primary (`--text-primary`): `#060608` (Almost Black)
- Text Secondary (`--text-secondary`): `#555555` (Mid Gray)

**Dark Mode (`html.dark`):**
- Background (`--bg`): `#060608` (Deep Dark/Black)
- Surface (`--surface`): `#0a0a0d` (Dark Gray Surface)
- Text Primary (`--text-primary`): `#edeae2` (Soft Off-White)
- Text Secondary (`--text-secondary`): `#888888` (Mid Gray)

> **Note on Tailwind v4:** In `globals.css`, we map these CSS variables to Tailwind theme keys:
> `@theme { --color-background: var(--bg); --color-surface: var(--surface); --color-primary: var(--text-primary); --color-secondary: var(--text-secondary); --color-accent: #6324fc; }`

## 4. UI Patterns & Custom Utilities

### Glassmorphism & Cards
- Use the `.glass-card` class for premium, translucent containers:
  `@apply backdrop-blur-xl bg-primary/5 border border-primary/10 rounded-none transition-colors duration-500;`
- Hover states for cards generally apply a subtle glow or color shift (e.g., bordering with the accent color `rgba(99, 36, 252, 0.2)`).

### Typography Effects
- `.stroke-text`: Transparent fill with a 1px primary text color stroke.
- `.stroke-white`: Transparent fill with a 1px 70% white stroke.
- `.animate-gradient-shift`: Used for gradient text that shifts continuously.

### Specialized Layouts
- **Alternating Backgrounds:** In light mode, there are specific CSS rules in `globals.css` that force alternating background colors (`#F5F5F0`, `#ffffff`, `#EEECEA`) for sections to create visual depth without adding arbitrary Tailwind classes inline.

## 5. Development Rules for Consistency
1. **Never use generic colors** like `red-500` or `blue-500` unless it's for an alert. Stick to the primary, secondary, surface, and accent tokens.
2. **Avoid arbitrary borders radius:** The design leans towards "Brutalist Luxury", meaning sharp edges (`rounded-none`) or very deliberate, minimal rounding are preferred over heavily rounded corners.
3. **Responsive Design:** Ensure components scale gracefully down to mobile. Use Tailwind's standard `md:`, `lg:`, `xl:` breakpoints. Notice the global mobile fixes in `globals.css` targeting `max-height: 540px`.
4. **Dark Mode Priority:** Design for dark mode first, but ensure changes are tested in light mode. `globals.css` handles light mode overrides heavily (`html:not(.dark)` blocks).
5. **Animations:** For simple interactions, use Tailwind `transition` and `hover:`. For scroll-linked or complex physics-based animations, use `Framer Motion` (`motion.div`) or `GSAP`.

---
*Keep this document updated as new core tokens or global utility classes are introduced.*
