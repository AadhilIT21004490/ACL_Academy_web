"use client"
import React from 'react';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';
import Image, { StaticImageData } from "next/image";
import r1 from "../../../public/assets/images/r1.jpeg";
import r2 from "../../../public/assets/images/r2.jpeg";
import r3 from "../../../public/assets/images/r3.jpeg";
import r4 from "../../../public/assets/images/r4.jpeg";
import r5 from "../../../public/assets/images/r5.jpeg";

const testimonialImages: StaticImageData[] = [r1, r2, r3, r4, r5];

const RICSTestimonials: React.FC = () => {
    return (
        <section className="services-three">
            <div className="services-three__shape-1"></div>
            <div className="services-three__shape-2 zoominout"></div>
            <div className="services-three__shape-3"></div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Success stories</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Our students success' textColor='black' />
                        <TextAnimation text='stories' />
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="row">
                    {testimonialImages.map((image: StaticImageData, index: number) => (
                        <motion.div
                            initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                            key={index}
                            className="col-xl-3 col-lg-6 col-md-6"
                        >
                            <div className="services-three__single">
                                <Image
                                    src={image}
                                    width={300}
                                    height={300}
                                    alt={`ACL Academy RICS APC Testimonial ${index + 1}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RICSTestimonials;