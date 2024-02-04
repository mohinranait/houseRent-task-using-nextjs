'use client'
import React, { useEffect, useState } from 'react';
import HouseCard from '../card/HouseCard';
import Input from '../inputs/Input';
import data from '@/services/datas';
import "@/styles/selectTag.scss"
import "@/styles/filterBox.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getHousesWithFilter } from '@/redux/features/house/houseSlice';



const HomeHouseSection = () => {
    const {houses} = useSelector(state => state.houses )

    const [filter, setFilter] = useState(true)
    const [search, setSearch] = useState('');
    const [city, setCity] = useState(null);
    const [bedroom, setBedroom] = useState(null);
    const [bathroom, setBathroom] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const obj = {
            city, bedroom,bathroom,search
        }
        dispatch(getHousesWithFilter(obj))

    },[filter])

    const handleChange = (e) => {
        setCity(e.target.value || null);
    }

    const handleBedroom = (e) => {
        setBedroom( Number(e.target.value) );
    }
    const handleBathroom = (e) => {
        setBathroom( Number(e.target.value) );
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleFilter  = () => {
        setFilter(!filter)
    }


    return (
        <section id='houseSection'>
            <div className="container">
                <div id="filterBox">
                    <p className='text'>Filter by options</p>
                    <div className='filterGrid'>
                        <div>
                            <Input type={'search'}  onChange={handleSearch} placeholder={"Search by name"} />
                        </div>
                        <div>
                            <select name="" onChange={handleChange} className='selectTag' id="">
                                <option value="">City</option>
                                {
                                    data?.citys?.map(item => <option value={item?.value} key={item?._id}>{item?.label}</option> )
                                }
                            </select>
                        </div>
                        <div>
                            <Input type={'number'} onChange={handleBedroom} placeholder={"Bedrooms"} />
                        </div>
                        <div>
                            <Input type={'number'} onChange={handleBathroom} placeholder={"Bathrooms"} />
                        </div>
                        <div onClick={handleFilter} className='btnFilter'>
                            Filter
                        </div>
                    </div>
                </div>
                <div className="sectionTitle ">
                    <h3 className="upline">Featured Properties</h3>
                    <p className="subline">These are our featured properties</p>
                </div>
                <div className='houseGrid'>
                    {
                        houses?.map(house =>  <HouseCard key={house?._id} house={house} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeHouseSection;