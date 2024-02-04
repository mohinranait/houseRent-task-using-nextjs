'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdCompareArrows, MdFavorite } from "react-icons/md";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { LuTriangleRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./HouseCard.scss"
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import useAxios from '@/hooks/useAxios';
const HouseCard = ({house}) => {
    const {push} = useRouter();
    const [favoriteMatch, setFavoriteMatch]  = useState({})
    const {images, name,price,city, address,bathrooms,bedrooms, roomSize,garages, _id  } = house || {};
    const {user} = useSelector(state => state.user);
    const axoisPublic = useAxiosPublic()
    const axios = useAxios()


    const handleFavoriteMethod = async () => {
        if(!user?._id){
            toast.warning("Please login");
            push('/login');
            return;
        }

        try {
            if(favoriteMatch){
                // Delete favorite card
                const res = await axios.delete(`/favorite/${favoriteMatch?._id}?userId=${user?._id}`)
                if(res.data.success){
                    setFavoriteMatch({})
                }
            }else{
                // add favorite house
                const res = await axios.post(`/favorite?userId=${user?._id}`,{
                    user : user?._id,
                    house : _id,
                })
                if(res.data.success){
                    setFavoriteMatch(res.data?.favorite)
                }
            }
           
           
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        const existsFavorite = async () => {
            const res = await axoisPublic.get(`/favorite-house?houseId=${_id}&userId=${user?._id}`);
            if(res.data?.success){
                setFavoriteMatch(res.data?.favorites)
            }
        }
        if(user?._id) existsFavorite();
    },[_id,user])


    return (
 
            <div className='house-card'>

                <div className='img'>
                    <div>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
                        {
                            images?.map((img,idx) =>   <SwiperSlide key={idx}>
                            <div>
                                <Image src={img}  width={800} height={300} alt="card" />
                            </div>
                            </SwiperSlide> )
                        }
                        </Swiper>
                    </div>
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
                            
                            <span onClick={() => handleFavoriteMethod()} className=''>
                                {
                                    favoriteMatch?._id ?   <MdFavorite size={23} /> :   <CiHeart size={23} />
                                }
                              
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default HouseCard;