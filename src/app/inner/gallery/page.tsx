import BannerCommon from '@/sections/common/BannerCommon';
import GalleryMain from '@/sections/gallery/GalleryMain';
import React from 'react';

const page :React.FC= () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Gallery' breadcrumb='Our Gallery' />
            <GalleryMain />
        </>
    );
};

export default page;