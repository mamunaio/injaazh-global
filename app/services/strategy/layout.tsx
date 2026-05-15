import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Strategy Services | Growth & Transformation — Injaazh",
  description: "Injaazh delivers data-driven digital strategy for businesses across the US, UK & Australia. Digital transformation, business intelligence & UX audits. Book a free strategy call.",
};

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
