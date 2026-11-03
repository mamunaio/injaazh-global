import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Architecture Policy | Injaazh Global",
  description: "Learn about how Injaazh Global utilizes cookies, telemetry, and persistent local storage to deliver secure, high-performance digital experiences.",
  alternates: {
    canonical: "https://injaazh.com/cookies",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
