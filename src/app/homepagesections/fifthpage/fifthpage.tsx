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
                <svg className={styles.phonesvg} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422.71 864.59" >
                    <path className={`${styles.phonepath}`} d="M4.41,431.67q0-178.56,0-357.11C4.43,28.27,32.5.1,78.66.09q121.2,0,242.4,0c9.64,0,19.29-.24,28.93,0,40.11.87,68.93,30,69,70.21.17,65.15.06,130.29.07,195.44q0,110.65,0,221.33v270c0,11.74.21,23.49,0,35.23-.62,43.26-28.08,71.49-71.2,72-45.74.56-91.5.14-137.25.14H107.9c-11.47,0-23,.19-34.42-.05-40-.81-69-30.21-69.08-70.2-.13-49.16,0-98.31,0-147.47v-215Zm16.82.95V793c0,32.32,22.24,54.92,54.5,55q135.81.14,271.62,0c32.79,0,55.12-22.61,55.12-55.33q0-360.33,0-720.65c0-32.71-22.35-55.31-55.1-55.34q-135.8-.15-271.61,0c-32.32,0-54.53,22.59-54.53,55Z"/>
                    <path className={`${styles.phonepath}`} d="M421.6,376.18v-101h1.11v101Z"/>
                    <path className={`${styles.phonepath}`} d="M2.35,314.88v63.18l-1.27,0V314.84Z"/>
                    <path className={`${styles.phonepath}`} d="M2.35,230.49V293.3H1V230.17Z"/>
                    <path className={`${styles.phonepath}`} d="M0,196.58v-30.3l1.61,0v30.32Z"/>
                    <path className={`${styles.phonepath}`} d="M212.47,57.36c-11.49,0-23,.13-34.47,0-9.18-.14-15.12-6-15.08-14.42s5.89-14.33,15.2-14.39q35.25-.24,70.51,0c8.62.06,14.48,6,14.59,14.08.13,8.61-5.55,14.52-14.71,14.69-12,.22-24,0-36,0Z"/>
                </svg>
                <svg className={styles.freedomtowersvg} viewBox="0 0 422.71 864.59" height="100%">
                    <defs>
                    <linearGradient gradientUnits="objectBoundingBox" 
                                    className={styles.pulseone}
                                    id="tower-outline" 
                                    x1="0%" 
                                    y1="100%" 
                                    x2="0%" 
                                    y2="200%">
                        <stop stop-color="#267e99" stop-opacity="0"></stop>
                        <stop offset="0.05" stop-color="#267e99"></stop>
                        <stop offset="1" stop-color="#267e99" stop-opacity="0"></stop>
                        <animate attributeName="x1" values="0%;0%;0%" keyTimes="0;0.1;1" dur="4s" repeatCount="indefinite" calcMode="linear" />
                        <animate attributeName="y1" values="100%;0%;0%" keyTimes="0;0.1;1" dur="4s" repeatCount="indefinite" calcMode="linear" />
                        <animate attributeName="x2" values="0%;0%;0%" keyTimes="0;0.1;1" dur="4s" repeatCount="indefinite" calcMode="linear" />
                        <animate attributeName="y2" values="200%;200%;200%" keyTimes="0;0.1;1" dur="4s" repeatCount="indefinite" calcMode="linear" />
                    </linearGradient>
                    </defs>

                    <path stroke="url(#tower-outline)" className={styles.freedomtowerpath} id="tower_1" d="M271.768,578l7.874-394.622,33.071-8.087,33.07,6.47L355.232,578m-1.575-54.988H273.343m18.9-342.869v-17.79h44.094v17.79M312.713,94.426v80.865l-39.37,323.461m34.645-381.684h9.449m-9.449,24.26h9.449m-4.724,33.963,40.944,321.844m-67.508-301.88,26.564-13.494M337.9,195.255c-0.934,0-23.61-13.494-23.61-13.494m-28.138,25.681,24.989-12.187M337.9,207.442l-22.035-12.187m-29.713,24.191,21.839-12m29.909,12-20.46-12m-31.288,24.737,21.839-12.733M337.9,232.179l-18.885-12.733m-32.863,25.389,20.264-12.656M337.9,244.835l-18.885-12.656M286.149,256.37l18.69-13.152M337.9,256.37l-17.31-13.152M286.149,269.1l17.115-12.725M337.9,269.1L322.161,256.37m-36.012,24.373,15.54-11.648M337.9,280.743l-14.161-13.265m-37.587,25.634,13.965-12.369M337.9,293.112l-12.586-12.369m-39.162,24.374,12.391-12m39.357,12-11.011-12m-40.737,24.555,10.816-12.55m40.932,12.55-9.437-12.55M286.149,329.49l9.241-11.823M337.9,329.49l-7.862-11.823m-43.886,24.555,7.666-12.732M337.9,342.222L331.61,329.49m-45.461,24.191,6.091-11.459M337.9,353.681l-4.712-11.459m-47.036,23.911,4.517-12.452M337.9,364.516l-3.137-10.835"/>
                </svg>
                </div>
            </div>
        </div>
    )
}