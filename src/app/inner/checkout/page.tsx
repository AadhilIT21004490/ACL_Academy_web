import BannerCommon from '@/sections/common/BannerCommon';
import CheckoutMain from '@/sections/products/CheckoutMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Checkout' subtitle='Page' breadcrumb='Checkout' />
            <CheckoutMain />
        </>
    );
};

export default page;