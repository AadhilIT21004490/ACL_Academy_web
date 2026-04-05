import React from "react";
import img1 from "../../../public/assets/images/resources/why-choose-four-img-1.jpg";
import img2 from "../../../public/assets/images/resources/why-choose-four-img-2.jpg";
import imgShape1 from "../../../public/assets/images/shapes/why-choose-four-img-shape-1.png";
import icon1 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-1.png";
import icon2 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-2.png";
import icon3 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-3.png";
import icon4 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-4.png";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";

const WhyChooseA: React.FC = () => {
    return (
        <section className="why-choose-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div
                            className="why-choose-four__left"
                            data-aos="slide-right"
                            data-aos-duration="1200"
                            data-aos-delay="300"
                        >
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">
                                        Vision & Mission
                                    </span>
                                </div>
                                <h3 className="section-title-two__title title-animation">
                                    <TextAnimation text='Aligning industry standards' textColor='black' isSpan={false} />
                                    <TextAnimation text='with practical excellence.' isSpan={false} textColor='#6232F8' />
                                </h3>
                            </div>

                            <p className="why-choose-four__text">
                                <strong>Our Vision is</strong> To become a leading global platform that transforms built environment professionals by integrating real industry practice with advanced digital and AI-driven solutions.
                            </p>

                            {/* Images */}
                            <div className="why-choose-four__img-box">
                                <div className="why-choose-four__img">
                                    <Image src={img1} width={354} height={354} alt="Why Choose Us" />
                                </div>
                                <div className="why-choose-four__img-shape-1 img-bounce">
                                    <Image src={imgShape1} width={393} height={363} alt="Decorative Shape" />
                                </div>
                                <div className="why-choose-four__img-2">
                                    <Image src={img2} width={358} height={358} alt="Team Collaboration" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-6">
                        <div className="why-choose-four__right">
                            <h2 className="section-title-two__title-about title-animation">
                                    <TextAnimation text='Our' textColor='black' isSpan={false} />
                                    <TextAnimation text='Mission' isSpan={false} textColor='#6232F8' />
                            </h2>

                            <div className="row">
                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="100"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon1} width={33} height={32} alt="Analytics Icon" />
                                        </div>
                                        <h3>Comprehensive Analytics</h3>
                                        <p>
                                            Whether you are a small startup or an established
                                            enterprise, our services are built to scale with your
                                            business.
                                        </p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon2} width={33} height={32} alt="Integration Icon" />
                                        </div>
                                        <h3>Seamless Integration</h3>
                                        <p>
                                            Our platform is designed to effortlessly integrate with
                                            your existing systems, reducing downtime.
                                        </p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="300"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon3} width={33} height={32} alt="Data Icon" />
                                        </div>
                                        <h3>Comprehensive Analytics</h3>
                                        <p>
                                            Gain valuable insights into your business performance with
                                            our advanced analytics tools.
                                        </p>
                                    </div>
                                </div>

                                {/* Single Feature */}
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="400"
                                >
                                    <div className="why-choose-four__single">
                                        <div className="why-choose-four__icon">
                                            <Image src={icon4} width={33} height={32} alt="Support Icon" />
                                        </div>
                                        <h3>Dedicated Support</h3>
                                        <p>
                                            We offer dedicated customer support tailored to your
                                            specific needs. Our team is available to assist you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Right Side */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseA;
