import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import AppDevelopmentMain from '@/sections/services/AppDevelopmentMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='App' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='App Development' />
            <AppDevelopmentMain />
            <CtaCommon />
        </>
    );
};

export default page;