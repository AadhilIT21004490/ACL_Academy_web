import BannerCommon from '@/sections/common/BannerCommon';
import TestimonialMain from '@/sections/testimonials/TestimonialMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Testimonials' breadcrumb='Our Testimonials' />
            <TestimonialMain />
        </>
    );
};

export default page;