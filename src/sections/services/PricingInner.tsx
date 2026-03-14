"use client"
import React, { useState } from "react"; 
import shape1 from "../../../public/assets/images/shapes/pricing-two-single-shape-1.png"; 
import Image from "next/image";
import Link from "next/link";
import { monthlyPlansInner, yearlyPlansInner } from "@/contents/procing-plan/pricing";
import { PricingPlanInner } from "@/contents/procing-plan/type";

const PricingInner: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

    const renderPlans = (plans: PricingPlanInner[]) => (
        <ul className="row list-unstyled">
            {plans.map((plan) => (
                <li key={plan.id} className="col-xl-4 col-lg-6">
                    <div className="pricing-two__single">
                        <div className="pricing-two__single-shape-1">
                            <Image src={shape1} alt={`${plan.title} shape`} />
                        </div>
                        <div className="pricing-two__title-box">
                            <p className="pricing-two__title">{plan.title}</p>
                            <h3 className="pricing-two__price-box">
                                {plan.price} <span>{plan.duration}</span>
                            </h3>
                        </div>
                        <ul className="list-unstyled pricing-two__feature-list">
                            {plan.features.map((feature, index) => (
                                <li key={index}>
                                    <div className="icon">
                                        <span className="fas fa-check"></span>
                                    </div>
                                    <div className="text">
                                        <p>{feature}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="pricing-two__btn-box">
                            <Link href="/inner/pricing" className="pricing-two__btn thm-btn thm-btn-two">
                                <span className="icon-plus1"></span> Choose Pricing
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
    return (
        <section className="pricing-two">
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Working Process</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        Select the plan that best <br /> fits <span>your needs.</span>
                    </h2>
                </div>

                <div className="pricing-two__main-tab-box tabs-box">
                    <ul className="tab-buttons list-unstyled">
                        <li
                            className={`tab-btn ${activeTab === "monthly" ? "active-btn" : ""}`}
                            onClick={() => setActiveTab("monthly")}
                        >
                            <span>Monthly</span>
                        </li>
                        <li
                            className={`tab-btn ${activeTab === "yearly" ? "active-btn" : ""}`}
                            onClick={() => setActiveTab("yearly")}
                        >
                            <span>Yearly</span>
                        </li>
                    </ul>

                    <div className="tabs-content">
                        {activeTab === "monthly" && (
                            <div className="tab active-tab">
                                <div className="pricing-two__inner">{renderPlans(monthlyPlansInner)}</div>
                            </div>
                        )}
                        {activeTab === "yearly" && (
                            <div className="tab active-tab">
                                <div className="pricing-two__inner">{renderPlans(yearlyPlansInner)}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingInner;
