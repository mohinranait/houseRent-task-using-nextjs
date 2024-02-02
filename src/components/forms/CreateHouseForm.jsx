'use client'
import React, { useState } from 'react';
import "@/styles/createHouseForm.scss"
import Input from '../inputs/Input';
import "@/styles/selectTag.scss"
import data from '@/services/datas';
import PrimaryButton from '../buttons/primary/PrimaryButton';


const CreateHouseForm = () => {
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    

    const handleSelectMultiple = (event) => {
        const selectedFeature = event.target.value;
        if (selectedFeatures.includes(selectedFeature)) {
            // If selected, remove it from the array
            setSelectedFeatures(selectedFeatures.filter(feature => feature !== selectedFeature));
        } else {
            // If not selected, add it to the array
            setSelectedFeatures([...selectedFeatures, selectedFeature]);
        }
    };

    return (
        <form id='houseForm'>
            <div className='section houseInfo'>
                <p className='sectionTitle'>House Information</p>
                <div className='row-group'>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="">House name</label>
                            <Input type={'text'} placeholder={"House name"} />
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <Input type={'text'} placeholder={"House name"} />
                        </div>
                    </div>
                    <div className="gridFive">
                        <div>
                            <label htmlFor="">City</label>
                            <select name="" className='selectTag' id="">
                                <option value="">City</option>
                                <option value="">City</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Bedrooms</label>
                            <Input type={'number'} placeholder={"Bedrooms"} />
                        </div>
                        <div>
                            <label htmlFor="">Bathrooms</label>
                            <Input type={'number'} placeholder={"Bathrooms"} />
                        </div>
                        <div>
                            <label htmlFor="">Garages</label>
                            <Input type={'number'} placeholder={"Garages"} />
                        </div>
                        <div>
                            <label htmlFor="">Room size (sq ft)</label>
                            <Input type={'number'} placeholder={"SQ FT"} />
                        </div>
                        <div>
                            <label htmlFor="">Property ID</label>
                            <Input type={'text'} placeholder={"Property ID"} />
                        </div>
                        <div>
                            <label htmlFor="">Phone</label>
                            <Input type={'number'} placeholder={"Property ID"} />
                        </div>
                        <div>
                            <label htmlFor="">Property type</label>
                            <select name="" className='selectTag' id="">
                                <option value="">Hotel</option>
                                <option value="">House</option>
                                <option value="">Resort</option>
                                <option value="">City</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Property status</label>
                            <select name="" className='selectTag' id="">
                                <option value="">Sell</option>
                                <option value="">Rent</option>
                                <option value="">City</option>
                            </select>
                        </div>
                    </div>

                </div>
                
            </div>


            <div className='section houseInfo'>
                <p className='sectionTitle'>About house</p>
                <div className='row-group'>
                    <textarea name="" id="" cols="30" rows="6" placeholder='About house'></textarea>
                </div>
            </div>

            <div className='section houseInfo'>
                <p className='sectionTitle'>Extra features</p>
               
                <div className="featureWrapper">
                    {
                        data?.features?.map(feature => <label key={feature?._id} htmlFor={`feature${feature?._id}`} className="item">
                        <input 
                        type="checkbox" 
                        name="extraFeatures" 
                        onChange={handleSelectMultiple} value={feature?.value} 
                        id={`feature${feature?._id}`} 
                        checked={selectedFeatures.includes(feature.value)}
                        /> {feature?.label}
                    </label> )
                    }
                </div>
            </div>

            <div className='section houseInfo'>
                <p className='sectionTitle'>Outfiled</p>
               
                <div className="lastSection">
                    <div>
                        <input type="file" name='' />
                    </div>
                    <div>
                        <label htmlFor="featu">
                            <input type="checkbox" id='featu' name='' /> Features house
                        </label>
                    </div>
                    <div>
                       <label htmlFor="">Price</label>
                       <Input type={'number'} placeholder={"Price"} />
                    </div>

                    <div>
                        <PrimaryButton type={'submit'}>
                            Create house
                        </PrimaryButton>
                    </div>
                </div>
            </div>


        </form>
    );
};

export default CreateHouseForm;