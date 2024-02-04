
import React from 'react';
import '@/styles/house.scss'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquareCheck } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Image from 'next/image';
import BookAppinmentForm from '@/components/forms/BookAppinmentForm';
import ImageGallary from './ImageGallary';


export const metadata = {
    title: "House appoinment management ",
    description: "",
};

const SingleHousePage = async ({params}) => {

    const  {id} = params;
    const res = await fetch(`https://rent-houses-server-nextjs.vercel.app/api/v1/house/${id}`)
    const {house} = await res.json()
    metadata.title = house?.name;
   
    return (
        <>
            <section className="section-house">
                <div className="container">
                    <div className='main-grid'>
                        <div className="left-bar">
                            <div className='gallery'>
                                <div className='topContent'>
                                    <div className='titleBar'>
                                        <h1 className='title'>{house?.name}</h1>
                                        <p className='location'> <FaMapMarkerAlt />  {house?.address}, {house?.city}</p>
                                    </div>
                                    <div className='priceBar'>
                                        <p className='price'>$ {house?.price}</p>
                                        <p className='area'>{house?.roomSize} / sq ft</p>
                                    </div>
                                </div>

                                <p className="gallaryText">Gallery</p>

                                <ImageGallary house={house} />
                            </div>


                            <div className="featuresHouse">
                                <p className="textTitle">Property Details</p>
                                <div className="propertyGrid">
                                    <p className="propertyitem"><span className="propertyName">Property ID:</span> <span>#{house?.property?.propertyId}</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Property Type:</span> <span>{house?.property?.propertyType}</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Property Status:</span> <span>{house?.property?.propertyStatus}</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Property Price:</span> <span>{house?.price}/month</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Bedroome:</span> <span>{house?.bedrooms}</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Bathroome:</span> <span>{house?.bathrooms}</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Room size:</span> <span>{house?.roomSize} sq ft</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Garage:</span> <span>{house?.garages}</span> </p>
                                </div>
                                <p className="textTitle">Amenities</p>
                                <div className="keyFeatures">
                                    {
                                        house?.extraFeatures?.map((item,i) =>    <div key={i} className="item">
                                        <FaSquareCheck className="icon" size={22} /><span>{item}</span>
                                    </div>)
                                    }
                                </div>
                            </div>


                            <div className='details'>
                                <p className='textTitle'>Description</p>
                                <div className='text'>
                                   {house?.description}
                                </div>
                            </div>


                        </div>
                        <div className="right-bar">
                            <div className='bookAppinmentDiv'>
                                <p className='textTitle'>Booking Inforamtion</p>
                                <BookAppinmentForm id={id} />
                            </div>
                            {/* Agent information */}
                            <div className='agentInformation'>
                                <div className='header'>
                                    <p className='headerText'>Agent Information</p>
                                </div>
                                <div className='authorInfo'>
                                    <div className='img'>
                                        <Image width={100} height={100} src={house?.owner?.avater || ''} alt="name" />
                                    </div>
                                    <div>
                                        <p className='agentName'>{house?.owner?.name}</p>
                                        <p className='agentType'>Agent of property</p>
                                    </div>
                                </div>
                                <ul className="typoGroup">
                                    <li className="typo"> <FaMapMarkerAlt className="icon" /> <span className="">{house?.owner?.address}, {house?.owner?.city}</span></li>
                                    <li className="typo"> <IoMdCall  className="icon" /> <span className="">{house?.owner?.phone}</span></li>
                                    <li className="typo"> <MdOutlineMail className="icon" /> <span className="">{house?.owner?.email}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default SingleHousePage;