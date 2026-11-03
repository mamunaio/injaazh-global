# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 00: Project Discovery & Architecture Reconnaissance

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Local Codebase:** `D:\Github Files\injaazh-global`  
**Execution Mode:** READ-ONLY Forensic Discovery  

---

### 1. Executive Summary

A comprehensive forensic inspection of the local project repository (`D:\Github Files\injaazh-global`) and the live production deployment (`https://injaazh.com`) was conducted. This reconnaissance report establishes the foundational baseline of the application's technology stack, architecture, styling system, component hierarchy, routing model, asset structure, and third-party integrations.

---

### 2. Verified Technology Stack

| Architecture Layer | Verified Technology | Specification / Version | Source File Evidence |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `16.2.4` (App Router) | `package.json` L23 |
| **Core UI Library** | React / React DOM | `19.2.4` | `package.json` L25-26 |
| **Language** | TypeScript | `^5.0.0` (Target: ES2017) | `package.json` L39, `tsconfig.json` |
| **Package Manager** | npm | `11.6.2` (Lockfile v3) | `package-lock.json` |
| **CSS Architecture** | Tailwind CSS v4 | `@tailwindcss/postcss` `^4.0.0` | `package.json` L32, L38 |
| **Typography System** | Next Google Fonts | `DM Sans` & `Cabin` | `app/layout.tsx` L9-19 |
| **Motion & Physics** | Framer Motion & GSAP | `framer-motion` `12.38.0`, `gsap` `3.15.0` | `package.json` L19-20 |
| **Smooth Scrolling** | Lenis Scroll | `lenis` `^1.3.23` | `package.json` L21 |
| **Icons Library** | Lucide React | `lucide-react` `^1.14.0` | `package.json` L22 |
| **Carousel / Sliders** | Swiper | `swiper` `^12.1.4` | `package.json` L28 |
| **Email Service** | Resend | `resend` `^6.12.2` | `package.json` L27 |
| **3D Rendering** | Spline | `@splinetool/react-spline` `^4.1.0` | `package.json` L16-17 |
| **CSS-in-JS Utility** | Emotion (Partial) | `@emotion/react` `^11.14.0` | `package.json` L13-14 |
| **Class Utilities** | clsx & tailwind-merge | `clsx` `^2.1.1`, `tailwind-merge` `^3.5.0` | `package.json` L18, L29 |

---

### 3. Application Directory Structure

```
D:\Github Files\injaazh-global\
├── app/                              # Next.js 16 App Router Core
│   ├── api/                          # Route Handlers
│   │   ├── analyze/route.ts          # PageSpeed Insights & Audit Engine
│   │   ├── pipeline/route.ts         # Lead Submission & Inquiry Mailer
│   │   └── webhook/whatsapp/route.ts # WhatsApp Business Webhook
│   ├── agency/page.tsx               # Agency Overview
│   ├── careers/                      # Careers Directory
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── apply/page.tsx            # Candidate Application Portal
│   ├── contact/page.tsx              # Enterprise Inquiries & Office Clocks
│   ├── cookies/page.tsx              # Cookie Compliance
│   ├── data-deletion/page.tsx        # GDPR Data Deletion Instructions
│   ├── insights/                     # Editorial Blog System
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx           # Dynamic Blog Article (Client Component)
│   ├── privacy-policy/page.tsx       # Legal Privacy Document
│   ├── services/                     # 6 Core Services + 18 Deep Sub-Services
│   │   ├── content/                  # Content Strategy & 3 Sub-pages
│   │   ├── marketing/                # Digital Marketing & 3 Sub-pages
│   │   ├── seo/                      # Technical SEO & 3 Sub-pages
│   │   ├── strategy/                 # Digital Strategy & 3 Sub-pages
│   │   ├── ui-ux-design/             # UI/UX Design & 3 Sub-pages
│   │   └── web-dev/                  # Enterprise Web Dev & 3 Sub-pages
│   ├── team/                         # Team Directory
│   │   ├── page.tsx                  # Team Roster
│   │   └── [slug]/page.tsx           # Dynamic Member Profile
│   ├── terms/page.tsx                # Terms of Service
│   ├── work/                         # Portfolio Directory
│   │   ├── page.tsx                  # 48+ Project Catalog
│   │   └── [id]/page.tsx             # Dynamic Case Study Detail
│   ├── globals.css                   # Tailwind v4 Root Theme & Overrides
│   ├── layout.tsx                    # Root Layout, Metadata & Structured Data
│   ├── page.tsx                      # Homepage Pipeline
│   ├── robots.ts                     # Search Engine Directives
│   └── sitemap.ts                    # Dynamic XML Sitemap Generator
├── components/                       # Shared UI & Feature Components (35 items)
│   ├── services/                     # Dedicated Service Interactive Dashboards
│   ├── AIAuditModal.tsx              # Interactive SEO Audit Modal
│   ├── CustomCursor.tsx              # Physics-Driven SVG Canvas Cursor
│   ├── FloatingWidget.tsx            # Theme Switcher & Scroll-to-Top
│   ├── Footer.tsx                    # Global Footer, World Clocks, Network Mesh
│   ├── Navbar.tsx                    # Responsive Header & Mega Menu
│   ├── ProjectModal.tsx              # Multi-Phase Enterprise Onboarding Modal
│   └── ...                           # High-priority Section Components
├── lib/                              # Data Structures & Helpers
│   ├── projectsData.ts               # 48 Project Case Study Catalog
│   ├── projectViews.ts               # Local View Tracking Utilities
│   ├── teamData.ts                   # Leadership & Core Engineering Profiles
│   └── utils.ts                      # Class Merging (cn) Utility
└── public/                           # Static Assets (Images, Favicon, SVGs)
    ├── assets/                       # Case Study Media, Team Photos, Logos
    └── ...
```

---

### 4. Styling Architecture & Design Tokens

The application employs **Tailwind CSS v4** utilizing modern CSS custom properties declared in `app/globals.css`:

#### Core Tokens
- **Accent Color (`--color-accent`):** `#6324fc` (Deep Electric Purple)
- **Secondary Accent:** `#00E5FF` (Cyan Neon)
- **Light Theme Background (`--bg`):** `#f5f5f0` (Bone Off-White)
- **Light Theme Surface (`--surface`):** `#ffffff` (Pure White)
- **Light Theme Text Primary (`--text-primary`):** `#060608` (Deep Carbon)
- **Light Theme Text Secondary (`--text-secondary`):** `#555555`
- **Dark Theme Background (`--bg`):** `#060608` (Deep Obsidian)
- **Dark Theme Surface (`--surface`):** `#0a0a0d` (Graphite)
- **Dark Theme Text Primary (`--text-primary`):** `#edeae2` (Soft Parchment)
- **Dark Theme Text Secondary (`--text-secondary`):** `#888888`

#### Architectural Observation on Theme Handling:
The application defaults to Dark Mode via `<html lang="en" className="dark ...">` in `app/layout.tsx`. Light mode is implemented via an extensive, 400+ line CSS override block in `app/globals.css` targeting `html:not(.dark)`. This block uses positional `:nth-of-type` selectors (`main>div:nth-child(2)`, `main>*:nth-child(3)`, etc.) to enforce alternating section backgrounds.

---

### 5. Typography Architecture

- **Primary Body Font:** `DM Sans` (`--font-dm-sans`) loaded via `next/font/google` with weights `300, 400, 500, 700`.
- **Heading & Interactive Font:** `Cabin` (`--font-cabin`) loaded with weights `400, 500, 600, 700`.
- **Global Typography Constraint:** All `h1`-`h6`, `button`, and `a` elements receive `text-transform: capitalize;` globally in `app/globals.css` (L59).

---

### 6. Image Optimization & Assets Architecture

- **Configured Remote Patterns:** `next.config.ts` allows `i.pravatar.cc` and `images.unsplash.com`.
- **Local Asset Storage:** Located under `/public/assets/`.
- **Critical Asset Vulnerability Identified:** Several sub-service pages directly link to `/assets/scalia_app_final.webp`, which is absent from `public/assets/`, resulting in HTTP 400 optimization failures.
- **Root Branding Asset Missing:** Schema.org structured data in `app/layout.tsx` references `https://injaazh.com/logo.png`, which is not present in `public/`.

---

### 7. Form Handling & Backend APIs

1. **AI Audit API (`/api/analyze`):**
   - GET: Fetches real Google PageSpeed Insights data via Google PSI API, with mathematical fallbacks.
   - POST: Logs lead data and sends automated email via Resend (`RESEND_API_KEY`).
2. **Project Pipeline API (`/api/pipeline`):**
   - POST: Sanitizes client lead, investment tier, and message; sends alert to agency leadership.
3. **Careers Portal (`app/careers/apply/page.tsx`):**
   - Simulated client-only form; does not transmit to an API handler.
4. **Footer Newsletter:**
   - Unwired UI component; does not contain form tags or action listeners.

