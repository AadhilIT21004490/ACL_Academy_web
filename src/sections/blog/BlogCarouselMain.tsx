"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; 
import Image from 'next/image';
import { BlogPost } from '@/data/events';
import Link from 'next/link';

const BlogCarouselMain: React.FC = () => {
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

    const sortedPosts = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section className="blog-carousel-page">
            <div className="container">
                <div className="blog-carousel-style owl-carousel owl-theme  ">
                    {loading ? (
                        <div className="text-center py-5">Loading...</div>
                    ) : (
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={sortedPosts.length > 3}
                            autoplay={{
                                delay: 4000,
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
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                            className="blog-two__swiper"
                        >
                            {sortedPosts.map((post: BlogPost) => (
                                <SwiperSlide className='item' key={post.id}>
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
                                                <ul className="list-unstyled blog-two__tag">
                                                    {post.tags.map((tag, i) => (
                                                        <li key={i}>
                                                            <p>{tag}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <h3 className="blog-two__title">
                                                    <Link href={`/inner/blog/${post.id}`}>{post.title}</Link>
                                                </h3>
                                                <p className="blog-two__text">
                                                    {post.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').slice(0, 100)}...
                                                </p>
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogCarouselMain;