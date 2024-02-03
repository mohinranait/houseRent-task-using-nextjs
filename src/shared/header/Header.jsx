'use client'
import React, { useState } from 'react';
import './Header.scss'
import Logo from '@/components/Logo/Logo';
import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { logoutUser } from '@/redux/features/auth/authSlice';
import { usePathname } from "next/navigation";
const Header = ({isMobileToggle, setIsMobileToggle}) => {
    const {user} = useSelector(state => state.user)
    const dispatch= useDispatch();
    const pathname = usePathname();
    const [isDropDown, setIsDropDown] = useState(false)
    return (
        <header>
            <div>
                <div className="container">
                    <nav className='navWrap'>
                        <div className='logoMenuWrap'>
                            <div onClick={() => setIsMobileToggle(!isMobileToggle)} className="humberIcon">
                                <LuMenu  size={20} />
                            </div>
                            <Logo />
                            <ul className='navLinks'>
                                <li><Link href="/" className={pathname=='/' ? 'active':''} >Home</Link></li>
                                {
                                    user?._id ? <>
                                    <li><Link href="/user/dashboard" className={pathname=='/user/dashboard' ? 'active':''} >Dashboard</Link></li>
                                 
                                </>:<>
                                    <li><Link href="/login" className={pathname=='/login' ? 'active':''} >Login</Link></li>
                                    <li><Link href="/register" className={pathname=='/register' ? 'active':''} >Register</Link></li>
                                </>
                                }
                               
                            </ul>
                        </div>
                        <div>
                            <ul className='navRight'>
                                {
                                    user?._id &&  <li className=''>
                                    <div onClick={() => setIsDropDown(!isDropDown)} className='user'>
                                        <span className='userName'>{user?.name}</span>
                                        <Image width={80} height={80} alt='user' src={ user?.avater ? user?.avater : 'https://i.ibb.co/rwCtcWZ/mohinrana1.png'}  />
                                        {
                                            isDropDown &&  <ul className='dropwdown'>
                                            {
                                                user?.role == 'user' ?
                                                <li><Link className='items' href={'/user/dashboard'}>Dashboard</Link></li>
                                                : 
                                                <li><Link className='items' href={'/owner/dashboard'}>Dashboard</Link></li>
                                            }
                                          
                                            <li><span onClick={() => dispatch(logoutUser())} className='items'>Logout</span></li>
                                        </ul>
                                        }
                                    </div>
                                </li>
                                }
                               
                                <li>
                                    <Link className='addLists' href={'/owner/create-house'}>AddListing</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;