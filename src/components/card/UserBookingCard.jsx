import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiMoneyBill } from 'react-icons/ci';
import { FaBath, FaCheckSquare, FaUsers } from 'react-icons/fa';
import { FaChildDress } from 'react-icons/fa6';
import { IoBedOutline, IoCarSportOutline } from 'react-icons/io5';
import { LuTriangleRight } from 'react-icons/lu';
import { BsCalendar2Date } from "react-icons/bs";

const UserBookingCard = ({house,deleteBooking,handlePayment}) => {
    const {houseImage,houseName,extraFeatures,payStatus,houseId, startMonth,familyMember,price,children,_id,totalMonths, houseAddress,bedrooms,bathrooms,roomSize,garages,endMonth} = house || {};
    
    
    return (
        <>
            <div className='bookingCard'>
                    <div className='topBar'>
                        <div className='img'>
                            {
                                payStatus == 'paid' ? 
                                <span className='payStatus paid'>Paid</span>
                                :  <span className='payStatus unpaid'>Unpaid</span>
                            }
                          
                            <Image width={400} height={200} src={ houseImage || "https://i.ibb.co/kXVgxXY/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp"} alt="" />
                        </div>
                        <div className='content'>
                            <p className='name'><Link href={`/house/${houseId}`}>{houseName}</Link></p>
                            <p className='location'>Dhaa, Bangkadesh</p>
                            <ul className='featuresGroup'>
                                <li className='feature'><IoBedOutline /> {bedrooms} Bedrooms</li>
                                <li className='feature'><FaBath /> {bathrooms} Bathrooms</li>
                                <li className='feature'><LuTriangleRight /> {roomSize} sq rt</li>
                                <li className='feature'><IoCarSportOutline /> {garages} Garages</li>
                            </ul>
                            <ul className='fleatureBottom'>
                                <li className='feature'><FaUsers /> {familyMember} Members</li>
                                <li className='feature'><FaChildDress /> {children} Childrens</li>
                            </ul>
                        </div>
                        <ul className='mainFeature'>
                            {
                                extraFeatures?.map((item,index) =>   <li key={index}><FaCheckSquare className='icon' size={22} />{item}</li>)
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className='footer'>
                        <ul className='group fItem'>
                            <li className='iconText'>
                                <CiMoneyBill />
                                <span> <span className='boldText'>Price:</span>$ {price}/month</span>
                            </li>
                            <li className='iconText'>
                                <BsCalendar2Date />
                                <span> <span className='boldText'>Last Month:</span> {endMonth}</span>
                            </li>
                            <li className='iconText'>
                                <CiMoneyBill />
                                <span> <span className='boldText'>Total Price:</span> $ {price*totalMonths}</span>
                            </li>
                        </ul>
                        <div className=' fItem'>
                            <button onClick={() =>handlePayment(_id, houseId, payStatus)} className='button payment' type='button'> {payStatus == 'paid'? "Paymented":'Pay now'} </button>
                            {
                                payStatus !== 'paid' &&   <button onClick={() => deleteBooking(_id)} className='button' type='button'>Delete</button>
                            }
                          
                        </div>
                    </div>
                </div> 
        </>
    );
};

export default UserBookingCard;