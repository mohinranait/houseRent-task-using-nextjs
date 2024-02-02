import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "@/styles/globals.scss"
import "./ownerLayout.scss";


const OwnerLayout = ({children}) => {
    return (
        <>
             <section className="ownerLayout">
                <div className='container'>
                    <div className="ownerGrid">
                        <div className="leftMenus">
                            <ul className="menus">
                                <li><Link href="/owner/dashboard" className="item">Dashboard</Link></li>
                                <li><Link href="/owner/create-house" className="item">New house</Link></li>
                                <li><Link href="/owner/all-houses" className="item">House lists</Link></li>
                                <li><Link href="/owner/profile" className="item">Profile</Link></li>
                            </ul>
                        </div>
                        <div className="content-wrap">
                            <div className='ownerHeader'>
                                <span className='text'>Dashboard</span>
                                <div className='user'>
                                    <span>Mohin</span>
                                    <Image width={80} height={80} alt='user' src={'https://i.ibb.co/rwCtcWZ/mohinrana1.png'}  />
                                </div>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OwnerLayout;