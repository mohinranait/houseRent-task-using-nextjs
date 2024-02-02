import React from 'react';
import "./ownerProfile.scss"
import UpdateProfile from '@/components/forms/UpdateProfile';
const OwnerProfilePage = () => {
    return (
        <div className='ownerProfile'>
            <div className='header'>
                <p>Profile update</p>
            </div>
            <UpdateProfile />
        </div>
    );
};

export default OwnerProfilePage;