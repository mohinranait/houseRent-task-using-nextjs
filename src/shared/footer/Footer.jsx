import React from 'react';
import "./Footer.scss"
import Logo from '@/components/Logo/Logo';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="container">
                    <div className='wrap'>
                        <div className='column'>
                            <div>
                                <Logo />
                            </div>
                            <p className='inforWebsite'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti suscipit, sunt quas nihil ipsa sapiente.</p>
                        </div>
                        <div className='column'>
                            <p className='title'>Website links</p>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className='column'>
                            <p className='title'>Contact Info</p>
                            <ul className='address'>
                                <li className=''> <FaLocationDot  className='icon' /> <span>Dhaka mogbazar, Bangladesh</span> </li>
                                <li className=''> <MdOutlineMail  className='icon' /> <span>ebrahimit49@gmail.com</span> </li>
                                <li className=''> <FaPhoneAlt className='icon' /> <span>017280-68200</span> </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;