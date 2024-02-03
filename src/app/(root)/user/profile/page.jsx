import UpdateProfile from '@/components/forms/UpdateProfile';
import React from 'react';

const UserProfile = () => {
    return (
        <div>
            <div className='header'>
                <p className='heading'>Profile</p>
            </div>
                <UpdateProfile />
        </div>
    );
};

export default UserProfile;