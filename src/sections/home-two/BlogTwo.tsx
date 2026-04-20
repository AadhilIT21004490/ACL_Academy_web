"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import shape1 from '../../../public/assets/images/shapes/blog-two-shape-1.png';
import shape2 from '../../../public/assets/images/shapes/blog-two-shape-2.png';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { BlogPost } from '@/contents/blog/blogType';
import Link from 'next/link';
import blogPostImg1 from '../../../public/assets/images/posts/abt1.jpg';
import blogPostImg2 from '../../../public/assets/images/posts/abt1.jpg';
import blogPostImg3 from '../../../public/assets/images/posts/abt1.jpg';

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: blogPostImg2,
        date: 'August 20, 2025',
        tags: ['Productivity', '★', 'Tech Innovation'],
        title: `Future of Artificial Intelligence: What's Next in 2025?`,
        description: 'As we move towards 2025, the landscape of artificial intelligence continues to evolve',
        link: '/inner/blog',
    },
    {
        id: 2,
        image: blogPostImg1,
        date: 'March 15, 2025',
        tags: ['Technology', '★', 'Wellness'],
        title: '5 Essential Wellness Tips for a Healthier Lifestyle',
        description: "Achieving a healthier lifestyle doesn't have to be complicated.",
        link: '/inner/blog',
    },
    {
        id: 3,
        image: blogPostImg3,
        date: 'July 10, 2025',
        tags: ['Sustainability', '★', 'Eco-Friendly'],
        title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
        description: 'This guide covers sustainable fabrics, ethical brands, and mindful shopping',
        link: '/inner/blog',
    },
    {
        id: 4,
        image: blogPostImg1,
        date: 'October 2, 2025',
        tags: ['AI', '★', 'Innovation'],
        title: 'The Power of Automation in Modern Business',
        description: 'Automation is reshaping industries by improving efficiency and reducing costs.',
        link: '/inner/blog',
    },
];

const BlogTwo: React.FC = () => {
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
                        {blogPosts.map((post: BlogPost) => (
                            <SwiperSlide key={post.id}>
                                <div className="blog-two__single">
                                    <div className="blog-two__img">
                                        <Image src={post.image} width={362} height={240} alt={post.title} />
                                        <div className="blog-two__plus">
                                            <Link href={post.link}>
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
                                            <ul className="list-unstyled blog-two__tag">
                                                {post.tags.map((tag, i) => (
                                                    <li key={i}>
                                                        <p>{tag}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 className="blog-two__title">
                                                <Link href={post.link}>{post.title}</Link>
                                            </h3>
                                            <p className="blog-two__text">{post.description}</p>
                                        </div>
                                        <div className="blog-two__read-more">
                                            <div className="blog-two__read-more-line"></div>
                                            <Link href={post.link} className="blog-two__read-more-text">
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
