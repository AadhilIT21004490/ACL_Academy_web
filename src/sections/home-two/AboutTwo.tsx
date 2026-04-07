"use client"
import React from 'react';
import TextAnimation from '@/components/elements/TextAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import aboutTwoImg1 from '../../../public/assets/images/her.jpg';
import aboutTwoIcon1 from '../../../public/assets/images/icon/about-two-icon-1.png';
import aboutTwoIcon2 from '../../../public/assets/images/icon/about-two-icon-2.png';
import aboutTwoIcon3 from '../../../public/assets/images/icon/about-two-icon-3.png';
import aboutTwoIcon4 from '../../../public/assets/images/icon/about-two-icon-4.png';

const AboutTwo: React.FC = () => {
    return (
        <section className="about-two">
            <div className="about-two__shape-box">
                <div className="about-two__shape-1">
                    <div className="about-two__shape-2">
                        <div className="about-two__shape-3"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <motion.div
                        className="col-xl-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        viewport={{ amount: 0.01, once: true }}
                    >
                        <div className="about-two__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">What We Offer</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text='Real-World Skills for the ' fontSize='42' textColor='black' isSpan={false} />
                                    <TextAnimation text='Modern Built Environment.' fontSize='42' textColor='#6232F8' isSpan={false} />
                                     

                                </h2>
                            </div>

                            <div className="about-two__img">
                                <Image src={aboutTwoImg1} width={435} height={450} alt="About Us" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <div className="col-xl-7">
                        <div className="about-two__right">
                            <p className="about-two__text">
                                We provide practical, industry-focused training across the built environment, designed to prepare professionals for real-world project delivery
                            </p>

                            <div className="about-two__points-box">
                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon1} width={40} height={40} alt="Innovative Strategies" />
                                        </div>
                                        <div className="content">
                                            <h3>Built Environment Practice</h3>
                                            <p>
                                                Hands-on training in cost management, project delivery, and commercial processes based on real projects.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon2} width={40} height={40} alt="Visual Design Excellence" />
                                        </div>
                                        <div className="content">
                                            <h3>AI & Digital Integration</h3>
                                            <p>
                                                Learn how Artificial Intelligence and modern tools are transforming construction and project workflows.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon3} width={40} height={40} alt="Brand Storytelling" />
                                        </div>
                                        <div className="content">
                                            <h3>Career Acceleration</h3>
                                            <p>
                                                Focused training to help you secure opportunities in the Middle East and global markets.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="250">
                                        <div className="icon">
                                            <Image src={aboutTwoIcon4} width={40} height={40} alt="Cross-Platform Expertise" />
                                        </div>
                                        <div className="content">
                                            <h3>Chartered Mentorship</h3>
                                            <p>
                                                Expert guidance for MRICS and APC candidates, focusing on global standards, ethics, and professional competencies.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-two__bottom">
                                <div className="about-two__btn-and-call-box">
                                    <div className="about-two__btn-box">
                                        <Link href="/inner/about" className="about-two__btn thm-btn thm-btn-two">
                                            <span className="icon-right"></span> Know More
                                        </Link>
                                    </div>

                                    <div className="about-two__call">
                                        <div className="about-two__call-icon">
                                            <i className="icon-phone"></i>
                                        </div>
                                        <div className="about-two__call-content">
                                            <p className="about-two__call-sub-title">Connect us</p>
                                            <h3 className="about-two__call-number">
                                                <a href="tel:966555091734">+966 5550 91734</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTwo;