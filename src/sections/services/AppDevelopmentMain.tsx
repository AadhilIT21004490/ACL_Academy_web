import React from "react";

import serviceImg1 from "../../../public/assets/images/services/services-details-img-6.jpg";
import serviceImg2 from "../../../public/assets/images/services/services-details-img-2.jpg";
import pointsImg from "../../../public/assets/images/services/services-details-points-img-1.jpg";
import icon1 from "../../../public/assets/images/icon/services-details-icon-1.png";
import icon2 from "../../../public/assets/images/icon/services-details-icon-2.png";
import icon3 from "../../../public/assets/images/icon/services-details-icon-3.png";
import icon4 from "../../../public/assets/images/icon/services-details-icon-4.png";
import Image from "next/image";
import ProgressBarItem from "@/components/elements/Progresbar";
import Link from "next/link";
import ServicesList from "../common/ServicesList";
interface Skill {
    name: string;
    percent: number;
}
const skills: Skill[] = [
    { name: "Success Ration", percent: 100 },
    { name: "Positive Brand Image", percent: 80 },
    { name: "Website Rankig", percent: 98 },
];

const AppDevelopmentMain: React.FC = () => {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            <div className="services-details__img">
                                <Image src={serviceImg1} width={850} height={400} alt="Digital Marketing Service" />
                            </div>

                            <div className="services-details__content">
                                <h3 className="services-details__title-1">
                                    Comprehensive Solutions for Digital Marketing and Social Media Campaigns
                                </h3>

                                <div className="services-details__shape-1"></div>

                                <p className="services-details__text-1">
                                    Our Digital Marketing and Social Media Campaign Solution is crafted to enhance your
                                    brands online visibility, attract targeted traffic, and boost engagement through expertly
                                    planned and executed campaigns. We provide a wide range of services that utilize
                                    cutting-edge tools and strategies in digital marketing and social media management to
                                    achieve tangible results.
                                </p>

                                <h3 className="services-details__title-2">Services Core Features</h3>
                                <p className="services-details__text-2">
                                    We perform in-depth research to analyze market trends, competitor tactics, and audience
                                    behavior, ensuring your campaigns are data-driven and strategically effective. We work
                                    with you to set clear, measurable objectives that align with your business goals.
                                </p>

                                {/* FEATURES LIST */}
                                <div className="services-details__points-box">
                                    <ul className="services-details__points-list list-unstyled">
                                        <li><span className="icon-check"></span> Strategic Campaign Planning</li>
                                        <li><span className="icon-check"></span> Social Media Management</li>
                                        <li><span className="icon-check"></span> Targeted Audience Engagement</li>
                                    </ul>

                                    <ul className="services-details__points-list list-unstyled">
                                        <li><span className="icon-check"></span> Data-Driven Performance Analytics</li>
                                        <li><span className="icon-check"></span> Comprehensive Brand Visibility</li>
                                        <li><span className="icon-check"></span> Innovative Digital Marketing Tools</li>
                                    </ul>
                                </div>

                                {/* SERVICE BOXES */}
                                <div className="services-details__single-service-box">
                                    <div className="row">
                                        {[{ icon: icon1, text: "Market Trend Analysis" },
                                        { icon: icon2, text: "Competitor Strategy" },
                                        { icon: icon3, text: "Audience Behavior Research" },
                                        { icon: icon4, text: "Custom Campaign Development" }].map((item, i) => (
                                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                                <div className="services-details__single-service">
                                                    <div className="services-details__single-icon">
                                                        <Image src={item.icon} width={41} height={40} alt={item.text} />
                                                    </div>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* PROGRESS SECTION */}
                                <div className="services-details__progress-box">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="services-details__progress-left">
                                                <h3 className="services-details__progress-left-title">
                                                    Benefits of Our Services
                                                </h3>
                                                <p className="services-details__progress-left-text">
                                                    Enhance your social media profiles and produce compelling content to
                                                    strengthen your brands online visibility and grow your follower base. We
                                                    use targeted advertising and robust SEO strategies to attract high-quality
                                                    traffic to your website, leading to improved conversion rates.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6">
                                            <div className="services-details__progress-right">
                                                <ul className="services-details__progress-list list-unstyled">
                                                    {
                                                        skills.map((skill: Skill, index) => (
                                                            <ProgressBarItem key={index} title={skill?.name} value={skill?.percent} />
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="services-details__title-3">Why Our Services</h3>
                                <p className="services-details__text-3">
                                    Tailored strategies and campaigns crafted to address your specific business objectives
                                    and requirements. Our team of skilled professionals boasts a proven history of success
                                    in digital marketing and social media. We leverage the latest technology and tools to
                                    enhance the effectiveness of your campaigns.
                                </p>

                                {/* WHY OUR SERVICES POINTS */}
                                <div className="services-details__points-and-img">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-1 list-unstyled">
                                                <li><span className="icon-check"></span> Customized Solutions</li>
                                                <li><span className="icon-check"></span> Expert Knowledge</li>
                                                <li><span className="icon-check"></span> Latest Tech Tools</li>
                                                <li><span className="icon-check"></span> Enhanced Social Profiles</li>
                                            </ul>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="services-details__points-img">
                                                <Image src={pointsImg} width={379} height={323} alt="Service Points" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="services-details__text-4">
                                    The concept gained popularity in the 1960s with the introduction of Letraset sheets
                                    featuring Lorem Ipsum passages, and it has continued to evolve with the advent of
                                    desktop publishing software such as Aldus PageMaker, which includes different versions
                                    of Lorem Ipsum.
                                </p>

                                <div className="services-details__img-two">
                                    <Image src={serviceImg2} width={850} height={299} alt="Service Details" />
                                </div>

                                <h3 className="services-details__title-4">Get Started:</h3>
                                <p className="services-details__text-5">
                                    By leveraging these benefits, your business can achieve greater online visibility,
                                    improved engagement, and increased conversions, ultimately driving growth and success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="services-details__right">
                            <div className="services-details__more-services">
                                <h3>More Services</h3>
                                <span></span>
                                <ServicesList />
                            </div>

                            <div className="services-details__contact-box">
                                <h3>Contact Us</h3>
                                <span></span>
                                <p className="services-details__contact-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className="services-details__contact-btn-box">
                                    <Link href="/inner/contact" className="services-details__contact-btn thm-btn">
                                        <i className="icon-right"></i> Send Message
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDevelopmentMain;
