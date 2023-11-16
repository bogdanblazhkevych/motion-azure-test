'use client'

import styles from './styles.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/Gi';
import { useEffect, useRef, useState } from 'react';

import { HiMenu } from "react-icons/hi";
import Link from 'next/link';

export default function Navbar(){
const navRef = useRef<HTMLElement>(null)

    const [navActive, setNavActive] = useState<boolean>(false);
    
    useEffect(() => {
        if (navActive) {
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''

        }
    }, [navActive])

    return (
        <div className={styles.navbarwrapper}>
            <div className={styles.leftwrapper}>
                <a className={styles.companyname} href='/'>
                    MOTION!
                </a>
            </div>

            <nav className={`${styles.navbar} ${navActive ? styles.navactive : ''}`} ref={navRef}>
                <ul>
                    <li className={styles.navcompanyname} onClick={() => setNavActive(false)}>
                        <Link href='/'>
                            MOTION!
                        </Link>
                    </li>
                    <li>
                        <Link href='/partner' onClick={() => setNavActive(false)}>
                            Become a Partner
                        </Link>
                    </li>
                    <li>
                        <Link href='/' onClick={() => setNavActive(false)}>
                            Join Waitlist
                        </Link>
                    </li>
                    <li>
                        <Link href='/' onClick={() => setNavActive(false)}>
                            Talent
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={`${styles.burger} ${navActive ? styles.burgeractive : ''}`} onClick={() => setNavActive(!navActive)}>
                {/* {navActive ? <AiOutlineClose /> : <AiOutlineMenu /> } */}
                {navActive ? <AiOutlineClose /> : <HiMenu /> }
            </div>
        </div>
    )
}
