'use client'
import React, { useEffect, useState } from 'react';
import "./dashboard.scss";
import { useSelector } from 'react-redux';
import useAxios from '@/hooks/useAxios';

const OwnerDashboardPage = () => {
    const {user} = useSelector(state => state.user);
    const axios = useAxios();
    const [analytics, setAnalytics] = useState({})
    // load house
    useEffect(() => {
        const getOwnerHouse = async () => {
            const res = await axios.get(`/owner-analytics/${user?._id}`);
            setAnalytics(res.data);
            console.log(res.data);
        }
        getOwnerHouse();
    },[user?._id])

    return (
        <div>
            <div className='cardGrid'>
                <div className='card'>
                    <p className='count '>
                        <span className='active'>Active</span>
                    </p>
                    <p className='title'>Acount status</p>
                </div>
                <div className='card'>
                    <p className='count'>{analytics?.totlehouse}</p>
                    <p className='title'>Total House</p>
                </div>
                <div className='card'>
                    <p className='count'>{analytics?.totalOrders}</p>
                    <p className='title'>Total Order</p>
                </div>
              
            </div>
        </div>
    );
};

export default OwnerDashboardPage;