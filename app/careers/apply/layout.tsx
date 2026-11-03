import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | Careers | Join the Injaazh Global Squad",
  description: "Submit your application to join Injaazh Global as a high-impact digital architect, engineer, or strategist.",
  alternates: {
    canonical: "https://injaazh.com/careers/apply",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
