import React from 'react';
import BannerCommon from '@/sections/common/BannerCommon';
import BlogListMain from '@/sections/blog/BlogListMain';

const Page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Blog' breadcrumb='Blog' />
            <BlogListMain />
        </>
    );
};

export default Page;