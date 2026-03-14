import BannerCommon from '@/sections/common/BannerCommon';
import TestimonialCarouselMain from '@/sections/testimonials/TestimonialCarouselMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Testimonial' subtitle='Carousel' breadcrumb='Testimonial Carousel' />
            <TestimonialCarouselMain />
        </>
    );
};

export default page;