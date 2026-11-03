import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Architecture Framework & Policy | Injaazh Global",
  description: "Review the global data protection standards, GDPR/CCPA compliance architectures, and cryptographic privacy topologies enforced by Injaazh Global.",
  alternates: {
    canonical: "https://injaazh.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
