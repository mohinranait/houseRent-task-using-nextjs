import React from 'react';

import "./register.scss"
import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link';


const RegisterPage = () => {
    return (
        <section className='loginSection'>
            <div>
                <div className='login'>
                    <p className='pagetitle'>Register Form</p>
                    <RegisterForm />
                    <p className='textalert'>Already have an account <Link href={'/login'}>Login</Link> </p>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;