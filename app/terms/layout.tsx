import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master Service Agreement & Terms of Service | Injaazh Global",
  description: "Commercial engagement framework, intellectual property rights, and service execution standards governing Injaazh Global client partnerships.",
  alternates: {
    canonical: "https://injaazh.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
