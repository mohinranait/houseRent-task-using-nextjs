import React from 'react';
import "./MobileHeader.scss"
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux/features/auth/authSlice';

const MobileHeader = ({isMobileToggle, setIsMobileToggle}) => {
    const {user} = useSelector(state => state.user)
    const pathname = usePathname();
    const dispatch= useDispatch();

    const handleLogoutMethod = () => {
        dispatch(logoutUser())
        setIsMobileToggle(false)
    }
    return (
        <div id='mobileMenuToggle' className={` ${isMobileToggle ? 'active':'hidden'} `} >
            <div className='wrap'>
                <div className='header'>
                    <Logo  />
                    <span onClick={() => setIsMobileToggle(!isMobileToggle)} className='close'>
                        <IoCloseSharp size={20} />
                    </span>
                </div>
                <ul className='navs'>
                    <li><Link onClick={() => setIsMobileToggle(false) } href="/" className={` ${pathname == '/' ? 'active':''} navLink`}>Home</Link></li>
                    {
                        user?._id ? <>
                        <li><Link onClick={() => setIsMobileToggle(false) } href="/user/dashboard" className={` ${pathname == '/user/dashboard' ? 'active':''} navLink`}>Dashboard</Link></li>
                        <li><Link onClick={() => setIsMobileToggle(false) } href="/user/profile" className={` ${pathname == '/user/profile' ? 'active':''} navLink`}>Profile</Link></li>
                        <li><span onClick={() => handleLogoutMethod() }  className={`  navLink logout`}>Logout</span></li>
                        </>:<>
                         <li><Link onClick={() => setIsMobileToggle(false) } href="/login" className={` ${pathname == '/login' ? 'active':''} navLink`}>Login</Link></li>
                    <li><Link onClick={() => setIsMobileToggle(false) } href="/register" className={` ${pathname == '/register' ? 'active':''} navLink`}>Register</Link></li>
                    </>
                    }
                   
                   
                </ul>
            </div>
        </div>
    );
};

export default MobileHeader;