import React from 'react';
import BannerCommon from '@/sections/common/BannerCommon';
import BlogListMain from '@/sections/blog/BlogListMain';

const Page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Thoughts' subtitle='That Matter' breadcrumb='Events' />
            <BlogListMain />
        </>
    );
};

export default Page;
