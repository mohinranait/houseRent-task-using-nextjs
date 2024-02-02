import LoginForm from '@/components/forms/LoginForm';
import React from 'react';
import "./logn.scss"
import Link from 'next/link';
const LoginPage = () => {
    return (
        <section className='loginSection'>
            <div>
                <div className='login'>
                    <p className='pagetitle'>Login Form</p>
                    <LoginForm />
                    <p className='textalert'>Create a new account <Link href={'/register'}>Register</Link> </p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;