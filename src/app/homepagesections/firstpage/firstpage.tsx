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
                        We are building something special shaping the future of automation to unleash the next wave of innovation and productivity. One platform Any device.
                    </p>
                </div>
            </div>

            <div className={styles.svgwrapper}>
                {/* <Logo /> */}
                {/* <City /> */}
                <svg width="100%" height="100%" viewBox="0 0 2000 899" >
                    <path d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264" 
                        stroke="url(#pink-pulse-1)" 
                        stroke-linecap="round" 
                        stroke-width="2"
                        fill="none">    
                    </path>
                    <rect width="100px" height="100px" fill="url(#pink-pulse-1)">

                    </rect>
                    <defs>
                    <linearGradient gradientUnits="objectBoundingBox" 
                                    id="pink-pulse-1" 
                                    x1="0%" 
                                    y1="0%" 
                                    x2="100%" 
                                    y2="100%">
                                        {/* x1="402.53389142651577" 
                                    y1="121.2195290166128" 
                                    x2="363.09177237033146" 
                                    y2="169.69958461369242" */}
                        <stop stop-color="#FF4A81" stop-opacity="0"></stop>
                        <stop offset="0.030" stop-color="#FF4A81"></stop><stop offset="0.27" stop-color="#DF6CF6"></stop>
                        <stop offset="1" stop-color="#0196FF" stop-opacity="0"></stop>
                    </linearGradient>
                    </defs>
                </svg>

            </div>
        </div>
    )
}
