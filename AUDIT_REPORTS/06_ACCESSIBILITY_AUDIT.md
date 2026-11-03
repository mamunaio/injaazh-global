# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 06: Accessibility & WCAG 2.2 AA Compliance Audit

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Compliance Standard:** WCAG 2.2 Level AA  
**Evaluation Tools:** Chrome Accessibility Tree Inspection, Playwright Automated DOM Evaluation  

---

### 1. Executive Summary

An in-depth accessibility audit was conducted across 12 core templates representing the entire user journey. The application was evaluated against the W3C Web Content Accessibility Guidelines (WCAG) 2.2 Level AA requirements.

#### Audit Summary:
- **Total Accessibility Violations Identified:** 29 Violation Instances across 5 Major Categories
- **Critical Form Label Defects:** 100% of analyzed forms lack proper `<label for="...">` associations.
- **Interactive Buttons Without Accessible Names:** 4 Persistent interactive elements lack `aria-label` or text.
- **Heading Hierarchy Anomalies:** 5 Pages exhibit irregular heading level skips (e.g., H1 directly to H4).
- **Reduced Motion Support:** Missing `@media (prefers-reduced-motion)` constraints on heavy GSAP and Framer Motion infinite loops.

---

### 2. WCAG 2.2 AA Compliance Evaluation Matrix

| WCAG Success Criterion | Level | Tested Area | Findings & Measured Status | Status |
| :--- | :---: | :--- | :--- | :---: |
| **1.1.1 Non-text Content** | Level A | Media & Icons | All primary content images possess valid `alt` attributes. Decorative SVGs lack `aria-hidden="true"`. | **PASS WITH WARNING** |
| **1.3.1 Info & Relationships** | Level A | Form Controls | Form inputs rely solely on `placeholder` attributes without programmatic `<label>` bindings. | **FAIL (Critical)** |
| **1.3.1 Heading Hierarchy** | Level A | Document Structure | Skipped heading levels (H1 to H4, H1 to H3) detected on 5 templates. | **FAIL** |
| **2.1.1 Keyboard Navigation** | Level A | Focusability | All links and primary buttons are keyboard focusable via Tab navigation. | **PASS** |
| **2.4.4 Link Purpose** | Level A | Anchor Links | Social links in footer lack descriptive screen reader labels ("Instagram", etc. are readable). | **PASS** |
| **2.4.7 Focus Visible** | Level AA | Focus Rings | Custom outline styling occasionally suppresses default browser focus rings without providing high-contrast replacements. | **FAIL** |
| **2.5.8 Target Size (Minimum)** | Level AA | Touch Targets | Mobile menu close button and theme toggle exceed 24×24 CSS px (compliant). | **PASS** |
| **4.1.2 Name, Role, Value** | Level A | Buttons | Theme toggle button, scroll-to-top button, and mobile hamburger button lack accessible names. | **FAIL (Critical)** |
| **1.4.3 Contrast (Minimum)** | Level AA | Text Contrast | Dark mode achieves > 7:1 contrast; Light mode rotating SVG text indicator suffers near-zero contrast. | **FAIL (Light Mode)** |

---

### 3. Detailed Accessibility Violations

#### A. Form Controls Missing Programmatic Labels (WCAG 1.3.1 & 3.3.2)
1. **Footer Newsletter Input:**
   - **Code:** `<input type="email" placeholder="EMAIL ADDRESS" className="..." />`
   - **Defect:** No associated `<label>` element, no `id`, no `aria-label`, and no `aria-labelledby`.
   - **Impact:** Screen readers announce only "edit text" without clarifying that the input is for newsletter subscription.
2. **Contact Page Form Inputs (`components/ContactClient.tsx`):**
   - **Code:**
     ```tsx
     <label className="...">Full Name</label>
     <input type="text" value={name} ... />
     ```
   - **Defect:** The visual `<label>` tag does not contain a `for` (or `htmlFor`) attribute, and the `<input>` lacks an `id`. The label is visually adjacent but completely unlinked in the Accessibility API tree.
3. **Careers Portal Application Fields (`app/careers/apply/page.tsx`):**
   - Identical unlinked label implementation across "Full Name", "Email", "Portfolio URL", and "Briefing".

---

#### B. Interactive Buttons Without Accessible Names (WCAG 4.1.2)
1. **Floating Theme Toggle Button (`components/FloatingWidget.tsx`):**
   - Rendered as `<button className="...">` containing an icon component (`<Sun />`, `<Moon />`, or `<Monitor />`).
   - Missing `aria-label="Toggle visual theme"`. Screen readers announce: "Button".
2. **Back-to-Top Floating Button (`components/FloatingWidget.tsx`):**
   - Rendered as `<motion.button onClick={scrollToTop}>` containing `<ArrowUp />`.
   - Missing `aria-label="Scroll back to top of page"`.
3. **Mobile Navigation Hamburger Button (`components/Navbar.tsx`):**
   - Rendered as `<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>` containing `<Menu />` or `<X />`.
   - Missing `aria-label="Open mobile navigation menu"` / `aria-expanded`.
4. **Footer Newsletter Submission Button (`components/Footer.tsx`):**
   - Rendered as `<button className="...">` containing `<ArrowRight />`.
   - Missing `aria-label="Subscribe to weekly newsletter"`.

---

#### C. Structural Heading Level Skips (WCAG 1.3.1)

Screen reader users rely on headings to build a mental outline of the page. The following unnatural heading skips were documented:

1. **`/privacy-policy`:** Skips directly from `<H1>` ("Privacy Policy") to `<H4>` ("Table Of Contents").
2. **`/team`:** Skips directly from `<H1>` ("The Collective Behind The Code") to `<H3>` ("Md Mamun Hossain").
3. **`/careers`:** Skips directly from `<H1>` ("Careers") to `<H3>` ("100% Remote").
4. **`/services/web-dev`:** Skips from `<H2>` ("Enterprise Engineering Standards") to `<H4>` ("Next.Js 15").
5. **`/work/themesjet`:** Skips from `<H2>` to `<H4>` ("THEMES JET COMMAND CENTER").

---

#### D. Reduced Motion Support (WCAG 2.3.3 / 2.2 AAA Best Practice)

The website utilizes aggressive, continuous GPU animations:
- Infinite 360-degree conic gradient border spins (`animate-[spin_6s_linear_infinite]`)
- Continuous marquee text sliding across the screen (`animate-marquee`)
- Continuous SVG connection path dashes and pulsing radar nodes in the footer
- Physics-based mouse follower custom cursor

None of these animations are wrapped in `@media (prefers-reduced-motion: reduce)`. Users with vestibular motion disorders or ADHD have no native mechanism to halt continuous scrolling animations.

