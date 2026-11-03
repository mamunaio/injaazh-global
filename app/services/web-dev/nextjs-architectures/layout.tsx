import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://injaazh.com/services/web-dev/nextjs-architectures",
  },
};

export default function SubServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
