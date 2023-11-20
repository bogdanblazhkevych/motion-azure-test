import Logo from '@/app/components/logo/page'
import styles from './styles.module.css'
import City from '@/app/components/city/city'

export default function FirstPage(){
    return(
        <div className={styles.firstpagewrapper}>
            
            <div className={styles.textcontainer}>
                <div className={styles.herotextwrapper}>
                    <h1 className={styles.herotitle}>
                        Success starts with a great product
                    </h1>
                    <p className={styles.heroparagraph}>
                        We are building something special shaping the future of automation to unleash the next wave of innovation and productivity.
                    </p>
                    <div className={styles.buttonwrapper}>
                        <button className={`${styles.button} ${styles.buttonjoin}`}>
                            Join the Waitlist
                        </button>

                        <button className={`${styles.button} ${styles.buttonpartner}`}>
                            Become a partner
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.svgwrapper}>
                <div className={styles.svgcontainer}>
                    <City />
                </div>
            </div>
        </div>
    )
}
