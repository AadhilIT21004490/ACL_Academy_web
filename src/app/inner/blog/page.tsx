import BlogMain from '@/sections/blog/BlogMain';
import BannerCommon from '@/sections/common/BannerCommon';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogMain />
        </>
    );
};

export default page;