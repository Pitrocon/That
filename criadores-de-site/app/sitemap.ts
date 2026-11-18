import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-18T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
