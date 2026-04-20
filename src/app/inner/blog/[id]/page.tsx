import React from 'react';
import BlogDetailsCarousel from '@/sections/blog/BlogDetailsCarousel';
import BlogDetailsMain from '@/sections/blog/BlogDetailsMain';
import BannerCommon from '@/sections/common/BannerCommon';
import { blogPosts } from "../../../../data/events"; // adjust path as needed

const page: React.FC = () => {
    
  const post = blogPosts[0]; // default to first post
    return (
        <>
            <BannerCommon title='Upcoming' subtitle='Events' breadcrumb='Events' />
            <BlogDetailsMain  post={post}/>
            <BlogDetailsCarousel />
        </>
    );
};

export default page;