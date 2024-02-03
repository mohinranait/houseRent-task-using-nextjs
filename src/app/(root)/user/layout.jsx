'use client'
import Link from 'next/link';
import React from 'react';
import "./userLayout.scss"
import PrivateRoute from '@/redux/PrivateRoute';
import { usePathname } from 'next/navigation';

const UserLayout = ({children}) => {
    const pathname = usePathname();
    return (
        <PrivateRoute>
            <section className="userLayout">
                <div className='container'>
                    <div className="userGrid">
                        <div className="leftMenus">
                            <ul className="menus">
                                <li><Link href="/user/dashboard" className={` ${pathname == '/user/dashboard' ? 'active':''} item` } >Bookings</Link></li>
                                <li><Link href="/user/profile" className={` ${pathname == '/user/profile' ? 'active':''} item` } >Profile</Link></li>
                            </ul>
                        </div>
                        <div className="content-wrap">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </PrivateRoute>
    );
};

export default UserLayout;