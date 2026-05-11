import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Next.js, WordPress & Custom Apps — Injaazh",
  description: "Injaazh builds fast, scalable websites and web apps for businesses across the US, UK & Australia. Next.js, WordPress, WooCommerce & custom solutions. PageSpeed 99 guaranteed. Get a free proposal.",
};

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
