import Link from 'next/link';
import React from 'react';
import "./userLayout.scss"
const UserLayout = ({children}) => {
    return (
        <>
            <section className="userLayout">
                <div className='container'>
                    <div className="userGrid">
                        <div className="leftMenus">
                            <ul className="menus">
                                <li><Link href="/user/dashboard" className="item">Bookings</Link></li>
                                <li><Link href="/" className="item">Profile</Link></li>
                            </ul>
                        </div>
                        <div className="content-wrap">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserLayout;