import React from "react";

import serviceImg1 from "../../../public/assets/images/aiqs1.jpg";
import serviceImg2 from "../../../public/assets/images/qs3.jpg";
import pointsImg from "../../../public/assets/images/qs2.jpg";
import icon1 from "../../../public/assets/images/icon/services-details-icon-1.png";
import icon2 from "../../../public/assets/images/icon/services-details-icon-2.png";
import icon3 from "../../../public/assets/images/icon/services-details-icon-3.png";
import icon4 from "../../../public/assets/images/icon/services-details-icon-4.png";
import Image from "next/image";
import ProgressBarItem from "@/components/elements/Progresbar";
import Link from "next/link";
import ServicesList from "../common/ServicesList";
import Module from "../modules/aiqsmodule";
interface Skill {
    name: string;
    percent: number;
}
const skills: Skill[] = [
    { name: "Students Success Ration", percent: 96 },
    { name: "Positive Feedback", percent: 98 },
    { name: "Industry-Relevant Skills", percent: 98 },
];

const AIQS: React.FC = () => {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            <div className="services-details__img">
                                <Image src={serviceImg1} width={850} height={400} alt="AI-Powered Quantity Surveying" />
                            </div>

                            <div className="services-details__content">
                                <h3 className="services-details__title-1">
                                   AI-Powered Quantity Surveying Training | Future-Ready QS Skills | ACL Academy
                                </h3>

                                <div className="services-details__shape-1"></div>

                                <p className="services-details__text-1">
                                    At ACL Academy, we have partnered with NexAI – Sri Lanka’s leading AI education platform to bring a next-generation learning experience for Quantity Surveyors. Upgrade your Quantity Surveying career with AI-powered skills at ACL Academy. Learn core QS fundamentals and integrate advanced AI tools through our partnership with NexAI to become a future-ready Quantity Surveyor.</p><br/>
                                <p>
                                    Gain hands-on experience with real-world applications of AI in cost estimation, quantity take-offs, data analysis, and project decision-making. Our structured approach ensures you not only understand traditional QS practices but also learn how to enhance accuracy, efficiency, and productivity using modern AI-driven workflows—giving you a competitive edge in the evolving construction industry.</p>

                                <h3 className="services-details__title-2"> Why This Module Is Important?</h3>
                                <p className="services-details__text-1">The future Quantity Surveyor is not just technical —
                                they are digital, analytical, and AI-enabled.<br/><strong>This module ensures you:</strong>
                                </p>
                                {/* FEATURES LIST */}
                                <div className="services-details__points-box">
                                    <ul className="services-details__points-list list-unstyled">
                                        <li><span className="icon-check"></span> Stay ahead of industry transformation</li>
                                        <li><span className="icon-check"></span> Increase your productivity</li>
                                        <li><span className="icon-check"></span> Deliver smarter commercial decisions</li>
                                
                                    </ul>
                                </div>

                                {/* SERVICE BOXES */}
                                {/* <div className="services-details__single-service-box">
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
                                </div> */}

                                {/* PROGRESS SECTION */}
                                <div className="services-details__progress-box">
                                    <div className="row">
                                        <div className="services-details__progress-left">
                                                <h3 className="services-details__progress-left-title">
                                                    Program Modules
                                                </h3>
                                                <Module/>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="services-details__title-3">Why choose us?</h3>
                                {/* <p className="services-details__text-3">
                                    Tailored strategies and campaigns crafted to address your specific business objectives
                                    and requirements. Our team of skilled professionals boasts a proven history of success
                                    in digital marketing and social media. We leverage the latest technology and tools to
                                    enhance the effectiveness of your campaigns.
                                </p> */}

                                {/* WHY OUR SERVICES POINTS */}
                                <div className="services-details__points-and-img">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-1 list-unstyled">
                                                <li><span className="icon-check"></span> Industry-Focused Curriculum</li>
                                                <li><span className="icon-check"></span> Experienced Industry Trainers</li>
                                                <li><span className="icon-check"></span> Practical Learning Approach</li>
                                                <li><span className="icon-check"></span> Career Development Support</li>
                                                <li><span className="icon-check"></span> Collaborative Learning Environment</li>
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
                                    Additionally, ACL Academy stands out for its commitment to 
                                    personalized mentorship and continuous support throughout the 
                                    training journey. Learners benefit from one-on-one guidance, 
                                    constructive feedback, and tailored advice to strengthen both 
                                    technical and professional skills. This holistic approach ensures 
                                    that every student not only masters Quantity Surveying concepts 
                                    but also develops the confidence and adaptability needed to excel 
                                    in diverse construction industry roles.
                                </p>

                                <div className="services-details__img-two">
                                    <Image src={serviceImg2} width={850} height={299} alt="Service Details" />
                                </div>

                                <h3 className="services-details__title-4">Start Your Quantity Surveying Career Today:</h3>
                                <p className="services-details__text-5">
                                    Take the first step toward building a successful career in the construction and built environment industry.
                                    Join the <strong>ACL Academy Quantity Surveying Practical</strong> Training Program and gain the skills, industry exposure, and professional confidence required to become a successful Quantity Surveyor.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="services-details__right">
                            <div className="services-details__more-services">
                                <h3>More Program</h3>
                                <span></span>
                                <ServicesList />
                            </div>

                            <div className="services-details__contact-box">
                                <h3>Contact Us</h3>
                                <span></span>
                                <p className="services-details__contact-text">
                                    Have questions about our Quantity Surveying Practical Training Program?
                                    Contact us today
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

export default AIQS;
