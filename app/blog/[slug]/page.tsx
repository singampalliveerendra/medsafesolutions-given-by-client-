import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { WhatsAppFab } from "@/components/sections/WhatsAppFab";
import { posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.description,
    image: post.cover ? [post.cover] : undefined,
    author: { "@type": "Organization", name: "Medsafe Solutions" }
  };

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen pt-28 sm:pt-32">
        <article className="section-pad animate-route-fade">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-700 hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingMinutes} min read
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-navy-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{post.description}</p>
            {post.cover && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-cream-100 bg-cream-100">
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
            <div className="mt-10 grid gap-5 text-base leading-8 text-slate-700">
              {post.body.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyCallBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </>
  );
}
