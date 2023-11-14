'use client'

import styles from './styles.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';

export default function Navbar(){
const navRef = useRef<HTMLElement>(null)

    const [navActive, setNavActive] = useState<boolean>(false);

    return (
        <div className={styles.navbarwrapper}>
            <div className={styles.leftwrapper}>
                <div className={styles.companyname}>
                    MOTION!
                </div>
            </div>

            <nav className={`${styles.navbar} ${navActive ? styles.navactive : ''}`} ref={navRef}>
                <ul>
                    <li>
                        <a>
                            Become a Partner
                        </a>
                    </li>
                    <li>
                        <a>
                            Join Waitlist
                        </a>
                    </li>
                    <li>
                        <a>
                            Talent
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={styles.burger} onClick={() => setNavActive(!navActive)}>
                <AiOutlineMenu />
            </div>
        </div>
    )
}
