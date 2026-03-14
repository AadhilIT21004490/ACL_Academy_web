import BannerCommon from '@/sections/common/BannerCommon';
import SignupMain from '@/sections/products/SignupMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Sign Up' subtitle='Page' breadcrumb='Sign Up' />
            <SignupMain />
        </>
    );
};

export default page;