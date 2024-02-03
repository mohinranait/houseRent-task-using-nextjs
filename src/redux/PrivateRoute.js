'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
    const {push} = useRouter();
    const {user, isLoading} = useSelector(state => state.user)
    if(isLoading){
        return <>Loading...</>
    }

    if(!user?._id){
        push('/login')
    }
    
    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;