import React from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';

const LoginForm = () => {
    return (
        <>
            <form action="" className='loginForm'>
                <div>
                    <Input type={'text'} placeholder={'Email'} />
                </div>    
                <div>
                    <Input type={'password'} placeholder={'Password'} />
                </div>    
                <div>
                    <PrimaryButton type={'submit'}>
                        Login
                    </PrimaryButton>
                </div>    
            </form>   
        </>
    );
};

export default LoginForm;