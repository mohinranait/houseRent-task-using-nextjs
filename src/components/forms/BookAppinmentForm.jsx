'use client'
import React, { useEffect, useState } from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import { useSelector } from 'react-redux';
import useAxios from '@/hooks/useAxios';
import { usePathname, useRouter } from 'next/navigation';

import { toast } from 'react-toastify';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const BookAppinmentForm = ({house}) => {
    const axiosPublic = useAxiosPublic()
    const {user} = useSelector(state => state.user);
    // const [house, setHouse] = useState({})
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(true);
    const [error, setError] = useState('')
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
        houseOwner : house?.owner
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

        const {phone,children, familyMember} = booking;
        if (!validateBDPhoneNumber(phone)) {
            return toast.warning("BD number is invalid") 
        }

       
        if(phone?.length == 0 || children == 0 || familyMember == 0  ){
            toast.warning("All fileds required");
            return;
        }




        try {
            console.log(booking);
            setLoading(true)
            const res = await axios.post(`/booking?userId=${user?._id}`, booking);

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
            houseOwner : house?.owner
        })
    },[house])

    console.log(booking);

    return (
        <form onSubmit={handleAppoinment} className='form'>
            <div>
                <Input type={'text'} value={user?.name || ''} readonlyVal={true} placeholder={'Full name'} />
            </div>
            <div>
                <Input type={'email'} value={user?.email || ''} readonlyVal={true} placeholder={'Email'} />
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
            <div>
                <PrimaryButton  type={'submit'} >
                    Book Appoinment
                </PrimaryButton>
            </div>
        </form>
    );
};

export default BookAppinmentForm;