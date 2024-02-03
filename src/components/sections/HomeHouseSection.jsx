'use client'
import React, { useEffect, useState } from 'react';
import HouseCard from '../card/HouseCard';
import Input from '../inputs/Input';
import data from '@/services/datas';
import "@/styles/selectTag.scss"
import "@/styles/filterBox.scss"
import useAxiosPublic from '@/hooks/useAxiosPublic';
const min=0;
const max = 200000


const HomeHouseSection = () => {
    const [range, setRange] = useState([min,max])
    const [houses, setHouses] = useState([]);
    const [toggleFilter, setToggleFilter] = useState(false)
    const [filter, setFilter] = useState(true)
    const [search, setSearch] = useState('');
    const [city, setCity] = useState(null);
    const [bedroom, setBedroom] = useState(null);
    const [bathroom, setBathroom] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const getHouses = async () => {
            const res = await axiosPublic.get(`/houses?city=${city}&bedroom=${bedroom}&bathroom=${bathroom}&search=${search}&priceRange=${range[0]}-${range[1]}`);
            setHouses(res.data?.houses);
        }
        getHouses();
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
    // handle price range
    const handleRange = e => {
        setRange(e)
    }

    return (
        <section id='houseSection'>
            <div className="container">
                <div id="filterBox">
                    <p className='text'>Filter by options</p>
                    <div className='filterGrid'>
                        <div>
                            <Input type={'text'}  onChange={handleSearch} placeholder={"Search by name"} />
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