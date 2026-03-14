import React from "react";
import awardImg1 from "../../../public/assets/images/resources/awards-one-img-1.jpg";
import awardImg2 from "../../../public/assets/images/resources/awards-one-img-2.jpg";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";
import AdvanceCountUp from "@/components/elements/AdvanceCountUp";

const AwardsA: React.FC = () => {
    return (
        <section className="awards-one">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-7">
                        <div
                            className="awards-one__left"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            {/* Section Title */}
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">Awards</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text={`We're proud to have received over 20`} textColor='black' isSpan={false} />
                                    <TextAnimation text='awards as a certified agency.' isSpan={false} textColor='#6232F8' />
                                </h2>
                            </div>

                            {/* Image Box */}
                            <div className="awards-one__img-box">
                                <div className="awards-one__img">
                                    <Image src={awardImg1} width={524} height={557} alt="Award Ceremony" />
                                </div>

                                <div className="awards-one__img-2">
                                    <Image src={awardImg2} width={283} height={294} alt="Award Celebration" />

                                    <div className="awards-one__experience-box">
                                        <div className="awards-one__count count-box">
                                            <h3 className="count-text" >
                                                <AdvanceCountUp ending={40} />
                                            </h3>
                                            <span>+</span>
                                        </div>
                                        <p className="awards-one__count-text">Awards Winnings</p>
                                    </div>

                                    {/* Shapes */}
                                    <div className="awards-one__shape-1"></div>
                                    <div className="awards-one__shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-5">
                        <div className="awards-one__right">
                            <ul className="awards-one__awards-list list-unstyled">
                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Best Digital Marketing Agency Award</h3>
                                        <p>
                                            Recognized for excellence in digital marketing strategies
                                            and campaign execution.
                                        </p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>The Prestige
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> August 15,
                                                    2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Outstanding Customer Service</h3>
                                        <p>
                                            Honored for delivering exceptional customer support and
                                            satisfaction.
                                        </p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>Excellence
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> July 20,
                                                    2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* SINGLE ITEM */}
                                <li>
                                    <div className="icon">
                                        <span className="icon-trophy-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Top Creative Agency Award</h3>
                                        <p>
                                            Celebrated for innovative and creative approaches in
                                            advertising and branding.
                                        </p>
                                        <div className="awards-one__tag-and-date">
                                            <div className="awards-one__tag">
                                                <p>
                                                    <span className="icon-sparkle"></span>Achievement
                                                </p>
                                            </div>
                                            <div className="awards-one__date">
                                                <p>
                                                    <span className="fas fa-calendar-alt"></span> August 15,
                                                    2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* END RIGHT SIDE */}
                </div>
            </div>
        </section>
    );
};

export default AwardsA;
