import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import PortfolioDMain from '@/sections/portfolio/PortfolioDMain';
import React from 'react';

const page:React.FC = () => {
    return (
        <>
            <BannerCommon title='Portfolio' subtitle='Details' breadcrumb='Portfolio Details' />
            <PortfolioDMain />
            <CtaCommon />
        </>
    );
};

export default page;