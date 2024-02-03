'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "@/styles/globals.scss"
import "./ownerLayout.scss";
import PrivateRoute from '@/redux/PrivateRoute';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';


const OwnerLayout = ({children}) => {
    const {user} = useSelector(state => state.user)
    const pathname = usePathname();
    return (
        <PrivateRoute>
             <section className="ownerLayout">
                <div className='container'>
                    <div className="ownerGrid">
                        <div className="leftMenus">
                            <ul className="menus">
                                <li><Link  href="/owner/dashboard" className={`item ${pathname=='/owner/dashboard' ? 'active':''} `}>Dashboard</Link></li>
                                <li><Link  href="/owner/create-house" className={`item ${pathname=='/owner/create-house' ? 'active':''} `}>New house</Link></li>
                                <li><Link  href="/owner/houses" className={`item ${pathname=='/owner/houses' ? 'active':''} `}>House lists</Link></li>
                                <li><Link  href="/owner/profile" className={`item ${pathname=='/owner/profile' ? 'active':''} `}>Profile</Link></li>
                            </ul>
                        </div>
                        <div className="content-wrap">
                            <div className='ownerHeader'>
                                <span className='text'>Dashboard</span>
                                <div className='user'>
                                    <span>{user?.name}</span>
                                    <Image width={80} height={80} alt='user' src={'https://i.ibb.co/rwCtcWZ/mohinrana1.png'}  />
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