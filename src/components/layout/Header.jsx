'use client';

import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../utilities/Button';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    const handleMenu = () => {
        setOpen(!isOpen);
    }


    useEffect(() => {
        setScreenWidth(window.innerWidth);
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <motion.header
        
        className='bg-transparent absolute top-0 w-full  z-[9999]'>
            <div className="container relative md:py-5 py-3">
                <div className='flex justify-between items-center'>
                    <div className="w-1/5 relative z-[1001]">
                        <Link href="/">
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Logo"
                                height={26}
                                width={100}
                            />
                        </Link>
                    </div>
                    <nav
                        className={`navbar-nav left-0 transition-all duration-300 ease-in-out `}
                        style={{
                            top: screenWidth < 768 ? isOpen ? '0' : '100vh' : '0',
                            opacity: screenWidth < 768 ? isOpen ? 1 : 0 : 1,
                            visibility: screenWidth < 768 ? isOpen ? 'visible' : 'hidden' : 'visible',
                            pointerEvents: screenWidth < 768 ? isOpen ? 'auto' : 'none' : 'auto',
                        }}>
                        <ul className='flex md:items-center items-start md:gap-16 gap-4 max-w-[540px] md:max-w-max mx-auto md:flex-row flex-col md:px-0 px-3 md:pt-0 pt-20 md:pb-0 pb-8'>
                            <li>
                                <Link href="/">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="md:w-1/5 flex items-center gap-5 relative  z-[1001]">
                        <Link href="/">
                            Login
                        </Link>
                        <Button
                            className="md:block hidden"
                            size="sm"
                            href='/templates'
                        >
                            Register
                        </Button>
                        <div className='navbar-hamburger block md:hidden'>
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;