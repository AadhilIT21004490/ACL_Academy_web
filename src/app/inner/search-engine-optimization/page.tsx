import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import SearchEngineMain from '@/sections/services/SearchEngineMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Search Engine' subtitle='Optimization' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Search Engine Optimization' />
            <SearchEngineMain />
            <CtaCommon />
        </>
    );
};

export default page;