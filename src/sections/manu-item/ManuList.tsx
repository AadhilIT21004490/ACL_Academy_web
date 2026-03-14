"use client"
import React from 'react';
import { BLOG_LINKS, HOME_LINKS, PAGES_LINKS, SERVICES_LINKS, SHOP_LINKS } from '@/contents/nav/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ManuList: React.FC = () => {
    const pathName: string = usePathname();

    const isCurrent = (pathArray: string[]): boolean => {
        if (pathName.includes("/inner")) {
            const cleanPath = pathName.replace(/^\/inner/, '');
            return pathArray.includes(cleanPath);
        }
        return pathArray.includes(pathName);
    };
    return (
        <ul className="main-menu__list">
            <li className={`dropdown ${isCurrent(["/", "/index2", "/index3"]) ? 'current' : ''}`}>
                <a href="#">Home</a>
                <ul>
                    {
                        HOME_LINKS.map(Item => <li key={Item?.id}  >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>

            <li className={`${isCurrent(['/about']) ? 'current' : ''}`}>
                <Link href="/inner/about">About</Link>
            </li>
            <li className={`dropdown ${isCurrent(["/team", "/team-carousel", "/team-details", "/portfolio", "/portfolio-details", "/testimonials", "/testimonial-carousel", "/pricing", "/gallery", "/faq", "/coming-soon", "/404"]) ? 'current' : ''}`}>
                <a href="#">Pages</a>
                <ul>
                    {
                        PAGES_LINKS.map(Item => <li key={Item?.id}  >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${isCurrent(["/services", "/digital-marketing", "/web-design-development", "/search-engine-optimization", "/design-and-branding", "/app-development"]) ? 'current' : ''}`}>
                <a href="#">Services</a>
                <ul>
                    {
                        SERVICES_LINKS.map(Item => <li key={Item?.id}  >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${isCurrent(["/products", "/product-details", "/cart", "/checkout", "/wishlist", "/sign-up", "/login"]) ? 'current' : ''}`}>
                <a href="#">Shop</a>
                <ul>
                    {
                        SHOP_LINKS.map(Item => <li key={Item?.id}  >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`dropdown ${isCurrent(["/blog", "/blog-carousel", "/blog-list", "/blog-details"]) ? 'current' : ''}`}>
                <a href="#">Blog</a>
                <ul>
                    {
                        BLOG_LINKS.map(Item => <li key={Item?.id}  >
                            <Link href={Item?.link}>{Item?.value}</Link>
                        </li>)
                    }
                </ul>
            </li>
            <li className={`${isCurrent(["/contact"]) ? 'current' : ''}`}>
                <Link href="/inner/contact">Contact</Link>
            </li>
        </ul>
    );
}
export default ManuList;