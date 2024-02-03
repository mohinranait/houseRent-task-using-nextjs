'use client'
import React, { useState } from 'react';
import Input from '../inputs/Input';
import "@/styles/selectTag.scss"
import "@/styles/updateForm.scss"
import PrimaryButton from '../buttons/primary/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import data from '@/services/datas';
import { singleImage } from '@/services/uploadImage';
import { addUser } from '@/redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import useAxios from '@/hooks/useAxios';
const UpdateProfile = () => {
    const {user} = useSelector(state => state.user)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [file, setFile] = useState(user?.avater)
    const axios = useAxios();
    const dispatch = useDispatch();

    const handleUpdateUser = async e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const city = form.city.value;
        const userUdpate  = {
            name, phone, address, city
        }


        try {
            let avater = user?.avater || '';
            setError('')
            setLoading(true)
            if(file){
                avater = await singleImage(file)
            }
            console.log(avater);
            const res = await  axios.patch(`/update-user/${user?._id}`, {...userUdpate, avater});
            if(res.data.success){
                console.log(res.data?.user)
                dispatch(addUser(res.data?.user))
                toast.success("Profile updated")
                setLoading(false)
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    return (
        <form onSubmit={handleUpdateUser}>
            <div className='inputGroup'>
                <div>
                    <Input type={'text'} name={'name'} value={user?.name || ''} placeholder={"Full name"} />
                </div>
                <div>
                    <Input type={'number'} name={'phone'} value={user?.phone || ''} placeholder={"Phone"} />
                </div>
            </div>
            <div className='inputGroup'>
                <div>
                    <Input type={'text'} name={'address'} value={user?.address || ''} placeholder={"Address"} />
                </div>
                <div>
                    <select name="city" className='selectTag' id="">
                        <option value="">Select city</option>
                        {
                            data.citys?.map(item =>  <option key={item?._id} value={item?.value} selected={item?.value == user?.city}>{item?.value}</option> )
                        }
                    </select>
                </div>
            </div>
            <div className='inputGroup'>
                <div>
                    <Input onChange={handleFileChange} type={'file'} placeholder={"Avater"} />
                </div>
            </div>
            <div className='inputGroup'>
               <div>
                <PrimaryButton type={'submit'}>
                    Update information
                </PrimaryButton>
               </div>
            </div>
        </form>
    );
};

export default UpdateProfile;