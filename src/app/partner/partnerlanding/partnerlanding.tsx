import styles from './styles.module.css'

export default function PartnerLanding() {
    return(
        <div className={styles.partnerlandingwrapper}>
            <div className={styles.partnerlandingcontainer}>
                <div className={styles.logocontainer}>
                    <svg viewBox="0 0 500 500">
                    <path className={styles.logopath} d="M367.293,135.92l4.239-21.942C481.98,145.2,408.21,234.229,408.21,234.229,452.578,142.546,367.293,135.92,367.293,135.92Zm-17,193.886s-22.941,18.209-87.269,45.123S143.034,397.49,143.034,397.49,56.81,398.748,32.389,350.756,70.927,231.114,70.927,231.114s-44.7,54.318-22.581,97.78,100.2,42.323,100.2,42.323,50.413,3.941,108.669-20.432,79.032-40.863,79.032-40.863,139.789-89.965,101.613-163.454c-21.043-41.132-93.145-43.782-93.145-43.782s98.328-7.937,121.371,46.7C508.242,230.535,350.3,329.806,350.3,329.806ZM162.134,360.342s-70.306,11.524-101.1-48.451c-20.059-54.535,53.36-111.584,53.36-111.584V223.8S7.9,334.716,162.134,360.342Z"/>
                    </svg>
                    <div className={styles.gradient}>

                    </div>
                </div>

                <h1>
                    Motion global partner program
                </h1>

                <p>
                    We are designing a partner program to help entrepreneurs and stakeholders connect and collaborate to build new products fast and efficiently, and successfully grow new companies.
                </p>

            </div>
        </div>
    )
}