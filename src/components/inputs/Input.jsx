import React from 'react';
import './input.scss'
const Input = ({type, onChange, name, value, placeholder, readonlyVal}) => {
    return (
        <>
            <input type={type} name={name} onChange={onChange} readOnly={readonlyVal }  placeholder={placeholder} defaultValue={value} className='input' />
        </>
    );
};

export default Input;