// app/inner/blog/[id]/page.tsx

import { notFound } from "next/navigation";
import { blogPosts } from "../../../../data/events"; // adjust path as needed
import BlogDetailsMain from "@/sections/blog/BlogDetailsMain"; // adjust path as needed
import BannerCommon from "@/sections/common/BannerCommon"; // adjust path as needed

interface Props {
  params: { id: string };
}

export default function BlogDetailsPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === Number(params.id));

  if (!post) notFound();

  return (
    <>
      <BannerCommon title="Blog" subtitle="Details" breadcrumb="Blog Details" />
      <BlogDetailsMain post={post} />
    </>
  );
}

// Pre-generate all blog post pages at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}