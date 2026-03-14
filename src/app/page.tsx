
import AboutOne from '@/sections/home-one/AboutOne';
import Banner from '@/sections/home-one/Banner';
import BlogOne from '@/sections/home-one/BlogOne';
import BrandOne from '@/sections/home-one/BrandOne';
import Footer from '@/sections/home-one/Footer';
import Header from '@/sections/home-one/Header';
import NewsLetter from '@/sections/home-one/NewsLetter';
import PortfolioOneSec from '@/sections/home-one/PortfolioOneSec';
import PricingOne from '@/sections/home-one/PricingOne';
import ProcessOne from '@/sections/home-one/ProcessOne';
import ServiceOne from '@/sections/home-one/ServiceOne';
import SlidingTextTwo from '@/sections/home-one/SlidingTextTwo';
import StrickyHeader from '@/sections/home-one/StrickyHeader';
import TestimonialOne from '@/sections/home-one/TestimonialOne';
import WhyChooseOne from '@/sections/home-one/WhyChooseOne';
import React from 'react';
const page: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Banner />
      <BrandOne />
      <ServiceOne />
      <AboutOne />
      <WhyChooseOne />
      <SlidingTextTwo />
      <ProcessOne />
      <PortfolioOneSec />
      <TestimonialOne />
      <PricingOne />
      <BlogOne />
      <NewsLetter />
      <Footer />
      <StrickyHeader /> 
    </div>
  );
};

export default page;