import Link from 'next/link';
import React from 'react';
import "./logo.scss"
const Logo = () => {
    return (
        <Link href={'/'}>
            <span className='first'>Home</span><span className='second'>Rent</span>
        </Link>
    );
};

export default Logo;