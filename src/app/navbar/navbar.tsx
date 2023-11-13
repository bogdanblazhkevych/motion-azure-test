'use client'

import styles from './styles.module.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar(){

    const [navActive, setNavActive] = useState<boolean>(false)

    return (
        <div className={styles.navbarwrapper}>
            <div className={styles.leftwrapper}>
                <div className={styles.companyname}>
                    MOTION!
                </div>
            </div>

            <nav className={styles.navbar}>
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
