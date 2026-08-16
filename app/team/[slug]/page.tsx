import { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers } from "@/lib/teamData";
import ProfileClient from "@/components/ProfileClient";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} | ${member.role} | Injaazh`,
    description: member.bio,
    openGraph: {
      title: `${member.name} | Injaazh`,
      description: member.bio,
      url: `https://injaazh.com/team/${member.slug}`,
      images: [
        {
          url: `https://injaazh.com${member.image}`,
          width: 800,
          height: 600,
          alt: member.name,
        },
      ],
      type: "profile",
    },
  };
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamProfilePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "Injaazh",
      url: "https://injaazh.com",
    },
    url: `https://injaazh.com/team/${member.slug}`,
    image: `https://injaazh.com${member.image}`,
    sameAs: [
      member.socials?.linkedin,
      member.socials?.twitter,
      member.socials?.website,
      member.socials?.github,
    ].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProfileClient member={member} />
    </>
  );
}
