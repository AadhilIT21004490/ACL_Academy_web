import BannerCommon from '@/sections/common/BannerCommon';
import FaqMain from '@/sections/faq/FaqMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Faq' breadcrumb='Our Faq' />
            <FaqMain />
        </>
    );
};

export default page;