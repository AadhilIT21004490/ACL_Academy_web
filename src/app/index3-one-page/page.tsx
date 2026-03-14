"use client";
import React, { useEffect } from 'react';
import { useFinrisContext } from '@/components/context/useFinrisContext';
import HeaderThree from '@/sections/home-three-single-page/HeaderThree';
import BannerThree from '@/sections/home-three-single-page/BannerThree';
import WelcomeThree from '@/sections/home-three-single-page/WelcomeThree';
import WhyChooseThree from '@/sections/home-three-single-page/WhyChooseThree';
import ServiceThree from '@/sections/home-three-single-page/ServiceThree';
import SlidingTextThree from '@/sections/home-three-single-page/SlidingTextThree';
import ProcessThree from '@/sections/home-three-single-page/ProcessThree';
import PortfolioThree from '@/sections/home-three-single-page/PortfolioThree';
import TestimonialsThree from '@/sections/home-three-single-page/TestimonialsThree';
import ServingThree from '@/sections/home-three-single-page/ServingThree';
import BrandThree from '@/sections/home-three-single-page/BrandThree';
import BlogThree from '@/sections/home-three-single-page/BlogThree';
import FooterThree from '@/sections/home-three-single-page/FooterThree';
import StrickyHeaderTwo from '@/sections/home-two-single-page/StrickyHeaderTwo';
import ContactSingle from '@/sections/home-one-single-page/ContactSingle';

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
                threshold: 0.2,
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
            <ContactSingle />
            <FooterThree />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Page;