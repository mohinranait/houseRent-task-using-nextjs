'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "@/styles/globals.scss"
import "./ownerLayout.scss";
import PrivateRoute from '@/redux/PrivateRoute';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { LuMenu } from 'react-icons/lu';
import { IoCloseSharp } from 'react-icons/io5';


const OwnerLayout = ({children}) => {
    const {user} = useSelector(state => state.user)
    const pathname = usePathname();
    const [isToggleHumber, setIsToggleHumber] = useState(false)
 
    return (
        <PrivateRoute>
             <section className="ownerLayout">
                <div className='container'>
                    <div className="ownerGrid">
                        <div className={`leftMenus ${isToggleHumber ? 'active':''} `}>
                            <div className='mobileheader'>
                                <div onClick={() => setIsToggleHumber(false)} className="close">
                                    <IoCloseSharp  size={20} />
                                </div>
                            </div>
                            <ul className="menus">
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/dashboard" className={`item ${pathname=='/owner/dashboard' ? 'active':''} `}>Dashboard</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/bookings" className={`item ${pathname=='/owner/bookings' ? 'active':''} `}>Bookings</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/create-house" className={`item ${pathname=='/owner/create-house' ? 'active':''} `}>New house</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/houses" className={`item ${pathname=='/owner/houses' ? 'active':''} `}>House lists</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/profile" className={`item ${pathname=='/owner/profile' ? 'active':''} `}>Profile</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/" className={`item ${pathname=='/' ? 'active':''} `}>Home</Link></li>
                            </ul>
                           
                            
                        </div>
                        <div className="content-wrap">
                            <div className='ownerHeader'>
                                <div className='forMobile'>
                                    <div onClick={() => setIsToggleHumber(!isToggleHumber)} className="humberIcon">
                                        <LuMenu  size={20} />
                                    </div>
                                    <span className='text'>Dashboard</span>
                                </div>
                                <div className='user'>
                                    <span>{user?.name}</span>
                                    <Image width={80} height={80} alt='user' src={ user?.avater ? user?.avater : 'https://i.ibb.co/rwCtcWZ/mohinrana1.png'}  />
                                </div>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </PrivateRoute>
    );
};

export default OwnerLayout;