"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import shape1 from "../../../public/assets/images/shapes/blog-two-shape-1.png";
import shape2 from "../../../public/assets/images/shapes/blog-two-shape-2.png";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/events";

const BlogThree: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("/api/blogs");
                const result = await res.json();
                if (result.success) {
                    setBlogs(result.data.slice(0, 3)); // Only show top 3 like blogPostsThree
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <section className="blog-two" id="blog">
            {/* Decorative Shapes */}
            <div className="blog-two__shape-1 rotate-me">
                <Image src={shape1} width={329} height={314} alt="Decorative Shape" />
            </div>
            <div className="blog-two__shape-2 float-bob-x">
                <Image src={shape2} width={148} height={56} alt="Decorative Shape" />
            </div>

            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Articles</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        Check out our articles to learn <br />
                        more about <span>business agencies.</span>
                    </h2>
                </div>
                <div className="row">
                    {loading ? (
                        <div className="text-center py-5">Loading...</div>
                    ) : (
                        blogs.map((post: BlogPost, index: number) => (
                            <motion.div
                                initial={{ y: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut"
                                }}
                                viewport={{ amount: 0.01, once: true }}
                                className="col-xl-4 col-lg-6" key={post.id}>
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
                            </motion.div>
                        ))
                    )}
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

export default BlogThree;
