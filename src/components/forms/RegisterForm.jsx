'use client'
import React, { useState } from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';

import { useRouter } from 'next/navigation';
import useAxiosPublic from '@/hooks/useAxiosPublic';

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();
    const router = useRouter()

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;

        const userInfor = {
            name, email, phone, password
        }

        try {
            setLoading(true)
            const res = await axiosPublic.post(`/register`, userInfor)
            if(res.data.success){
                router.push('/login')
                setLoading(false)
            }
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }

    }
    return (
        <>
            <form onSubmit={handleRegister} className='loginForm'>
                <div>
                    <Input type={'text'} name={'name'} placeholder={'Full name'} />
                </div>    
                <div>
                    <Input type={'email'} name={'email'} placeholder={'Email'} />
                </div>    
                <div>
                    <Input type={'number'} name={'phone'} placeholder={'Phone'} />
                </div>    
                <div>
                    <Input type={'password'} name={'password'} placeholder={'Password'} />
                </div>    
                <div>
                    <PrimaryButton type={'submit'}>
                        <span className="">  {loading ? 'Loading...' : 'Register'}</span>
                    </PrimaryButton>
                </div>    
            </form>   
        </>
    );
};

export default RegisterForm;