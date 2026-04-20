"use client"
import React, { useState } from 'react';
import logo from "../../../public/assets/images/lg.png";
import { motion } from "framer-motion"
import { useFinrisContext } from '../context/useFinrisContext';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_LINKS, HOME_LINKS, navItemsSingle, SERVICES_LINKS} from '@/contents/nav/nav';
import { NavItemSingle } from '@/contents/footer/footerType';
import { usePathname } from 'next/navigation';
const MobileNav: React.FC = () => {
    const { isMobile, setIsMobile, activeSection } = useFinrisContext();
    const pathName = usePathname(); // use for single nav
    const [isHomeOpen, setIsHomeOpen] = useState<boolean>(false)
    const [isPageOpen, setIsPagesOpen] = useState<boolean>(false)
    const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false)
    const [isShopOpen, setIsShopOpen] = useState<boolean>(false)
    const [isBlogOpen, setIsBlogOpen] = useState<boolean>(false)


    const handleSinglePageScroll = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        closeMobileState()

        if (!id) return;
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 70;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    const closeNav = () => {
        setIsMobile((pre) => !pre);
    };
    const closeMobileState = () => {
        setIsMobile(false)
        setIsPagesOpen(false)
        setIsServiceOpen(false)
        setIsShopOpen(false)
        setIsBlogOpen(false)
    }
    // Single nav
    const isCurrent = (pathArray: string[]): boolean => {
        return pathArray.includes(pathName);
    };

    if (isCurrent(["/index-one-page", "/index2-one-page", "/index3-one-page"])) return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content" style={{ width: '300px' }}>
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" onClick={closeNav} aria-label="logo image">
                        <Image src={logo} width="140" height={35} alt="Finris Logo" />
                    </Link>
                </div>

                {/* ======= NAV MENU ======= */}
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        {
                            navItemsSingle.map((item: NavItemSingle) => <li className={`${activeSection === item?.linkId ? 'current' : ''}`} key={item?.linkId}>
                                <Link
                                    href={`#${item.linkId}`}
                                    onClick={(e) => handleSinglePageScroll(e, item.linkId)}
                                >
                                    {item.navItem}
                                </Link>
                            </li>)
                        }
                    </ul>
                </div>
                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:aclacademy123@gmail.com">aclacademy123@gmail.com</Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="tel:966555091734">+966 5550 91734</Link>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content" style={{ width: '300px' }}>
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" onClick={closeNav} aria-label="logo image">
                        <Image src={logo} width="140" height={35} alt="Finris Logo" />
                    </Link>
                </div>

                {/* ======= NAV MENU ======= */}
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        {/* <li className="dropdown">
                            <Link href="#">
                                <span className={`${isHomeOpen ? 'hoverColor' : ''}`}>Home</span>
                                <button onClick={() => setIsHomeOpen(!isHomeOpen)} type="button" className={`${isHomeOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isHomeOpen ? 'none' : 'block'}` }}>
                                {
                                    HOME_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.1 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link href={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }
                            </ul>
                        </li> */}
                        <li><Link onClick={closeMobileState} href="/#">Home</Link></li>


                        <li><Link onClick={closeMobileState} href="/about">About</Link></li>

                        {/* --- MOBILE MENU PAGES LINKS HIDDEN --- */}

                        {/* <li className="dropdown">
                            <Link href="#">
                                <span className={`${isPageOpen ? 'hoverColor' : ''}`}>Pages</span>
                                <button onClick={() => setIsPagesOpen(!isPageOpen)} type="button" className={`${isPageOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isPageOpen ? 'none' : 'block'}` }}>
                                {
                                    PAGES_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.1 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link href={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }
                            </ul>
                        </li> */}

                        <li className="dropdown">
                            <Link href="#">
                                <span className={`${isServiceOpen ? 'hoverColor' : ''}`}>Courses</span>
                                <button onClick={() => setIsServiceOpen(pre => !pre)} type="button" className={`${isServiceOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isServiceOpen ? 'none' : 'block'}` }}>
                                {
                                    SERVICES_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.1 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link href={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }

                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link href="#">
                                <span className={`${isBlogOpen ? 'hoverColor' : ''}`}>Blog</span>
                                <button onClick={() => setIsBlogOpen(pre => !pre)} type="button" className={`${isBlogOpen ? 'expanded' : ''}`}>
                                    <i className='fa fa-angle-down '></i>
                                </button>
                            </Link>
                            <ul style={{ display: `${!isBlogOpen ? 'none' : 'block'}` }}>
                                {
                                    BLOG_LINKS.map(Item => <motion.li
                                        initial={{ x: -70, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.2 * Item?.id,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ amount: 0.01, once: true }}
                                        key={Item?.id}  >
                                        <Link href={Item?.link} onClick={closeMobileState}>{Item?.value}</Link>
                                    </motion.li>)
                                }
                            </ul>
                        </li>

                        <li><Link onClick={closeMobileState} href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:aclacademy123@gmail.com">aclacademy123@gmail.com</Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="tel:966555091734">+966 5550 91734</Link>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default MobileNav;
