import Image from 'next/image';
import React from 'react';

const OwnerBookingRows = ({index,booking}) => {
    const {houseImage,houseName,_id,user,startMonth, endMonth,children,bedrooms, bathrooms,garages        , familyMember    } = booking;
    return (
        <>
            <tr>
                <td>{index+1}</td>
                <td>
                    <div className=' userInfor'>
                        <span>{user?.name}</span> <br />
                        <span>{user?.email}</span> <br />
                        <span>{user?.phone}</span> 
                    </div>
                </td>
                <td>
                    <div className='info'>
                        <Image src={houseImage} width={100} height={100} alt="asd" />
                        <span>{houseName}</span>
                    </div>
                </td>
                <td>
                    <div className=' userInfor'>
                        <span>Start:{startMonth}</span> <br />
                        <span>Last:{endMonth}</span> <br />
                    </div>
                </td>
                <td>
                    <div className=' userInfor'>
                        <span>Total:{familyMember}</span> <br />
                        <span>Children:{children}</span> <br />
                    </div>
                </td>
               
                <td>
                    <div className=' userInfor'>
                        <span>Bedrooms:{bedrooms}</span> <br />
                        <span>Bathrooms:{bathrooms}</span> <br />
                        <span>Garage:{garages}</span> 
                    </div>
                </td>
               
            </tr>   
        </>
    );
};

export default OwnerBookingRows;