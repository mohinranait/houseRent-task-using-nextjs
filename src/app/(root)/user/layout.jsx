'use client'
import Link from 'next/link';
import React from 'react';
import "./userLayout.scss"
import PrivateRoute from '@/redux/PrivateRoute';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/redux/features/auth/authSlice';

const UserLayout = ({children}) => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    return (
        <PrivateRoute>
            <section className="userLayout">
                <div className='container'>
                    <div className="userGrid">
                        <div className="leftMenus">
                            <ul className="menus">
                                <li><Link href="/user/dashboard" className={` ${pathname == '/user/dashboard' ? 'active':''} item` } >Bookings</Link></li>
                                <li><Link href="/user/favorite" className={` ${pathname == '/user/favorite' ? 'active':''} item` } >Favorites </Link></li>
                                <li><Link href="/user/profile" className={` ${pathname == '/user/profile' ? 'active':''} item` } >Profile</Link></li>
                                <li><span onClick={() => dispatch(logoutUser())} className={`logout  item` } >Logout</span></li>
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