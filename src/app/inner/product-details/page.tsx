import BannerCommon from '@/sections/common/BannerCommon';
import Description from '@/sections/products/Description';
import Details from '@/sections/products/Details';
import React from 'react';

const page:React.FC = () => {
    return (
        <>
            <BannerCommon title='Product' subtitle='Details' breadcrumb='Product Details' />
            <Details />
            <Description />
        </>
    );
};

export default page;