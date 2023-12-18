'use client'

import AnalyticsSVG from '@/app/components/analyticssvg/analyticssvg'
import styles from './styles.module.css'
import InovationSVG from '@/app/components/inovationsvg/inovationsvg'
import MarketSVG from '@/app/components/marketsvg/marketsvg'
import ToolsSVG from '@/app/components/toolssvg/toolssvg'
import { useState } from 'react'

export default function NinthPage() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClick = (index: number): undefined => {
        setCurrentIndex(index)
        return
    }

    const tempArr = [0, 1, 2, 3]
    return (
        <div className={styles.ninthpagewrapper}>
            <div className={styles.ninthpagecontainer}>
                <div className={styles.textwrapper}>
                    <div className={styles.textmarquee}>
                        <div className={styles.marqueecontent} style={{ transform: `translate(-${currentIndex * 100}%)`}}>
                            <div className={styles.textcontent}>
                                <h3>
                                    PLATFORM
                                </h3>

                                <h1>
                                    One platform to govern and manage it all
                                </h1>

                                <p>
                                    Innovation and product development are complex, costly, risky, and ever-evolving. To help you compete and succeed, we are building technology infrastructure, networks, and solutions to de-risk and fast-track innovation.
                                </p>
                            </div>
                            <div className={styles.textcontent}>
                                <h3>
                                    Real-Time Analytics
                                </h3>

                                <h1>
                                    Gain insights & optimize performance
                                </h1>

                                <p>
                                    Harness the power of real-time analytics for swift, data-driven decisions. Monitor and optimize key metrics instantly, staying ahead in a rapidly evolving digital world.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.controlscontainer}>
                            <div className={styles.blueindicator} style={{transform: `translate(${currentIndex * 100}%)`}}></div>
                            {tempArr.map((element, index) => {
                                return(
                                    
                                    <div className={`${styles.indicator} ${currentIndex === index ? styles.activeindicator : null}`} onClick={() => handleClick(index)}></div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.infowrapper}>
                    <div className={styles.infocontainer}>
                        <h2>
                            Ai Powered Analytics
                        </h2>
                        <AnalyticsSVG />
                    </div>
                </div>
                <div className={styles.infowrapper}>
                    <div className={styles.infocontainer}>
                        <h2>
                            Innovation & Development
                        </h2>
                        <InovationSVG />
                    </div>
                </div>
                <div className={styles.infowrapper}>
                    <div className={styles.infocontainer}>
                        <h2>
                            Accelerate Market Entry
                        </h2>
                        <MarketSVG />
                    </div>
                </div>
                <div className={styles.infowrapper}>
                    <div className={styles.infocontainer}>
                        <h2>
                            Access Cutting-Edge Tools
                        </h2>
                        <ToolsSVG />
                    </div>
                </div>
            </div>
        </div>

    )
}