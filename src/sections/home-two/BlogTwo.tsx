"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import shape1 from '../../../public/assets/images/shapes/blog-two-shape-1.png';
import shape2 from '../../../public/assets/images/shapes/blog-two-shape-2.png';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/events';

const BlogTwo: React.FC = () => {
    // Sort logic to show latest posts first
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section className="blog-two">
            {/* Decorative shapes */}
            <div className="blog-two__shape-1 rotate-me">
                <Image src={shape1} width={329} height={314} alt="Decorative Shape 1" />
            </div>
            <div className="blog-two__shape-2 float-bob-x">
                <Image src={shape2} width={148} height={56} alt="Decorative Shape 2" />
            </div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Webinar</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='Check out our webinars to learn' textColor='black' isSpan={false} />
                        <TextAnimation text={`more about latest trends.`} textColor='#6232F8' isSpan={false} />
                    </h2>
                </div>

                <div className="blog-two__carousel owl-theme owl-carousel">
                    {/* Swiper Slider */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="blog-two__swiper"
                    >
                        {sortedPosts.map((post: BlogPost) => (
                            <SwiperSlide key={post.id}>
                                <div className="blog-two__single">
                                    <div className="blog-two__img">
                                        <Image src={post.mainImage} width={362} height={240} alt={post.title} />
                                        <div className="blog-two__plus">
                                            <Link href={`/inner/blog/${post.id}`}>
                                                <span className="icon-plus"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog-two__content">
                                        <div className="blog-two__date">
                                            <p>
                                                {post.date} <span className="icon-calendar"></span>
                                            </p>
                                        </div>
                                        <div className="blog-two__content-inner">
                                            <h3 className="blog-two__title">
                                                <Link href={`/inner/blog/${post.id}`}>{post.title}</Link>
                                            </h3>
                                            <p className="blog-two__text">{post.description.slice(0, 100)}...</p>
                                        </div>
                                        <div className="blog-two__read-more">
                                            <div className="blog-two__read-more-line"></div>
                                            <Link href={`/inner/blog/${post.id}`} className="blog-two__read-more-text">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Bottom Button */}
                <div className="blog-two__bottom">
                    <div className="blog-two__btn-box-two">
                        <Link href="/inner/blog">
                            View More <span className="icon-right"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogTwo;
