import React from 'react';
import Input from '../inputs/Input';
import "@/styles/selectTag.scss"
import "@/styles/updateForm.scss"
import PrimaryButton from '../buttons/primary/PrimaryButton';
const UpdateProfile = () => {
    return (
        <form>
            <div className='inputGroup'>
                <div>
                    <Input type={'text'} placeholder={"Full name"} />
                </div>
                <div>
                    <Input type={'number'} placeholder={"Phone"} />
                </div>
            </div>
            <div className='inputGroup'>
                <div>
                    <Input type={'text'} placeholder={"Address"} />
                </div>
                <div>
                    <select name="" className='selectTag' id="">
                        <option value="">Select city</option>
                        <option value="">Dhaka</option>
                        <option value="">Barguna</option>
                    </select>
                </div>
            </div>
            <div className='inputGroup'>
                <div>
                    <Input type={'file'} placeholder={"Avater"} />
                </div>
                
            </div>
            <div className='inputGroup'>
               <div>
                <PrimaryButton type={'submit'}>
                    Update information
                </PrimaryButton>
               </div>
            </div>

        </form>
    );
};

export default UpdateProfile;