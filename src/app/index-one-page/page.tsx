"use client"
import React, { useEffect } from 'react';
import { useFinrisContext } from '@/components/context/useFinrisContext';
import AboutOne from '@/sections/home-one-single-page/AboutOne';
import Banner from '@/sections/home-one-single-page/Banner';
import BlogOne from '@/sections/home-one-single-page/BlogOne';
import BrandOne from '@/sections/home-one-single-page/BrandOne';
import ContactSingle from '@/sections/home-one-single-page/ContactSingle';
import Footer from '@/sections/home-one-single-page/Footer';
import Header from '@/sections/home-one-single-page/Header';
import NewsLetter from '@/sections/home-one-single-page/NewsLetter';
import PortfolioOneSec from '@/sections/home-one-single-page/PortfolioOneSec';
import PricingOne from '@/sections/home-one-single-page/PricingOne';
import ProcessOne from '@/sections/home-one-single-page/ProcessOne';
import ServiceOne from '@/sections/home-one-single-page/ServiceOne';
import StrickyHeader from '@/sections/home-one-single-page/StrickyHeader';
import TestimonialOne from '@/sections/home-one-single-page/TestimonialOne';
import WhyChooseOne from '@/sections/home-one-single-page/WhyChooseOne';

const Page: React.FC = () => {
    const { setActiveSection } = useFinrisContext();
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, [setActiveSection]);

    return (
        <div className="page-wrapper">
            <Header />
            <Banner />
            <BrandOne />
            <AboutOne />
            <ServiceOne />
            <WhyChooseOne />
            <ProcessOne />
            <PortfolioOneSec />
            <TestimonialOne />
            <PricingOne />
            <BlogOne />
            <ContactSingle />
            <NewsLetter />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default Page;