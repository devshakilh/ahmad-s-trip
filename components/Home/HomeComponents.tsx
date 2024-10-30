import React from 'react';
import Slider from '../Slider';
import LightingDeals from './LightningDeals';
import PackagesInPopular from './PackagesInPopular/PackagesInPopular';
import SearchFor from './SearchFor/SearchFor';
import SearchOther from './SearchOther/SearchOther';
import TopBanner from './TopBanner.js'
import BannerHome from './HomeNew/Banner';
import DownloadShare from './DownloadShare/DownloadShare';
import TravelAgency from './TravelAgency/TravelAgency';
import Layouts from '../Layouts/Layouts';


const HomeComponents = () => {
    return (

            <div>
                {/* <TopBanner /> */}

                <BannerHome />
                <Slider />
                <LightingDeals />
                <PackagesInPopular />
                <SearchFor />
                <SearchOther />
                <DownloadShare />
                <TravelAgency />
            </div>
      
    );
};

export default HomeComponents;