import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import BannerTwo from '@/sections/home-two/BannerTwo';
import QSBanner from '@/sections/home-two/QSBanner';
import DigitalMain from '@/sections/services/DigitalMain';
import Quantity from '@/sections/services/quantity';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            {/* <BannerCommon title='Quantity' subtitle='Surveying' breadcrumb='Courses' breadcrumbLink='/services' breadcrumb2='Quantity Surveying' /> */}
            <QSBanner/>
            <Quantity />
            <CtaCommon />
        </>
    );
};

export default page;