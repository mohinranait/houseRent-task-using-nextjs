'use client'
import React, { useEffect, useState } from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import { useSelector } from 'react-redux';
import useAxios from '@/hooks/useAxios';
import { usePathname, useRouter } from 'next/navigation';

import { toast } from 'react-toastify';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const BookAppinmentForm = ({id}) => {
    const axiosPublic = useAxiosPublic()
    const {user} = useSelector(state => state.user);
    const [house, setHouse] = useState({});
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(true);
    const [error, setError] = useState('')
    const [houseAvilable, setHouseAvailable] = useState(true)
    const axios = useAxios();
  
    const [booking, setBooking] = useState({
        user: user?._id,
        name: user?.name,
        email: user?.email,
        phone: user?.phone || '',
        familyMember: '',
        children: '',
        message: '',
        startMonth: '',
        endMonth: '',
        houseId: house?._id,
        price: house?.price || '',
        houseName: house?.name,
        houseAddress: house?.address || '',
        houseCity: house?.city || '',
        houseImage: house?.images?.length > 0 ? house?.images[0] : '',
        bedrooms:house?.bedrooms,
        bathrooms:house?.bathrooms,
        roomSize:house?.roomSize,
        garages:house?.garages,
        extraFeatures: house?.extraFeatures,
        houseOwner : house?.owner,
        totalMonths : null 
    })
    const pathname = usePathname();
    const router = useRouter();

    

    function validateBDPhoneNumber(phoneNumber) {
        let pattern = /^(?:\+8801|01)[3-9]\d{8}$/;
        return pattern.test(phoneNumber);
    }


    const handleAppoinment = async e => {
        e.preventDefault();
      

        if(!user?._id){
            const path = pathname;
            localStorage.setItem('path', JSON.stringify(path));
            router.push('/login')
        }

        const {phone,children, familyMember,totalMonths,startMonth} = booking;
        if (!validateBDPhoneNumber(phone)) {
            return toast.warning("BD number is invalid") 
        }

       
        if(phone?.length == 0 || children == 0 || familyMember == 0 || !totalMonths || !startMonth ){
            toast.warning("All fileds required");
            return;
        }

      

        const startDate = new Date(startMonth);
        // const startDateFormate = new Date(startMonth);
        startDate.setMonth(startDate.getMonth() + totalMonths )
        const dateFormate = startDate.toLocaleString().split(',')[0];
        // console.log(startDateFormate.toLocaleDateString(),house?.bookedDate);

        if( startDate.toLocaleDateString() < house?.bookedDate ){
            toast.warning(`Select your start date after ${house?.bookedDate}`)
            return;
        }

        try {
            setLoading(true)
            const bookingObje = {
                ...booking,
                endMonth: dateFormate
            }
            const res = await axios.post(`/booking?userId=${user?._id}`, bookingObje);

            if(res.data?.message === 'Created'){
                toast.success("Booking Successfull")
                setLoading(false)
                router.push('/user/dashboard')
            }else if(res.data?.message === 'Your booking space is not available'){
                setLoading(false)
                toast.error(res.data?.message)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    }

    useEffect(() => {
        const existsBooking = async () => {
            const res  = await axios.get(`/exists-booking/${house?._id}?userId=${user?._id}`)
            setBook(res.data?.booking);
        }
        existsBooking();
    },[house])

    useEffect(() => {
        setBooking({
            user: user?._id,
            name: user?.name,
            email: user?.email,
            phone: user?.phone || '',
            familyMember: '',
            children: '',
            message: '',
            startMonth: '',
            endMonth: '',
            houseId: house?._id,
            price: house?.price || '',
            houseName: house?.name,
            houseAddress: house?.address || '',
            houseCity: house?.city || '',
            houseImage: house?.images?.length > 0 ? house?.images[0] : '',
            bedrooms:house?.bedrooms,
            bathrooms:house?.bathrooms,
            roomSize:house?.roomSize,
            garages:house?.garages,
            extraFeatures: house?.extraFeatures,
            houseOwner : house?.owner,
            totalMonths : 1,
        })
    },[house])

    
    useEffect(() => {
        const getHouse = async () => {
            const response = await  axiosPublic.get(`/house/${id}`);
            setHouse(response.data?.house);
        }
        getHouse()
    },[id])


   

    useEffect(() => {
        const today = new Date().toLocaleString().split(',')[0];
        const bookedLastDate = house?.bookedDate;

        if(today > bookedLastDate){
            setHouseAvailable(true)
        }else{
            setHouseAvailable(false)
        }

    },[])
    

    return (
        <>
       
            <form onSubmit={handleAppoinment} className='form'>
                <div>
                    <label htmlFor="" className='label'>Start Month</label>
                    <Input 
                    type={'date'} 
                    value={user?.startMonth || ''} 
                    placeholder={'Start Date'} 
                    onChange={e => setBooking({...booking, startMonth: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="" className='label'>Total Months </label>
                    <Input 
                    type={'number'} 
                    value={booking?.totalMonths || ''} 
                    min={1}
                    placeholder={'Total months'} 
                    onChange={e => setBooking({...booking, totalMonths: Number(e.target.value) })}
                    />
                </div>
                <div>
                    <Input 
                    type={'number'} 
                    value={user?.phone || ''} 
                    placeholder={'Number'} 
                    onChange={e => setBooking({...booking, phone: e.target.value})}
                    />
                </div>
                <div>
                    <Input 
                    type={'number'} 
                    placeholder={'Total family member'} 
                    value={booking?.familyMember}
                    onChange={e => setBooking({...booking, familyMember: Number(e.target.value)})}
                    />
                </div>
                <div>
                    <Input 
                    type={'number'} 
                    placeholder={'Total children'} 
                    value={booking?.children}
                    onChange={e => setBooking({...booking, children: Number(e.target.value)})}
                    />
                </div>
                <div>
                    <textarea 
                    name="" 
                    id="" 
                    placeholder='Message...' 
                    cols="30" 
                    rows="3"
                    value={booking?.message}
                    onChange={e => setBooking({...booking, message: e.target.value})}
                    ></textarea>
                </div>
                { house?.bookedDate && 
                    !houseAvilable &&   <div className='alertBooking'>
                    <p>This house is booked through {house?.bookedDate} </p>
                </div>
                }
              
                <div>
                    <PrimaryButton  type={'submit'} >
                        {
                            loading ? "Loading..." : `Booking Appoinment ($ ${house?.price * booking?.totalMonths})`
                        }
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
};

export default BookAppinmentForm;