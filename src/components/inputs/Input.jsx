import React from 'react';
import './input.scss'
const Input = ({type, onChange, value, placeholder, readonlyVal}) => {
    return (
        <>
            <input type={type} onChange={onChange} readOnly={readonlyVal }  placeholder={placeholder} defaultValue={value} className='input' />
        </>
    );
};

export default Input;