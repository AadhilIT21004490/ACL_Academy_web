"use client"
import React from 'react';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';
import { servicesTow } from '@/contents/service/service';
import { ServicesTow } from '@/contents/service/type';
import Link from 'next/link';
import Image from 'next/image';
import Courses from './Courses';

const ServiceTwo: React.FC = () => {
    return (
        <section className="services-two">
            <div className="services-two__bg-shape"></div>
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Our Programs</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Master the Built Environment' textColor='black' isSpan={false} />
                        <TextAnimation text='with real world industry experts' textColor='#6232F8' isSpan={false} />

                    </h2>
                </div>

                <Courses/>
            </div>
        </section>
    );
};

export default ServiceTwo;