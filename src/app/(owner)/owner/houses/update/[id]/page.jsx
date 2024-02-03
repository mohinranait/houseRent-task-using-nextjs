import UpdateHouseForm from '@/components/forms/UpdateHouseForm';
import React from 'react';

const UpdateHousePage = async ({params}) => {
    const {id} = params;
    return (
        <div>
            <UpdateHouseForm id={id} />
        </div>
    );
};

export default UpdateHousePage;