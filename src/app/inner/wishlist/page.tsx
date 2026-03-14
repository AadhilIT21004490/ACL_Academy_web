import BannerCommon from '@/sections/common/BannerCommon';
import WishlistMain from '@/sections/products/WishlistMain';
import React from 'react';

const page: React.FC = () => {
    return (
        <>
            <BannerCommon title='Wishlist' subtitle='Page' breadcrumb='Wishlist' />
            <WishlistMain />
        </>
    );
};

export default page;