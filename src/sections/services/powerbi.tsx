'use client'
import React from "react";
import serviceImg2 from "../../../public/assets/images/qs3.jpg";
import Image from "next/image";
import Link from "next/link";
import ServicesList from "../common/ServicesList";
import Module from "../modules/powerbimodule";
interface Skill {
    name: string;
    percent: number;
}
const skills: Skill[] = [
    { name: "Students Success Ration", percent: 96 },
    { name: "Positive Feedback", percent: 98 },
    { name: "Industry-Relevant Skills", percent: 98 },
];

const PowerBi: React.FC = () => {
    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    {/* LEFT SIDE */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__left">
                            

                            <div className="services-details__content">
                                <h3 className="services-details__title-1">
                                   Power BI for Quantity Surveyors | Construction Analytics | ACL Academy
                                </h3>

                                <div className="services-details__shape-1"></div>

                                <p className="services-details__text-1">
                                    At ACL Academy, we have partnered with NexAI – Sri Lanka’s leading AI education platform to bring a next-generation learning experience for Quantity Surveyors. Upgrade your Quantity Surveying career with AI-powered skills at ACL Academy. Learn core QS fundamentals and integrate advanced AI tools through our partnership with NexAI to become a future-ready Quantity Surveyor.</p><br/>
                                <p>
                                    Gain hands-on experience with real-world applications of AI in cost estimation, quantity take-offs, data analysis, and project decision-making. Our structured approach ensures you not only understand traditional QS practices but also learn how to enhance accuracy, efficiency, and productivity using modern AI-driven workflows—giving you a competitive edge in the evolving construction industry.</p>

                                {/* MODERN BROCHURE DOWNLOAD BUTTON */}
                                <div style={{ margin: '35px 0' }}>
                                    <a 
                                        href="/assets/ACL_PowerBi_Brochure.pdf" // Change this to your actual file path
                                        download="Power_BI_QS_Brochure.pdf"
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

                                        
                                    </div>
                                </div>

                                

                                <div style={{
                                backgroundColor: '#fff6ed',          // Very light slate/gray background
                                border: '1px solid #e2e8f0',        // Clean, subtle border
                                borderLeft: '4px solid #e96c1b',    // Vibrant blue left accent bar for that "highlight" look
                                borderRadius: '12px',               // Modern, smooth rounded corners
                                padding: '24px',                    // Generous breathing room inside the box
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)', // Soft modern shadow
                                margin: '20px 0'                    // Spacing above and below the div
                                }}>
                                <h3 className="services-details__title-4">ACL Academy's unique approach</h3>
                                <p className="services-details__text-4" style={{ margin: 0 }}>
                                    Additionally, ACL Academy stands out for its commitment to 
                                    personalized mentorship and continuous support throughout the 
                                    training journey. Learners benefit from one-on-one guidance, 
                                    constructive feedback, and tailored advice to strengthen both 
                                    technical and professional skills. This holistic approach ensures 
                                    that every student not only masters Quantity Surveying concepts 
                                    but also develops the confidence and adaptability needed to excel 
                                    in diverse construction industry roles.
                                </p>
                                </div>

                                <div className="services-details__img-two">
                                    <Image src={serviceImg2} width={850} height={299} alt="Service Details" />
                                </div>

                                <h3 className="services-details__title-4">Advance Your Construction Analytics Career Today:</h3>
                                <p className="services-details__text-5">
                                    Take the definitive next step toward becoming a data-driven commercial leader in the construction and infrastructure sector. 
                                    Join the <strong>ACL Academy Power BI for Quantity Surveyors & Construction Professionals</strong> program to transform your raw project data into actionable business intelligence, master automated cost tracking, and build elite industry dashboards that secure a modern competitive edge.
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
                                    Have questions about our Power BI Training Program?
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

export default PowerBi;
