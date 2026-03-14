import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import DesignBrandingMain from '@/sections/services/DesignBrandingMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Design &' subtitle='Branding' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Design & Branding' />
            <DesignBrandingMain />
            <CtaCommon />
        </>
    );
};

export default page;