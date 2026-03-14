import React from 'react';
import BlogDetailsCarousel from '@/sections/blog/BlogDetailsCarousel';
import BlogDetailsMain from '@/sections/blog/BlogDetailsMain';
import BannerCommon from '@/sections/common/BannerCommon';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Blog' subtitle='Details' breadcrumb='Blog Details' />
            <BlogDetailsMain />
            <BlogDetailsCarousel />
        </>
    );
};

export default page;