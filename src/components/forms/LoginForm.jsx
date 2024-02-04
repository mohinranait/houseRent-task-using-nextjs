'use client'
import React, { useState } from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/features/auth/authSlice';
import useAxios from '@/hooks/useAxios';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const axios = useAxios();
    const router = useRouter();
    const dispatch = useDispatch();
    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(!email) return toast.warning("Email is required")
        if(!password) return toast.warning("Password is required")

        const userInfor = {
            email, password
        }

        try {
            setLoading(true)
            const res = await axios.post(`/login`, userInfor)

            if(res.data.success){
                dispatch(addUser(res.data.user))
                const path = JSON.parse(localStorage.getItem('path'));
                router.push(path ? path : res.data?.user?.role == 'user' ? '/user/dashboard' : '/owner/dashboard' )
                localStorage.removeItem('path')
                setLoading(false)
            }else{
                toast.warning(res.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return (
        <>
            <form onSubmit={handleRegister} className='loginForm'>
                <div>
                    <Input type={'text'} name={"email"} placeholder={'Email'} />
                </div>    
                <div>
                    <Input type={'password'} name={"password"} placeholder={'Password'} />
                </div>    
                <div>
                    <PrimaryButton type={'submit'}>
                        {loading ? "Loading...":'Login'}
                    </PrimaryButton>
                </div>    
            </form>   
        </>
    );
};

export default LoginForm;