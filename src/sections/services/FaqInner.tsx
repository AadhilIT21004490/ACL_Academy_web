"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion"
import BGFAQ from "../../../public/assets/images/shapes/faq-shape-bg.png" 
import Link from 'next/link';
import { accrodionItems1 } from '@/contents/faq/faq';
const FaqInner: React.FC = () => {
    const [active, setActive] = useState(2)
    return (
        <section className="faq-one">
            <div className="faq-one__shape-bg" style={{ backgroundImage: `url(${BGFAQ})` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">FAQs</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">Frequently Asked <br />
                                    <span>Questions</span> </h2>
                            </div>
                            <p className="faq-one__text">{`Our Frequently Asked Questions (FAQ) section provides clear and
                                concise answers to common inquiries about our services, processes`}</p>
                            <div className="faq-one__btn-box">
                                <Link href="/inner/contact" className="faq-one__btn thm-btn thm-btn-two"><span
                                    className="icon-right"></span> Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                {
                                    accrodionItems1.map(item => <div key={item?.id} className={`accrodion ${active === item?.id ? '' : 'active'}`}>
                                        <div className="accrodion-title" onClick={() => setActive(pre => pre === item?.id ? 0 : item?.id)}>
                                            <h4>{item?.title}</h4>
                                        </div>
                                        <motion.div
                                            initial={{ y: -40, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.01 }}
                                            className="accrodion-content"
                                            style={{ display: `${active === item?.id ? '' : 'none'}` }}>
                                            <div className="inner">
                                                <p>
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqInner;