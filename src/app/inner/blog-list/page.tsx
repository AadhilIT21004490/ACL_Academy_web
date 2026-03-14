import BlogListMain from '@/sections/blog/BlogListMain';
import BannerCommon from '@/sections/common/BannerCommon';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Blog' subtitle='List' breadcrumb='Blog List' />
            <BlogListMain />
        </>
    );
};

export default page;