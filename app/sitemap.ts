import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://injaazh.com";
  const lastModified = new Date();

  // Core Pages
  const routes = [
    "",
    "/work",
    "/services",
    "/agency",
    "/insights",
    "/team",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Sub-services
  const services = [
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

  // Dynamic Team Profiles (You can map these dynamically from your database or data file later)
  const teamMembers = [
    "/team/md-mamun-hossain",
    // Add other slugs as they get built
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...services, ...teamMembers];
}
