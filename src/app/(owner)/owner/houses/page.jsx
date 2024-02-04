'use client'
import React, { useEffect, useState } from 'react';
import "./allHouse.scss"
import { useSelector } from 'react-redux';
import useAxios from '@/hooks/useAxios';
import OwnerHouseRows from '@/components/rows/OwnerHouseRows';
import { toast } from 'react-toastify';
const OwnerAllHouse = () => {

    const [houses, setHouses]  = useState([])
    const {user} = useSelector(state => state.user)
    const axios = useAxios();


    // load house
    useEffect(() => {
        const getOwnerHouse = async () => {
            const res = await axios.get(`/owner-house/${user?._id}`);
            setHouses(res.data?.houses);
        }
        getOwnerHouse();
    },[user?._id])


    // Delete house
    const deleteHouse = async (id) => {
        try {
            const res = await axios.delete(`/delete-house/${id}?userId=${user?._id}`);
            if(res.data?.success){
                const filters = houses?.filter(item => item?._id !== id);
                setHouses(filters)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    return (
        <>
            <div className='pageTitleUser'>
                <p>My house lists</p>
            </div>
        
            <div className='allHouse'>
                <div className='ownerTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>House</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                houses?.map((house,index) => <OwnerHouseRows key={house?._id} index={index} house={house} deleteHouse={deleteHouse} /> )
                            }

                        
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default OwnerAllHouse;