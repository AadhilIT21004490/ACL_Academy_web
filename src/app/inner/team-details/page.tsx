import CtaCommon from '@/sections/about/CtaCommon';
import BannerCommon from '@/sections/common/BannerCommon';
import TeamDetailsMain from '@/sections/team/TeamDetailsMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Team' subtitle='Details' breadcrumb='Team Member' />
            <TeamDetailsMain />
            <CtaCommon />
        </>
    );
};

export default page;