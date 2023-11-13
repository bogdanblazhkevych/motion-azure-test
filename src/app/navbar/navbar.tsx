import styles from './styles.module.css'

export default function Navbar(){

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
        </div>
    )
}