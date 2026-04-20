"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { testimonialsPage } from '@/contents/testimonials/testimonials';
import { TestimonialPage } from '@/contents/testimonials/type';
import TextAnimation from '@/components/elements/TextAnimation';

const TestimonialsA: React.FC = () => {
    return (
        <section className="testimonial-carousel-page">
            <div className="container">
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Testimonials</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='What students say' textColor='black' isSpan={false} />
                        <TextAnimation text='about us' textColor='#6232F8' isSpan={false} />
                    </h2>
                </div>
                <div className="testimonial-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
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
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {testimonialsPage.map((t: TestimonialPage) => (
                            <SwiperSlide key={t.id}>
                                <div className="item">
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__client-info">
                                            {/* <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <Image src={t.image} width={140} height={139} alt={t.name} />
                                                </div>
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-left"></span>
                                                </div>
                                            </div> */}
                                            <div className="testimonial-one__client-content">
                                                <p className="testimonial-one__client-name">
                                                    <a href="#">{t.name}</a>
                                                </p>
                                                <span className="testimonial-one__client-sub-title">
                                                    {t.batch} - {t.role}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="testimonial-one__text">{t.text}</p>
                                        <div className="testimonial-one__rating">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="star"
                                                    style={{
                                                        color: i < t.rating ? "#FFD700" : "#ccc",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    ★
                                                </span>
                                            ))}
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

export default TestimonialsA;
