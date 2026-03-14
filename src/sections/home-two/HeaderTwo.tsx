"use client"
import React from 'react';
import ManuList from '../manu-item/ManuList';
import logo2 from '../../../public/assets/images/resources/logo-2.png';
import Link from 'next/link';
import Image from 'next/image';
import { useFinrisContext } from '@/components/context/useFinrisContext';

const HeaderTwo: React.FC = () => {
    const { setIsMobile, setIsSearch } = useFinrisContext();
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:15502505260">+1 (550) 250 5260</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@Finris24.com">info.aclacademy@gmail.com</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>Sri Lanka</p>
                            </div>
                        </li>
                    </ul>
                    {/* <p className="main-menu-two__top-welcome-text">Welcome to Our business Agency</p> */}
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__top-time">
                            <div className="main-menu-two__top-time-icon">
                                <span className="icon-time"></span>
                            </div>
                            <p className="main-menu-two__top-text">Mon - Fri: 09:00 - 05:00</p>
                        </div>
                        <div className="main-menu-two__social">
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/">
                                    <Image src={logo2} width={117} height={29} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <Link href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></Link>
                            <ManuList />
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu-two__call-number">
                                        <a href="tel:9288006780">+94 1234 - 5678</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link href="/inner/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderTwo;