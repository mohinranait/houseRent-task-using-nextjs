
import React from 'react';

import "@/styles/home.scss"
import HomeBanner from '@/components/sections/HomeBanner';
import HomeHouseSection from '@/components/sections/HomeHouseSection';
import Testmonial from '@/components/sections/Testmonial';



const HomePage = () => {
    

    return (
        <>
           <HomeBanner />
           <HomeHouseSection />
           <Testmonial />
        </>
    );
};

export default HomePage;