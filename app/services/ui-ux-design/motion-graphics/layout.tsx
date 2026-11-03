import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://injaazh.com/services/ui-ux-design/motion-graphics",
  },
};

export default function SubServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
