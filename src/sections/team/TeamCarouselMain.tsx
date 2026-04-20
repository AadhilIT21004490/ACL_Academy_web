"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';  
import socialShape1 from "../../../public/assets/images/shapes/team-page-social-shape-1.png";
import socialShape2 from "../../../public/assets/images/shapes/team-page-social-shape-2.png"; 
import { teamMembersTeamPage } from '@/contents/team/team';
import { TeamMember } from '@/contents/team/teamType';
import Image from 'next/image';
import Link from 'next/link';
import TextAnimation from '@/components/elements/TextAnimation';
const TeamCarouselMain: React.FC = () => {
    return (
        <section className="team-carousel-page">
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Our Lecturers</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Building Success Through ' textColor='black' isSpan={false} />
                        <TextAnimation text='Collaboration and Innovation' textColor='#6232F8' isSpan={false} />
                    </h2>
                </div>
                <div className="team-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay, Pagination]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                        className="team-one__carousel"
                    >
                        {teamMembersTeamPage.map((member: TeamMember) => (
                            <SwiperSlide key={member.id}>
                                <div className="item">
                                    <div className="team-page__single">
                                        <div className="team-page__img-box">
                                            <div className="team-page__img">
                                                <Image src={member.image} width={266} height={269} loading='lazy' alt={member.name} />
                                            </div>
                                        </div>
                                        <div className="team-page__content">
                                            <h4 className="team-page__title">
                                                <Link href={member.link}>{member.name}</Link>
                                            </h4>
                                            <p className="team-page__text">{member.education}</p>
                                            <p><strong>{member.position}</strong></p>
                                            {/* <div className="team-page__social">
                                                <div className="team-page__social-shape-1">
                                                    <Image src={socialShape1} alt="Social Shape" />
                                                </div>
                                                <div className="team-page__social-shape-2">
                                                    <Image src={socialShape2} alt="Social Shape" />
                                                </div>
                                                <a href="#"><span className="icon-pinterest"></span></a>
                                                <a href="#"><span className="icon-linkedin"></span></a>
                                                <a href="#"><span className="icon-twitter"></span></a>
                                                <a href="#"><span className="icon-facebook"></span></a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default TeamCarouselMain;