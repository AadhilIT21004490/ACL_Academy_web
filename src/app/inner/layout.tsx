import FooterCommon from '@/sections/common/FooterCommon';
import HeaderCommon from '@/sections/common/HeaderCommon';
import StrickyHeaderCommon from '@/sections/common/StrickyHeaderCommon';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            {children}
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default layout;