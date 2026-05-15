import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Brand Identity & Design Systems — Injaazh",
  description: "Injaazh designs world-class UI/UX for businesses across the US, UK & Australia. Brand identity, design systems & motion graphics. Awwwards-level aesthetics that convert.",
};

export default function UIUXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
