"use client"
import React from 'react';
import logo from '../../../public/assets/images/resources/logo-1.png'; 
import Link from 'next/link'; 
import Image from 'next/image';
import { useFinrisContext } from '@/components/context/useFinrisContext';
import ManuListOnePage from '../manu-item/ManuListOnePage';

const Header: React.FC = () => {
    const { setIsSidebar, setIsMobile, setIsSearch } = useFinrisContext();
    return (
        <header className="main-header">
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <Image
                                            src={logo}
                                            width={117}
                                            height={29}
                                            alt="Finris logo"
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></Link>
                                <ManuListOnePage />
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                    <span className="main-menu__search searcher-toggler-box icon-search-1"></span>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="/inner/contact" className="thm-btn main-menu__btn">Contact Us</Link>
                                </div>
                                <div className="main-menu__nav-sidebar-icon">
                                    <Link className="navSidebar-button" href="#" onClick={() => setIsSidebar(pre => !pre)}>
                                        <span className="icon-more"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;