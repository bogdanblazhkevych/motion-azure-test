import Link from 'next/link'
import styles from './styles.module.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
    return(
        <div className={styles.footerwrapper}>
            <div className={styles.contentwrapper}>
                <div className={styles.links}>
                    <div className={styles.linksheading}>
                        Company
                    </div>
                    <Link href='/'>
                        About
                    </Link>
                    <Link href='/'>
                        Global Partner Program
                    </Link>
                    <Link href='/'>
                        Talent
                    </Link>
                    <Link href='/'>
                        Join Waitlist 
                    </Link>
                    <Link href='/'>
                        Terms of Use
                    </Link>
                </div>

                <div className={styles.socials}>
                    <p>
                        © MOTION-ISE 2023 ALL RIGHTS RESERVED
                    </p>
                    <div className={styles.icons}>
                        <div className={styles.icon}>
                            <FaFacebookF />
                        </div>
                        <div className={styles.icon}>
                            <FaXTwitter />
                        </div>
                        <div className={styles.icon}>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.textwrapper}>
                MOTION!
            </div>
        </div>
    )
}
