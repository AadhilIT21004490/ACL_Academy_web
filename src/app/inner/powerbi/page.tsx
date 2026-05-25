import CtaCommon from '@/sections/about/CtaCommon';
import PowerBiBanner from '@/sections/home-two/PowerBiBanner';
import PowerBi from '@/sections/services/powerbi';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            {/* <BannerCommon title='Quantity' subtitle='Surveying' breadcrumb='Courses' breadcrumbLink='/services' breadcrumb2='Quantity Surveying' /> */}
            <PowerBiBanner />
            <PowerBi />
            <CtaCommon />
        </>
    );
};

export default page;