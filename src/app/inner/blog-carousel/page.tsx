import BlogCarouselMain from '@/sections/blog/BlogCarouselMain';
import BannerCommon from '@/sections/common/BannerCommon';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogCarouselMain />
        </>
    );
};

export default page;