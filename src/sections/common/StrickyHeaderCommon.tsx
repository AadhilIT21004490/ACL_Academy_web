"use client"
import React, { useEffect, useState } from 'react';
import logo2 from '../../../public/assets/images/lg.png';
import { useFinrisContext } from '@/components/context/useFinrisContext';
import Link from 'next/link';
import Image from 'next/image';
import ManuList from '../manu-item/ManuList';

const StrickyHeaderCommon: React.FC = () => {
    const { setIsMobile, setIsSearch } = useFinrisContext();
    const [isStick, setIsSticky] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link href="/">
                                    <Image src={logo2} width={200} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></a>
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
                                        <a href="tel:966555091734">+966 5550 91734</a>
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
            </div>
        </div>
    );
};

export default StrickyHeaderCommon;