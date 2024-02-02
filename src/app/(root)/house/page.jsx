import React from 'react';
import '@/styles/house.scss'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquareCheck } from "react-icons/fa6";
import Image from 'next/image';
import BookAppinmentForm from '@/components/forms/BookAppinmentForm';


const HousePage = () => {
    return (
        <>
            <section className="section-house">
                <div className="container">
                    <div className='main-grid'>
                        <div className="left-bar">
                            <div className='gallery'>
                                <div className='topContent'>
                                    <div className='titleBar'>
                                        <h1 className='title'>Luxury Villa House</h1>
                                        <p className='location'> <FaMapMarkerAlt />  Dhaka, Bangladesh</p>
                                    </div>
                                    <div className='priceBar'>
                                        <p className='price'>$ 200</p>
                                        <p className='area'>166.67 / sq ft</p>
                                    </div>
                                </div>

                                <p className="gallaryText">Gallery</p>

                                <div className='imagesWrap'>
                                    <div>
                                        <div className='bigImg'>
                                            <Image src={'https://i.ibb.co/4YhRsVF/s-2.jpg'} width={800} height={600} className="" alt="a" />
                                        </div>
                                    </div>
                                    <div className="imagesGallary">
                                        <span  className="smallImage">
                                            <Image src={'https://i.ibb.co/4YhRsVF/s-2.jpg'} width={100} height={100} alt="asdf" />
                                        </span>
                                        <span  className="smallImage">
                                            <Image src={'https://i.ibb.co/4YhRsVF/s-2.jpg'} width={100} height={100} alt="asdf" />
                                        </span>
                                        <span  className="smallImage">
                                            <Image src={'https://i.ibb.co/4YhRsVF/s-2.jpg'} width={100} height={100} alt="asdf" />
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="featuresHouse">
                                <p className="textTitle">Property Details</p>
                                <div className="propertyGrid">
                                    <p className="propertyitem"><span className="propertyName">Property ID:</span> <span>#5421s</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Property Type:</span> <span>Hotel</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Property Status:</span> <span>Available</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Property Price:</span> <span>120/month</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Bedroome:</span> <span>3</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Bathroome:</span> <span>3</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Room size:</span> <span>2 sq ft</span> </p>
                                    <p className="propertyitem"><span className="propertyName">Garage:</span> <span>3</span> </p>
                                </div>
                                <p className="textTitle">Amenities</p>
                                <div className="keyFeatures">
                                    <div className="item">
                                        <FaSquareCheck className="icon" size={22} /><span>Apple</span>
                                    </div>
                                    <div className="item">
                                        <FaSquareCheck className="icon" size={22} /><span>Apple</span>
                                    </div>
                                    <div className="item">
                                        <FaSquareCheck className="icon" size={22} /><span>Apple</span>
                                    </div>
                                    <div className="item">
                                        <FaSquareCheck className="icon" size={22} /><span>Apple</span>
                                    </div>
                                    <div className="item">
                                        <FaSquareCheck className="icon" size={22} /><span>Apple</span>
                                    </div>
                                </div>
                            </div>


                            <div className='details'>
                                <p className='textTitle'>Description</p>
                                <div className='text'>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis facilis optio vel nemo consequuntur quis aliquam quam voluptatem excepturi fuga.
                                </div>
                            </div>


                        </div>
                        <div className="right-bar">
                            <div className='bookAppinmentDiv'>
                                <p className='textTitle'>Booking Inforamtion</p>
                                <BookAppinmentForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default HousePage;