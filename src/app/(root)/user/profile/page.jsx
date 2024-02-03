import UpdateProfile from '@/components/forms/UpdateProfile';
import React from 'react';
import "./profile.scss"
const UserProfile = () => {
    return (
        <div className='updatepage'>
            <div className='header'>
                <p className='heading'>Profile</p>
            </div>
            <UpdateProfile />
        </div>
    );
};

export default UserProfile;