import BannerCommon from '@/sections/common/BannerCommon';
import ContactMain from '@/sections/contact/ContactMain';
import React from 'react';

const page:React.FC = () => {
    return (
        <>
            <BannerCommon title='Contact' subtitle='Us' breadcrumb='Contact Us' />
            <ContactMain />
        </>
    );
};

export default page;