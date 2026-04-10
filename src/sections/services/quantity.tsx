import React from "react";

import serviceImg1 from "../../../public/assets/images/qs.jpg";
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
import Module from "../modules/module";
interface Skill {
    name: string;
    percent: number;
}
const skills: Skill[] = [
    { name: "Students Success Ration", percent: 96 },
    { name: "Positive Feedback", percent: 98 },
    { name: "Industry-Relevant Skills", percent: 98 },
];

const DigitalMain: React.FC = () => {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            <div className="services-details__img">
                                <Image src={serviceImg1} width={850} height={400} alt="Quantity Surveying" />
                            </div>

                            <div className="services-details__content">
                                <h3 className="services-details__title-1">
                                    Master Quantity Surveying with Real-World Industry Practice | ACL Academy
                                </h3>

                                <div className="services-details__shape-1"></div>

                                <p className="services-details__text-1">
                                    ACL Academy offers a comprehensive Quantity Surveying Practical Training Program designed to prepare students and professionals for real-world construction industry challenges. Our practical QS classes combine technical knowledge, real project experience, and career-focused training to help learners build the skills required to succeed as professional Quantity Surveyors.
                                </p>
                                <p>
                                    Whether you are a student, graduate, or industry professional, our program helps you gain practical knowledge in measurement, cost estimation, contract administration, and project cost management used in real construction projects.
                                    Through interactive classes, case studies, and practical exercises, participants develop strong analytical thinking and professional confidence required in contractor, consultant, and client-side roles.
                                </p>

                                <h3 className="services-details__title-2">What Makes This Program Different</h3>
                        
                                {/* FEATURES LIST */}
                                <div className="services-details__points-box">
                                    <ul className="services-details__points-list list-unstyled">
                                        <li><span className="icon-check"></span> Real project-based learning</li>
                                        <li><span className="icon-check"></span> Company-style practical environment</li>
                                        <li><span className="icon-check"></span> Hands-on exercises (not theory-based learning)</li>
                                    </ul>

                                    <ul className="services-details__points-list list-unstyled">
                                        <li><span className="icon-check"></span> Group discussions & communication training</li>
                                        <li><span className="icon-check"></span> Designed for Gulf / international standards</li>
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

export default DigitalMain;
