'use client'
import React, { useEffect, useState } from 'react';
import "./bookings.scss"
import { useSelector } from 'react-redux';
import useAxios from '@/hooks/useAxios';
import OwnerBookingRows from '@/components/rows/OwnerBookingRows';
const BookingOwnerPage = () => {

    const [bookings, setBookings]  = useState([])
    const {user} = useSelector(state => state.user);
    const axios = useAxios();

    useEffect(() => {
        const getBookings = async () => {
            const res = await axios.get(`/owner-booking?userId=${user?._id}`);
            setBookings(res.data?.bookings);
        }
        getBookings();
    },[user?._id])

 

    return (
        <div className='allBookings'>
            <div className='ownerTable'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>House</th>
                            <th>Month duration</th>
                            <th>Member</th>
                            <th>Attest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) => <OwnerBookingRows key={index} index={index} booking={booking} /> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingOwnerPage;