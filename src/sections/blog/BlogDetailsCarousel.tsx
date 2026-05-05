"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import blogStar from "../../../public/assets/images/shapes/blog-one-star.png";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/events";

const BlogDetailsCarousel: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blogs");
                const result = await res.json();
                if (result.success) {
                    setBlogs(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const displayPosts = [...blogs]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section className="blog-one">
            <div className="blog-one__star zoominout">
                <Image src={blogStar} alt="Decoration Star" />
            </div>
            <div className="container">
                {/* ===== Section Title ===== */}
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Events</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        Discover our latest news <br /> and <span>updates now.</span>
                    </h2>
                </div>

                {/* ===== Blog Carousel ===== */}
                <div className="blog-one__carousel owl-theme  ">
                    {loading ? (
                        <div className="text-center py-5">Loading...</div>
                    ) : (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={displayPosts.length > 3}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            modules={[Navigation, Autoplay]}
                            onSwiper={setSwiperInstance}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                        >
                            {displayPosts.map((blog: BlogPost) => (
                                <SwiperSlide className="item" key={blog.id}>
                                    <div className="blog-one__single">
                                        {/* Image */}
                                        <div className="blog-one__img">
                                            <Image src={blog.mainImage} width={370} height={252} alt={blog.title} />
                                            <div className="blog-one__plus">
                                                <Link href={`/inner/blog/${blog.id}`}>
                                                    <span className="icon-plus"></span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="blog-one__content">
                                            <h3 className="blog-one__title">
                                                <Link href={`/inner/blog/${blog.id}`}>{blog.title}</Link>
                                            </h3>

                                            <p className="blog-two__text">
                                                {blog.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').slice(0, 100)}...
                                            </p>

                                            {/* User Info */}
                                            <div className="blog-one__user">

                                                <div className="blog-one__user-content">
                                                    <h5 className="blog-one__user-name">
                                                        <Link href={`/inner/blog/${blog.id}`}>{blog.author.name}</Link>
                                                    </h5>
                                                    <p className="blog-one__date">{blog.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {!loading && displayPosts.length > 3 && (
                        <div className="owl-nav-custom" style={{ zIndex: 111 }}>
                            <button
                                onClick={() => swiperInstance?.slidePrev()}
                                className="owl-prev"
                                aria-label="Previous Slide"
                                type="button"
                            >
                                <span className="icon-left-arrow"></span>
                            </button>
                            <button
                                onClick={() => swiperInstance?.slideNext()}
                                className="owl-next"
                                aria-label="Next Slide"
                                type="button"
                            >
                                <span className="icon-right-arrow"></span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogDetailsCarousel;
