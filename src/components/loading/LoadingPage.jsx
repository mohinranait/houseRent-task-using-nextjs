import Image from 'next/image';
import React from 'react';
import "./LoadingPage.scss"
const LoadingPage = () => {
    return (
        <div className='loadingImage'>
            <div className='wrap'>
                <Image className='img' src={'https://i.gifer.com/ZKZg.gif'} width={100} height={100} alt='loading' />
            </div>
        </div>
    );
};

export default LoadingPage;