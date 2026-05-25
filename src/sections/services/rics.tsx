'use client';
import React from "react";
import Link from "next/link";
import ServicesList from "../common/ServicesList";
import Module from "../modules/ricsmodule";
import RICSTesti from "../home-two/RICSTesti";
interface Skill {
    name: string;
    percent: number;
}
const skills: Skill[] = [
    { name: "Students Success Ration", percent: 96 },
    { name: "Positive Feedback", percent: 98 },
    { name: "Industry-Relevant Skills", percent: 98 },
];

const RICS: React.FC = () => {
    return (
        <section className="services-details">
            <div className="container">

                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            
                            <div className="services-details__content">
                                <h3 className="services-details__title-1">
                                    RICS APC Mock Interviews | Real Panel Experience & Confidence Building <br />ACL Academy
                                </h3>

                                <div className="services-details__shape-1"></div>

                                <p className="services-details__text-1">
                                    Prepare for your RICS APC with confidence through ACL Academy’s structured mock interview program. Designed to replicate real APC panel conditions, our program includes three full mock interviews, each with a unique questioning style—from competency-based and scenario-driven discussions to challenging panel-style sessions.
                                </p><br />
                                <p>
                                    Gain hands-on experience with real assessment environments, receive detailed feedback reports after every session, and follow a progressive improvement approach to strengthen your performance. Our expert guidance helps you develop clear communication, structured answers, and the confidence required to succeed in your APC assessment.</p>

                                {/* MODERN BROCHURE DOWNLOAD BUTTON */}
                                <div style={{ margin: '35px 0' }}>
                                    <a 
                                        href="/assets/ACL_RICS Mock_Brochure.pdf" // Change this to your actual file path
                                        download="ACL_RICS Mock_Brochure.pdf"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                                            color: '#ffffff',
                                            fontWeight: '600',
                                            fontSize: '15px',
                                            padding: '14px 28px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.25)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.15)';
                                        }}
                                    >
                                        {/* Simple inline SVG icon for a document download hook */}
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                        Download Course Brochure (PDF)
                                    </a>
                                </div>
                                
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
                                <RICSTesti />


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

                                {/* PROGRAM SECTION */}
                                <div className="services-details__progress-box">
                                    <div className="row">
                                        <div className="services-details__progress-left">
                                            <h3 className="services-details__progress-left-title">
                                                What Makes Our Mock Interviews Unique?
                                            </h3>
                                            <Module />
                                        </div>
                                    </div>
                                </div>


                                <h3 className="services-details__title-3">Why This Matters</h3>
                                <p className="services-details__text-3">
                                    RICS APC is not about memorizing answers —
                                    it’s about thinking, structuring, and delivering under pressure.<br />
                                    Our mock interviews ensure you:<br />
                                </p>

                                {/* WHY OUR SERVICES POINTS */}
                                <div className="services-details__points-and-img">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="services-details__points-1 list-unstyled">
                                                <li><span className="icon-check"></span> Think like an assessor </li>
                                                <li><span className="icon-check"></span> Answer with clarity </li>
                                                <li><span className="icon-check"></span> Perform with confidence </li>
                                            </ul>
                                        </div>

                                        <div className="col-xl-6">
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className="services-details__img-two">
                                    
                                </div>

                                <h3 className="services-details__title-4">Prepare for your RICS APC with realistic mock interviews</h3>
                                <p className="services-details__text-5">
                                    This program ensures you are fully prepared to think like an assessor, respond with clarity, and perform under pressure—because APC success depends not just on what you know, but how you deliver.</p>
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
                                    Have questions about our RICS APC Mock Interviews Program?
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

export default RICS;
