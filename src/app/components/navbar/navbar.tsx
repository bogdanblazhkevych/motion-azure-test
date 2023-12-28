'use client'

import styles from './styles.module.css'
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation'
import { HiMenu } from "react-icons/hi";
import Link from 'next/link';

export default function Navbar(){
const navRef = useRef<HTMLElement>(null)
    const pathname = usePathname();
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
                    <li className={pathname === '/partner/' ? styles.navlinkon : undefined }>
                        <Link href='/partner' onClick={() => setNavActive(false)}>
                            Become a Partner
                        </Link>
                        <div className={styles.linkdesc}>
                            Access to a global innovation and startup ecosystem
                        </div>
                    </li>
                    <li className={pathname === '/waitlist/' ? styles.navlinkon : undefined }>
                        <Link href='/waitlist' onClick={() => setNavActive(false)}>
                            Join Waitlist
                        </Link>
                        <div className={styles.linkdesc}>
                            Get early access by joining our waiting list
                        </div>
                    </li>
                    <li className={pathname === '/talent/' ? styles.navlinkon : undefined }>
                        <Link href='/talent' onClick={() => setNavActive(false)}>
                            Talent
                        </Link>
                        <div className={styles.linkdesc}>
                            Join our core team and
                        </div>
                    </li>
                    <div className={styles.mobileborderdiv}></div>
                    <li className={styles.tosli}>
                        <Link href='/policy' onClick={() => setNavActive(false)}>
                            Terms Of Use
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
