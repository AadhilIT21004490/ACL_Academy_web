import BannerCommon from '@/sections/common/BannerCommon';
import TeamCarouselMain from '@/sections/team/TeamCarouselMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Team' subtitle='Carousel' breadcrumb='Team Carousel' />
            <TeamCarouselMain />
        </>
    );
};

export default page;