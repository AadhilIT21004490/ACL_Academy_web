import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import User from '@/models/User';

export async function GET() {
  try {
    await connectToDatabase();

    // Ensure User model is registered
    if (!User) {
      console.log('User model not loaded');
    }

    const posts = await Post.find({ status: 'Published' })
      .populate('authorId', 'name image')
      .sort({ createdAt: -1 })
      .lean();

    const formattedPosts = posts.map((post: any) => ({
      id: post._id.toString(),
      title: post.title,
      date: post.date,
      dayOfWeek: post.dayOfWeek,
      author: {
        name: post.authorId?.name || 'Unknown',
        image: post.authorId?.image || '/assets/images/blog/author-qs-1.jpg',
      },
      mainImage: post.mainImage || '/assets/images/blog/cl1.jpeg',
      description: post.description,
      tags: post.tags || [],
    }));

    return NextResponse.json({ success: true, data: formattedPosts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
