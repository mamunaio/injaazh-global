import { MetadataRoute } from "next";
import { teamMembers } from "@/lib/teamData";
import { getAllProjectSlugs } from "@/lib/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://injaazh.com";
  const lastModified = new Date();

  // 1. Core Pages
  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/agency", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/team", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/careers/apply", priority: 0.6, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Primary 6 Core Services
  const coreServices = [
    "/services/web-dev",
    "/services/ui-ux-design",
    "/services/seo",
    "/services/marketing",
    "/services/content",
    "/services/strategy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Granular Sub-Service Architectures (18 Deep Services)
  const subServices = [
    // Web Dev
    "/services/web-dev/nextjs-architectures",
    "/services/web-dev/headless-commerce",
    "/services/web-dev/custom-web-apps",
    // UI/UX Design
    "/services/ui-ux-design/brand-identity",
    "/services/ui-ux-design/design-systems",
    "/services/ui-ux-design/motion-graphics",
    // SEO
    "/services/seo/technical-audits",
    "/services/seo/keyword-strategy",
    "/services/seo/local-rankings",
    // Marketing
    "/services/marketing/ppc-campaigns",
    "/services/marketing/growth-automation",
    "/services/marketing/conversion-optimization",
    // Content
    "/services/content/copywriting",
    "/services/content/editorial-writing",
    "/services/content/brand-narrative",
    // Strategy
    "/services/strategy/digital-transformation",
    "/services/strategy/ux-audits",
    "/services/strategy/business-intelligence",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 4. Dynamic Work / Case Studies
  const workRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 5. Dynamic Team Member Profiles
  const teamRoutes = teamMembers.map((member) => ({
    url: `${baseUrl}/team/${member.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 6. Editorial Insights & Blog Articles
  const insightArticles = [
    "/insights/future-of-headless-architecture",
    "/insights/neuro-design-psychology",
    "/insights/scaling-beyond-10m-users",
    "/insights/ai-driven-personalization",
    "/insights/the-seo-renaissance",
    "/insights/performance-as-a-feature",
    "/insights/from-clicks-to-clients",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 7. Legal & Compliance Pages
  const legalRoutes = [
    "/privacy-policy",
    "/terms",
    "/cookies",
    "/data-deletion",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    ...coreRoutes,
    ...coreServices,
    ...subServices,
    ...workRoutes,
    ...teamRoutes,
    ...insightArticles,
    ...legalRoutes,
  ];
}
