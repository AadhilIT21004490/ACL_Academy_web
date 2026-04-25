"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import r1 from "../../../public/assets/images/r1.jpeg";
import r2 from "../../../public/assets/images/r2.jpeg";
import r3 from "../../../public/assets/images/r3.jpeg";
import r4 from "../../../public/assets/images/r4.jpeg";
import r5 from "../../../public/assets/images/r5.jpeg";
import TextAnimation from '@/components/elements/TextAnimation';
import { StaticImageData } from "next/image";

const testimonialImages: StaticImageData[] = [r1, r2, r3, r4, r5];

const RICSTesti: React.FC = () => {
    return (
        <section className="team-carousel-page">
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">

                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Our Success Stories' textColor='black' isSpan={false} />
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
                        {testimonialImages.map((image: StaticImageData, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="item">
                                    <div className="team-page__single">
                                        <div className="team-page__img-box">
                                            <div className="team-page__img">
                                                <Image src={image} width={300} height={300} loading='lazy' alt={`ACL Academy RICS APC Testimonial ${index + 1}`} />
                                            </div>
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

export default RICSTesti;