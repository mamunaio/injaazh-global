import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://injaazh.com/services/marketing/conversion-optimization",
  },
};

export default function SubServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
