'use client'
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./Favorite.scss"
import FavoriteCard from '@/components/card/FavoriteCard';
const FavoritePage = () => {
    const axios = useAxios();
    const {user} = useSelector(state => state.user);
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        const getFavorites = async () => {
            const res = await axios.get(`/favorite?userId=${user?._id}`);
            if(res.data?.success){
                setFavorites(res.data?.favorites)
            }
        }
        getFavorites();
    },[user])
    
    return (
        <div>
            <div className='pageTitleUser'>
                <p>My Favorite house</p>
            </div>
            <div className='allBooking'>
                {
                    favorites?.map(favorite => <FavoriteCard 
                        key={favorite?._id} 
                        favorite={favorite?.house} 
                    /> )
                }
            </div>
        </div>
    );
};

export default FavoritePage;