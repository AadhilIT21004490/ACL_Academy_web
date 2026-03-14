import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import WebDesignMain from '@/sections/services/WebDesignMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Web Design &' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Web Design & Development' />
            <WebDesignMain />
            <CtaCommon />
        </>
    );
};

export default page;