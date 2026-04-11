import CtaCommon from '@/sections/about/CtaCommon';
import RICSBanner from '@/sections/home-two/RICSBanner';
import Rics from '@/sections/services/rics';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            {/* <BannerCommon title='Quantity' subtitle='Surveying' breadcrumb='Courses' breadcrumbLink='/services' breadcrumb2='Quantity Surveying' /> */}
            <RICSBanner/>
            <Rics/>
            <CtaCommon />
        </>
    );
};

export default page;