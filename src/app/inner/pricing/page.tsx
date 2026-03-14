import BannerCommon from '@/sections/common/BannerCommon';
import PricingMain from '@/sections/pricing/PricingMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Pricing' breadcrumb='Our Pricing' />
            <PricingMain />
        </>
    );
};

export default page;