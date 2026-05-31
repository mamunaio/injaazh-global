import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Injaazh",
  description: "Learn how to request the deletion of your personal data from Injaazh ERP according to Meta/Facebook platform policies.",
  alternates: {
    canonical: "https://injaazh.com/data-deletion",
  },
};

export default function DataDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
