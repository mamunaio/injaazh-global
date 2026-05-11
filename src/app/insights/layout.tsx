import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Dev Insights | Injaazh Blog",
  description: "Expert insights on web development, SEO, digital marketing, and content strategy from the Injaazh team. Actionable advice for businesses scaling in the US, UK & Australia.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
