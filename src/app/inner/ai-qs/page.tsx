import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import BannerTwo from '@/sections/home-two/BannerTwo';
import AIQSBanner from '@/sections/home-two/AIQSBanner';
import DigitalMain from '@/sections/services/DigitalMain';
import Aiqs from '@/sections/services/aiqs';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            {/* <BannerCommon title='Quantity' subtitle='Surveying' breadcrumb='Courses' breadcrumbLink='/services' breadcrumb2='Quantity Surveying' /> */}
            <AIQSBanner/>
            <Aiqs />
            <CtaCommon />
        </>
    );
};

export default page;