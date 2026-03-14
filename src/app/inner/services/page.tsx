import BannerCommon from '@/sections/common/BannerCommon';
import ContactInner from '@/sections/services/ContactInner';
import FaqInner from '@/sections/services/FaqInner';
import PricingInner from '@/sections/services/PricingInner';
import ServiseInner from '@/sections/services/ServiseInner';
import WhyChooseInner from '@/sections/services/WhyChooseInner';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Services' breadcrumb='Our Services' />
            <ServiseInner />
            <WhyChooseInner />
            <ContactInner />
            <FaqInner />
            <PricingInner />
        </>
    );
};

export default page;