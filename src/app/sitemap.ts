import type { MetadataRoute } from "next";
import { profiles } from "@/data/profiles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return Object.values(profiles).map((profile) => ({
    url: new URL(`/${profile.slug}`, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));
}
