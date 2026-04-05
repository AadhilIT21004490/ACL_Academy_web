import React from "react";
import img1 from "../../../public/assets/images/resources/abt3.jpg";
import img2 from "../../../public/assets/images/resources/abt4.jpg";
import imgShape1 from "../../../public/assets/images/shapes/why-choose-four-img-shape-1.png";
import icon1 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-1.png";
import icon2 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-2.png";
import icon3 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-3.png";
import icon4 from "../../../public/assets/images/icon/why-choose-four-single-icon-1-4.png";
import TextAnimation from "@/components/elements/TextAnimation";
import Image from "next/image";

const challengePoints: string[] = [
  "Bridge the gap between education and industry practice",
  "Develop professionals ready for real project environments",
  "Integrate AI and digital transformation into built environment careers",
  "Support career growth in global and Middle East markets",
  "Promote a multi-disciplinary understanding of construction, cost, and project delivery",
  "Empower learners with the commercial acumen required to drive project value and professional integrity",
];

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
                  <TextAnimation
                    text="Aligning industry standards"
                    textColor="black"
                    isSpan={false}
                  />
                  <TextAnimation
                    text="with practical excellence."
                    isSpan={false}
                    textColor="#6232F8"
                  />
                </h3>
              </div>

              <p className="why-choose-four__text">
                <strong>Our Vision is</strong> To become a leading global
                platform that transforms built environment professionals by
                integrating real industry practice with advanced digital and
                AI-driven solutions.
              </p>
              <h2 className="section-title-two__title-about title-animation">
                <TextAnimation text="Our" textColor="black" isSpan={false} />
                <TextAnimation
                  text="Mission"
                  isSpan={false}
                  textColor="#6232F8"
                />
              </h2>
              <p className="why-choose-four__text">
                Our mission is to equip students and professionals with
                practical, job-ready skills across the built environment by
                delivering training that reflects real project environments,
                enhanced with modern tools, digital workflows, and Artificial
                Intelligence.<br/><br/>
              </p>
              <p><strong>We aim to :</strong><br/><br/></p>
              <div className="portfolio-details__points-box">
                {/* Split challenge points in half */}
                <ul className="portfolio-details__points-list list-unstyled">
                  {challengePoints.slice(0, 3).map((point, i) => (
                    <li key={i}>
                      <div className="icon">
                        <span className="fas fa-check"></span>
                      </div>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>

                <ul className="portfolio-details__points-list list-unstyled">
                  {challengePoints.slice(3).map((point, i) => (
                    <li key={i}>
                      <div className="icon">
                        <span className="fas fa-check"></span>
                      </div>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6">
            <div className="why-choose-four__right">
              {/* Images */}
              <div className="why-choose-four__img-box">
                <div className="why-choose-four__img">
                  <Image
                    src={img1}
                    width={354}
                    height={354}
                    alt="Why Choose Us"
                  />
                </div>
                <div className="why-choose-four__img-shape-1 img-bounce">
                  <Image
                    src={imgShape1}
                    width={393}
                    height={363}
                    alt="Decorative Shape"
                  />
                </div>
                <div className="why-choose-four__img-2">
                  <Image
                    src={img2}
                    width={358}
                    height={358}
                    alt="Team Collaboration"
                  />
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
