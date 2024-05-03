/* eslint-disable @next/next/no-img-element */
'use client';

import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../utilities/Button';

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
        <header className='navbar bg-transparent absolute top-0 w-full py-5 z-[9999]'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div className="w-1/5">
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
                        className={`navbar-nav left-0 transition-all duration-300 ease-in-out`}
                        style={{
                            top: screenWidth < 768 ? isOpen ? '100px' : '100vh' : '0',
                            opacity: screenWidth < 768 ? isOpen ? 1 : 0 : 1,
                            visibility: screenWidth < 768 ? isOpen ? 'visible' : 'hidden' : 'visible',
                            pointerEvents: screenWidth < 768 ? isOpen ? 'auto' : 'none' : 'auto',
                        }}>
                        <ul className='flex md:items-center items-start md:gap-8 gap-4 max-w-[540px] md:max-w-max mx-auto md:flex-row flex-col md:px-0 px-3 md:py-0 py-8'>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/templates">
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="md:w-1/5 flex items-center gap-5">
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
        </header>
    );
};

export default Header;