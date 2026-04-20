import React from 'react';
import BlogDetailsCarousel from '@/sections/blog/BlogDetailsCarousel';
import BlogDetailsMain from '@/sections/blog/BlogDetailsMain';
import BannerCommon from '@/sections/common/BannerCommon';
import { blogPosts } from "@/data/events";
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BannerCommon title="Blog" subtitle="Details" breadcrumb="Blog Details" />
      <BlogDetailsMain post={post} />
      <BlogDetailsCarousel />
    </>
  );
};

export default Page;