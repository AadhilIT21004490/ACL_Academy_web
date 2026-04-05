import React from "react";
import awardImg1 from "../../../public/assets/images/resources/abt5.jpg";
import awardImg2 from "../../../public/assets/images/resources/abt6.jpg";
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
                  <span className="section-title-two__tagline">
                    Core values
                  </span>
                </div>
                <h2 className="section-title-two__title title-animation">
                  <TextAnimation
                    text={`How We Shape`}
                    textColor="black"
                    isSpan={false}
                  />
                  <TextAnimation
                    text="the Future"
                    isSpan={false}
                    textColor="#6232F8"
                  />
                </h2>
              </div>

              {/* Image Box */}
              <div className="awards-one__img-box">
                <div className="awards-one__img">
                  <Image
                    src={awardImg1}
                    width={524}
                    height={557}
                    alt="Award Ceremony"
                  />
                </div>

                <div className="awards-one__img-2">
                  <Image
                    src={awardImg2}
                    width={283}
                    height={294}
                    alt="Award Celebration"
                  />

                  <div className="awards-one__experience-box">
                    <div className="awards-one__count count-box">
                      <h3 className="count-text">
                        <AdvanceCountUp ending={26} />
                      </h3>
                      <span>+</span>
                    </div>
                    <p className="awards-one__count-text">Modules</p>
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
                    <h3>Practical Learning First</h3>
                    <p>
                      Real project-based training, not just academic theory.
                    </p>
                  </div>
                </li>
                {/* Practical Learning First */}
                <li>
                  <div className="icon">
                    <span className="icon-trophy-1"></span>
                  </div>
                  <div className="content">
                    <h3>Practical Learning First</h3>
                    <p>
                      Real project-based training, not just academic theory.
                    </p>
                  </div>
                </li>

                {/* Industry Relevance */}
                <li>
                  <div className="icon">
                    <span className="icon-trophy-1"></span>
                  </div>
                  <div className="content">
                    <h3>Industry Relevance</h3>
                    <p>
                      Aligned with current practices across construction and the
                      built environment.
                    </p>
                  </div>
                </li>

                {/* Innovation & Digital Thinking */}
                <li>
                  <div className="icon">
                    <span className="icon-trophy-1"></span>
                  </div>
                  <div className="content">
                    <h3>Innovation & Digital Thinking</h3>
                    <p>
                      Embracing AI, data, and modern technologies shaping the
                      industry.
                    </p>
                  </div>
                </li>

                {/* Professional Excellence */}
                <li>
                  <div className="icon">
                    <span className="icon-trophy-1"></span>
                  </div>
                  <div className="content">
                    <h3>Professional Excellence</h3>
                    <p>
                      Driven by global standards, ethics, and best practices.
                    </p>
                  </div>
                </li>

                {/* Career Impact */}
                <li>
                  <div className="icon">
                    <span className="icon-trophy-1"></span>
                  </div>
                  <div className="content">
                    <h3>Career Impact</h3>
                    <p>
                      Focused on real outcomes — employability, confidence, and
                      growth.
                    </p>
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
