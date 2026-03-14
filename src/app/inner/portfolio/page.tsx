import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import PortfolioMain from '@/sections/portfolio/PortfolioMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Portfolio' breadcrumb='Our Portfolio' />
            <PortfolioMain />
            <CtaCommon />
        </>
    );
};

export default page;