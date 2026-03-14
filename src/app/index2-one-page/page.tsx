"use client";
import { useFinrisContext } from '@/components/context/useFinrisContext';
import ContactSingle from '@/sections/home-one-single-page/ContactSingle';
import AboutTwo from '@/sections/home-two-single-page/AboutTwo';
import BannerTwo from '@/sections/home-two-single-page/BannerTwo';
import BlogTwo from '@/sections/home-two-single-page/BlogTwo';
import CounterTwo from '@/sections/home-two-single-page/CounterTwo';
import FooterTwo from '@/sections/home-two-single-page/FooterTwo';
import HeaderTwo from '@/sections/home-two-single-page/HeaderTwo';
import PortfolioTwo from '@/sections/home-two-single-page/PortfolioTwo';
import ProcessTwo from '@/sections/home-two-single-page/ProcessTwo';
import ServiceTwo from '@/sections/home-two-single-page/ServiceTwo';
import SlidingTextTwo from '@/sections/home-two-single-page/SlidingTextTwo';
import StrickyHeaderTwo from '@/sections/home-two-single-page/StrickyHeaderTwo';
import TeamTwo from '@/sections/home-two-single-page/TeamTwo';
import TestimonialsTwo from '@/sections/home-two-single-page/TestimonialsTwo';
import WhyChooseTwo from '@/sections/home-two-single-page/WhyChooseTwo';
import React, { useEffect } from 'react';

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
                threshold: 0.5,
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
            <HeaderTwo />
            <BannerTwo />
            <AboutTwo />
            <ServiceTwo />
            <WhyChooseTwo />
            <CounterTwo />
            <ProcessTwo />
            <SlidingTextTwo />
            <PortfolioTwo />
            <TeamTwo />
            <TestimonialsTwo />
            <BlogTwo />
            <ContactSingle />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Page;