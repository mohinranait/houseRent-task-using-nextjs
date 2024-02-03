'use client'
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./userBookingCard.scss"
import UserBookingCard from '@/components/card/UserBookingCard';
import { toast } from 'react-toastify';

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

    const deleteBooking = async (id) => {

        try {
            const res = await axios.delete(`/remove-booking/${id}?userId=${user?._id}`);
            if(res.data?.success){
                const filters = bookings?.filter(book => book?._id !== id )
                setBookings(filters)
                toast.success("Remove success")
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <div>
            <div className='allBooking'>
                {
                    bookings?.map(house => <UserBookingCard key={house?._id} deleteBooking={deleteBooking} house={house} /> )
                }
            </div>
        </div>
    );
};

export default UserDashbaordPage;