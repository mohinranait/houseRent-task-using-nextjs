import React from 'react';

import './Primarybutton.scss';

const PrimaryButton = ({type, children }) => {
    return (
        <>
            <button type={type} >{children}</button>   
        </>
    );
};

export default PrimaryButton;