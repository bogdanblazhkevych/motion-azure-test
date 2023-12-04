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
                    <Link href='/partner'>
                        Global Partner Program
                    </Link>
                    <Link href='/talent'>
                        Talent
                    </Link>
                    <Link href='/waitlist'>
                        Join Waitlist 
                    </Link>
                    <Link href='/'>
                        Terms of Use
                    </Link>
                </div>

                <div className={styles.socials}>
                    <p>
                        {'© MOTION-ISE 2023\nALL RIGHTS RESERVED'}
                    </p>
                    <div className={styles.icons}>
                        <Link href="https://www.facebook.com/motion.ise.platform" target="_blank">
                            <div className={styles.icon}>
                                <FaFacebookF />
                            </div>
                        </Link>
                        <Link href="https://twitter.com/motion_platform" target="_blank">            
                            <div className={styles.icon}>
                                <FaXTwitter />
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/company/motionplatform/" target="_blank">
                            <div className={styles.icon}>
                                <FaLinkedinIn />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.textwrapper}>
                MOTION!
            </div>
        </div>
    )
}
