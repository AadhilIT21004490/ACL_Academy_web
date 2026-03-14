import BannerCommon from '@/sections/common/BannerCommon';
import ProductMain from '@/sections/products/ProductMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Products' breadcrumb='Our Products' />
            <ProductMain />
        </>
    );
};

export default page;