import React from 'react';
import "./HouseCard.scss"
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { LuTriangleRight } from "react-icons/lu";

const HouseCard = () => {
    return (
 
            <div className='house-card'>
                <div className='img'>
                    <Image src="https://i.ibb.co/4YhRsVF/s-2.jpg" width={100} height={100} alt="card" />
                </div>
                <div className='content'>
                    <div>
                        <p className='title'><Link href={'/'}>Home name heare</Link></p>
                        <p className='location'> <FaMapMarkerAlt />  Dhaka,Bangladesh</p>
                        <div className='featureWrap'>
                            <div className='featureItem'>
                                <span><IoBedOutline /></span> 2 Bedrooms
                            </div>
                            <div className='featureItem'>
                                <span><FaBath /></span> 1 Bathroms
                            </div>
                            <div className='featureItem'>
                                <span><LuTriangleRight /></span> 110 sq ft
                            </div>
                            <div className='featureItem'>
                                <span><IoCarSportOutline /></span> 3 Garages
                            </div>
                        </div>
                    </div>
                    <div className='grow'></div>
                    <hr />
                    <div className='cart-footer'>
                        <span className='price'>$ 12</span>
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