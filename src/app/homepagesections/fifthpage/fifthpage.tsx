'use client'

import styles from './styles.module.css'
import { useEffect, useRef, useState } from 'react';
import { delay } from '@/app/components/utils';
import { FaRegCircle } from "react-icons/fa";
import Building from '@/app/components/building/building';
import AnimateChildren from '@/app/components/animatechildren/animatechildren';
import MarqueeText from '@/app/components/marqueetext/marqueetext';
import Link from 'next/link';

export default function FifthPage() {
    const phonePathRef = useRef<SVGPathElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const towerRef = useRef<SVGGElement>(null)
    const phoneTextHeadingRefOne = useRef<HTMLDivElement>(null);
    const phoneTextHeadingRefTwo = useRef<HTMLDivElement>(null);
    const phoneTextRefOne = useRef<HTMLDivElement>(null);
    const phoneTextRefTwo = useRef<HTMLDivElement>(null);
    const phoneTextRefThree = useRef<HTMLDivElement>(null);
    const phoneTextRefFour = useRef<HTMLDivElement>(null);
    const phoneTextRefFive = useRef<HTMLDivElement>(null);


    const [toggleTowers, setToggleTowers] = useState<boolean>(false)

    useEffect(() => {
        const svg = svgRef.current;

        const svgObserver = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    phonePathRef.current?.classList.add(`${styles.phonedraw}`)
                    await delay(2000)
                    phonePathRef.current?.classList.add(`${styles.phoneopen}`)
                    await delay(1000)
                    setToggleTowers(true);
                    towerRef.current?.classList.add(`${styles.showtower}`);
                    [phoneTextHeadingRefOne, phoneTextHeadingRefTwo, phoneTextRefOne, phoneTextRefTwo, phoneTextRefThree, phoneTextRefFour, phoneTextRefFive].forEach((ref) => {
                        ref.current?.classList.add(`${styles.phonetextshow}`)
                    })
                }
            })
        }, { threshold: 0.9 });
        if (svg) {
            svgObserver.observe(svg);
        }
    }, []);

    
    return (
        <div className={styles.fifthpagewrapper}>
            <div className={styles.fifthpagecontainer}>
                <div className={styles.textwrapper}>
                    <AnimateChildren>
                        <div className={styles.headingwrapper}>
                            <h1>
                                One platform to govern and manage it all
                            </h1>

                            <p>
                                Innovation and product development are complex, costly, risky, and ever-evolving. To help you compete and succeed, we are building technology infrastructure, networks, and solutions to de-risk and fast-track innovation.
                            </p>
                        </div>
                    </AnimateChildren>
                </div>
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
                    <Link href="/waitlist">
                        <button type="submit" className={styles.submitbutton}>Request Early Access</button>
                    </Link>
                </div>

                <div className={styles.artwrapper}>
                    <div className={styles.phonetextcontentwrapper}>
                        <div className={styles.phoneheadingwrapper}>
                            <div className={styles.phoneheadingtext} ref={phoneTextHeadingRefOne}>
                                WELCOME TO
                            </div>
                            <div className={styles.phoneheadingtext} ref={phoneTextHeadingRefTwo}>
                                {toggleTowers && <MarqueeText />}
                            </div>
                        </div>
                        <svg className={styles.buildingsvg} viewBox='0 0 500 500'>
                            <g ref={towerRef} className={styles.buildingsgroup}>
                                <Building buildingIndex={0}/>
                                <Building buildingIndex={1}/>
                                <Building buildingIndex={2}/>
                                <Building buildingIndex={3}/>
                            </g>
                        </svg>
                        <div className={styles.phonetextwrapper}>

                            <div ref={phoneTextRefOne} className={styles.phonetextitem}>
                                <div className={styles.phonetextcircle}>
                                    <FaRegCircle /> 
                                </div>
                                ECOSYSTEMS
                            </div>
                            <div ref={phoneTextRefTwo} className={styles.phonetextitem}>
                                <div className={styles.phonetextcircle}>
                                    <FaRegCircle /> 
                                </div>
                                COMMUNITIES
                            </div>
                            <div ref={phoneTextRefThree} className={styles.phonetextitem}>
                                <div className={styles.phonetextcircle}>
                                    <FaRegCircle /> 
                                </div>
                                TEAMS&nbsp;ROOMS
                            </div>
                            <div ref={phoneTextRefFour} className={styles.phonetextitem}>
                                <div className={styles.phonetextcircle}>
                                    <FaRegCircle /> 
                                </div>
                                AI&nbsp;ANALYTICS
                            </div>
                            <div ref={phoneTextRefFive} className={styles.phonetextitem}>
                                <div className={styles.phonetextcircle}>
                                    <FaRegCircle /> 
                                </div>
                                MARKETPLACE
                            </div>

                        </div>

                    </div>
                    <svg className={styles.phonesvg} ref={svgRef} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 422 864.59">
                        <path ref={phonePathRef} className={styles.phoneborder} d="M18.517,434.370 C18.517,554.552 18.515,674.734 18.519,794.916 C18.520,827.260 40.744,849.876 72.975,849.909 C163.449,850.001 253.923,850.007 344.397,849.906 C377.167,849.870 399.482,827.277 399.483,794.535 C399.491,554.171 399.489,313.807 399.480,73.443 C399.479,40.710 377.145,18.096 344.426,18.063 C253.953,17.972 163.478,17.967 73.005,18.061 C40.709,18.094 18.519,40.662 18.518,73.039 C18.515,193.482 18.517,313.926 18.517,434.370 Z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

