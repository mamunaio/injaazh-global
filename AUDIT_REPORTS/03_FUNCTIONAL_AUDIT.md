# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 03: Functional Integrity & User Interaction Audit

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Testing Framework:** Automated Playwright Headless Interaction & Manual DOM Verification  
**Audit Protocol:** READ-ONLY Verification (No real transactions triggered)  

---

### 1. Executive Summary

Every interactive component across the Injaazh Global website was tested for functional integrity, event handling, network dispatch, error handling, state synchronization, and route navigation.

#### Functional Defect Summary:
- **Dead / Inert Interactive Elements:** 2 Confirmed (Footer Newsletter Submit, Mobile Floating Theme Tap)
- **Simulated / Mock Submissions:** 1 Confirmed (Careers Application Portal)
- **Broken Internal Links:** 2 Confirmed (`/mh-mamun-hossain` on Founder Profile, Footer "Brand Identity" pointing to `/services/content`)
- **Dummy External Social Links:** 4 Confirmed (Generic root URLs for Instagram, LinkedIn, Twitter, Awwwards)
- **Fictional Telephone Data:** 2 Confirmed (UK Drama range and US 555 range in Contact Office Clocks)

---

### 2. Forensic Component Testing Matrix

| Component / Feature | Location | Expected Functional Behavior | Actual Measured Behavior | Functional Status |
| :--- | :--- | :--- | :--- | :---: |
| **Navbar Mega Menu** | Desktop Header | Hover opens 6-category flyout with case study | Smoothly renders 6 services; case study switches on category hover | **PASS** |
| **Mobile Drawer Menu** | Mobile Header | Tapping burger opens drawer; submenu navigates | Opens animated drawer; allows drilldown to subservices; back button functions | **PASS** |
| **Hero CTA ("Let's Talk")** | Homepage Hero | Opens ProjectModal for project scoping | Opens ProjectModal starting on Phase 01 | **PASS** |
| **Footer CTA ("Start A Project")** | Global Footer | Opens ProjectModal | Opens ProjectModal from any page | **PASS** |
| **Footer Newsletter Submit** | Global Footer | Validates email, sends POST request, shows feedback | **INERT / DEAD BUTTON.** No `<form>`, no `onSubmit`, no `onClick`. Input value unchanged, zero network traffic dispatched. | **FAIL (P2)** |
| **Floating Theme Switcher** | Bottom Right Widget | Tap or click toggles theme menu on mobile | **DEAD ON TOUCH.** Relies on `onMouseEnter`. Inner button lacks `onClick` handler. Tapping does not open menu on mobile. | **FAIL (P2)** |
| **Floating Scroll-To-Top** | Bottom Right Widget | Clicking scrolls page smoothly to Y=0 | Smoothly scrolls to top when `window.scrollY > 500` | **PASS** |
| **Contact Form Client Validation** | `/contact` | Validates required fields, shows inline alert | HTML5 native `required` blocks submit; custom state `errorMessage` renders if triggered | **PASS** |
| **Careers Application Form** | `/careers/apply` | Transmits candidate details & resume to HR API | **MOCK SIMULATION.** Uses `setTimeout` for 2000ms then shows success. No API call made; data discarded. | **FAIL (P1)** |
| **AI Audit Modal** | Modal Provider | Accepts domain URL, queries `/api/analyze`, displays score | Connects to PageSpeed API or algorithmic fallback; transitions to Lead Capture | **PASS** |
| **Footer "Brand Identity" Link** | Global Footer | Links to UI/UX Brand Identity service | **ROUTE MISMATCH.** Navigates to `/services/content` instead of `/services/ui-ux-design/brand-identity`. | **FAIL (P2)** |
| **Team Founder Profile Website** | `/team/md-mamun-hossain` | Links to valid portfolio or personal website | **404 BROKEN LINK.** Anchors to `https://injaazh.com/mh-mamun-hossain` which does not exist. | **FAIL (P1)** |
| **Footer Social Links** | Global Footer | Directs to verified agency profile pages | Directs to generic homepages (`instagram.com`, `linkedin.com`, `twitter.com`, `awwwards.com`). | **FAIL (P3)** |
| **Contact Office Phone Numbers** | `/contact` | Displays real customer support numbers | Displays fictional placeholder numbers (`+44 20 7946 0920`, `+1 212 555-0199`). | **FAIL (P3)** |

---

### 3. Detailed Defect Analysis

#### Defect 1: Inert Footer Newsletter Form
- **Source File:** `components/Footer.tsx` (L171–180)
- **Code:**
  ```tsx
  <div className="relative group w-full max-w-md">
    <input
      type="email"
      placeholder="EMAIL ADDRESS"
      className="..."
    />
    <button className="absolute right-2 top-1/2 -translate-y-1/2 ...">
      <ArrowRight className="w-5 h-5" />
    </button>
  </div>
  ```
- **Forensic Diagnosis:** The input is neither bound to React state nor wrapped in an HTML `<form>`. The button is a bare `<button>` without an `onClick` handler. Clicking the button produces zero DOM mutations, zero network requests, and zero user feedback.

#### Defect 2: Fake Submission in Careers Application Portal
- **Source File:** `app/careers/apply/page.tsx` (L15–23)
- **Code:**
  ```tsx
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };
  ```
- **Forensic Diagnosis:** The form creates a misleading impression of data transmission. Candidates submitting resumes and portfolios believe their application has been received, while the client data is discarded in memory upon component unmount.

#### Defect 3: Navigation Target Mismatch in Global Footer
- **Source File:** `components/Footer.tsx` (L67)
- **Code:**
  ```tsx
  { label: "Brand Identity", href: "/services/content" }
  ```
- **Forensic Diagnosis:** In the agency's service hierarchy, "Brand Identity" is a sub-service of UI/UX Design located at `/services/ui-ux-design/brand-identity`. The footer incorrectly routes users to the root Content Writing category overview page.

#### Defect 4: Broken Personal Link on Founder Profile
- **Source File:** `lib/teamData.ts` (L104)
- **Code:**
  ```tsx
  website: "https://injaazh.com/mh-mamun-hossain"
  ```
- **Forensic Diagnosis:** Clicking the globe icon on Md Mamun Hossain's profile triggers navigation to `/mh-mamun-hossain`, which immediately returns an HTTP 404 error on the live server. Next.js router prefetching triggers an automated 404 in the browser console.

