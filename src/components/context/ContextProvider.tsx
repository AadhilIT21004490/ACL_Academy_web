"use client"
import React, { useState } from 'react';
import FinrisContext from './FinrisContext';
import { contextType } from './contextType';

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleVideoClick = (
        e: React.MouseEvent<HTMLAnchorElement>, videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    };
    const info: contextType = {
        isMobile, setIsMobile,
        isSidebar, setIsSidebar,
        isSearch, setIsSearch,
        showVideoPopup, setShowVideoPopup,
        currentVideoUrl, setCurrentVideoUrl,
        handleVideoClick,
        activeSection, setActiveSection
    }

    return (
        <FinrisContext.Provider value={info}>
            {children}
        </FinrisContext.Provider>
    );
};

export default ContextProvider;