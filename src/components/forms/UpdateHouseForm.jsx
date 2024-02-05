'use client'
import React, { useEffect, useState } from 'react';
import PrimaryButton from '../buttons/primary/PrimaryButton';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import useAxios from '@/hooks/useAxios';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Input from '../inputs/Input';
import data from '@/services/datas';
import "@/styles/createHouseForm.scss"
import "@/styles/imageFile.scss"
import "@/styles/selectTag.scss"
import { uploadMultipleImage } from '@/services/uploadImage';
import { toast } from 'react-toastify';


const UpdateHouseForm = ({id}) => {

    const {user} = useSelector(state => state.user)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [error, setError]= useState('')
    const axios = useAxios();
    const axiosPublic = useAxiosPublic();
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [house, setHouse] = useState({
        name:'',
        address:'',
        city:'',
        bedrooms:'',
        bathrooms:'',
        roomSize:'',
        garages:'',
        phone:'',
        description:'',
        features:false,
        property: {
            propertyId: '',
            propertyType: '',
            propertyStatus: '',
        },
        owner: user?._id,
        price:'',
    })



    useEffect(() => {
        const getSingleHouse = async () => {
            const res  = await axiosPublic.get(`/house/${id}`)
            setHouse(res.data?.house);
            // setSelectedFiles( res.data?.house?.images);
            setSelectedFeatures(res.data?.house?.extraFeatures)
        }
        getSingleHouse();
    },[id])

    const handleUpdateHouse = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            // upload images
            let images = []
            if(selectedFiles?.length > 0){
                images = await uploadMultipleImage(selectedFiles);
            }
           
            
            const updateObj =  {
                ...house, 
                extraFeatures: selectedFeatures, 
                images: images?.length > 0 ? images : house?.images 
            }
            try {
                // upload house information
                const res = await axios.patch(`/house/${id}?userId=${user?._id}`, updateObj )
                if(res.data.success){
                    setLoading(false)
                    router.push('/owner/houses')
                }
            } catch (error) {
                toast.error(error.message)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }      
    }

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

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };



   

  
    return (
        <form onSubmit={handleUpdateHouse} id='houseForm'>
            <div className='section houseInfo'>
                <p className='sectionTitle'>House Information</p>
                <div className='row-group'>
                    <div className='input-group'>
                        <div>
                            <label htmlFor="">House name</label>
                            <Input 
                            type={'text'} 
                            name={''} 
                            placeholder={"House name"} 
                            onChange={(e) => setHouse( {...house, name:e.target.value})} 
                            value={house.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Address</label>
                            <Input 
                            type={'text'} 
                            placeholder={"House name"} 
                            onChange={(e) => setHouse( {...house, address:e.target.value})} 
                            value={house.address}
                            />
                        </div>
                    </div>
                    <div className="gridFive">
                        <div>
                            <label htmlFor="">City</label>
                            <select name="" 
                            className='selectTag' id=""
                            onChange={(e) => setHouse( {...house,  city :e.target.value})}
                            >
                                <option value="">City</option>
                                {
                                    data.citys?.map(item => <option key={item?._id} value={item?.value} selected={item?.value == house?.city} >{item?.value}</option> )
                                }
                             
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Bedrooms</label>
                            <Input 
                            type={'number'} 
                            placeholder={"Bedrooms"} 
                            onChange={(e) => setHouse( {...house, bedrooms:e.target.value})} 
                            value={house.bedrooms}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Bathrooms</label>
                            <Input 
                                type={'number'} 
                                placeholder={"Bathrooms"} 
                                onChange={(e) => setHouse( {...house, bathrooms:e.target.value})} 
                                value={house.bathrooms}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Garages</label>
                            <Input 
                                type={'number'}
                                placeholder={"Garages"} 
                                onChange={(e) => setHouse( {...house, garages:e.target.value})} 
                                value={house.garages}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Room size (sq ft)</label>
                            <Input 
                            type={'number'} 
                            placeholder={"SQ FT"} 
                            onChange={(e) => setHouse( {...house, roomSize:e.target.value})} 
                            value={house.roomSize}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Property ID</label>
                            <Input 
                            type={'text'} 
                            placeholder={"Property ID"} 
                            onChange={(e) => setHouse( {...house,  property:{...house.property,propertyId :e.target.value}})} 
                            value={house.property?.propertyId}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Phone</label>
                            <Input 
                            type={'number'} 
                            placeholder={"Mobile"} 
                            onChange={(e) => setHouse( {...house, phone:e.target.value})} 
                            value={house.phone}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Property type</label>
                            <select 
                            name="" 
                            className='selectTag' id=""
                            onChange={(e) => setHouse( {...house,  property:{...house.property,propertyType :e.target.value}})}
                            >
                                <option value="House">Property Types</option>
                                <option value="House" selected={house?.property?.propertyType == 'House'} >House</option>
                                <option value="Hotel" selected={house?.property?.propertyType == 'Hotel'} >Hotel</option>
                                <option value="Resort" selected={house?.property?.propertyType == 'Resort'} >Resort</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Property status</label>
                            <select 
                            name="" 
                            className='selectTag' id=""
                            onChange={(e) => setHouse( {...house,  property:{...house.property,propertyStatus :e.target.value}})}
                            >
                                <option value="For Rent">Property Status</option>
                                <option value="For Sale" selected={house?.property?.propertyStatus=='For Sale'} >For Sale</option>
                                <option value="For Rent" selected={house?.property?.propertyStatus=='For Rent'} >For Rent</option>
                            </select>
                        </div>
                    </div>

                </div>
                
            </div>

            <div className='section'>
                <p className='sectionTitle'>Upload images</p>
                <label className='fileUpload' htmlFor="image">
                    <span className='label'>Upload image</span>
                    <input type="file" 
                        multiple
                        name='image'
                        id='image'
                        accept='image/*'
                        onChange={handleFileChange}
                    />
                </label>
            </div>


            <div className='section houseInfo'>
                <p className='sectionTitle'>About house</p>
                <div className='row-group'>
                    <textarea name="" 
                    id="" cols="30" 
                    rows="6" placeholder='About house'
                    onChange={(e) => setHouse( {...house, description:e.target.value})} 
                    value={house.description}
                    ></textarea>
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
                        <label htmlFor="featu">
                            <input type="checkbox" id='featu' name='' /> Features house
                        </label>
                    </div>
                    <div>
                       <label htmlFor="">Price</label>
                       <Input 
                       type={'number'} 
                       placeholder={"Price"}
                       onChange={(e) => setHouse( {...house, price:e.target.value})} 
                       value={house.price} 
                       />
                    </div>

                    <div>
                        <PrimaryButton type={'submit'}>
                            {
                                loading ? "Wait..." : "Create house"
                            }
                        </PrimaryButton>
                    </div>
                </div>
            </div>


        </form>
    );
};

export default UpdateHouseForm;