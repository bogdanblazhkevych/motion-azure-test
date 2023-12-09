import Map from '@/app/components/map/map'
import styles from './styles.module.css'
import Logo from '@/app/components/logo/page'
import AnimateHeading from '@/app/components/animateheading/animateheading'

export default function ThirdPage() {
    return(
        <div className={styles.thirdpagewrapper}>
            <div className={styles.thirdpagecontainer}>
                <div className={styles.textwrapper}>
                    <AnimateHeading heading='The Global Innovation Ecosystem Platform'
                                    subheading='Motion, the global ecosystem platform, a technology-first approach to unlock the power of ecosystem connectedness for speed on innovation. A catalyst for startup success and high-performance innovation ecosystems.'
                                    align="center" />
                </div>

                <div className={styles.svgwrapper}>
                    <Map />
                    {/* <Logo /> */}
                </div>
            </div>
        </div>
    )
}