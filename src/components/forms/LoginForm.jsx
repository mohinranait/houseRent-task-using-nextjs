'use client'
import React, { useState } from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/features/auth/authSlice';
import useAxios from '@/hooks/useAxios';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const axios = useAxios();
    const router = useRouter();
    const dispatch = useDispatch();
    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userInfor = {
            email, password
        }

        try {
            setLoading(true)
            const res = await axios.post(`/login`, userInfor)
            if(res.data.success){
                dispatch(addUser(res.data.user))
                router.push("/user/dashboard")
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