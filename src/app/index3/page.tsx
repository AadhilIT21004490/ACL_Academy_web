
import BannerThree from '@/sections/home-three/BannerThree';
import BlogThree from '@/sections/home-three/BlogThree';
import BrandThree from '@/sections/home-three/BrandThree';
import FooterThree from '@/sections/home-three/FooterThree';
import HeaderThree from '@/sections/home-three/HeaderThree';
import PortfolioThree from '@/sections/home-three/PortfolioThree';
import ProcessThree from '@/sections/home-three/ProcessThree';
import ServiceThree from '@/sections/home-three/ServiceThree';
import ServingThree from '@/sections/home-three/ServingThree';
import SlidingTextThree from '@/sections/home-three/SlidingTextThree';
import TestimonialsThree from '@/sections/home-three/TestimonialsThree';
import WelcomeThree from '@/sections/home-three/WelcomeThree';
import WhyChooseThree from '@/sections/home-three/WhyChooseThree';
import StrickyHeaderTwo from '@/sections/home-two/StrickyHeaderTwo';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderThree />
            <BannerThree />
            <WelcomeThree />
            <WhyChooseThree />
            <ServiceThree />
            <SlidingTextThree />
            <ProcessThree />
            <PortfolioThree />
            <TestimonialsThree />
            <ServingThree />
            <BrandThree />
            <BlogThree />
            <FooterThree />
            <StrickyHeaderTwo />
        </div>
    );
};

export default page;