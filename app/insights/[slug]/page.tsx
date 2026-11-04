import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllInsights, getInsightBySlug, getNextInsight } from "@/lib/insightsData";
import ArticleViewClient from "@/components/ArticleViewClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllInsights();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {
      title: "Insight Not Found | Injaazh Global",
      description: "The requested insight article could not be located.",
    };
  }

  return {
    title: `${article.title} | Injaazh Insights`,
    description: article.cardExcerpt,
    keywords: [
      article.category,
      "Digital Strategy",
      "Enterprise Engineering",
      "SEO Architecture",
      "Injaazh Insights"
    ],
    alternates: {
      canonical: article.canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | Injaazh`,
      description: article.cardExcerpt,
      url: article.canonicalUrl,
      siteName: "Injaazh Global",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.socialImage.url,
          width: article.socialImage.width,
          height: article.socialImage.height,
          alt: article.socialImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Injaazh`,
      description: article.cardExcerpt,
      images: [article.socialImage.url],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const nextArticle = getNextInsight(article.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.cardExcerpt,
    "image": [article.socialImage.url],
    "datePublished": article.publishedAt,
    "dateModified": article.modifiedAt,
    "author": {
      "@type": article.author.type,
      "name": article.author.name,
      "url": article.author.profileUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Injaazh Global",
      "url": "https://injaazh.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://injaazh.com/assets/logo.webp",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.canonicalUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleViewClient article={article} nextArticle={nextArticle} />
    </>
  );
}
