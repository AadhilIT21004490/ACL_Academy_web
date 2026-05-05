"use client";
import React, { useState, useEffect } from 'react';
import blogIcon from "../../../public/assets/images/icon/sidebar-title-icon.png";
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from "@/data/events";

const BlogListSidebar: React.FC = () => {
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

    const recentPosts = [...blogs]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <div className="col-xl-4 col-lg-5">
            <div className="sidebar">

                {/* ====== Recent Posts ====== */}
                <div className="sidebar__single sidebar__post">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-icon">
                            <Image src={blogIcon} alt="icon" />
                        </div>
                        <h3 className="sidebar__title">Recent Posts</h3>
                    </div>
                    {loading ? (
                        <div className="text-center py-3">Loading...</div>
                    ) : (
                        <ul className="sidebar__post-list list-unstyled">
                            {recentPosts.map((post: BlogPost) => (
                                <li key={post.id}>
                                    <div className="sidebar__post-image">
                                        <Image src={post.mainImage} width={80} height={80} alt={post.title} />
                                    </div>
                                    <div className="sidebar__post-content">
                                        <h3>
                                            <Link href={`/inner/blog/${post.id}`}>{post.title}</Link>
                                        </h3>
                                        <p className="sidebar__post-date">
                                            <span className="fas fa-calendar-alt"></span> {post.date}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    );
};

export default BlogListSidebar;