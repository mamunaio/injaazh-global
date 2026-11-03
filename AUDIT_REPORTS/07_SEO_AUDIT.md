# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 07: Technical SEO & Organic Indexability Forensic Audit

**Audit Date:** November 3, 2026  
**Audited Target:** https://injaazh.com  
**Audit Scope:** Technical SEO Architecture, Canonicalization, Metadata Silos, Structured Data  
**Search Engine Emulation:** Googlebot / Bingbot Standards  

---

### 1. Executive Summary

A forensic technical SEO audit was performed across the Injaazh Global website. Injaazh positions itself as a "Top-Tier Technical SEO Agency" that dominates search engine rankings for US, UK, and Australian clients.

However, the forensic audit revealed **critical, foundational technical SEO bugs** that severely harm organic visibility, trigger mass canonical self-suppression, and generate widespread metadata duplication.

#### Critical SEO Findings:
1. **The 41-Page Canonical Collapse (P0 SEO Defect):** 41 accessible production routes (including all 18 granular sub-services, all 7 blog articles, and all 5 team profiles) emit `<link rel="canonical" href="https://injaazh.com">`. This explicitly instructs Google to drop these pages from search results and index only the homepage.
2. **Dynamic Editorial Blog Lacks Server Metadata (P0 SEO Defect):** `app/insights/[slug]/page.tsx` is built as `"use client"` without exporting `generateMetadata` or `generateStaticParams`. Every individual blog post renders the exact same title `"Digital Marketing & Web Dev Insights | Injaazh Blog"` and inherits the root canonical.
3. **8 Duplicate Title Clusters Across 27 Routes (P1 SEO Defect):** Sub-service pages within each category share identical layout page titles and meta descriptions.
4. **Invalid Schema.org Actions & Assets (P2 SEO Defect):** Schema specifies a search endpoint (`/search`) and organization logo (`/logo.png`) that both return HTTP 404.

---

### 2. The 41-Page Canonicalization Crisis (P0 Defect)

#### Mechanism of the Bug:
In `app/layout.tsx` (L28–30), the root metadata object defines:
```typescript
alternates: {
  canonical: "https://injaazh.com",
},
```
In the Next.js App Router, if a child page or sub-layout does not define its own `alternates.canonical` field, it **inherits the parent layout's canonical URL verbatim**.

Because 41 pages across the site do not define their own canonical URLs, Next.js generates:
```html
<link rel="canonical" href="https://injaazh.com" />
```
on all 41 pages.

#### Live Production Evidence:
Curl inspection of `https://injaazh.com/insights/future-of-headless-architecture` confirms:
```html
<link rel="canonical" href="https://injaazh.com"/>
```

#### Catastrophic SEO Impact:
According to Google Search Central documentation, a canonical tag is a strong signal indicating the master URL of duplicate content. By pointing all sub-services, team profiles, and editorial articles to `https://injaazh.com`, the site is actively informing Google that these 41 distinct URLs are mere duplicates of the homepage. Google's indexing engine will consolidate ranking signals into the homepage and de-index the individual sub-pages.

#### Complete List of 41 Canonical Mismatch Pages:
- **Core Pages (8):** `/agency`, `/careers`, `/careers/apply`, `/cookies`, `/insights`, `/privacy-policy`, `/team`, `/terms`, `/work`
- **Primary Services (2):** `/services/ui-ux-design`, `/services/marketing`
- **Granular Sub-Services (18):**
  - `/services/web-dev/nextjs-architectures`
  - `/services/web-dev/headless-commerce`
  - `/services/web-dev/custom-web-apps`
  - `/services/ui-ux-design/brand-identity`
  - `/services/ui-ux-design/design-systems`
  - `/services/ui-ux-design/motion-graphics`
  - `/services/seo/technical-audits`
  - `/services/seo/keyword-strategy`
  - `/services/seo/local-rankings`
  - `/services/marketing/ppc-campaigns`
  - `/services/marketing/growth-automation`
  - `/services/marketing/conversion-optimization`
  - `/services/content/copywriting`
  - `/services/content/editorial-writing`
  - `/services/content/brand-narrative`
  - `/services/strategy/digital-transformation`
  - `/services/strategy/ux-audits`
  - `/services/strategy/business-intelligence`
- **Team Profiles (5):** `/team/md-mamun-hossain`, `/team/imtiaz-ahmed`, `/team/sakib-hasan-ruhin`, `/team/ismail-hossain`, `/team/khandakar-shanto`
- **Editorial Blog Insights (7):**
  - `/insights/future-of-headless-architecture`
  - `/insights/neuro-design-psychology`
  - `/insights/scaling-beyond-10m-users`
  - `/insights/ai-driven-personalization`
  - `/insights/the-seo-renaissance`
  - `/insights/performance-as-a-feature`
  - `/insights/from-clicks-to-clients`

---

### 3. Duplicate Page Title & Meta Description Clusters (P1 Defect)

Because sub-service pages rely on their parent category `layout.tsx` metadata without declaring page-specific titles, search crawlers encounter widespread title duplication:

| Duplicate Title String | Affected Page Count | URLs Sharing This Title |
| :--- | :---: | :--- |
| **"Digital Marketing & Web Dev Insights \| Injaazh Blog"** | **7 Pages** | All 7 articles under `/insights/*` |
| **"Injaazh \| Top-Tier Global Digital Agency — Web Design, Technical SEO & Content"** | **4 Pages** | `/`, `/cookies`, `/privacy-policy`, `/terms` |
| **"Web Development Services \| Next.js, WordPress & Custom Apps — Injaazh"** | **3 Pages** | `/services/web-dev/nextjs-architectures`<br>`/services/web-dev/headless-commerce`<br>`/services/web-dev/custom-web-apps` |
| **"UI/UX Design Services \| Brand Identity & Design Systems — Injaazh"** | **3 Pages** | `/services/ui-ux-design/brand-identity`<br>`/services/ui-ux-design/design-systems`<br>`/services/ui-ux-design/motion-graphics` |
| **"SEO Services for US, UK & Australia \| Technical SEO Agency — Injaazh"** | **3 Pages** | `/services/seo/technical-audits`<br>`/services/seo/keyword-strategy`<br>`/services/seo/local-rankings` |
| **"Digital Marketing Services \| Google, Meta Ads & Growth — Injaazh"** | **3 Pages** | `/services/marketing/ppc-campaigns`<br>`/services/marketing/growth-automation`<br>`/services/marketing/conversion-optimization` |
| **"Content Writing Services \| SEO Content & Copywriting — Injaazh"** | **3 Pages** | `/services/content/copywriting`<br>`/services/content/editorial-writing`<br>`/services/content/brand-narrative` |
| **"Digital Strategy Services \| Growth & Transformation — Injaazh"** | **3 Pages** | `/services/strategy/digital-transformation`<br>`/services/strategy/ux-audits`<br>`/services/strategy/business-intelligence` |
| **"Careers \| Join the Injaazh Global Squad"** | **2 Pages** | `/careers`, `/careers/apply` |

---

### 4. Schema.org Structured Data Forensic Review

`app/layout.tsx` injects three JSON-LD schemas into `<head>`: `WebSite`, `Organization`, and `ProfessionalService`.

#### Defect 1: Dead SearchAction Endpoint
- **JSON-LD Schema Fragment:**
  ```json
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://injaazh.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
  ```
- **Forensic Finding:** A GET request to `https://injaazh.com/search?q=test` produces an HTTP 404 Not Found error. Schema.org guidelines mandate that `potentialAction` target endpoints must be live, responsive handlers.

#### Defect 2: 404 Organization Logo Asset
- **JSON-LD Schema Fragment:**
  ```json
  "logo": {
    "@type": "ImageObject",
    "url": "https://injaazh.com/logo.png",
    "width": 512,
    "height": 512
  }
  ```
- **Forensic Finding:** `https://injaazh.com/logo.png` returns HTTP 404 Not Found. Google Rich Results Test flags missing publisher logos as schema validation warnings.

---

### 5. Sitemap & Robots Directives Verification

- **Robots Directives (`app/robots.ts`):** Properly allows `/`, disallows `/api/`, and declares sitemap location `https://injaazh.com/sitemap.xml`. (Compliant)
- **Sitemap Generator (`app/sitemap.ts`):** Properly indexes 102 URLs with change frequencies and priorities.
- **Sitemap Conflict:** The sitemap submits all 41 sub-pages to Google for indexing, while the pages themselves tell Google via canonical tags NOT to index them. This conflict triggers "Submitted URL marked 'noindex' / Alternate page with proper canonical tag" warnings in Google Search Console.

