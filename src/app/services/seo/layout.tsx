import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services for US, UK & Australia | Technical SEO Agency — Injaazh",
  description: "Injaazh is a full-service SEO agency helping businesses rank on Google across the US, UK & Australia. Technical SEO, link building & content strategy. Get a free SEO audit today.",
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
