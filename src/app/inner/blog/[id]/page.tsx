import React from 'react';
import BlogDetailsCarousel from '@/sections/blog/BlogDetailsCarousel';
import BlogDetailsMain from '@/sections/blog/BlogDetailsMain';
import BannerCommon from '@/sections/common/BannerCommon';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import mongoose from 'mongoose';

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    notFound();
  }

  await connectToDatabase();
  const postDoc = await Post.findOne({ _id: id, status: 'Published' })
    .populate('authorId', 'name image')
    .lean();

  if (!postDoc) {
    notFound();
  }

  const postData: any = postDoc;
  const post = {
    id: postData._id.toString(),
    title: postData.title,
    date: postData.date,
    dayOfWeek: postData.dayOfWeek,
    author: {
      name: postData.authorId?.name || 'Unknown',
      image: postData.authorId?.image || '/assets/images/blog/author-qs-1.jpg',
    },
    mainImage: postData.mainImage || '/assets/images/blog/cl1.jpeg',
    description: postData.description,
    tags: postData.tags || [],
  };

  return (
    <>
      <BannerCommon title="Stories" subtitle="& Strategies" breadcrumb="Blog" />
      <BlogDetailsMain post={post as any} />
      <BlogDetailsCarousel />
    </>
  );
};

export default Page;
