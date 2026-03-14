"use client"
import React from 'react';
import VideoPopup from '../elements/VideoPopup';
import ScrollToTop from '../elements/ScrollToTop';
import CustomCursor from '../elements/CustomCursorTwo';
import SearchProp from '../elements/SearchProp';
import SideBar from '../elements/SideBar';
import { useFinrisContext } from '../context/useFinrisContext';
import MobileNav from '../elements/MobileNav';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isMobile, isSearch } = useFinrisContext();
    return (
        <div className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
            <CustomCursor enabled />
            {children}
            <MobileNav />
            <SideBar />
            <SearchProp />
            <ScrollToTop />
            <VideoPopup />
        </div>
    );
};

export default CustomLayout;