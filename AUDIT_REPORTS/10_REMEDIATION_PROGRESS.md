# INJAAZH GLOBAL — PHASE 02: CONTROLLED REMEDIATION PROGRESS
## Executive Remediation Master Log

**Project:** Injaazh Global  
**Website:** https://injaazh.com  
**Local Codebase:** `D:\Github Files\injaazh-global`  
**Execution Mode:** Controlled Single-Bug Remediation with Approval Gates  
**Status Date:** November 3, 2026  

---

### 1. Stage 0: Safety & Baseline State

#### A. Git Repository & Working Tree State
- **Active Branch:** `main`
- **Latest Commit Hash & Message:** `3f3b71b work done`
- **Remote Tracking:** `origin/main` (Up to date)
- **Pre-existing Tracked Modifications:** **None** (`working tree clean`)
- **Untracked Directories:** `AUDIT_REPORTS/` (Phase 01 Forensic Reports & Screenshots)

#### B. Verified Local Environment
- **Node.js Runtime:** `v24.12.0`
- **npm Version:** `11.6.2`
- **Git Version:** `2.56.0.windows.4`
- **Operating System:** Windows 10 (Build 19045)
- **Framework & Core Engine:** Next.js `16.2.4` (App Router), React `19.2.4`, TypeScript `5`, Tailwind CSS `v4`

#### C. Environment Variables & Secret Configuration
- **Status:** Neither `.env` nor `.env.local` existed in the local repository workspace.
- **Reference Template:** Inspected `.env.example`.
- **Identified Required Variables:**
  - `RESEND_API_KEY`: Required for transactional emails (`/api/pipeline`, `/api/analyze`, and authorized `/api/careers`).
  - `ADMIN_EMAIL`: Corporate recipient for agency pipeline leads (Approved default: `contact@injaazh.com`).
  - `GOOGLE_PSI_API_KEY`: Google PageSpeed Insights API key (Optional; code includes deterministic fallback).
  - `WHATSAPP_VERIFY_TOKEN`: Meta Cloud API WhatsApp webhook token.

#### D. Authorized Business Decisions (Approved Ground Truth)
1. **Primary Corporate Email:** Standardized on `contact@injaazh.com` across all public-facing components.
2. **Careers Workflow:** Internal Next.js API (`/api/careers`) with server-side validation and Resend email alerts. No unverified third-party tools.
3. **Office Telephone Policy:** Remove unverified placeholder telephone numbers (`+44 20 7946 0920`, `+1 212 555-0199`) from public display until real company numbers are confirmed.
4. **Website Search Policy:** Remove invalid `SearchAction` structured data from `app/layout.tsx`. Do not build an unrequested search engine feature.

#### E. Baseline Build, Lint, and Type-Check Verification
- **`npm ci` Clean Install:** 413 packages verified against `package-lock.json` v3 (0 vulnerabilities).
- **TypeScript Check (`npx tsc --noEmit`):** **PASS** (0 compiler errors).
- **Next.js Production Build (`npm run build`):** **PASS** (Turbopack, compiled in 5.2s, 97 static pages generated).
  - *Observation:* Route `/insights/[slug]` compiles as dynamic (`ƒ /insights/[slug]`) rather than static (`● SSG`), confirming **INJ-BUG-002**.
- **ESLint Baseline (`npm run lint`):** **154 errors, 172 warnings** pre-existing across 43 files (predominantly unescaped HTML entities in prose and unused variables).
  - *Policy:* Remediation will strictly preserve existing code style and fix linting only on touched files during bug remediation.

---

### 2. Master Bug Remediation Status Index (All 21 Bugs)

| Bug ID | Title | Priority | Stage | Status | Tests Executed | Build Status |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **INJ-BUG-001** | 41 Production Pages Self-Canonicalize to Root Domain | **P0** | Stage 1 | `VERIFIED` | 50 HTTP checks (100% pass) | PASS |
| **INJ-BUG-002** | Editorial Insights Dynamic Route Missing SSR Metadata & Falling Back | **P0** | Stage 1 | `PENDING` | - | - |
| **INJ-BUG-003** | Missing Origin Image Asset `scalia_app_final.webp` (400 Bad Request) | **P1** | Stage 2 | `PENDING` | - | - |
| **INJ-BUG-004** | Global Homepage Width Blowout & Horizontal Overflow (13 Viewports) | **P1** | Stage 2 | `PENDING` | - | - |
| **INJ-BUG-005** | Broken Internal Route `/mh-mamun-hossain` Triggers 404 on Prefetch | **P1** | Stage 3 | `PENDING` | - | - |
| **INJ-BUG-006** | Careers Portal Application Form Discards Data via Mock Simulation | **P1** | Stage 4 | `PENDING` | - | - |
| **INJ-BUG-007** | Inert / Dead Submit Button on Global Footer Newsletter | **P2** | Stage 4 | `PENDING` | - | - |
| **INJ-BUG-008** | Floating Theme Toggle Switcher Unresponsive to Mobile Touch Taps | **P2** | Stage 3 | `PENDING` | - | - |
| **INJ-BUG-009** | Missing Programmatic `<label for>` Associations on Form Inputs | **P2** | Stage 4 | `PENDING` | - | - |
| **INJ-BUG-010** | Unnamed Interactive Buttons Without `aria-label` (WCAG 4.1.2) | **P2** | Stage 5 | `PENDING` | - | - |
| **INJ-BUG-011** | Missing Schema.org Assets: 404 on `/logo.png` and `/search` | **P2** | Stage 5 | `PENDING` | - | - |
| **INJ-BUG-012** | 8 Duplicate Title and Meta Description Clusters (27 Pages) | **P2** | Stage 5 | `PENDING` | - | - |
| **INJ-BUG-013** | Route Target Mismatch: Footer "Brand Identity" Links to Content | **P2** | Stage 3 | `PENDING` | - | - |
| **INJ-BUG-014** | Structural Heading Hierarchy Skips on Multiple Templates | **P3** | Stage 5 | `PENDING` | - | - |
| **INJ-BUG-015** | Brittle `:nth-child` Positional Selectors for Light Mode Backgrounds | **P3** | Stage 6 | `PENDING` | - | - |
| **INJ-BUG-016** | Custom Cursor Disabled on Modern Touchscreen Laptops | **P3** | Stage 6 | `PENDING` | - | - |
| **INJ-BUG-017** | Rotating Scroll Indicator Text Invisible in Light Mode (Zero Contrast) | **P3** | Stage 6 | `PENDING` | - | - |
| **INJ-BUG-018** | Broken Tailwind Utility Class `md:` in HeroSlider | **P3** | Stage 6 | `PENDING` | - | - |
| **INJ-BUG-019** | Inconsistent Brand Contact Emails Across Components | **P3** | Stage 6 | `PENDING` | - | - |
| **INJ-BUG-020** | Placeholder / Fictional Office Telephone Numbers in Contact Page | **P4** | Stage 6 | `PENDING` | - | - |
| **INJ-BUG-021** | Generic External Social Media Links Lacking Brand Handles | **P4** | Stage 6 | `PENDING` | - | - |

---

### 3. Stage-by-Stage Implementation Gate Plan

```
STAGE 0: Safety & Baseline Inspection [COMPLETE]
└── Verify Git, dependencies, build baseline, create remediation log.

STAGE 1: Critical SEO [IN PROGRESS]
├── INJ-BUG-001: Correct canonical URL generation across 41 affected routes. [VERIFIED]
└── INJ-BUG-002: Refactor /insights/[slug] to Server Component with unique SSR metadata. [PENDING APPROVAL]

STAGE 2: Assets & Responsive Integrity (Approval Required)
├── INJ-BUG-003: Restore/link original intended image asset to fix 400 Bad Request.
└── INJ-BUG-004: Constrain HeroMarquee to eliminate horizontal overflow across 13 viewports.

STAGE 3: Navigation & Interaction (Approval Required)
├── INJ-BUG-005: Correct founder profile website URL to eliminate 404 prefetch.
├── INJ-BUG-008: Add touch tap handler to floating theme widget.
└── INJ-BUG-013: Correct Footer "Brand Identity" route to UI/UX subservice.

STAGE 4: Forms & Lead Infrastructure (Approval Required)
├── INJ-BUG-006: Build POST /api/careers with server validation & Resend notification.
├── INJ-BUG-007: Implement functional form wrapper and state for newsletter.
└── INJ-BUG-009: Bind all form inputs to semantic <label htmlFor="..."> tags.

STAGE 5: SEO & Accessibility (Approval Required)
├── INJ-BUG-010: Add descriptive aria-labels to all icon-only buttons.
├── INJ-BUG-011: Remove dead SearchAction schema & fix logo URL in JSON-LD.
├── INJ-BUG-012: Define unique, targeted metadata for all 18 sub-services.
└── INJ-BUG-014: Fix heading hierarchy skips (H1 -> H2 -> H3).

STAGE 6: Visual & Content Polish (Approval Required)
├── INJ-BUG-015: Refactor light mode alternating colors into dedicated component classes.
├── INJ-BUG-016: Modernize custom cursor touch detection to (pointer: fine).
├── INJ-BUG-017: Adjust rotating scroll indicator text color in Light Mode.
├── INJ-BUG-018: Fix malformed Tailwind utility class md: in HeroSlider.
├── INJ-BUG-019: Standardize all contact emails to contact@injaazh.com.
├── INJ-BUG-020: Remove fictional telephone numbers from public display.
└── INJ-BUG-021: Standardize verified social media links.
```

---

### 4. Stage 1 Remediation Log: INJ-BUG-001

#### A. Defect Identification & Root Cause
- **Bug ID:** `INJ-BUG-001` (Priority: P0 Critical Blocker)
- **Title:** 41 Production Pages Self-Canonicalize to Root Domain (`https://injaazh.com`)
- **Root Cause:** In Next.js App Router, `app/layout.tsx` hardcoded `alternates: { canonical: "https://injaazh.com" }` inside the root metadata object. In Next.js metadata inheritance, child routes that lack their own `alternates.canonical` field inherit the parent layout's value verbatim. This caused 41 distinct production pages (including 18 sub-services, 7 blog articles, 5 team profiles, and key corporate pages) to emit `<link rel="canonical" href="https://injaazh.com" />`, signalling to search crawlers that these pages are duplicate copies of the homepage.

#### B. Remediation Architecture & Strategy
1. **Root Inheritance Isolation:** Removed `alternates.canonical` from `app/layout.tsx` while strictly preserving `metadataBase: new URL('https://injaazh.com')`.
2. **Homepage Specificity:** Declared `alternates: { canonical: "https://injaazh.com" }` exclusively on `app/page.tsx`, ensuring the root homepage retains its valid canonical tag without leaking to child routes.
3. **Route Canonicalization:** Configured explicit, self-referencing canonical URLs for all indexable static and dynamic routes:
   - Server Component pages (`agency`, `work`, `team`, `insights`, `marketing`, `ui-ux-design`) updated with `alternates: { canonical: ... }` in their exported `metadata`.
   - Dynamic profile pages (`app/team/[slug]/page.tsx`) updated to generate `https://injaazh.com/team/${member.slug}` via `generateMetadata`.
   - Dynamic insight articles (`app/insights/[slug]/layout.tsx`) configured to generate `https://injaazh.com/insights/${params.slug}` via `generateMetadata`.
   - Client Component routes (`cookies`, `privacy-policy`, `terms`, `careers/apply`, and all 18 granular sub-services) given clean, non-intrusive `layout.tsx` wrappers defining their dedicated canonical URLs without modifying underlying page components or visual styling.

#### C. Modified & Created Files Summary
- **Tracked Files Modified (10):**
  1. `app/layout.tsx` — Removed root-level hardcoded canonical tag.
  2. `app/page.tsx` — Added homepage-scoped canonical tag.
  3. `app/agency/page.tsx` — Added `/agency` canonical tag.
  4. `app/careers/layout.tsx` — Added `/careers` canonical tag.
  5. `app/insights/page.tsx` — Added `/insights` canonical tag.
  6. `app/services/marketing/page.tsx` — Added `/services/marketing` canonical tag.
  7. `app/services/ui-ux-design/page.tsx` — Added `/services/ui-ux-design` canonical tag.
  8. `app/team/page.tsx` — Added `/team` canonical tag.
  9. `app/team/[slug]/page.tsx` — Added dynamic canonical tag for all 5 team member profiles.
  10. `app/work/page.tsx` — Added `/work` canonical tag.

- **New Route Segment Layouts Created (23):**
  1. `app/careers/apply/layout.tsx`
  2. `app/cookies/layout.tsx`
  3. `app/privacy-policy/layout.tsx`
  4. `app/terms/layout.tsx`
  5. `app/insights/[slug]/layout.tsx`
  6. `app/services/web-dev/nextjs-architectures/layout.tsx`
  7. `app/services/web-dev/headless-commerce/layout.tsx`
  8. `app/services/web-dev/custom-web-apps/layout.tsx`
  9. `app/services/ui-ux-design/brand-identity/layout.tsx`
  10. `app/services/ui-ux-design/design-systems/layout.tsx`
  11. `app/services/ui-ux-design/motion-graphics/layout.tsx`
  12. `app/services/seo/technical-audits/layout.tsx`
  13. `app/services/seo/keyword-strategy/layout.tsx`
  14. `app/services/seo/local-rankings/layout.tsx`
  15. `app/services/marketing/ppc-campaigns/layout.tsx`
  16. `app/services/marketing/growth-automation/layout.tsx`
  17. `app/services/marketing/conversion-optimization/layout.tsx`
  18. `app/services/content/copywriting/layout.tsx`
  19. `app/services/content/editorial-writing/layout.tsx`
  20. `app/services/content/brand-narrative/layout.tsx`
  21. `app/services/strategy/digital-transformation/layout.tsx`
  22. `app/services/strategy/ux-audits/layout.tsx`
  23. `app/services/strategy/business-intelligence/layout.tsx`

#### D. Complete Verification Evidence: All 41 Affected Routes Tested
Real HTTP GET requests were executed against the production Next.js build server (`next start` on port 3008). Every route was evaluated for:
- Exact canonical URL match
- Single canonical occurrence (`Count: 1`, zero duplicates)
- HTTP 200 OK status

| # | Route Path | Pre-Fix Canonical (Before) | Post-Fix Canonical (After) | Count | HTTP Status | Verdict |
| :-: | :--- | :--- | :--- | :-: | :-: | :-: |
| 1 | `/` (Homepage) | `https://injaazh.com` | `https://injaazh.com` | 1 | 200 | **PASS** |
| 2 | `/agency` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/agency` | 1 | 200 | **PASS** |
| 3 | `/careers` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/careers` | 1 | 200 | **PASS** |
| 4 | `/careers/apply` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/careers/apply` | 1 | 200 | **PASS** |
| 5 | `/cookies` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/cookies` | 1 | 200 | **PASS** |
| 6 | `/insights` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights` | 1 | 200 | **PASS** |
| 7 | `/privacy-policy` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/privacy-policy` | 1 | 200 | **PASS** |
| 8 | `/team` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/team` | 1 | 200 | **PASS** |
| 9 | `/terms` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/terms` | 1 | 200 | **PASS** |
| 10 | `/work` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/work` | 1 | 200 | **PASS** |
| 11 | `/services/marketing` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/marketing` | 1 | 200 | **PASS** |
| 12 | `/services/ui-ux-design` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/ui-ux-design` | 1 | 200 | **PASS** |
| 13 | `/services/web-dev/nextjs-architectures` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/web-dev/nextjs-architectures` | 1 | 200 | **PASS** |
| 14 | `/services/web-dev/headless-commerce` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/web-dev/headless-commerce` | 1 | 200 | **PASS** |
| 15 | `/services/web-dev/custom-web-apps` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/web-dev/custom-web-apps` | 1 | 200 | **PASS** |
| 16 | `/services/ui-ux-design/brand-identity` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/ui-ux-design/brand-identity` | 1 | 200 | **PASS** |
| 17 | `/services/ui-ux-design/design-systems` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/ui-ux-design/design-systems` | 1 | 200 | **PASS** |
| 18 | `/services/ui-ux-design/motion-graphics` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/ui-ux-design/motion-graphics` | 1 | 200 | **PASS** |
| 19 | `/services/seo/technical-audits` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/seo/technical-audits` | 1 | 200 | **PASS** |
| 20 | `/services/seo/keyword-strategy` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/seo/keyword-strategy` | 1 | 200 | **PASS** |
| 21 | `/services/seo/local-rankings` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/seo/local-rankings` | 1 | 200 | **PASS** |
| 22 | `/services/marketing/ppc-campaigns` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/marketing/ppc-campaigns` | 1 | 200 | **PASS** |
| 23 | `/services/marketing/growth-automation` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/marketing/growth-automation` | 1 | 200 | **PASS** |
| 24 | `/services/marketing/conversion-optimization` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/marketing/conversion-optimization` | 1 | 200 | **PASS** |
| 25 | `/services/content/copywriting` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/content/copywriting` | 1 | 200 | **PASS** |
| 26 | `/services/content/editorial-writing` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/content/editorial-writing` | 1 | 200 | **PASS** |
| 27 | `/services/content/brand-narrative` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/content/brand-narrative` | 1 | 200 | **PASS** |
| 28 | `/services/strategy/digital-transformation` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/strategy/digital-transformation` | 1 | 200 | **PASS** |
| 29 | `/services/strategy/ux-audits` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/strategy/ux-audits` | 1 | 200 | **PASS** |
| 30 | `/services/strategy/business-intelligence` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/services/strategy/business-intelligence` | 1 | 200 | **PASS** |
| 31 | `/team/md-mamun-hossain` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/team/md-mamun-hossain` | 1 | 200 | **PASS** |
| 32 | `/team/imtiaz-ahmed` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/team/imtiaz-ahmed` | 1 | 200 | **PASS** |
| 33 | `/team/sakib-hasan-ruhin` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/team/sakib-hasan-ruhin` | 1 | 200 | **PASS** |
| 34 | `/team/ismail-hossain` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/team/ismail-hossain` | 1 | 200 | **PASS** |
| 35 | `/team/khandakar-shanto` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/team/khandakar-shanto` | 1 | 200 | **PASS** |
| 36 | `/insights/future-of-headless-architecture` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/future-of-headless-architecture` | 1 | 200 | **PASS** |
| 37 | `/insights/neuro-design-psychology` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/neuro-design-psychology` | 1 | 200 | **PASS** |
| 38 | `/insights/scaling-beyond-10m-users` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/scaling-beyond-10m-users` | 1 | 200 | **PASS** |
| 39 | `/insights/ai-driven-personalization` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/ai-driven-personalization` | 1 | 200 | **PASS** |
| 40 | `/insights/the-seo-renaissance` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/the-seo-renaissance` | 1 | 200 | **PASS** |
| 41 | `/insights/performance-as-a-feature` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/performance-as-a-feature` | 1 | 200 | **PASS** |
| 42 | `/insights/from-clicks-to-clients` | `https://injaazh.com` *(WRONG)* | `https://injaazh.com/insights/from-clicks-to-clients` | 1 | 200 | **PASS** |

#### E. Regression Verification of Previously Functioning Canonical Routes
The 8 routes that previously possessed valid canonical definitions were re-tested to ensure zero regressions:
- `/contact` -> `https://injaazh.com/contact` (1 tag) — **PASS**
- `/services` -> `https://injaazh.com/services` (1 tag) — **PASS**
- `/services/web-dev` -> `https://injaazh.com/services/web-dev` (1 tag) — **PASS**
- `/services/seo` -> `https://injaazh.com/services/seo` (1 tag) — **PASS**
- `/services/content` -> `https://injaazh.com/services/content` (1 tag) — **PASS**
- `/services/strategy` -> `https://injaazh.com/services/strategy` (1 tag) — **PASS**
- `/data-deletion` -> `https://injaazh.com/data-deletion` (1 tag) — **PASS**
- `/work/themesjet` -> `https://injaazh.com/work/themesjet` (1 tag) — **PASS**

#### F. Quality Gates & Build Verification
- **TypeScript Check (`npx tsc --noEmit`):** **PASS** (0 errors).
- **ESLint Check (Touched Files):** **PASS** (0 errors, 0 warnings).
- **Production Build (`npm run build`):** **PASS** (Compiled in 5.4s, 97 static pages generated).
- **Sitemap Consistency:** Every canonical destination matches `app/sitemap.ts` definitions exactly (no trailing slash discrepancies, normalized protocol and domain).

#### G. Remaining Stage 1 Issues
- **`INJ-BUG-002` (Priority P0):** Editorial Insights Dynamic Route Missing SSR Metadata & Falling Back.
  - While `app/insights/[slug]` now emits correct canonical tags via `layout.tsx`, the route remains `"use client"` and lacks unique article titles, descriptions, OpenGraph profile metadata, and `generateStaticParams`. This is scheduled next under Stage 1.
