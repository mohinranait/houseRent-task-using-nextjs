import React from 'react';
import "./allHouse.scss"
import Image from 'next/image';
const OwnerAllHouse = () => {
    return (
        <div className='allHouse'>
            <div className='ownerTable'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>House</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className='info'>
                                    <Image src="https://i.ibb.co/kXVgxXY/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp" width={100} height={100} alt="asd" />
                                    <span>Luxury stay in Phang Nga</span>
                                </div>
                            </td>
                            <td>Active</td>
                            <td className='action'>
                                <div className='btn-group'>
                                    <button className='btn'>Edit</button>
                                    <button className='btn'>Edit</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className='info'>
                                    <Image src="https://i.ibb.co/kXVgxXY/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp" width={100} height={100} alt="asd" />
                                    <span>Luxury stay in Phang Nga</span>
                                </div>
                            </td>
                            <td>Active</td>
                            <td className='action'>
                                <div className='btn-group'>
                                    <button className='btn'>Edit</button>
                                    <button className='btn'>Edit</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className='info'>
                                    <Image src="https://i.ibb.co/kXVgxXY/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.webp" width={100} height={100} alt="asd" />
                                    <span>Luxury stay in Phang Nga</span>
                                </div>
                            </td>
                            <td>Active</td>
                            <td className='action'>
                                <div className='btn-group'>
                                    <button className='btn'>Edit</button>
                                    <button className='btn'>Edit</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OwnerAllHouse;