import Map from '@/app/components/map/map'
import styles from './styles.module.css'

export default function ThirdPage() {
    return(
        <div className={styles.thirdpagewrapper}>
            <div className={styles.thirdpagecontainer}>
                <div className={styles.textwrapper}>
                    <h1>
                        some fucking heading
                    </h1>
                    <p>
                        even more fucnking text yapping baout something 
                    </p>
                </div>

                <div className={styles.svgwrapper}>
                    <Map />
                </div>
            </div>
        </div>
    )
}