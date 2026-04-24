"use client";

import CounterA from '@/sections/common/CounterA';
import FooterCommon from '@/sections/common/FooterCommon';
import TestimonialsA from '@/sections/common/TestimonialsA';
import AboutTwo from '@/sections/home-two/AboutTwo';
import BannerTwo from '@/sections/home-two/BannerTwo';
import BlogTwo from '@/sections/home-two/BlogTwo';
import CounterTwo from '@/sections/home-two/CounterTwo';
import FooterTwo from '@/sections/home-two/FooterTwo';
import HeaderTwo from '@/sections/home-two/HeaderTwo';
import PortfolioTwo from '@/sections/home-two/PortfolioTwo';
import ProcessTwo from '@/sections/home-two/ProcessTwo';
import ServiceTwo from '@/sections/home-two/ServiceTwo';
import SlidingTextTwo from '@/sections/home-two/SlidingTextTwo';
import StrickyHeaderTwo from '@/sections/home-two/StrickyHeaderTwo';
import TeamTwo from '@/sections/home-two/TeamTwo';
import TestimonialsTwo from '@/sections/home-two/TestimonialsTwo';
import WhyChooseTwo from '@/sections/home-two/WhyChooseTwo';
import TeamCarouselMain from '@/sections/team/TeamCarouselMain';
import React from 'react';

const TestimonialBubble: React.FC = () => {
  const handleClick = () => {
    const el = document.getElementById("testimonials-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes bubblePulse {
          0%, 100% { box-shadow: 0 8px 32px rgba(255,107,53,0.35), 0 2px 8px rgba(0,0,0,0.12); }
          50%       { box-shadow: 0 16px 48px rgba(255,107,53,0.55), 0 4px 16px rgba(0,0,0,0.18); }
        }
        .testimonial-bubble {
          position: fixed;
          bottom: 170px;
          right: 28px;
          z-index: 9999;
          cursor: pointer;
          animation: bubbleFloat 3s ease-in-out infinite, bubblePulse 3s ease-in-out infinite;
        }
        .testimonial-bubble__body {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: #fff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
          padding: 13px 16px;
          border-radius: 18px 18px 4px 18px;
          max-width: 170px;
          text-align: center;
          letter-spacing: 0.01em;
          position: relative;
          transition: filter 0.2s ease, transform 0.2s ease;
        }
        .testimonial-bubble__body:hover {
          filter: brightness(1.08);
          transform: scale(1.04);
        }
        .testimonial-bubble__body::before {
          content: '';
          display: block;
          font-size: 20px;
          margin-bottom: 5px;
        }
        .testimonial-bubble__tail {
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-top: 12px solid #f7931e;
          position: absolute;
          bottom: -12px;
          right: 14px;
        }
      `}</style>
      <div className="testimonial-bubble" onClick={handleClick} title="See student reviews">
        <div className="testimonial-bubble__body">
          Feedback From Our Students..
          <div className="testimonial-bubble__tail" />
        </div>
      </div>
    </>
  );
};

const page: React.FC = () => {
  return (
    <div className="page-wrapper">
      <HeaderTwo />
      <BannerTwo />
      <AboutTwo />
      <ServiceTwo />
      <WhyChooseTwo />
      <CounterA />
      <ProcessTwo />
      <SlidingTextTwo />
      {/* <PortfolioTwo /> */}
      {/* <TeamTwo /> */}
      <div id="testimonials-section">
        <TestimonialsA />
      </div>
      <TeamCarouselMain />
      <BlogTwo />
      <FooterCommon />
      <StrickyHeaderTwo />
      <TestimonialBubble />
    </div>
  );
};

export default page;