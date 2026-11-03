# INJAAZH GLOBAL — FORENSIC WEBSITE AUDIT
## Report 01: Complete Route Inventory & URL Architecture

**Audit Date:** November 3, 2026  
**Target Domain:** https://injaazh.com  
**Audit Scope:** 102 Total Discovered URLs  
**Live Site Response Scan:** Automated HTTP/2 Pipeline Inspection  

---

### 1. Executive Summary

A comprehensive forensic crawl and route extraction was performed across the Injaazh Global digital ecosystem. The audit analyzed all paths defined in the Next.js `app/` filesystem router, internal hyperlinks, header mega menus, mobile drawers, footer links, `sitemap.ts`, and `robots.ts`.

#### Key Findings:
- **Total Discovered & Audited URLs:** 102
- **Healthy Routes (HTTP 200 OK):** 99
- **Broken / 404 Routes Identified:** 3
- **Canonical URL Conflicts:** 41 Routes incorrectly declare the homepage (`https://injaazh.com`) as their canonical master.
- **Duplicate Page Title Sets:** 8 Duplicate title clusters affecting 27 distinct routes.

---

### 2. Broken & 404 Routes Inventory

| Defect Route | HTTP Status | Origin / Referenced By | Impact Analysis |
| :--- | :---: | :--- | :--- |
| `https://injaazh.com/search` | **404 Not Found** | `app/layout.tsx` (L65: `SearchAction` Schema) | Search engines attempting to validate Google SearchAction schema receive a 404. |
| `https://injaazh.com/mh-mamun-hossain` | **404 Not Found** | `lib/teamData.ts` (L104: Founder personal website) | Next.js link prefetching triggers 404 console errors on `/team/md-mamun-hossain`. |
| `https://injaazh.com/logo.png` | **404 Not Found** | `app/layout.tsx` (L78) & `app/insights/page.tsx` (L28) | Search engines validating Organization logo schema fail to load the image asset. |

---

### 3. Core Pages & System Routes (15 Routes)

| URL Path | HTTP Status | Actual Canonical | Expected Canonical | Status |
| :--- | :---: | :--- | :--- | :---: |
| `/` | 200 | `https://injaazh.com` | `https://injaazh.com` | VALID |
| `/agency` | 200 | `https://injaazh.com` | `https://injaazh.com/agency` | **CANONICAL MISMATCH** |
| `/careers` | 200 | `https://injaazh.com` | `https://injaazh.com/careers` | **CANONICAL MISMATCH** |
| `/careers/apply` | 200 | `https://injaazh.com` | `https://injaazh.com/careers/apply` | **CANONICAL MISMATCH** |
| `/contact` | 200 | `https://injaazh.com/contact` | `https://injaazh.com/contact` | VALID |
| `/cookies` | 200 | `https://injaazh.com` | `https://injaazh.com/cookies` | **CANONICAL MISMATCH** |
| `/data-deletion` | 200 | `https://injaazh.com/data-deletion` | `https://injaazh.com/data-deletion` | VALID |
| `/insights` | 200 | `https://injaazh.com` | `https://injaazh.com/insights` | **CANONICAL MISMATCH** |
| `/privacy-policy` | 200 | `https://injaazh.com` | `https://injaazh.com/privacy-policy` | **CANONICAL MISMATCH** |
| `/services` | 200 | `https://injaazh.com/services` | `https://injaazh.com/services` | VALID |
| `/team` | 200 | `https://injaazh.com` | `https://injaazh.com/team` | **CANONICAL MISMATCH** |
| `/terms` | 200 | `https://injaazh.com` | `https://injaazh.com/terms` | **CANONICAL MISMATCH** |
| `/work` | 200 | `https://injaazh.com` | `https://injaazh.com/work` | **CANONICAL MISMATCH** |
| `/sitemap.xml` | 200 | N/A (XML) | `https://injaazh.com/sitemap.xml` | VALID |
| `/robots.txt` | 200 | N/A (TXT) | `https://injaazh.com/robots.txt` | VALID |

---

### 4. Primary Core Services (6 Routes)

| URL Path | HTTP Status | Actual Canonical | Expected Canonical | Status |
| :--- | :---: | :--- | :--- | :---: |
| `/services/web-dev` | 200 | `https://injaazh.com/services/web-dev` | `https://injaazh.com/services/web-dev` | VALID |
| `/services/ui-ux-design` | 200 | `https://injaazh.com` | `https://injaazh.com/services/ui-ux-design` | **CANONICAL MISMATCH** |
| `/services/seo` | 200 | `https://injaazh.com/services/seo` | `https://injaazh.com/services/seo` | VALID |
| `/services/marketing` | 200 | `https://injaazh.com` | `https://injaazh.com/services/marketing` | **CANONICAL MISMATCH** |
| `/services/content` | 200 | `https://injaazh.com/services/content` | `https://injaazh.com/services/content` | VALID |
| `/services/strategy` | 200 | `https://injaazh.com/services/strategy` | `https://injaazh.com/services/strategy` | VALID |

---

### 5. Granular Sub-Services (18 Routes)

| Sub-Service URL Path | HTTP Status | Actual Canonical | Shared Duplicate Title Cluster |
| :--- | :---: | :--- | :--- |
| `/services/web-dev/nextjs-architectures` | 200 | `https://injaazh.com` | Web Development Services \| Next.js... |
| `/services/web-dev/headless-commerce` | 200 | `https://injaazh.com` | Web Development Services \| Next.js... |
| `/services/web-dev/custom-web-apps` | 200 | `https://injaazh.com` | Web Development Services \| Next.js... |
| `/services/ui-ux-design/brand-identity` | 200 | `https://injaazh.com` | UI/UX Design Services \| Brand Identity... |
| `/services/ui-ux-design/design-systems` | 200 | `https://injaazh.com` | UI/UX Design Services \| Brand Identity... |
| `/services/ui-ux-design/motion-graphics` | 200 | `https://injaazh.com` | UI/UX Design Services \| Brand Identity... |
| `/services/seo/technical-audits` | 200 | `https://injaazh.com` | SEO Services for US, UK & Australia... |
| `/services/seo/keyword-strategy` | 200 | `https://injaazh.com` | SEO Services for US, UK & Australia... |
| `/services/seo/local-rankings` | 200 | `https://injaazh.com` | SEO Services for US, UK & Australia... |
| `/services/marketing/ppc-campaigns` | 200 | `https://injaazh.com` | Digital Marketing Services \| Google, Meta... |
| `/services/marketing/growth-automation` | 200 | `https://injaazh.com` | Digital Marketing Services \| Google, Meta... |
| `/services/marketing/conversion-optimization` | 200 | `https://injaazh.com` | Digital Marketing Services \| Google, Meta... |
| `/services/content/copywriting` | 200 | `https://injaazh.com` | Content Writing Services \| SEO Content... |
| `/services/content/editorial-writing` | 200 | `https://injaazh.com` | Content Writing Services \| SEO Content... |
| `/services/content/brand-narrative` | 200 | `https://injaazh.com` | Content Writing Services \| SEO Content... |
| `/services/strategy/digital-transformation` | 200 | `https://injaazh.com` | Digital Strategy Services \| Growth & Transf... |
| `/services/strategy/ux-audits` | 200 | `https://injaazh.com` | Digital Strategy Services \| Growth & Transf... |
| `/services/strategy/business-intelligence` | 200 | `https://injaazh.com` | Digital Strategy Services \| Growth & Transf... |

*Note: All 18 sub-services suffer from both Canonical Mismatch (pointing to root domain) and Category-level Duplicate Titles.*

---

### 6. Team Profiles (5 Routes)

| URL Path | HTTP Status | Actual Canonical | Expected Canonical | Status |
| :--- | :---: | :--- | :--- | :---: |
| `/team/md-mamun-hossain` | 200 | `https://injaazh.com` | `https://injaazh.com/team/md-mamun-hossain` | **MISMATCH** |
| `/team/imtiaz-ahmed` | 200 | `https://injaazh.com` | `https://injaazh.com/team/imtiaz-ahmed` | **MISMATCH** |
| `/team/sakib-hasan-ruhin` | 200 | `https://injaazh.com` | `https://injaazh.com/team/sakib-hasan-ruhin` | **MISMATCH** |
| `/team/ismail-hossain` | 200 | `https://injaazh.com` | `https://injaazh.com/team/ismail-hossain` | **MISMATCH** |
| `/team/khandakar-shanto` | 200 | `https://injaazh.com` | `https://injaazh.com/team/khandakar-shanto` | **MISMATCH** |

---

### 7. Editorial Insights Articles (7 Routes)

| Article URL Path | HTTP Status | Actual Canonical | Rendered Page Title | Status |
| :--- | :---: | :--- | :--- | :---: |
| `/insights/future-of-headless-architecture` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |
| `/insights/neuro-design-psychology` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |
| `/insights/scaling-beyond-10m-users` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |
| `/insights/ai-driven-personalization` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |
| `/insights/the-seo-renaissance` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |
| `/insights/performance-as-a-feature` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |
| `/insights/from-clicks-to-clients` | 200 | `https://injaazh.com` | Digital Marketing & Web Dev Insights \| Injaazh Blog | **DUPLICATE** |

---

### 8. Case Studies & Portfolio Catalog (48 Verified Routes)

All 48 projects defined in `lib/projectsData.ts` were audited via HTTP/2 requests against the live production server.

| # | Project Slug | URL Path | HTTP Status | Canonical Verified |
| :---: | :--- | :--- | :---: | :---: |
| 01 | themesjet | `/work/themesjet` | 200 OK | `https://injaazh.com/work/themesjet` |
| 02 | aka-moving | `/work/aka-moving` | 200 OK | `https://injaazh.com/work/aka-moving` |
| 03 | nexus-esports | `/work/nexus-esports` | 200 OK | `https://injaazh.com/work/nexus-esports` |
| 04 | novacore-esports | `/work/novacore-esports` | 200 OK | `https://injaazh.com/work/novacore-esports` |
| 05 | the-ultrasound-source | `/work/the-ultrasound-source` | 200 OK | `https://injaazh.com/work/the-ultrasound-source` |
| 06 | ultrasound-battery | `/work/ultrasound-battery` | 200 OK | `https://injaazh.com/work/ultrasound-battery` |
| 07 | sps-foods | `/work/sps-foods` | 200 OK | `https://injaazh.com/work/sps-foods` |
| 08 | montreal-moving | `/work/montreal-moving` | 200 OK | `https://injaazh.com/work/montreal-moving` |
| 09 | across-canada-movers | `/work/across-canada-movers` | 200 OK | `https://injaazh.com/work/across-canada-movers` |
| 10 | str-assistance | `/work/str-assistance` | 200 OK | `https://injaazh.com/work/str-assistance` |
| 11 | hexazn | `/work/hexazn` | 200 OK | `https://injaazh.com/work/hexazn` |
| 12 | hostorient | `/work/hostorient` | 200 OK | `https://injaazh.com/work/hostorient` |
| 13 | abc-computers | `/work/abc-computers` | 200 OK | `https://injaazh.com/work/abc-computers` |
| 14 | egp-btc | `/work/egp-btc` | 200 OK | `https://injaazh.com/work/egp-btc` |
| 15 | deliver-my-motor | `/work/deliver-my-motor` | 200 OK | `https://injaazh.com/work/deliver-my-motor` |
| 16 | salam-medical | `/work/salam-medical` | 200 OK | `https://injaazh.com/work/salam-medical` |
| 17 | chowdhurani-ayurveda | `/work/chowdhurani-ayurveda` | 200 OK | `https://injaazh.com/work/chowdhurani-ayurveda` |
| 18 | ss-construction | `/work/ss-construction` | 200 OK | `https://injaazh.com/work/ss-construction` |
| 19 | refab-solution | `/work/refab-solution` | 200 OK | `https://injaazh.com/work/refab-solution` |
| 20 | prime-ifs | `/work/prime-ifs` | 200 OK | `https://injaazh.com/work/prime-ifs` |
| 21 | ronghill | `/work/ronghill` | 200 OK | `https://injaazh.com/work/ronghill` |
| 22 | salven | `/work/salven` | 200 OK | `https://injaazh.com/work/salven` |
| 23 | cn-construction | `/work/cn-construction` | 200 OK | `https://injaazh.com/work/cn-construction` |
| 24 | gadget-star | `/work/gadget-star` | 200 OK | `https://injaazh.com/work/gadget-star` |
| 25 | traveloo | `/work/traveloo` | 200 OK | `https://injaazh.com/work/traveloo` |
| 26 | interbroad | `/work/interbroad` | 200 OK | `https://injaazh.com/work/interbroad` |
| 27 | bricks-land | `/work/bricks-land` | 200 OK | `https://injaazh.com/work/bricks-land` |
| 28 | constra-build | `/work/constra-build` | 200 OK | `https://injaazh.com/work/constra-build` |
| 29 | asma-medicare | `/work/asma-medicare` | 200 OK | `https://injaazh.com/work/asma-medicare` |
| 30 | trader-sme | `/work/trader-sme` | 200 OK | `https://injaazh.com/work/trader-sme` |
| 31 | blockvon | `/work/blockvon` | 200 OK | `https://injaazh.com/work/blockvon` |
| 32 | purrfect-hub | `/work/purrfect-hub` | 200 OK | `https://injaazh.com/work/purrfect-hub` |
| 33 | pawsome | `/work/pawsome` | 200 OK | `https://injaazh.com/work/pawsome` |
| 34 | cleaning-depot | `/work/cleaning-depot` | 200 OK | `https://injaazh.com/work/cleaning-depot` |
| 35 | exhaust-clean | `/work/exhaust-clean` | 200 OK | `https://injaazh.com/work/exhaust-clean` |
| 36 | aegis | `/work/aegis` | 200 OK | `https://injaazh.com/work/aegis` |
| 37 | velocity | `/work/velocity` | 200 OK | `https://injaazh.com/work/velocity` |
| 38 | incode | `/work/incode` | 200 OK | `https://injaazh.com/work/incode` |
| 39 | carpet-clean-uk | `/work/carpet-clean-uk` | 200 OK | `https://injaazh.com/work/carpet-clean-uk` |
| 40 | virtua-assistant | `/work/virtua-assistant` | 200 OK | `https://injaazh.com/work/virtua-assistant` |
| 41 | jobnin | `/work/jobnin` | 200 OK | `https://injaazh.com/work/jobnin` |
| 42 | dev-api | `/work/dev-api` | 200 OK | `https://injaazh.com/work/dev-api` |
| 43 | edu-next | `/work/edu-next` | 200 OK | `https://injaazh.com/work/edu-next` |
| 44 | codenext-hq | `/work/codenext-hq` | 200 OK | `https://injaazh.com/work/codenext-hq` |
| 45 | pinnacle-crm | `/work/pinnacle-crm` | 200 OK | `https://injaazh.com/work/pinnacle-crm` |
| 46 | injaazh-os | `/work/injaazh-os` | 200 OK | `https://injaazh.com/work/injaazh-os` |
| 47 | odyssey | `/work/odyssey` | 200 OK | `https://injaazh.com/work/odyssey` |
| 48 | injaazh-erp | `/work/injaazh-erp` | 200 OK | `https://injaazh.com/work/injaazh-erp` |

