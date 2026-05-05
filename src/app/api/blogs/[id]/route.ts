import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import User from '@/models/User';
import mongoose from 'mongoose';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const id = (await params).id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID format' }, { status: 400 });
    }

    const post = await Post.findOne({ _id: id, status: 'Published' })
      .populate('authorId', 'name image')
      .lean();

    if (!post) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    const postData: any = post;
    const formattedPost = {
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

    return NextResponse.json({ success: true, data: formattedPost }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}
