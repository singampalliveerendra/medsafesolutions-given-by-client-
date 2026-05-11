import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: today, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/quiz`, lastModified: today, changeFrequency: "monthly", priority: 0.6 }
  ];
  const blog: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.5
  }));
  return [...base, ...blog];
}
