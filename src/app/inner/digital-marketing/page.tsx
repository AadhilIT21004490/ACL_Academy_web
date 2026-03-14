import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import DigitalMain from '@/sections/services/DigitalMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Digital' subtitle='Marketing' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Digital Marketing' />
            <DigitalMain />
            <CtaCommon />
        </>
    );
};

export default page;