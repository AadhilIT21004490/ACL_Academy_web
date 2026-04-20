"use client";
import blogLp1 from "../../../public/assets/images/blog/lp-1-1.jpg";
import blogLp2 from "../../../public/assets/images/blog/lp-1-2.jpg";
import blogLp3 from "../../../public/assets/images/blog/lp-1-3.jpg";
import blogIcon from "../../../public/assets/images/icon/sidebar-title-icon.png";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface RecentPost {
    id: number;
    image: string | StaticImageData;
    title: string;
    date: string;
    link: string;
}

const BlogListSidebar: React.FC = () => {

    const recentPosts: RecentPost[] = [
        {
            id: 1,
            image: blogLp1,
            title: "Adapting to Digital Marketing Trends: Staying Ahead of the Curve",
            date: "March 25, 2025",
            link: "/inner/blog-details",
        },
        {
            id: 2,
            image: blogLp2,
            title: "Standing Out in a Competitive Market",
            date: "Aug 15, 2025",
            link: "/inner/blog-details",
        },
        {
            id: 3,
            image: blogLp3,
            title: "The Importance of Accurate Performance Reporting",
            date: "July 22, 2025",
            link: "/inner/blog-details",
        },
    ];

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
                    <ul className="sidebar__post-list list-unstyled">
                        {recentPosts.map((post: RecentPost) => (
                            <li key={post.id}>
                                <div className="sidebar__post-image">
                                    <Image src={post.image} width={80} height={80} alt={post.title} />
                                </div>
                                <div className="sidebar__post-content">
                                    <h3>
                                        <Link href={post.link}>{post.title}</Link>
                                    </h3>
                                    <p className="sidebar__post-date">
                                        <span className="fas fa-calendar-alt"></span> {post.date}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default BlogListSidebar;