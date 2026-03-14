import BannerCommon from '@/sections/common/BannerCommon';
import TeamMain from '@/sections/team/TeamMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamMain />
        </>
    );
};

export default page;