'use client'
import React, { useState } from 'react';
import "@/styles/globals.scss"
import Header from '@/shared/header/Header';
import Footer from '@/shared/footer/Footer';
import MobileHeader from '@/shared/MobileHeader/MobileHeader';


const MainLayout = ({children}) => {
    const [isMobileToggle, setIsMobileToggle] = useState(false)
    return (
        <>
            <Header isMobileToggle={isMobileToggle} setIsMobileToggle={setIsMobileToggle} />
            <main>
                {children}
            </main>
            <Footer />
            <MobileHeader isMobileToggle={isMobileToggle} setIsMobileToggle={setIsMobileToggle} />
        </>
    );
};

export default MainLayout;