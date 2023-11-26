import styles from './styles.module.css'

export default function FifthPage() {
    return (
        <div className={styles.fifthpagewrapper}>
            <div className={styles.fifthpagecontainer}>
                <div className={styles.textwrapper}>
                    <h1>
                    One platform to govern and manage it all
                    </h1>

                    <p>
                    Innovation and product development are complex, costly, risky, and ever-evolving. To help you compete and succeed, we are building technology infrastructure, networks, and solutions to de-risk and fast-track innovation.
                    </p>

                    <ul className={styles.listcontainer}>
                        <li>
                            Real-time analytics & insights
                        </li>
                        <li>
                            Manage and optimize the innovation portfolio 
                        </li>
                        <li>
                            Access to the latest technologies and tools
                        </li>
                        <li>
                            Tap into world-class talent on demand
                        </li>
                        <li>
                            Co-creation and collaboration rooms to optimize R&D projects
                        </li>
                        <li>
                            New product development, rapid product prototyping and validation
                        </li>
                        <li>
                            Effective technology transfer and commercialization of innovation 
                        </li>
                        <li>
                            Validate and bring products to market quickly
                        </li>
                    </ul>
                </div>

                <div className={styles.artwrapper}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422.71 864.59" height="100%">
                    <path className={`${styles.phonepath}`} d="M4.41,431.67q0-178.56,0-357.11C4.43,28.27,32.5.1,78.66.09q121.2,0,242.4,0c9.64,0,19.29-.24,28.93,0,40.11.87,68.93,30,69,70.21.17,65.15.06,130.29.07,195.44q0,110.65,0,221.33v270c0,11.74.21,23.49,0,35.23-.62,43.26-28.08,71.49-71.2,72-45.74.56-91.5.14-137.25.14H107.9c-11.47,0-23,.19-34.42-.05-40-.81-69-30.21-69.08-70.2-.13-49.16,0-98.31,0-147.47v-215Zm16.82.95V793c0,32.32,22.24,54.92,54.5,55q135.81.14,271.62,0c32.79,0,55.12-22.61,55.12-55.33q0-360.33,0-720.65c0-32.71-22.35-55.31-55.1-55.34q-135.8-.15-271.61,0c-32.32,0-54.53,22.59-54.53,55Z"/>
                    {/* <path className={`${styles.phonepath}`} d="M421.6,376.18v-101h1.11v101Z"/>
                    <path className={`${styles.phonepath}`} d="M2.35,314.88v63.18l-1.27,0V314.84Z"/>
                    <path className={`${styles.phonepath}`} d="M2.35,230.49V293.3H1V230.17Z"/>
                    <path className={`${styles.phonepath}`} d="M0,196.58v-30.3l1.61,0v30.32Z"/>
                    <path className={`${styles.phonepath}`} d="M212.47,57.36c-11.49,0-23,.13-34.47,0-9.18-.14-15.12-6-15.08-14.42s5.89-14.33,15.2-14.39q35.25-.24,70.51,0c8.62.06,14.48,6,14.59,14.08.13,8.61-5.55,14.52-14.71,14.69-12,.22-24,0-36,0Z"/> */}
                </svg>
                </div>
            </div>
        </div>
    )
}