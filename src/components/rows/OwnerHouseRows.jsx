import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OwnerHouseRows = ({house,index,deleteHouse}) => {
    const {name,images,_id} = house;
    console.log(house);
    return (
        <>
            <tr>
                <td>{index+1}</td>
                <td>
                    <div className='info'>
                        <Image src={images[0]} width={100} height={100} alt="asd" />
                        <span>{name}</span>
                    </div>
                </td>
                <td>Active</td>
                <td className='action'>
                    <div className='btn-group'>
                        <Link  href={`/owner/houses/update/${_id}`} className='btn edit'>Edit</Link>
                        <button onClick={() => deleteHouse(_id)} className='btn delete'>Delete</button>
                    </div>
                </td>
            </tr>   
        </>
    );
};

export default OwnerHouseRows;