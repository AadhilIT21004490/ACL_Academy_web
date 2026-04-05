"use client"
import React from 'react';
import aboutImg1 from "../../../public/assets/images/resources/about-three-img-1.jpg"
import aboutImg2 from "../../../public/assets/images/resources/about-three-img-2.jpg"
import aboutImg3 from "../../../public/assets/images/shapes/about-three-shape-5.png"
import aboutImg4 from "../../../public/assets/images/resources/about-three-client-img.jpg"
import aboutImg5 from "../../../public/assets/images/icon/about-three-points-icon-1.png"
import aboutImg6 from "../../../public/assets/images/icon/about-three-points-icon-2.png"
import { useFinrisContext } from '@/components/context/useFinrisContext';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';

const AboutUsThree: React.FC = () => {
    const { handleVideoClick } = useFinrisContext();
    return (
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="about-three__left">
                <div className="about-three__img-box">
                  <div className="about-three__img">
                    <Image src={aboutImg1} width={445} height={480} alt="" />
                  </div>
                  <div className="about-three__img-2">
                    <Image src={aboutImg2} width={280} height={306} alt="" />
                  </div>
                  <div className="about-three__experience-box">
                    <div className="about-three__count count-box">
                      <h3 className="count-text">
                        <AdvanceCountUp ending={57} />+
                      </h3>
                    </div>
                    <p className="about-three__count-text">
                      Success <br /> Stories
                    </p>
                  </div>
                  <div className="about-three__video-link">
                    <Link
                      href="#"
                      onClick={(e) =>
                        handleVideoClick(
                          e,
                          "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
                        )
                      }
                      className="video-popup"
                    >
                      <div className="about-three__video-icon">
                        <span className="icon-play-buttton"></span>
                        <i className="ripple"></i>
                      </div>
                    </Link>
                  </div>
                  <div className="about-three__shape-1 rotate-me"></div>
                  <div className="about-three__shape-2"></div>
                  <div className="about-three__shape-3"></div>
                  <div className="about-three__shape-4"></div>
                  <div className="about-three__shape-5 rotate-me">
                    <Image src={aboutImg3} width={33} height={36} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-three__right">
                <div className="section-title-two text-left sec-title-animation animation-style2">
                  <div className="section-title-two__tagline-box">
                    <div className="section-title-two__tagline-icon-box">
                      <div className="section-title-two__tagline-icon-1"></div>
                      <div className="section-title-two__tagline-icon-2"></div>
                    </div>
                    <span className="section-title-two__tagline">About Us</span>
                  </div>
                  <h3 className="section-title-two__title title-animation">
                    <TextAnimation
                      text="The Blueprint for Your"
                      textColor="black"
                      isSpan={false}
                    />
                    <TextAnimation
                      text="Professional Breakthrough."
                      isSpan={false}
                      textColor="#6232F8"
                    />
                    <span> </span>
                    <br />
                  </h3>
                </div>
                <p className="about-three__text">
                  ACL Academy is a modern training platform focused on
                  developing industry-ready professionals across the built
                  environment through practical, real-world learning. Founded by
                  a Chartered professional with extensive Middle East project
                  experience, ACL Academy bridges the gap between academic
                  knowledge and real industry practice in construction,
                  infrastructure, and the wider built environment. Our training
                  approach goes beyond theory by simulating a real commercial
                  and project environment, enabling learners to gain hands-on
                  experience in cost management, project delivery, digital
                  workflows, and emerging technologies.
                </p>
                {/* <div className="about-three__client-and-text-box">
                  <div className="about-three__client-box">
                    <div className="about-three__client-img">
                      <Image src={aboutImg4} width={60} height={60} alt="" />
                    </div>
                    <div className="about-three__client-content">
                      <h3>David Watson</h3>
                      <p>Founder & SEO</p>
                    </div>
                  </div>
                  <p className="about-three__client-text">
                    Welcome to our company! We are thrilled to share our journey
                    and values with you.
                  </p>
                </div> */}
                <ul className="about-three__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <Image src={aboutImg5} width={60} height={60} alt="" />
                    </div>
                    <div className="content">
                      <h3>Advanced Security</h3>
                      <p>
                        Our system incorporates the latest security protocols to
                        protect user data and ensure privacy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Image src={aboutImg6} width={60} height={60} alt="" />
                    </div>
                    <div className="content">
                      <h3>Customizable Options</h3>
                      <p>
                        Our system incorporates the latest security protocols to
                        protect user data and ensure privacy.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutUsThree;