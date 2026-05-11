import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services | SEO Content & Copywriting — Injaazh",
  description: "Injaazh writes SEO-optimized content for businesses across the US, UK & Australia. Blog articles, website copy, sales pages & technical writing. Content that ranks and converts.",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
