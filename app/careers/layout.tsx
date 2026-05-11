import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Injaazh Global Squad",
  description: "Join a global squad of elite digital architects and growth hackers. Explore our current openings and help us engineer the future of digital dominance.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
