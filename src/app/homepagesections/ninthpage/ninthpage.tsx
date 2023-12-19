'use client'

import AnalyticsSVG from '@/app/components/analyticssvg/analyticssvg'
import styles from './styles.module.css'
import InovationSVG from '@/app/components/inovationsvg/inovationsvg'
import MarketSVG from '@/app/components/marketsvg/marketsvg'
import ToolsSVG from '@/app/components/toolssvg/toolssvg'
import { useEffect, useState } from 'react'

export default function NinthPage() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>()

    const handleClick = (index: number): undefined => {
        clearInterval(intervalId)
        setCurrentIndex(index)
        return
    }

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) => currentIndex === 3 ? 0 : currentIndex + 1)
        }, 10000)

        setIntervalId(interval)

    }, [])

    const tempArr = [0, 1, 2, 3]
    const svgArr = [<AnalyticsSVG />, <InovationSVG />, <MarketSVG />, <ToolsSVG />]
    return (
        <div className={styles.ninthpagewrapper}>

            <div className={styles.ninthpagecontainer}>
                <div className={styles.textwrapper}>
                    <div className={styles.textmarquee}>
                        <div className={styles.marqueecontent} style={{ transform: `translate(-${currentIndex * 25}%)` }}>
                            <div className={styles.textcontent}>
                                <h3>
                                    Analytics
                                </h3>

                                <h1>
                                    Gain insights & optimize performance
                                </h1>

                                <p>
                                    Harness the power of real-time analytics for swift, data-driven decisions. Monitor and optimize key metrics instantly, staying ahead in a rapidly evolving digital world.
                                </p>
                            </div>
                            <div className={styles.textcontent}>
                                <h3>
                                    Innovation
                                </h3>

                                <h1>
                                    From ideation to prototyping
                                </h1>

                                <p>
                                    Traverse from innovative ideas to tangible prototypes. Merge creativity with practical development, leading to groundbreaking products and market-ready solutions.
                                </p>
                            </div>
                            <div className={styles.textcontent}>
                                <h3>
                                    Market
                                </h3>

                                <h1>
                                    Accelerate Product Launch
                                </h1>

                                <p>
                                    Speed your product from concept to market. Streamline the path from validation to commercialization, ensuring rapid, impactful market entry. Embrace the pace for a standout launch.
                                </p>
                            </div>
                            <div className={styles.textcontent}>
                                <h3>
                                    Resources
                                </h3>

                                <h1>
                                    Access to Cutting Edge Tech Tools
                                </h1>

                                <p>
                                    Access the latest technologies and elite talent. Equip yourself with a comprehensive toolbox for success in today's competitive environment, blending tech with expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.controlscontainer}>
                            <div className={styles.blueindicator} style={{ transform: `translate(${currentIndex * 100}%)` }}></div>
                            {tempArr.map((element, index) => {
                                return (

                                    <div className={`${styles.indicator} ${currentIndex === index ? styles.activeindicator : null}`} onClick={() => handleClick(index)}></div>

                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.svgwrapper}>
                    {svgArr[currentIndex]}
                    {/* <AnalyticsSVG /> */}
                </div>
            </div>

            <div className={styles.ninthpagemobile}>
                <h1>
                    Innovation is hard, but it does not have to be.
                </h1>
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

                    <AnalyticsSVG />
                </div>
                <div className={styles.textcontent}>
                    <h3>
                        Innovation & Development
                    </h3>

                    <h1>
                        From ideation to prototyping
                    </h1>

                    <p>
                        Traverse from innovative ideas to tangible prototypes. Merge creativity with practical development, leading to groundbreaking products and market-ready solutions.
                    </p>

                    <InovationSVG />
                </div>
                <div className={styles.textcontent}>
                    <h3>
                        Market
                    </h3>

                    <h1>
                        Accelerate Product Launch
                    </h1>

                    <p>
                        Speed your product from concept to market. Streamline the path from validation to commercialization, ensuring rapid, impactful market entry. Embrace the pace for a standout launch.
                    </p>

                    <MarketSVG />
                </div>
                <div className={styles.textcontent}>
                    <h3>
                        Resources
                    </h3>

                    <h1>
                        Access to Cutting Edge Tech Tools
                    </h1>

                    <p>
                        Access the latest technologies and elite talent. Equip yourself with a comprehensive toolbox for success in today's competitive environment, blending tech with expertise.
                    </p>

                    <ToolsSVG />
                </div>
            </div>
        </div>

    )
}