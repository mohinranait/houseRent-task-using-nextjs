import React from 'react';
import './Header.scss'
import Logo from '@/components/Logo/Logo';
import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
const Header = () => {
    return (
        <header>
            <div>
                <div className="container">
                    <nav className='navWrap'>
                        <div className='logoMenuWrap'>
                            <div className="humberIcon">
                                <LuMenu  size={20} />
                            </div>
                            <Logo />
                            <ul className='navLinks'>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/register">Register</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='navRight'>
                                <li>
                                    <Link className='addLists' href={'/login'}>AddListing</Link>
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