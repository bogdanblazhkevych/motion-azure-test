import styles from './styles.module.css'

export default function FirstPage(){
    return(
        <div className={styles.firstpagewrapper}>
            <div className={styles.herotextwrapper}>
                <h1 className={styles.herotitle}>
                    Success starts with a great product
                </h1>
                <p className={styles.heroparagraph}>
                    We are building something special shaping the future of automation to unleash the next wave of innovation and productivity. One platform Any device.
                </p>
            </div>

            <div className={styles.svgwrapper}>
                ...placeholder...
            </div>
        </div>
    )
}