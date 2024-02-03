'use client'
import useAxios from '@/hooks/useAxios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import "./userBookingCard.scss"
import UserBookingCard from './UserBookingCard';
const UserDashbaordPage = () => {
    const {user} = useSelector(state => state.user)
    const axios= useAxios();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const getBookings = async () => {
            const res = await axios.get(`/bookings?userId=${user?._id}`);
            console.log(res.data); 
            setBookings(res.data?.bookings); 
        }
         if(user?._id) getBookings();
    },[])

    // const deleteBooking = async (id) => {
    //     console.log(id);
    //     try {
    //         const res = await axios.delete(`/remove-booking/${id}?userId=${user?._id}`);
    //         if(res.data?.success){
    //             const filters = bookings?.filter(book => book?._id !== id )
    //             setBookings(filters)
    //             toast.success("Remove success")
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    return (
        <div>
            <div className='allBooking'>
               <UserBookingCard />
               <UserBookingCard />
               <UserBookingCard />
            </div>
        </div>
    );
};

export default UserDashbaordPage;