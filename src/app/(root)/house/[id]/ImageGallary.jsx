'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const ImageGallary = ({house}) => {
    const [imgTab, setImgTab] = useState(null)
    return (
        <>
            <div className='imagesWrap'>
                <div>
                    <div className='bigImg'>
                        <Image src={ imgTab ? imgTab : house?.images[0]} width={800} height={600} className="" alt="a" />
                    </div>
                </div>
                <div className="imagesGallary">
                    {
                        house?.images?.map((img,i) =>  <span onClick={() => setImgTab(img)} key={i} className="smallImage">
                        <Image src={ img || 'https://i.ibb.co/4YhRsVF/s-2.jpg'} width={800} height={600} alt={''} />
                    </span> )
                    }
                    
                </div>
            </div>
        </>
    );
};

export default ImageGallary;