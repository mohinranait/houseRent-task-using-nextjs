import React from 'react';
import HouseCard from '../card/HouseCard';

const HomeHouseSection = () => {
    return (
        <section id='houseSection'>
            <div className="container">
                <div className="sectionTitle ">
                    <h3 className="upline">Featured Properties</h3>
                    <p className="subline">These are our featured properties</p>
                </div>
                <div className='houseGrid'>
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                    <HouseCard />
                </div>
            </div>
        </section>
    );
};

export default HomeHouseSection;