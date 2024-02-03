import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';

const UserBookingCard = () => {
    return (
        <>
            <div className='bookingCard'>
                    <div className='topBar'>
                        <div className='img'>
                            <Image width={400} height={200} src="https://i.ibb.co/kXVgxXY/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp" alt="" />
                        </div>
                        <div className='content'>
                            <p className='name'><Link href={'/'}>House naem heeae licus</Link></p>
                            <p className='location'>Dhaa, Bangkadesh</p>
                            <ul className='featuresGroup'>
                                <li className='feature'><IoBedOutline /> 5 Bedrooms</li>
                                <li className='feature'><IoBedOutline /> 5 Bedrooms</li>
                                <li className='feature'><IoBedOutline /> 5 Bedrooms</li>
                                <li className='feature'><IoBedOutline /> 5 Bedrooms</li>
                            </ul>
                            <ul className='fleatureBottom'>
                                <li className='feature'><IoBedOutline /> 5 Bedrooms</li>
                                <li className='feature'><IoBedOutline /> 5 Bedrooms</li>
                            </ul>
                        </div>
                        <ul className='mainFeature'>
                            <li><FaCheckSquare className='icon' size={22} /> Mohin ali </li>
                            <li><FaCheckSquare className='icon' size={22} /> Mohin ali </li>
                            <li><FaCheckSquare className='icon' size={22} /> Mohin ali </li>
                        </ul>
                    </div>
                    <hr />
                    <div className='footer'>
                        <ul className='group'>
                            <li className='iconText'>
                                <IoBedOutline />
                                <span> <span className='boldText'>Price:</span> 1000/month</span>
                            </li>
                            <li className='iconText'>
                                <IoBedOutline />
                                <span> <span className='boldText'>Price:</span> 1000/month</span>
                            </li>
                        </ul>
                    </div>
                </div> 
        </>
    );
};

export default UserBookingCard;