import BannerCommon from '@/sections/common/BannerCommon';
import CartMain from '@/sections/products/CartMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Cart' subtitle='Page' breadcrumb='cart' />
            <CartMain />
        </>
    );
};

export default page;