import React from 'react';
import Layouts from '../../components/Layouts/Layouts';
import HotelSitemap from '../../components/hotel-sitemap/HotelSitemap';

const index = () => {
    return (
        <Layouts navbarCondition footerCondition>
            <HotelSitemap />
        </Layouts>
    );
};

export default index;