import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Google, Meta Ads & Growth — Injaazh",
  description: "Injaazh delivers data-driven digital marketing for businesses across the US, UK & Australia. Google Ads, Meta Ads, social media & full-funnel campaigns. Get a free proposal today.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
