'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from './features/auth/authSlice';

const AuthProvider = ({children}) => {

   

    const dispatch = useDispatch();
    // useEffect(() => {
    //    dispatch(getAuthUser())
    // },[dispatch])


    useLayoutEffect(() => {
       dispatch(getAuthUser())
    },[dispatch])

 


    return (
        <>
            {children}   
        </>
    );
};

export default AuthProvider;