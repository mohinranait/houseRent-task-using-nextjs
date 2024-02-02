import React from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';

const RegisterForm = () => {
    return (
        <>
            <form action="" className='loginForm'>
                <div>
                    <Input type={'text'} placeholder={'Full name'} />
                </div>    
                <div>
                    <Input type={'email'} placeholder={'Email'} />
                </div>    
                <div>
                    <Input type={'number'} placeholder={'Phone'} />
                </div>    
                <div>
                    <Input type={'password'} placeholder={'Password'} />
                </div>    
                <div>
                    <PrimaryButton type={'submit'}>
                        Register
                    </PrimaryButton>
                </div>    
            </form>   
        </>
    );
};

export default RegisterForm;