"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogListSidebar from "./BlogListSidebar";

export interface Author {
  name: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  dayOfWeek: string;
  author: Author;
  mainImage: string;
  description: string;
  tags: string[];
}

interface Props {
  post: BlogPost;
}

const BlogDetailsMain: React.FC<Props> = ({ post }) => {
  // Helper to split the large excerpt text into chunks for better styling
  // This assumes headers are separated by newlines in your JSON
  const renderContent = (text: string) => {
    return text.split("\n\n").map((chunk, index) => {
      // If the chunk is short, assume it's a heading
      if (chunk.length < 60 && !chunk.includes(" ")) {
        return <h3 key={index} className="blog-details__title-2">{chunk}</h3>;
      }
      return <p key={index} className="blog-details__text-1">{chunk}</p>;
    });
  };

  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details__left">
              <div className="blog-details__img">
                <Image src={post.mainImage} width={745} height={380} alt={post.title} />
              </div>

              <div className="blog-details__content">
                <ul className="blog-details__meta list-unstyled">
                  <li>
                    <div className="content">
                      <p>Post By</p>
                      <h4>{post.author.name}</h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-calendar-alt"></span>
                    </div>
                    <div className="content">
                      <p>{post.dayOfWeek}</p>
                      <h4>{post.date}</h4>
                    </div>
                  </li>
                </ul>

                <h3 className="blog-details__title-1">{post.title}</h3>
                
                {/* Render the dynamic content */}
                {renderContent(post.description)}

                <div className="blog-details__tag-and-share">
                  <div className="blog-details__tag">
                    <span className="blog-details__tag-title">Tags:</span>
                    <ul className="blog-details__tag-list list-unstyled">
                      {post.tags.map((tag) => (
                        <li key={tag}>
                          <Link href="#">{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="blog-details__share">
                    <span className="blog-details__share-title">Share:</span>
                    <div className="blog-details__share-list">
                      <Link href="#"><span className="icon-linkedin"></span></Link>
                      <Link href="#"><span className="icon-facebook"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlogListSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMain;