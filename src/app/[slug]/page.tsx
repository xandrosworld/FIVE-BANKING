import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfilePage } from "@/components/profile-page";
import { getProfile, profiles } from "@/data/profiles";
import type { Locale } from "@/types/profile";

interface MemberPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(profiles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfile(slug);

  if (!profile) return {};

  const canonicalPath = `/${profile.slug}`;

  return {
    title: profile.seo.title,
    description: profile.seo.description.en,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "profile",
      title: profile.seo.title,
      description: profile.seo.description.en,
      url: canonicalPath,
      siteName: "The Banking Five | VAIC 2026",
      locale: "en_US",
      alternateLocale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: profile.seo.title,
      description: profile.seo.description.en,
    },
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const profile = getProfile(slug);

  if (!profile) notFound();

  const initialLocale: Locale = "en";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const canonicalUrl = new URL(`/${profile.slug}`, siteUrl).toString();
  const knowsAbout = profile.variant === "technology"
    ? [
        "Applied AI",
        "Banking technology",
        "Solution architecture",
        "Document intelligence",
        "AI workflow orchestration",
      ]
    : [
        "Fixed income",
        "Money markets",
        "Asset liability management",
        "Liquidity risk",
        "Bond futures",
        "Interest rate swaps",
      ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.identity.name,
    url: canonicalUrl,
    email: profile.contact.email,
    jobTitle: profile.identity.role.en,
    memberOf: {
      "@type": "Organization",
      name: "The Banking Five",
    },
    sameAs: profile.contact.github ? [profile.contact.github] : undefined,
    knowsAbout,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ProfilePage profile={profile} initialLocale={initialLocale} />
    </>
  );
}
