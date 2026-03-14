import BannerCommon from '@/sections/common/BannerCommon';
import LoginMain from '@/sections/products/LoginMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Login' subtitle='Page' breadcrumb='Login' />
            <LoginMain />
        </>
    );
};

export default page;