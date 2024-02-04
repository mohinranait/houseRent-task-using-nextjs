import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBath, FaCheckSquare, FaUsers } from 'react-icons/fa';
import { IoBedOutline, IoCarSportOutline } from 'react-icons/io5';
import { LuTriangleRight } from 'react-icons/lu';

const FavoriteCard = ({favorite}) => {
    const {images,name,extraFeatures,price,_id,city, address,bedrooms,bathrooms,roomSize,garages} = favorite || {};
    return (
        <>
            <div className='bookingCard'>
                <div className='topBar'>
                    <div className='img'>
                        <Image width={400} height={200} src={ images[0] || "https://i.ibb.co/kXVgxXY/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp"} alt="" />
                    </div>
                    <div className='content'>
                        <p className='name'><Link href={`/house/${_id}`}>{name}</Link></p>
                        <p className='location'>{address}, {city}</p>
                        <ul className='featuresGroup'>
                            <li className='feature'><IoBedOutline /> {bedrooms} Bedrooms</li>
                            <li className='feature'><FaBath /> {bathrooms} Bathrooms</li>
                            <li className='feature'><LuTriangleRight /> {roomSize} sq rt</li>
                            <li className='feature'><IoCarSportOutline /> {garages} Garages</li>
                        </ul>
                       
                    </div>
                    <ul className='mainFeature'>
                        {
                            extraFeatures?.slice(0,4)?.map((item,index) =>   <li key={index}><FaCheckSquare className='icon' size={22} />{item}</li>)
                        }
                    </ul>
                </div>
                
            </div>    
        </>
    );
};

export default FavoriteCard;