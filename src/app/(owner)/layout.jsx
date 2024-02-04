'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "@/styles/globals.scss"
import "./ownerLayout.scss";
import PrivateRoute from '@/redux/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { LuMenu, LuUser2 } from 'react-icons/lu';
import { IoCloseSharp, IoHomeOutline } from 'react-icons/io5';
import { LiaListSolid } from "react-icons/lia";
import { MdDashboardCustomize, MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineDashboard } from "react-icons/ai";
import { logoutUser } from '@/redux/features/auth/authSlice';


const OwnerLayout = ({children}) => {
    const {user} = useSelector(state => state.user)
    const pathname = usePathname();
    const [isToggleHumber, setIsToggleHumber] = useState(false)
    const dispatch = useDispatch()
    return (
        <PrivateRoute>
             <section className="ownerLayout">
                <div className='containerad'>
                    <div className="ownerGrid">
                        <div className={`leftMenus ${isToggleHumber ? 'active':''} `}>
                            <div className='mobileheader'>
                                <div onClick={() => setIsToggleHumber(false)} className="close">
                                    <IoCloseSharp  size={20} />
                                </div>
                            </div>
                            <ul className="menus">
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/dashboard" className={`item ${pathname=='/owner/dashboard' ? 'active':''} `}> <AiOutlineDashboard /> Dashboard</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/bookings" className={`item ${pathname=='/owner/bookings' ? 'active':''} `}><MdOutlineDashboard /> Bookings</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/create-house" className={`item ${pathname=='/owner/create-house' ? 'active':''} `}><MdDashboardCustomize  /> New house</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/houses" className={`item ${pathname=='/owner/houses' ? 'active':''} `}><LiaListSolid /> House lists</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/owner/profile" className={`item ${pathname=='/owner/profile' ? 'active':''} `}><LuUser2 />Profile</Link></li>
                                <li><Link onClick={() => setIsToggleHumber(false)}  href="/" className={`item ${pathname=='/' ? 'active':''} `}><IoHomeOutline  />  Home</Link></li>
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
                                <ul className='action'>
                                    <li>
                                        <Link href={`/`}>Home</Link>
                                    </li>
                                    <li>
                                        <span onClick={() => dispatch(logoutUser())}>Logout</span>
                                    </li>
                                    <li className='user'>
                                        <span>{user?.name}</span>
                                        <Image width={80} height={80} alt='user' src={ user?.avater ? user?.avater : 'https://i.ibb.co/rwCtcWZ/mohinrana1.png'}  />
                                    </li>
                                  
                                </ul>
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