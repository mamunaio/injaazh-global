# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 02: Responsive Design & Cross-Device Forensic Audit

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Browser Engine:** Google Chrome Headless / Playwright Automation  
**Evidence Artifacts:** 64 Captured Viewport Screenshots in `AUDIT_REPORTS/screenshots/`  

---

### 1. Viewport Test Matrix & Coverage

The entire digital experience was rendered and audited across all 13 mandated industry viewports:

| Device Category | Target Device | Dimensions (W × H) | Verified Status |
| :--- | :--- | :---: | :---: |
| **Ultra-Compact Mobile** | iPhone SE (1st/2nd Gen) | **320 × 568** | Tested (Defects Discovered) |
| **Compact Mobile** | iPhone X / 11 / 12 / 13 Mini | **375 × 812** | Tested (Defects Discovered) |
| **Standard Mobile** | iPhone 12 / 13 / 14 / 15 | **390 × 844** | Tested (Defects Discovered) |
| **Large Mobile** | iPhone 14 / 15 / 16 Pro Max | **430 × 932** | Tested (Defects Discovered) |
| **Foldable / Small Tablet** | Galaxy Fold / Nexus 7 | **600 × 960** | Tested (Defects Discovered) |
| **Standard Tablet Portrait** | iPad Mini / 9.7" iPad | **768 × 1024** | Tested (Defects Discovered) |
| **Mid-Size Tablet** | iPad Air (10.9") | **820 × 1180** | Tested (Defects Discovered) |
| **Pro Tablet Portrait** | iPad Pro 12.9" | **1024 × 1366** | Tested (Defects Discovered) |
| **HD Display / Netbook** | HD Laptop Display | **1280 × 720** | Tested (Defects Discovered) |
| **Standard Laptop** | WXGA Notebook Display | **1366 × 768** | Tested (Defects Discovered) |
| **MacBook / HiDPI Laptop** | MacBook Pro 15" / Air | **1440 × 900** | Tested (Defects Discovered) |
| **Full HD Desktop** | 1080p Monitor | **1920 × 1080** | Tested (Defects Discovered) |
| **Quad HD / 2K Display** | 1440p WQHD Monitor | **2560 × 1440** | Tested (Defects Discovered) |

---

### 2. Forensic Findings by Dimension

#### A. Layout & Horizontal Overflow (P1 Defect)

1. **Global Homepage Width Blowout (`HeroMarquee`):**
   - **Affected Viewports:** All 13 viewports (320px to 2560px).
   - **Measured Evidence:** At viewport width 320px, `document.body.scrollWidth` expands to **480px** (a 160px blowout). At 1440px, `scrollWidth` expands to **1600px**.
   - **Root Cause:** In `components/HeroMarquee.tsx` (L42 & L65), the banner rows are configured with `className="relative w-[110%] -ml-[5%] ... rotate-[2deg]"`. The rotated CSS transform projects the corners beyond the viewport boundaries, while the parent container lacks `overflow: hidden;` / `overflow-x: clip;`.
   - **User Impact:** Mobile touch users experience severe horizontal page wobble, accidental diagonal scrolling, and white margin gaps along the right boundary.
   - **Screenshot Evidence:** `AUDIT_REPORTS/screenshots/homepage_320x568.png`, `homepage_390x844.png`

2. **Team Page Overflow at 320px:**
   - **Affected Viewport:** 320 × 568
   - **Measured Evidence:** At 320px, `body.scrollWidth` measures **374px** (54px horizontal overflow).
   - **Root Cause:** In `app/team/page.tsx`, ambient decorative background glows configured with fixed pixel widths (`w-[700px]`, `w-[600px]`) are positioned without parent clipping constraints.
   - **Screenshot Evidence:** `AUDIT_REPORTS/screenshots/team_320x568.png`

3. **Editorial Insights Detail Page Overflow at 1024px:**
   - **Affected Viewport:** 1024 × 1366 (iPad Pro Portrait)
   - **Measured Evidence:** At 1024px, `body.scrollWidth` measures **1104px** (80px horizontal overflow).
   - **Root Cause:** In `app/insights/[slug]/page.tsx`, the grid container switches to `lg:col-span-8` at the 1024px boundary, but internal article headings with `whitespace-nowrap` or oversized padding push the right margin beyond 1024px.
   - **Screenshot Evidence:** `AUDIT_REPORTS/screenshots/insight_detail_1440x900.png`

---

#### B. Typography Scaling & Readability

1. **Broken Tailwind Utility on Hero Description:**
   - **Affected Component:** `components/HeroSlider.tsx` (L134)
   - **Code Fragment:** `className="hero-description mt-6 md:mt-8 max-w-[700px] font-sans font-light text-sm md: text-primary/80 ..."`
   - **Defect:** A trailing breakpoint prefix `md:` exists without an associated utility class. This invalid token is ignored by Tailwind, resulting in typography scaling failing to apply at the medium viewport breakpoint.
2. **Global Capitalize Transform Truncation:**
   - All heading elements (`h1`–`h6`) inherit `text-transform: capitalize;` via `globals.css` (L59). On viewports under 375px, long compound technical phrases (e.g., "CONVERSION OPTIMIZATION", "TELEMETRY AUDIT") wrap awkwardly onto 3–4 lines, occasionally clipping against adjacent cards.

---

#### C. Navigation Architecture & Viewport Adaptability

1. **Mobile Drawer State Retention:**
   - **Behavior:** When the mobile drawer is opened on mobile viewports (320px–600px), drilling into `Our Services` pushes the drawer into Pane 2. If the user closes the drawer via the backdrop and reopens it, the drawer occasionally flashes the previous sub-pane before resetting.
2. **Tablet Mega Menu Discrepancy (768px – 1023px):**
   - **Behavior:** At tablet viewports (768px and 820px), the desktop navigation is hidden (`hidden lg:flex`), and the mobile hamburger toggle is rendered (`lg:hidden`). The mobile drawer functions properly, but on horizontal tablets (1024px), the desktop mega menu occupies full width and causes sub-item text collision if browser zooming is enabled.

---

#### D. Images & Media Responsiveness

1. **Sub-Service Hero Missing Asset Failure:**
   - **Affected URL:** `/services/web-dev/nextjs-architectures` and 10 other sub-service routes.
   - **Evidence:** Browser console captures `Failed to load resource: the server responded with a status of 400 (Bad Request)` on `/_next/image?url=%2Fassets%2Fscalia_app_final.webp...` across all 13 viewports.
   - **Visual Result:** The featured hero mockup card renders as an empty grey box or broken frame.
   - **Screenshot Evidence:** `AUDIT_REPORTS/screenshots/subservice_nextjs_1440x900.png`, `subservice_nextjs_390x844.png`

---

#### E. Interactive Component Viewport Integrity

1. **Floating Theme Toggle Button on Touch Devices:**
   - **Behavior:** On all mobile viewports (320px, 375px, 390px, 430px), `components/FloatingWidget.tsx` attaches visibility to `onMouseEnter` / `onMouseLeave` on the wrapper `<div>`. The inner button lacks an `onClick` toggle handler. Consequently, tapping the button on a physical touch screen does not reliably display the `LIGHT / DARK / SYSTEM` selection flyout.
2. **Modal Viewport Capping on Small Screens:**
   - **Behavior:** `ProjectModal` uses `max-h-[90vh]` with internal scroll. On ultra-compact heights (e.g., iPhone SE in landscape or 320x568 portrait), the modal header and progress indicator consume 35% of the viewport, leaving very limited visible real estate for service selection cards.

