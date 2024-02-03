
import React from 'react';

import "@/styles/home.scss"
import HomeBanner from '@/components/sections/HomeBanner';
import HomeHouseSection from '@/components/sections/HomeHouseSection';



const HomePage = () => {
    

    return (
        <>
           <HomeBanner />
           <HomeHouseSection />
           
        </>
    );
};

export default HomePage;