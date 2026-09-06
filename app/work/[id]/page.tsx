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
  const description = `${project.subtitle} Read how INJAAZH engineered high-performance digital architecture and measurable growth for ${project.client}.`;
  const canonicalUrl = `https://injaazh.com/work/${project.slug}`;
  const ogImageUrl = project.img.startsWith("http")
    ? project.img
    : `https://injaazh.com${project.img}`;

  return {
    title,
    description,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle,
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
    },
    genre: project.category,
    keywords: project.tags.join(", "),
    url: `https://injaazh.com/work/${project.slug}`,
    dateCreated: project.year,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkDetailClient project={project} allProjects={projectsData} />
    </>
  );
}
