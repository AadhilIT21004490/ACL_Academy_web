"use client"
import React from 'react';
import userImg from '../../../public/assets/images/resources/cta-three-user-img-1.jpg'; 
import Image from 'next/image';

const ContactInner: React.FC = () => { 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        alert('Message sent successfully!');
    };

    return (
        <section className="cta-three">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-xl-5 col-lg-6">
                        <div className="cta-three__left">
                            <div className="cta-three__left-content">
                                <div className="cta-three__left-content-shape-bg" ></div>

                                <div className="cta-three__title-box">
                                    <div className="cta-three__title-tagline-box">
                                        <div className="cta-three__title-tagline-icon-box">
                                            <div className="cta-three__title-tagline-icon-1"></div>
                                            <div className="cta-three__title-tagline-icon-2"></div>
                                        </div>
                                        <span className="cta-three__title-tagline">Start A Project</span>
                                    </div>
                                    <h2 className="cta-three__title">
                                        Have a project idea? <br /> Lets start talking
                                    </h2>
                                </div>

                                <p className="cta-three__text">
                                    Lets start a conversation and explore how we can <br />
                                    transform your vision into reality.
                                </p>

                                <div className="cta-three__user">
                                    <div className="cta-three__user-img">
                                        <Image src={userImg} width={60} height={60} alt="Project Manager" />
                                    </div>
                                    <div className="cta-three__user-content">
                                        <p className="cta-three__user-name">Thomas Alison</p>
                                        <span className="cta-three__user-sub-title">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-xl-7 col-lg-6">
                        <div className="cta-three__right">
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form-validated cta-three__form"
                            >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12">
                                        <div className="cta-three__input-box">
                                            <input
                                                type="text"
                                                name="inquiry"
                                                placeholder="Inquiry About"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="cta-three__input-box text-message-box">
                                            <textarea
                                                name="details"
                                                placeholder="Write Details"
                                                rows={4}
                                            ></textarea>
                                        </div>

                                        <div className="cta-three__btn-box">
                                            <button
                                                type="submit"
                                                className="cta-three__btn thm-btn thm-btn-two"
                                            >
                                                <span className="icon-right"></span> Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInner;
