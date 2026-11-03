# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 04: Visual UI/UX & Design System Compliance Audit

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Design Reference:** `DESIGN_SYSTEM.md` & Brutalist Luxury Aesthetics  
**Evaluation Scope:** Typography, Theming, Glassmorphism, Micro-Interactions, Animation Curves  

---

### 1. Executive Summary

The visual interface was evaluated against the brand guidelines outlined in `DESIGN_SYSTEM.md`. The design aesthetic is characterized as **"Brutalist Luxury"** and **"Cinematic Digital"**, prioritizing ultra-dark canvas backgrounds (`#060608`), sharp geometric contours (`rounded-none` to `rounded-3xl`), neon purple (`#6324FC`) and cyan (`#00E5FF`) accents, subtle glassmorphism (`backdrop-blur-xl`), and smooth GSAP/Framer Motion kinetic animations.

#### Overall Finding:
While the dark mode execution achieves high visual polish and cinematic fidelity, several significant design system violations, light-mode architectural vulnerabilities, and micro-interaction flaws were discovered.

---

### 2. Design System Compliance Matrix

| Design Token / Principle | Specification in Guidelines | Actual Implementation | Compliance Status |
| :--- | :--- | :--- | :---: |
| **Primary Body Font** | `DM Sans` (Weights 300, 400, 500, 700) | Loaded in `app/layout.tsx` as `--font-dm-sans` | **COMPLIANT** |
| **Heading Font** | `Cabin` (Weights 400, 500, 600, 700) | Loaded in `app/layout.tsx` as `--font-cabin` | **COMPLIANT** |
| **Heading Casing** | `text-transform: capitalize;` on all headings | Applied globally in `globals.css` (L59) | **COMPLIANT (Causes Acronym Flaws)** |
| **Brand Accent Token** | `#6324FC` (Electric Purple) | Strictly applied across buttons, glows, borders | **COMPLIANT** |
| **Secondary Accent** | `#00E5FF` (Neon Cyan) | Used in gradients, active states, status beacons | **COMPLIANT** |
| **Dark Theme Canvas** | `#060608` | Uniformly applied as root dark canvas | **COMPLIANT** |
| **Light Theme Canvas** | `#F5F5F0` | Implemented via `globals.css` override blocks | **PARTIALLY COMPLIANT (Fragile)** |
| **Card Geometry** | Sharp brutalist luxury contours | Mix of `rounded-none`, `rounded-2xl`, and `rounded-3xl` | **DEVIATION (Minor Inconsistency)** |
| **Custom Cursor** | Cinematic SVG Ring & Physics Trailing | Active on desktop; fails on touch-screen laptops | **DEFECT (Usability)** |

---

### 3. Detailed Visual Defect Analysis

#### Defect 1: Brittle Positional `:nth-child` Selectors for Light Mode
- **Affected File:** `app/globals.css` (L271–325)
- **Code Fragment:**
  ```css
  /* HeroMarquee background */
  main > div:nth-child(2) { background-color: #ffffff !important; }
  /* DigitalExperience */
  main > *:nth-child(3) { background-color: #EEECEA !important; }
  /* FeaturedWork */
  main > *:nth-child(4) { background-color: #ffffff !important; }
  /* OurProcess */
  main > *:nth-child(5) { background-color: var(--bg) !important; }
  /* WhyChoose */
  main > *:nth-child(6) { background-color: #ffffff !important; }
  ```
- **Forensic Diagnosis:** Rather than using semantic component classes (e.g., `section.digital-experience`), the light mode theme engine relies entirely on the strict numerical DOM ordering of direct children inside `<main>`. If any developer inserts a banner, wrapper `<section>`, or alert above these sections, the alternating color sequence collapses and shifts, causing mismatched adjacent white or grey backgrounds.

#### Defect 2: Global `capitalize` Breaking Technical Acronyms
- **Affected File:** `app/globals.css` (L56–60)
- **Code:**
  ```css
  h1, h2, h3, h4, h5, h6, button, a {
    font-family: var(--font-heading);
    text-transform: capitalize;
  }
  ```
- **Forensic Diagnosis:** Forcing `capitalize` across all headings and buttons converts deliberate technical uppercase abbreviations (such as "SEO", "API", "NEXT.JS", "TTI", "RSC", "GA4", "WCAG") into "Seo", "Api", "Next.js", "Tti", "Rsc", "Ga4", "Wcag" unless manually overridden with `!uppercase`. This undermines the technical authority of an enterprise engineering agency.

#### Defect 3: Custom Cursor Disabled on Modern Touchscreen Laptops
- **Affected File:** `components/CustomCursor.tsx` (L18–20)
- **Code:**
  ```tsx
  useEffect(() => {
    // Only show on desktop devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    setIsVisible(true);
    ...
  ```
- **Forensic Diagnosis:** `navigator.maxTouchPoints > 0` evaluates to `true` on popular Windows laptop hardware with touchscreen displays (e.g., Microsoft Surface, Lenovo ThinkPad X1 Yoga, Dell XPS 15 2-in-1, HP Spectre) even when the user is operating with a physical precision mouse. On these devices, the signature kinetic custom cursor is permanently extinguished, degrading the cinematic experience.

#### Defect 4: Light Mode Contrast Flaw in Circular Scroll Indicator
- **Affected File:** `components/HeroSlider.tsx` (L187–192)
- **Code:**
  ```tsx
  <text fontSize="9.5" fill="currentColor" letterSpacing="2.5" className="font-heading capitalize text-white font-semibold">
    <textPath href="#scroll-path">SCROLL DOWN • DISCOVER MORE •</textPath>
  </text>
  ```
- **Forensic Diagnosis:** The SVG text ring hardcodes `text-white`. When the user switches to Light Mode, the hero section background changes to `#F5F5F0` (light off-white). The rotating text ring remains white, creating near-zero color contrast (1.05:1 ratio) and rendering the text invisible to human visitors.

#### Defect 5: Missing Image Frame in Subservice Hero Sections
- **Affected URLs:** 11 subservice pages (e.g., `/services/web-dev/nextjs-architectures`)
- **Forensic Diagnosis:** Because `/assets/scalia_app_final.webp` fails to load (400 Bad Request), the right-column showcase frame displays an empty dark square with a subtle gradient veil. Visitors see an unoccupied decorative container with no primary visual asset.

