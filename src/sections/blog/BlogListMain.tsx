"use client";
import React, { useState } from "react"; 
import Image from "next/image";
import { blogsListItems } from "@/contents/blog/blog";
import { BlogsListItem } from "@/contents/blog/blogType";
import Link from "next/link";
import BlogListSidebar from "./BlogListSidebar";

const BlogListMain: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 3;
    // Pagination logic
    const totalPages = Math.ceil(blogsListItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogsListItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
                            {currentBlogs.map((blog: BlogsListItem) => (
                                <div key={blog.id} className="blog-list__single">
                                    {blog.shape && (
                                        <div className="blog-list__single-shape-1">
                                            <Image src={blog.shape} width={217} height={218} alt="shape" />
                                        </div>
                                    )}

                                    <div className="blog-list__img-box">
                                        <div className="blog-list__img">
                                            <Image src={blog.image} width={692} height={361} alt={blog.title} />
                                            <div className="blog-list__plus">
                                                <Link href={blog.link}>
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
                                                    <span className="far fa-comment"></span> {blog.comments} Comments
                                                </p>
                                            </div>
                                        </div>

                                        <h3 className="blog-list__title">
                                            <Link href={blog.link}>{blog.title}</Link>
                                        </h3>

                                        <p className="blog-list__text">{blog.description}</p>

                                        <div className="blog-list__client-info">
                                            <div className="blog-list__client-img">
                                                <Image src={blog.clientImage} width={38} height={38} alt={blog.author} />
                                            </div>
                                            <div className="blog-list__client-content">
                                                <span>Post By</span>
                                                <p>{blog.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* ===== PAGINATION ===== */}
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
