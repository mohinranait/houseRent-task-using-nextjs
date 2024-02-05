'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import '@/styles/Testmonial.scss'
import Image from 'next/image';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Testmonial = () => {
    const {testimonials}  = useSelector(state => state?.testimonials);

    return (
        <section className='testMonial'>
            <div className="container">
                <div className="sectionTitle ">
                    <h3 className="upline">Testimonials</h3>
                    <p className="subline">These are our team</p>
                </div>
                <div>
                    <div className='wrapBox'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
                            {
                                testimonials?.map(testMonial =>  <SwiperSlide key={testMonial?._id}>
                                    <div className='wrap'>
                                        <div className='imageBox'>
                                            <div className='img'>
                                                <Image width={200} height={200} src={testMonial?.avater} alt="image" />
                                            </div>
                                        </div>
                                        <div className='content'>
                                            <h4 className='title'>{testMonial?.title}</h4>
                                            <p className='desc'>{testMonial?.description}</p>
                                            <p className='nameBox'>
                                                <span className='name'>{testMonial?.name}</span>
                                                <br />
                                                <Rating 
                                                 emptySymbol={<FaRegStar size={14} className='icon' />}
                                                 fullSymbol={<FaStar size={14} className='icon' />}
                                                 initialRating={testMonial?.rating}
                                                 readonly
                                                />
                                            </p>

                                        </div>
                                    </div>
                                </SwiperSlide> )
                            }
                           
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testmonial;