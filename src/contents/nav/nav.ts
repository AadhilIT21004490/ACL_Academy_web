import type { LINK, NavItemSingle } from "../footer/footerType";

export const HOME_LINKS: LINK[] = [
    { id: 1, link: "/", value: "Home One" },
    { id: 2, link: "/index2", value: "Home Two" },
    { id: 3, link: "/index3", value: "Home Three" },
    { id: 4, link: "/index-one-page", value: "Home One / Onepage" },
    { id: 5, link: "/index2-one-page", value: "Home Two / Onepage" },
    { id: 6, link: "/index3-one-page", value: "Home Three / Onepage" },
];


export const PAGES_LINKS: LINK[] = [
    { id: 1, link: "/inner/team", value: "Team" },
    { id: 2, link: "/inner/team-carousel", value: "Team Carousel" },
    { id: 3, link: "/inner/team-details", value: "Team Details" },
    { id: 4, link: "/inner/portfolio", value: "Portfolio" },
    { id: 5, link: "/inner/portfolio-details", value: "Portfolio Details" },
    { id: 6, link: "/inner/testimonials", value: "Testimonials" },
    { id: 7, link: "/inner/testimonial-carousel", value: "Testimonial Carousel" },
    { id: 8, link: "/inner/pricing", value: "Pricing" },
    { id: 9, link: "/inner/gallery", value: "Gallery" },
    { id: 10, link: "/inner/faq", value: "FAQs" },
    { id: 11, link: "/404", value: "404 Error" },
    { id: 12, link: "/coming-soon", value: "Coming Soon" },
];

//  Services Menu
export const SERVICES_LINKS: LINK[] = [
    { id: 1, link: "/inner/services", value: "Services" },
    { id: 2, link: "/inner/digital-marketing", value: "Digital Marketing" },
    { id: 3, link: "/inner/web-design-development", value: "Web Design & Development" },
    { id: 4, link: "/inner/search-engine-optimization", value: "Search Engine Optimization" },
    { id: 5, link: "/inner/design-and-branding", value: "Design & Branding" },
    { id: 6, link: "/inner/app-development", value: "App Development" },
];

//  Shop Menu
export const SHOP_LINKS: LINK[] = [
    { id: 1, link: "/inner/products", value: "Products" },
    { id: 2, link: "/inner/product-details", value: "Product Details" },
    { id: 3, link: "/inner/cart", value: "Cart" },
    { id: 4, link: "/inner/checkout", value: "Checkout" },
    { id: 5, link: "/inner/wishlist", value: "Wishlist" },
    { id: 6, link: "/inner/sign-up", value: "Sign Up" },
    { id: 7, link: "/inner/login", value: "Login" },
];

//  Blog Menu
export const BLOG_LINKS: LINK[] = [
    { id: 1, link: "/inner/blog", value: "Blog" },
    { id: 2, link: "/inner/blog-carousel", value: "Blog Carousel" },
    { id: 3, link: "/inner/blog-list", value: "Blog List" },
    { id: 4, link: "/inner/blog-details", value: "Blog Details" },
];

export const navItemsSingle: NavItemSingle[] = [
    {
        id: 1,
        linkId: 'home',
        navItem: 'Home'
    },
    {
        id: 2,
        linkId: 'about',
        navItem: 'About'
    },
    {
        id: 3,
        linkId: 'services',
        navItem: 'Services'
    },
    {
        id: 4,
        linkId: 'portfolio',
        navItem: 'Portfolio'
    },
    {
        id: 5,
        linkId: 'blog',
        navItem: 'Blog'
    },
    {
        id: 6,
        linkId: 'contact',
        navItem: 'Contact'
    },
]