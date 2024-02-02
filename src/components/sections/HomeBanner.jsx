import React from 'react';

const HomeBanner = () => {
    return (
        <section id='banner'>
            <div className='overlay'></div>
            <div>
                <div className="container">
                    <div className='bannerWrap'>
                        <div className='content-wrap'>
                            <h1 className='title'>Find your drime appoinments</h1>
                            <p className='text'>We Have Over Million Properties For You.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;