import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs, projectsData } from "@/lib/projectsData";
import WorkDetailClient from "@/components/WorkDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const project = getProject(params.id);

  if (!project) {
    return {
      title: "Case Study Not Found | INJAAZH",
      description: "The requested project case study could not be found.",
    };
  }

  const title = `${project.title} — ${project.category} Case Study | INJAAZH`;
  const description = `${project.subtitle} Read how INJAAZH Global engineered high-performance digital architecture, 99/100 Core Web Vitals, and scalable growth for ${project.client}.`;
  const canonicalUrl = `https://injaazh.com/work/${project.slug}`;
  const ogImageUrl = project.img.startsWith("http")
    ? project.img
    : `https://injaazh.com${project.img}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.category,
      project.client,
      "Next.js 15 Web Development",
      "Enterprise Case Study",
      "Technical SEO",
      "High Performance Web Architecture",
      ...project.tags,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "INJAAZH GLOBAL",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} — INJAAZH Global Case Study`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    id: slug,
  }));
}

export default async function ProjectCaseStudyPage(props: PageProps) {
  const params = await props.params;
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  // Primary TechArticle / CreativeWork Schema
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${project.title}: ${project.subtitle}`,
    description: project.overview,
    image: project.img.startsWith("http") ? project.img : `https://injaazh.com${project.img}`,
    author: {
      "@type": "Organization",
      name: "INJAAZH GLOBAL",
      url: "https://injaazh.com",
    },
    publisher: {
      "@type": "Organization",
      name: "INJAAZH GLOBAL",
      url: "https://injaazh.com",
      logo: {
        "@type": "ImageObject",
        url: "https://injaazh.com/fav.png",
      },
    },
    genre: project.category,
    keywords: project.tags.join(", "),
    url: `https://injaazh.com/work/${project.slug}`,
    datePublished: `${project.year}-01-01`,
    dateModified: "2026-09-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://injaazh.com/work/${project.slug}`,
    },
  };

  // Google BreadcrumbList Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://injaazh.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://injaazh.com/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://injaazh.com/work/${project.slug}`,
      },
    ],
  };

  // Google FAQPage Schema for Rich Snippets
  const faqJsonLd = project.faq && project.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: project.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <WorkDetailClient project={project} allProjects={projectsData} />
    </>
  );
}
