import React from 'react';
import "./HouseCard.scss"
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { LuTriangleRight } from "react-icons/lu";

const HouseCard = ({house}) => {
    const {images, name,price,city, address,bathrooms,bedrooms, roomSize,garages, _id  } = house || {};
    console.log(house);
    return (
 
            <div className='house-card'>
                <div className='img'>
                    <Image src={images?.length > 0 ? images[0] : "https://i.ibb.co/4YhRsVF/s-2.jpg"} width={800} height={300} alt="card" />
                </div>
                <div className='content'>
                    <div>
                        <p className='title'><Link href={`/house/${_id}`}>{name}</Link></p>
                        <p className='location'> <FaMapMarkerAlt />{address}, {city}</p>
                        <div className='featureWrap'>
                            <div className='featureItem'>
                                <span><IoBedOutline /></span> {bedrooms} Bedrooms
                            </div>
                            <div className='featureItem'>
                                <span><FaBath /></span> {bathrooms} Bathroms
                            </div>
                            <div className='featureItem'>
                                <span><LuTriangleRight /></span> {roomSize} sq ft
                            </div>
                            <div className='featureItem'>
                                <span><IoCarSportOutline /></span> {garages} Garages
                            </div>
                        </div>
                    </div>
                    <div className='grow'></div>
                    <hr />
                    <div className='cart-footer'>
                        <span className='price'>$ {price}</span>
                        <div className='icons'>
                            <span className=''><MdCompareArrows size={23} /></span>
                            <span className=''><CiShare2 size={23} /></span>
                            <span className=''><CiHeart size={23} /></span>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default HouseCard;