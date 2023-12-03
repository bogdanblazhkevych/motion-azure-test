'use client'

import { useEffect } from 'react';
import styles from './styles.module.css'

export default function WaitlistInfo() {

    function handleScroll() {
        
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    
    return (
        <div className={styles.waitlistinfowrapper}>
            <div className={styles.waitlistinfocontainer}>
                <div className={styles.descriptioncontiner}>

                    <div className={styles.description}>
                        <h1>
                            Sneak peek at pre-release products
                        </h1>

                        <p>
                            Get exclusive early access to Motion's newest automation platforms and solutions not yet available to the general public. Be the first to take a test drive.
                        </p>
                        
                        <svg className={styles.lineleftrightsvg} viewBox="0 0 500 500" preserveAspectRatio="none">                
                            <path fill-rule="evenodd" stroke-width="3.79px" stroke-linecap="round" stroke-linejoin="miter" d="M4.395,3.895 L247.395,3.895 C247.395,3.895 490.395,3.895 490.395,244.895 C490.395,485.895 490.395,485.895 490.395,485.895 "/>
                        </svg>
                    </div>

                    <div className={styles.description}>
                        <h1>
                            Give valuable feedback
                        </h1>

                        <p>
                            Directly influence Motion's product roadmap by providing feedback on early releases. Help shape the future direction of the offerings.
                        </p>

                        <svg className={styles.lineleftrightsvg} viewBox="0 0 500 500" preserveAspectRatio="none">                
                            <path fill-rule="evenodd" stroke-width="3.79px" stroke-linecap="round" stroke-linejoin="miter" d="M4.395,3.895 L247.395,3.895 C247.395,3.895 490.395,3.895 490.395,244.895 C490.395,485.895 490.395,485.895 490.395,485.895 "/>
                        </svg>
                    </div>

                    <div className={styles.description}>
                        <h1>
                            Test out new features
                        </h1>

                        <p>
                            Directly influence Motion's product roadmap by providing feedback on early releases. Help shape the future direction of the offerings.
                        </p>

                        <svg className={styles.lineleftrightsvg} viewBox="0 0 500 500" preserveAspectRatio="none">                
                            <path fill-rule="evenodd" stroke-width="3.79px" stroke-linecap="round" stroke-linejoin="miter" d="M4.395,3.895 L247.395,3.895 C247.395,3.895 490.395,3.895 490.395,244.895 C490.395,485.895 490.395,485.895 490.395,485.895 "/>
                        </svg>
                    </div>

                    <div className={styles.description}>
                        <h1>
                            Join our private community of innovators
                        </h1>

                        <p>
                            Connect with and learn from other cutting-edge companies that are pushing the boundaries in cloud-AI automation.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}