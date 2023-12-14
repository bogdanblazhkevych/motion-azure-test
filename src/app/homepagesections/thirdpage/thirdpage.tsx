import Map from '@/app/components/map/map'
import styles from './styles.module.css'
import Logo from '@/app/components/logo/page'
import AnimateChildren from '@/app/components/animatechildren/animatechildren'

export default function ThirdPage() {
    return(
        <div className={styles.thirdpagewrapper}>
            <div className={styles.thirdpagecontainer}>
                <div className={styles.textwrapper}>
                    <AnimateChildren>
                        <div className={styles.headingwrapper}>
                            <h1>
                                The Global Innovation Ecosystem Platform
                            </h1>
                            <p>
                                Motion, the global ecosystem platform, a technology-first approach to unlock the power of ecosystem connectedness for speed on innovation. A catalyst for startup success and high-performance innovation ecosystems.
                            </p>
                        </div>
                    </AnimateChildren>
                </div>

                <div className={styles.svgwrapper}>
                    <AnimateChildren>
                        <Map />
                    </AnimateChildren>
                </div>
            </div>
        </div>
    )
}