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
            <BannerCommon title='RICS' subtitle='APC Full Training - Coming Soon' breadcrumb='Courses' breadcrumbLink='/inner/rics-full' breadcrumb2='RICS APC Full Training' />
            {/* <AIQSBanner/>
            <Aiqs />
            <CtaCommon /> */}
        </>
    );
};

export default page;