# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 08: Master Bug Inventory & Defect Classification

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Audit Protocol:** READ-ONLY Forensic Discovery  
**Defect Severity Guide:**  
- **P0 (Critical Blocker):** Severe business impact, mass indexation failure, catastrophic user breakage  
- **P1 (High):** Major functional defect, broken layout, 400/404 errors on prominent pages, mock submissions  
- **P2 (Medium):** Dead UI controls, mobile touch failures, accessibility violations, duplicate metadata  
- **P3 (Low):** Visual contrast issues, brittle CSS selectors, heading hierarchy skips, missing laptop cursor  
- **P4 (Trivial/Cosmetic):** Placeholder telephone numbers, generic social URLs, minor content discrepancies  

---

### BUG INVENTORY INDEX

- [INJ-BUG-001](#inj-bug-001): 41 Production Pages Self-Canonicalize to Root Domain (P0)
- [INJ-BUG-002](#inj-bug-002): Editorial Insights Dynamic Route Missing SSR Metadata & Using Duplicate Fallback (P0)
- [INJ-BUG-003](#inj-bug-003): Missing Origin Image Asset `scalia_app_final.webp` Throws HTTP 400 Bad Request on 11 Sub-Services (P1)
- [INJ-BUG-004](#inj-bug-004): Global Homepage Width Blowout & Horizontal Overflow Across All 13 Viewports (P1)
- [INJ-BUG-005](#inj-bug-005): Broken Internal Route `/mh-mamun-hossain` Triggers 404 on Founder Profile Prefetch (P1)
- [INJ-BUG-006](#inj-bug-006): Careers Portal Application Form Discards Candidate Data via Mock Simulation Without API Dispatch (P1)
- [INJ-BUG-007](#inj-bug-007): Inert / Dead Submit Button and Missing Form Wrapper on Global Footer Newsletter (P2)
- [INJ-BUG-008](#inj-bug-008): Floating Theme Toggle Switcher Unresponsive to Mobile Touch Taps (P2)
- [INJ-BUG-009](#inj-bug-009): Missing Programmatic `<label for>` Associations on All Form Inputs (P2)
- [INJ-BUG-010](#inj-bug-010): Unnamed Interactive Buttons Without `aria-label` Violating WCAG 4.1.2 (P2)
- [INJ-BUG-011](#inj-bug-011): Missing Schema.org Assets: 404 on `/logo.png` and `/search` (P2)
- [INJ-BUG-012](#inj-bug-012): 8 Duplicate Title and Meta Description Clusters Affecting 27 Sub-Pages (P2)
- [INJ-BUG-013](#inj-bug-013): Route Target Mismatch: Footer "Brand Identity" Links to `/services/content` (P2)
- [INJ-BUG-014](#inj-bug-014): Structural Heading Hierarchy Skips on Multiple Templates (P3)
- [INJ-BUG-015](#inj-bug-015): Brittle `:nth-child` Positional Selectors for Light Mode Section Backgrounds (P3)
- [INJ-BUG-016](#inj-bug-016): Custom Cursor Disabled on Modern Touchscreen Laptops (P3)
- [INJ-BUG-017](#inj-bug-017): Rotating Scroll Indicator Text Becomes Invisible in Light Mode Due to Hardcoded White Fill (P3)
- [INJ-BUG-018](#inj-bug-018): Broken Tailwind Utility Class `md:` in HeroSlider (P3)
- [INJ-BUG-019](#inj-bug-019): Inconsistent Brand Contact Emails Across Components (P3)
- [INJ-BUG-020](#inj-bug-020): Placeholder / Fictional Office Telephone Numbers in Contact Page (P4)
- [INJ-BUG-021](#inj-bug-021): Generic External Social Media Links Lacking Brand Handles (P4)

---

### DETAILED BUG RECORDS

#### INJ-BUG-001

- **Title:** 41 Production Pages Self-Canonicalize to Root Domain
- **Category:** Technical SEO / Canonicalization
- **Affected URL:** 41 Routes (including all 18 sub-services, all 7 insights, all 5 team profiles, `/agency`, `/careers`, `/work`, etc.)
- **Affected Component:** `app/layout.tsx` (L28–30)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P0 (Critical Blocker)**
- **Actual Behavior:** 41 individual pages output `<link rel="canonical" href="https://injaazh.com" />`, pointing directly to the root homepage.
- **Expected Behavior:** Each page must declare its own self-referential canonical URL (e.g., `https://injaazh.com/services/web-dev/nextjs-architectures`).
- **Steps to Reproduce:**
  1. Execute `curl.exe -s https://injaazh.com/services/web-dev/nextjs-architectures | Select-String "canonical"`
  2. Observe output: `<link rel="canonical" href="https://injaazh.com"/>`.
- **Root Cause:** In Next.js App Router, `app/layout.tsx` sets `alternates: { canonical: "https://injaazh.com" }`. Child routes without explicit canonical overrides inherit this value.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/subservice_nextjs_1440x900.png`
- **Affected Source Files:** `app/layout.tsx`, all child `page.tsx` files lacking `alternates.canonical`
- **Recommended Solution:** Remove the hardcoded root canonical from `RootLayout` or compute dynamic self-referencing canonical URLs in child pages and layouts.
- **Regression Testing Requirements:** Automated crawl of all 102 URLs to verify `link[rel="canonical"]` matches the current path.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-002

- **Title:** Editorial Insights Dynamic Route Missing SSR Metadata & Using Duplicate Fallback
- **Category:** Technical SEO / Server-Side Rendering
- **Affected URL:** `https://injaazh.com/insights/[slug]` (All 7 articles)
- **Affected Component:** `app/insights/[slug]/page.tsx` (L1–35)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P0 (Critical Blocker)**
- **Actual Behavior:** Every individual blog article renders with the duplicate layout title `"Digital Marketing & Web Dev Insights | Injaazh Blog"`, identical meta description, and canonical pointing to `https://injaazh.com`.
- **Expected Behavior:** Each blog post must export `generateMetadata` generating unique article titles, descriptions, OpenGraph profile tags, and proper canonical URLs.
- **Steps to Reproduce:**
  1. Open `https://injaazh.com/insights/future-of-headless-architecture`
  2. Inspect `<head><title>` and `<link rel="canonical">`.
- **Root Cause:** `app/insights/[slug]/page.tsx` is declared as `"use client"` and lacks server metadata exports (`generateMetadata`) and static parameter generation (`generateStaticParams`).
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/insight_detail_1440x900.png`
- **Affected Source Files:** `app/insights/[slug]/page.tsx`, `app/insights/layout.tsx`
- **Recommended Solution:** Convert the page into a Server Component with `generateMetadata` and `generateStaticParams`, delegating interactive scroll widgets to a nested client component.
- **Regression Testing Requirements:** Validate unique titles and og:title tags across all 7 blog routes.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-003

- **Title:** Missing Origin Image Asset `scalia_app_final.webp` Throws HTTP 400 Bad Request on 11 Sub-Services
- **Category:** Technical / Asset Loading
- **Affected URL:** 11 Sub-Service URLs (e.g., `/services/web-dev/nextjs-architectures`, `/services/seo/technical-audits`)
- **Affected Component:** Sub-service Hero Section `<Image />`
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P1 (High)**
- **Actual Behavior:** Browser console captures repeated `400 (Bad Request)` errors from `/_next/image?url=%2Fassets%2Fscalia_app_final.webp...`. The hero showcase card is visually empty.
- **Expected Behavior:** Sub-service hero showcase displays an optimized, valid architectural concept image.
- **Steps to Reproduce:**
  1. Open `https://injaazh.com/services/web-dev/nextjs-architectures` with DevTools Console open.
  2. Observe console error: `Failed to load resource: the server responded with a status of 400 (Bad Request)`.
  3. Execute `curl.exe -I https://injaazh.com/assets/scalia_app_final.webp` -> Returns 404 Not Found.
- **Root Cause:** 11 sub-service page templates reference `/assets/scalia_app_final.webp`, but the file is missing from `/public/assets/`.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/subservice_nextjs_1440x900.png`
- **Affected Source Files:**
  - `app/services/content/copywriting/page.tsx:112`
  - `app/services/content/editorial-writing/page.tsx:220`
  - `app/services/marketing/conversion-optimization/page.tsx:197`
  - `app/services/marketing/ppc-campaigns/page.tsx:307`
  - `app/services/seo/keyword-strategy/page.tsx:227`
  - `app/services/seo/technical-audits/page.tsx:277`
  - `app/services/strategy/business-intelligence/page.tsx:199`
  - `app/services/strategy/digital-transformation/page.tsx:142`
  - `app/services/strategy/ux-audits/page.tsx:170`
  - `app/services/ui-ux-design/brand-identity/page.tsx:288`
  - `app/services/web-dev/custom-web-apps/page.tsx:121, 442`
  - `app/services/web-dev/nextjs-architectures/page.tsx:110`
- **Recommended Solution:** Place the missing `scalia_app_final.webp` asset into `/public/assets/` or update references to point to existing project screenshots.
- **Regression Testing Requirements:** Automated network test verifying all image requests return HTTP 200.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-004

- **Title:** Global Homepage Width Blowout & Horizontal Overflow Across All 13 Viewports
- **Category:** Responsive Design / Layout
- **Affected URL:** `https://injaazh.com/`
- **Affected Component:** `components/HeroMarquee.tsx` (L42 & L65)
- **Device:** Mobile, Tablet, Desktop
- **Viewport:** All 13 Viewports (320px to 2560px)
- **Browser:** All Browsers (Mobile Safari, Chrome, Edge)
- **Severity:** **P1 (High)**
- **Actual Behavior:** `document.body.scrollWidth` measures 480px on 320px screens and 1600px on 1440px screens. Mobile users experience severe lateral wobbling.
- **Expected Behavior:** `scrollWidth` must strictly equal `window.innerWidth` (zero horizontal overflow).
- **Steps to Reproduce:**
  1. Open `https://injaazh.com` at 320x568 or 390x844.
  2. Swipe horizontally across the screen. Page slides off-center exposing blank space.
- **Root Cause:** Banner bands in `HeroMarquee` use `w-[110%] -ml-[5%] rotate-[2deg]`, protruding past viewport edges without an enclosing `overflow-x: clip` or `overflow-hidden`.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_320x568.png`
- **Affected Source Files:** `components/HeroMarquee.tsx`, `app/globals.css`
- **Recommended Solution:** Apply `overflow-hidden` or `overflow-x: clip` on the parent section and constrain rotating banners to `w-full max-w-[100vw]`.
- **Regression Testing Requirements:** Automated DOM check ensuring `document.documentElement.scrollWidth === window.innerWidth` across all viewports.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-005

- **Title:** Broken Internal Route `/mh-mamun-hossain` Triggers 404 on Founder Profile Prefetch
- **Category:** Functional / Broken Links
- **Affected URL:** `https://injaazh.com/team/md-mamun-hossain`
- **Affected Component:** `components/ProfileClient.tsx` (via `lib/teamData.ts` L104)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P1 (High)**
- **Actual Behavior:** Navigating to or prefetching the founder's profile generates a console 404 error on `/mh-mamun-hossain?_rsc=...`. Clicking the globe icon leads to a 404 error page.
- **Expected Behavior:** The website link routes to a valid personal portfolio or the canonical team profile.
- **Steps to Reproduce:**
  1. Navigate to `https://injaazh.com/team/md-mamun-hossain`.
  2. Inspect DevTools Network tab for prefetch requests. Observe 404 on `/mh-mamun-hossain`.
- **Root Cause:** `lib/teamData.ts` defines `website: "https://injaazh.com/mh-mamun-hossain"`, but no matching page route exists in `app/`.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/team_profile_1440x900.png`
- **Affected Source Files:** `lib/teamData.ts` (L104)
- **Recommended Solution:** Update `website` to `https://injaazh.com/team/md-mamun-hossain` or an external verified URL.
- **Regression Testing Requirements:** Automated link check confirming zero 404s on team profiles.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-006

- **Title:** Careers Portal Application Form Discards Candidate Data via Mock Simulation Without API Dispatch
- **Category:** Functional / Backend Integration
- **Affected URL:** `https://injaazh.com/careers/apply`
- **Affected Component:** `app/careers/apply/page.tsx` (L15–23)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P1 (High)**
- **Actual Behavior:** Filling out the application and clicking submit triggers `setTimeout` for 2 seconds and displays "Application Transmitted", but dispatches 0 network requests and loses all user data.
- **Expected Behavior:** Form data (applicant name, email, portfolio, resume) must be posted to an API handler (`/api/careers` or `/api/pipeline`) and stored or emailed to hiring managers.
- **Steps to Reproduce:**
  1. Open `https://injaazh.com/careers/apply`.
  2. Fill in Full Name, Email, and Brief.
  3. Click "TRANSMIT DOSSIER".
  4. Inspect Network tab: 0 POST requests are made.
- **Root Cause:** `handleSubmit` relies entirely on a mock `setTimeout` simulation without a `fetch()` call.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/careers_apply_1440x900.png`
- **Affected Source Files:** `app/careers/apply/page.tsx`
- **Recommended Solution:** Connect form submission to a real API route handler with file/lead persistence.
- **Regression Testing Requirements:** Verify HTTP POST dispatch with 200 response upon submission.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-007

- **Title:** Inert / Dead Submit Button and Missing Form Wrapper on Global Footer Newsletter
- **Category:** Functional / Forms
- **Affected URL:** Global (All Pages)
- **Affected Component:** `components/Footer.tsx` (L171–180)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Typing an email address into the footer newsletter and clicking the arrow button does nothing. No event handler, form, or feedback exists.
- **Expected Behavior:** Clicking submit validates the email format, sends a subscription request to the API, and displays a confirmation state ("Subscribed!").
- **Steps to Reproduce:**
  1. Scroll to the footer on any page.
  2. Enter `user@example.com` into the newsletter input.
  3. Click the purple arrow button.
  4. Input retains text, 0 network calls dispatched.
- **Root Cause:** `<input>` is not bound to React state, `<button>` has no `onClick`, and elements are not wrapped in `<form>`.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `components/Footer.tsx` (L171–180)
- **Recommended Solution:** Wrap inputs in a `<form onSubmit={handleSubscribe}>`, manage email state, and trigger backend lead storage.
- **Regression Testing Requirements:** Test newsletter submission on multiple viewports.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-008

- **Title:** Floating Theme Toggle Switcher Unresponsive to Mobile Touch Taps
- **Category:** Functional / Usability
- **Affected URL:** Global (All Pages)
- **Affected Component:** `components/FloatingWidget.tsx` (L63–118)
- **Device:** Mobile & Tablet Touchscreens
- **Viewport:** 320px, 375px, 390px, 430px, 600px, 768px
- **Browser:** Mobile Safari, Mobile Chrome
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Tapping the circular floating theme icon on mobile fails to open the theme selection menu (`LIGHT / DARK / SYSTEM`).
- **Expected Behavior:** Tapping the button on mobile toggles the theme dropdown menu open and closed.
- **Steps to Reproduce:**
  1. Emulate touch device (e.g., iPhone 14 in DevTools touch mode).
  2. Tap the floating theme button in the bottom right corner.
  3. Menu fails to open.
- **Root Cause:** The component container relies exclusively on desktop hover (`onMouseEnter={() => setShowThemeMenu(true)}`). The button element has no `onClick` toggle handler.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_390x844.png`
- **Affected Source Files:** `components/FloatingWidget.tsx`
- **Recommended Solution:** Add `onClick={() => setShowThemeMenu(prev => !prev)}` to the button and support click-outside dismissal.
- **Regression Testing Requirements:** Automated touch tap test on mobile viewports.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-009

- **Title:** Missing Programmatic `<label for>` Associations on All Form Inputs
- **Category:** Accessibility / WCAG 1.3.1 & 3.3.2
- **Affected URL:** `/contact`, `/careers/apply`, Global Footer
- **Affected Component:** All Form Controls
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers (Screen Readers)
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Screen readers announce inputs without their accompanying descriptive labels.
- **Expected Behavior:** Every input must be linked to a `<label>` via `htmlFor="field-id"` and matching `id="field-id"`, or have `aria-label`.
- **Steps to Reproduce:**
  1. Inspect Contact form inputs in DevTools.
  2. Notice `<label>` lacks `for`/`htmlFor` and `<input>` lacks `id`.
- **Root Cause:** Incomplete HTML semantic implementation across form components.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/contact_1440x900.png`
- **Affected Source Files:** `components/ContactClient.tsx`, `components/Footer.tsx`, `app/careers/apply/page.tsx`
- **Recommended Solution:** Bind all labels programmatically using `htmlFor` and unique `id` attributes.
- **Regression Testing Requirements:** Playwright automated accessibility audit score.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-010

- **Title:** Unnamed Interactive Buttons Without `aria-label` Violating WCAG 4.1.2
- **Category:** Accessibility / WCAG 4.1.2
- **Affected URL:** Global (All Pages)
- **Affected Component:** `FloatingWidget.tsx`, `Navbar.tsx`, `Footer.tsx`
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Screen readers announce "button" with no indication of purpose.
- **Expected Behavior:** Buttons containing only SVG icons must include descriptive `aria-label` attributes.
- **Steps to Reproduce:**
  1. Inspect theme button, scroll-to-top button, or mobile menu button.
  2. Note absence of text content and `aria-label`.
- **Root Cause:** Icon-only buttons implemented without accessible naming.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_390x844.png`
- **Affected Source Files:** `components/FloatingWidget.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`
- **Recommended Solution:** Add `aria-label="Toggle visual theme"`, `aria-label="Scroll to top"`, etc.
- **Regression Testing Requirements:** Automated axe-core / a11y DOM validation.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-011

- **Title:** Missing Schema.org Assets: 404 on `/logo.png` and `/search`
- **Category:** Technical SEO / Structured Data
- **Affected URL:** Global `<head>` Injection
- **Affected Component:** `app/layout.tsx` (L65, L78)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Organization logo points to `https://injaazh.com/logo.png` (404) and searchAction points to `https://injaazh.com/search?q={...}` (404).
- **Expected Behavior:** Schema entities must link to valid, 200 OK production endpoints and static assets.
- **Steps to Reproduce:**
  1. Test `curl.exe -I https://injaazh.com/logo.png` -> 404 Not Found.
  2. Test `curl.exe -I https://injaazh.com/search` -> 404 Not Found.
- **Root Cause:** Schema declared with theoretical paths rather than verified assets.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `app/layout.tsx`, `app/insights/page.tsx`
- **Recommended Solution:** Update logo URL to `/assets/logo.webp` and remove invalid `SearchAction` or implement a search handler.
- **Regression Testing Requirements:** Google Rich Results Test validation.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-012

- **Title:** 8 Duplicate Title and Meta Description Clusters Affecting 27 Sub-Pages
- **Category:** Technical SEO / Metadata
- **Affected URL:** 27 Distinct URLs (All sub-services and blog insights)
- **Affected Component:** Sub-service layouts and `app/insights/layout.tsx`
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Sub-pages in each service silo and blog articles share identical `<title>` tags.
- **Expected Behavior:** Every page must possess a distinct, keyword-targeted `<title>` and `<meta name="description">`.
- **Steps to Reproduce:**
  1. Inspect titles of `/services/web-dev/nextjs-architectures` and `/services/web-dev/headless-commerce`.
  2. Both output: `"Web Development Services | Next.js, WordPress & Custom Apps — Injaazh"`.
- **Root Cause:** Sub-service pages lack individual metadata exports, falling back to parent category layout metadata.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/subservice_nextjs_1440x900.png`
- **Affected Source Files:** All 18 sub-service `page.tsx` files and `app/insights/[slug]/page.tsx`
- **Recommended Solution:** Export unique `metadata` objects in each sub-service `page.tsx`.
- **Regression Testing Requirements:** Automated crawl checking for zero duplicate titles.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-013

- **Title:** Route Target Mismatch: Footer "Brand Identity" Links to `/services/content`
- **Category:** Functional / Internal Linking
- **Affected URL:** Global Footer (All Pages)
- **Affected Component:** `components/Footer.tsx` (L67)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P2 (Medium)**
- **Actual Behavior:** Clicking "Brand Identity" in the footer services column opens `/services/content`.
- **Expected Behavior:** Clicking "Brand Identity" should open `/services/ui-ux-design/brand-identity`.
- **Steps to Reproduce:**
  1. Scroll to footer on any page.
  2. Click "Brand Identity" link under Services.
  3. URL loads `/services/content` (Content Writing page).
- **Root Cause:** Erroneous `href` value in `footerLinks` array in `components/Footer.tsx`.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `components/Footer.tsx` (L67)
- **Recommended Solution:** Correct `href` to `"/services/ui-ux-design/brand-identity"`.
- **Regression Testing Requirements:** Automated link integrity check.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-014

- **Title:** Structural Heading Hierarchy Skips on Multiple Templates
- **Category:** Accessibility / WCAG 1.3.1
- **Affected URL:** `/privacy-policy`, `/team`, `/careers`, `/services/web-dev`
- **Affected Component:** Page Headings
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P3 (Low)**
- **Actual Behavior:** Headings skip from H1 directly to H4 or H3.
- **Expected Behavior:** Heading levels must descend monotonically (H1 -> H2 -> H3) to maintain logical document structure.
- **Steps to Reproduce:**
  1. Inspect headings on `/privacy-policy`.
  2. Note absence of `<H2>` and `<H3>` elements before `<H4>`.
- **Root Cause:** Arbitrary heading tag choices made for visual styling rather than semantic hierarchy.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/privacy_policy_1440x900.png`
- **Affected Source Files:** `app/privacy-policy/page.tsx`, `app/team/page.tsx`, `app/careers/page.tsx`
- **Recommended Solution:** Replace skipped tags with appropriate semantic heading levels.
- **Regression Testing Requirements:** Automated heading hierarchy audit.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-015

- **Title:** Brittle `:nth-child` Positional Selectors for Light Mode Section Backgrounds
- **Category:** Visual UI/UX / CSS Architecture
- **Affected URL:** Homepage & Global Pages
- **Affected Component:** `app/globals.css` (L271–325)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P3 (Low)**
- **Actual Behavior:** Section alternating backgrounds in Light Mode are tied to brittle DOM child order (`main>div:nth-child(2)`).
- **Expected Behavior:** Backgrounds should be applied via explicit Tailwind utility classes or semantic component classes.
- **Steps to Reproduce:**
  1. Review lines 271-325 in `app/globals.css`.
  2. Any insertion of elements into `app/page.tsx` breaks the color alternation sequence.
- **Root Cause:** Workaround stylesheet overriding Tailwind inline classes using fragile numerical DOM positions.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `app/globals.css`
- **Recommended Solution:** Refactor light mode alternating colors into dedicated component classes.
- **Regression Testing Requirements:** Visual regression testing in Light Mode.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-016

- **Title:** Custom Cursor Disabled on Modern Touchscreen Laptops
- **Category:** Visual UI/UX / Usability
- **Affected URL:** Global (All Pages)
- **Affected Component:** `components/CustomCursor.tsx` (L18–20)
- **Device:** Touch-Enabled Laptops (Surface, ThinkPad, Dell XPS)
- **Viewport:** 1366px, 1440px, 1920px
- **Browser:** Chrome, Edge on Windows
- **Severity:** **P3 (Low)**
- **Actual Behavior:** Custom cursor component aborts rendering and remains hidden on touchscreen laptops operating with a mouse.
- **Expected Behavior:** Custom cursor should render whenever a primary pointer device (mouse) is active (`(pointer: fine)`).
- **Steps to Reproduce:**
  1. Open website on any touch-enabled laptop with mouse connected.
  2. Observe standard OS cursor with no custom kinetic cursor.
- **Root Cause:** Guard `navigator.maxTouchPoints > 0` incorrectly treats touch-enabled laptops as pure mobile phones.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `components/CustomCursor.tsx` (L19)
- **Recommended Solution:** Replace check with `window.matchMedia("(pointer: fine)").matches`.
- **Regression Testing Requirements:** Test on touch-enabled Windows laptop hardware.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-017

- **Title:** Rotating Scroll Indicator Text Becomes Invisible in Light Mode Due to Hardcoded White Fill
- **Category:** Visual UI/UX / Contrast
- **Affected URL:** `https://injaazh.com/`
- **Affected Component:** `components/HeroSlider.tsx` (L187)
- **Device:** All Devices
- **Viewport:** Desktop Viewports (> 768px)
- **Browser:** All Browsers
- **Severity:** **P3 (Low)**
- **Actual Behavior:** In Light Mode, the rotating SVG text ring remains white on an off-white `#F5F5F0` background, making it unreadable.
- **Expected Behavior:** Rotating text color must switch to dark carbon text in Light Mode.
- **Steps to Reproduce:**
  1. Switch to Light Mode on homepage.
  2. Inspect rotating circular scroll text at bottom center.
  3. White text on off-white background fails contrast check.
- **Root Cause:** SVG `<text>` element hardcodes `className="... text-white"`.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `components/HeroSlider.tsx` (L187)
- **Recommended Solution:** Use `text-neutral-900 dark:text-white` or CSS variable color.
- **Regression Testing Requirements:** Contrast verification across both themes.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-018

- **Title:** Broken Tailwind Utility Class `md:` in HeroSlider
- **Category:** Technical / CSS Linting
- **Affected URL:** `https://injaazh.com/`
- **Affected Component:** `components/HeroSlider.tsx` (L134)
- **Device:** Tablet & Desktop
- **Viewport:** > 768px
- **Browser:** All Browsers
- **Severity:** **P3 (Low)**
- **Actual Behavior:** An uncompleted Tailwind prefix `md:` sits orphaned in the className string.
- **Expected Behavior:** Tailwind utility classes should be well-formed (e.g., `md:text-base`).
- **Steps to Reproduce:**
  1. Inspect element `.hero-description` in DevTools.
  2. Notice invalid class `md:`.
- **Root Cause:** Typo during styling iteration.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `components/HeroSlider.tsx` (L134)
- **Recommended Solution:** Replace `md:` with intended class `md:text-base`.
- **Regression Testing Requirements:** CSS compilation without warnings.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-019

- **Title:** Inconsistent Brand Contact Emails Across Components
- **Category:** Content / Brand Authority
- **Affected URL:** Global
- **Affected Component:** `Navbar.tsx`, `Footer.tsx`, `ContactClient.tsx`, `layout.tsx`, `teamData.ts`
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P3 (Low)**
- **Actual Behavior:** Four conflicting emails are presented to users and search engines: `info@injaazh.com`, `contact@injaazh.com`, `hello@injaazh.com`, and `mamun@injaazh.com`.
- **Expected Behavior:** A unified official contact email address should be standardized across navigation, schema, and contact cards.
- **Steps to Reproduce:**
  1. Compare email in Mobile Menu (`contact@injaazh.com`) vs Copy Email button on Contact page (`hello@injaazh.com`) vs Schema.org (`info@injaazh.com`).
- **Root Cause:** Inconsistent hardcoded copy across disparate components.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/contact_1440x900.png`
- **Affected Source Files:** `app/layout.tsx`, `components/Navbar.tsx`, `components/ContactClient.tsx`, `lib/teamData.ts`
- **Recommended Solution:** Standardize on a single corporate email address across all templates.
- **Regression Testing Requirements:** Global search confirmation across repo.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-020

- **Title:** Placeholder / Fictional Office Telephone Numbers in Contact Page
- **Category:** Content Quality / Credibility
- **Affected URL:** `https://injaazh.com/contact`
- **Affected Component:** `components/ContactClient.tsx` (L60, L68)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P4 (Trivial/Cosmetic)**
- **Actual Behavior:** London office displays `+44 20 7946 0920` (UK drama fictional allocation) and New York office displays `+1 212 555-0199` (fictional 555 exchange).
- **Expected Behavior:** Official corporate phone numbers or a direct concierge line should be provided.
- **Steps to Reproduce:**
  1. Navigate to `/contact` and inspect Global Office Cards.
- **Root Cause:** Placeholder numbers left in production from UI development phase.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/contact_1440x900.png`
- **Affected Source Files:** `components/ContactClient.tsx` (L60, L68)
- **Recommended Solution:** Replace with verified business telephone numbers or remove phone fields if unstaffed.
- **Regression Testing Requirements:** Content review with client.
- **Status:** **CONFIRMED**

---

#### INJ-BUG-021

- **Title:** Generic External Social Media Links Lacking Brand Handles
- **Category:** Content / Social Integrity
- **Affected URL:** Global Footer (All Pages)
- **Affected Component:** `components/Footer.tsx` (L73–77)
- **Device:** All Devices
- **Viewport:** All Viewports
- **Browser:** All Browsers
- **Severity:** **P4 (Trivial/Cosmetic)**
- **Actual Behavior:** Footer links point to generic platforms (`https://instagram.com`, `https://linkedin.com`, `https://twitter.com`, `https://awwwards.com`) rather than Injaazh company profiles.
- **Expected Behavior:** Links should navigate to verified Injaazh corporate profiles (e.g., `https://linkedin.com/company/injaazh`).
- **Steps to Reproduce:**
  1. Click "LinkedIn" in global footer.
  2. Browser opens generic LinkedIn login/feed rather than company page.
- **Root Cause:** Placeholder hrefs left unfinished in footer configuration.
- **Evidence Screenshot:** `AUDIT_REPORTS/screenshots/homepage_1440x900.png`
- **Affected Source Files:** `components/Footer.tsx` (L73–77)
- **Recommended Solution:** Update hrefs to match `sameAs` array in `app/layout.tsx`.
- **Regression Testing Requirements:** Link click verification.
- **Status:** **CONFIRMED**

