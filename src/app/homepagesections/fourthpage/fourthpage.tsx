import Cylinder from '@/app/components/cylinder/cylinder'
import styles from './styles.module.css'

export default function FourthPage() {


    return(
        <div className={styles.fourthpagewrapper}>
            <div className={styles.fourthpagecontainer}>
                <div className={styles.cardswrapper}>

                </div>

                <div className={styles.cylinderwrapper}>
                    <div className={styles.cylindercontainer}>
                        <Cylinder />
                    </div>
                </div>
            </div>
        </div>
    )
}