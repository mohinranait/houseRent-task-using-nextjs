import React from 'react';
import "@/styles/globals.scss"
import Header from '@/shared/header/Header';
import Footer from '@/shared/footer/Footer';

const layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default layout;