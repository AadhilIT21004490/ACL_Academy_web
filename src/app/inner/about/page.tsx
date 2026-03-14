import AboutUsThree from '@/sections/about/AboutUsThree';
import AwardsA from '@/sections/about/AwardsA';
import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import CounterA from '@/sections/common/CounterA';
import TestimonialsA from '@/sections/common/TestimonialsA';
import WhyChooseA from '@/sections/common/WhyChooseA';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='About' subtitle='Us' breadcrumb='About Us' />
            <AboutUsThree />
            <WhyChooseA />
            <CounterA />
            <TestimonialsA />
            <AwardsA />
            <CtaCommon />
        </>
    );
};

export default page;