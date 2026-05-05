"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BlogPost } from "@/data/events";
import Link from "next/link";
import BlogListSidebar from "./BlogListSidebar";

const BlogListMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const ITEMS_PER_PAGE = 3;

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

    // Pagination logic
    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Page change handler
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    {/* ===== LEFT SIDE: BLOG LIST ===== */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {loading ? (
                                <div className="text-center py-5">Loading blogs...</div>
                            ) : currentBlogs.length === 0 ? (
                                <div className="text-center py-5">No blogs found.</div>
                            ) : (
                                currentBlogs.map((blog: BlogPost) => (
                                    <div key={blog.id} className="blog-list__single">
                                        <div className="blog-list__img-box">
                                            <div className="blog-list__img">
                                                <Image src={blog.mainImage} width={692} height={661} alt={blog.title} />
                                                <div className="blog-list__plus">
                                                    <Link href={`/inner/blog/${blog.id}`}>
                                                        <span className="icon-plus"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-list__content">
                                            <div className="blog-list__date-and-comment">
                                                <div className="blog-list__date">
                                                    <p>
                                                        <span className="fas fa-calendar-alt"></span> {blog.date}
                                                    </p>
                                                </div>
                                                <div className="blog-list__comment">
                                                    <p>
                                                        <span className="far fa-comment"></span> {blog.dayOfWeek}
                                                    </p>
                                                </div>
                                            </div>

                                            <h3 className="blog-list__title">
                                                <Link href={`/inner/blog/${blog.id}`}>{blog.title}</Link>
                                            </h3>

                                            <p className="blog-list__text">
                                                {blog.description.slice(0, 150)}...
                                            </p>

                                            <div className="blog-list__client-info">
                                                <div className="blog-list__client-content">
                                                    <span>Post By</span>
                                                    <p>{blog.author.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {/* ===== PAGINATION ===== */}
                            {!loading && totalPages > 1 && (
                                <div className="blog-list__pagination">
                                    <ul className="pg-pagination list-unstyled d-flex justify-content-center">
                                        <li>
                                            <button
                                                className="pg-btn"
                                                disabled={currentPage === 1}
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                «
                                            </button>
                                        </li>

                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <li key={i} className={`count ${currentPage === i + 1 ? "active" : ""}`}>
                                                <button className="pg-btn" onClick={() => handlePageChange(i + 1)}>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}

                                        <li>
                                            <button
                                                className="pg-btn"
                                                disabled={currentPage === totalPages}
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                »
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ===== RIGHT SIDE: SIDEBAR ===== */}
                    <BlogListSidebar />
                </div>
            </div>
        </section>
    );
};

export default BlogListMain;

