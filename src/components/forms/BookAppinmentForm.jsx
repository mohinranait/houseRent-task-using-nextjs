import React from 'react';
import Input from '../inputs/Input';
import PrimaryButton from '../buttons/primary/PrimaryButton';

const BookAppinmentForm = () => {
    return (
        <form className='form'>
            <div>
                <Input type={'text'} placeholder={'Full name'} />
            </div>
            <div>
                <Input type={'email'} placeholder={'Email'} />
            </div>
            <div>
                <Input type={'number'} placeholder={'Number'} />
            </div>
            <div>
                <PrimaryButton type={'submit'} >
                    Book Appoinment
                </PrimaryButton>
            </div>
        </form>
    );
};

export default BookAppinmentForm;