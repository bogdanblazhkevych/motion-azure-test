'use client'

import styles from './styles.module.css'
import ListItem from '@/app/components/listitem/listitem';
import { useEffect, useRef, useState } from 'react';
import { delay } from '@/app/components/utils';
import { FaRegCircle } from "react-icons/fa";
import Building from '@/app/components/building/building';
import AnimateChildren from '@/app/components/animatechildren/animatechildren';
import MarqueeText from '@/app/components/marqueetext/marqueetext';

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
                    await delay(3000)
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
                    {/* <ul className={styles.listcontainer}>
                        <ListItem text="Real-time analytics & insights" />
                        <ListItem text="Manage and optimize the innovation portfolio" />
                        <ListItem text="Access to the latest technologies and tools" />
                        <ListItem text="Tap into world-class talent on demand" />
                        <ListItem text="Co-creation and collaboration rooms to optimize R&D projects" />
                        <ListItem text="New product development, rapid product prototyping and validation" />
                        <ListItem text="Effective technology transfer and commercialization of innovation" />
                        <ListItem text="Validate and bring products to market quickly" />
                    </ul> */}
                </div>

                <div className={styles.iconwrapper}>
                    <h3>
                        Real-Time Analytics
                    </h3>
                    <p>
                        Gain insights & optimize performance
                    </p>
                    <div className={styles.iconsvgwrapper}>
                            {analyticsSVG()}
                    </div>

                </div>
                <div className={styles.iconwrapper}>
                    <h3>
                        Innovation & Development
                    </h3>
                    <p>
                        From ideation to prototyping
                    </p>
                    <div className={styles.iconsvgwrapper}>
                            {analyticsSVG()}
                    </div>
                </div>
                <div className={styles.iconwrapper}>
                    <h3>
                        Access Cutting-Edge Tools
                    </h3>
                    <p>
                        Leverage technology & talent
                    </p>
                    <div className={styles.iconsvgwrapper}>
                            {analyticsSVG()}
                    </div>

                </div>
                <div className={styles.iconwrapper}>
                    <h3>
                        Accelerate Market Entry
                    </h3>
                    <p>
                        Accelerate Market Entry
                    </p>
                    <div className={styles.iconsvgwrapper}>
                            {analyticsSVG()}
                    </div>

                </div>

                <div className={styles.artwrapper}>
                    <div className={styles.phoneheadingwrapper}>
                        <div className={styles.phoneheadingtext} ref={phoneTextHeadingRefOne}>
                            WELCOME TO
                        </div>
                        <div className={styles.phoneheadingtext} ref={phoneTextHeadingRefTwo}>
                            {toggleTowers && <MarqueeText />}
                        </div>
        
                        {/* <div className={styles.phoneheadingtext}>
                            STARTUP ECOSYSTEM
                        </div> */}
                        {/* <div className={styles.phoneheadingtext}>
                            ECOSYSTEM
                        </div> */}
                    </div>
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
                            TEAMS ROOMS
                        </div>
                        <div ref={phoneTextRefFour} className={styles.phonetextitem}>
                            <div className={styles.phonetextcircle}>
                                <FaRegCircle /> 
                            </div>
                            AI ANALYTICS
                        </div>
                        <div ref={phoneTextRefFive} className={styles.phonetextitem}>
                            <div className={styles.phonetextcircle}>
                                <FaRegCircle /> 
                            </div>
                            MARKETPLACE
                        </div>

                    </div>
                    <svg className={styles.phonesvg} ref={svgRef} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 422 864.59">
                        <path ref={phonePathRef} className={styles.phoneborder} d="M18.517,434.370 C18.517,554.552 18.515,674.734 18.519,794.916 C18.520,827.260 40.744,849.876 72.975,849.909 C163.449,850.001 253.923,850.007 344.397,849.906 C377.167,849.870 399.482,827.277 399.483,794.535 C399.491,554.171 399.489,313.807 399.480,73.443 C399.479,40.710 377.145,18.096 344.426,18.063 C253.953,17.972 163.478,17.967 73.005,18.061 C40.709,18.094 18.519,40.662 18.518,73.039 C18.515,193.482 18.517,313.926 18.517,434.370 Z"/>

                        <g ref={towerRef} className={styles.buildingsgroup}>
                            <Building buildingIndex={0}/>
                            <Building buildingIndex={1}/>
                            <Building buildingIndex={2}/>
                            <Building buildingIndex={3}/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}


const analyticsSVG = () => {
    return(
        <svg viewBox="0 0 500 500">
            <rect width="500" height="500" fill="#ff0" stroke-width="0"/>
            <path d="m24.35,391.03s-6.64,21.46,3.52,21.08l445.08.66,4.52-18.94-31.34-13.72-1.7-285.35s2.67-15.68-14.45-15.68-361.71.54-361.71.54c0,0-12.26-4.49-12.39,12.39s3.98,285.44,3.98,285.44l-35.5,13.58Z" fill="#ff1d25" stroke-width="0"/>
            <path d="m457.09,377.61h32.18c-.51,10.53-.13,20.8-1.73,30.75-1.54,9.55-10.48,15.97-20.43,16.85-2,.18-4.03.15-6.05.15-140.46,0-280.92,0-421.39,0-18.73,0-27.72-8.95-27.72-27.6,0-6.48,0-12.97,0-19.84h31.73v-6.16c0-92.16-.06-184.32.16-276.49.01-5.51,1.38-11.5,3.82-16.42,3.42-6.92,10.18-10.15,17.9-10.88,2-.19,4.03-.14,6.05-.14,119.2,0,238.4,0,357.6,0,18.94,0,27.89,8.97,27.89,27.95,0,91.85,0,183.7,0,275.55v6.29Zm-397.24-.16h381.08v-78.93H59.85v78.93Zm.08-229.94v134.38h182.15v-134.38H59.93Zm198.74,134.45h182.16v-134.38h-182.16v134.38ZM59.76,131.02h381.42c0-11.87,0-23.46,0-35.06,0-10.3-1.96-12.26-12.22-12.26-119.05,0-238.1,0-357.15,0-1.55,0-3.11-.06-4.65.1-4.24.45-7.23,2.76-7.3,7.06-.23,13.29-.08,26.59-.08,40.16Zm-31.67,262.82c-.98,13.62.85,15.63,13.71,15.63,139.37,0,278.74,0,418.11,0,1.55,0,3.11.07,4.65-.03,5.33-.36,7.95-2.87,8.31-8.13.16-2.42.03-4.86.03-7.46H28.09Z" stroke-width="0"/>
            <path d="m170.58,322.24h-94.87" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m170.58,353.9h-94.87" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m361.64,322.14h-94.87" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m361.64,353.84h-94.87" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m234.13,322.14h-31.72" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m234.13,353.84h-31.72" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m425.1,353.9h-31.72" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m425.1,322.14h-31.72" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m76.36,246.58c11.86-11.9,24.09-24.16,36.21-36.32,7.27,7.3,14.99,15.05,22.72,22.82,13.69-13.78,26.75-26.94,39.94-40.22,8.48,8.58,16.21,16.38,24,24.26,9.07-9.12,17.65-17.75,26.41-26.57" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m361.94,187.58c17.37-1.5,37.68,13.19,39.26,36.39,1.57,22.9-15.86,41.89-39,42.34-22.09.43-40.64-17.65-39.87-39.34" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m345.31,210.59h-46.87c-4.12-28.36,18.06-50.68,46.87-47.07v47.07Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="17"/>
            <path d="m171.18,115.19v-15.34h253.8v15.34h-253.8Z" stroke-width="0"/>
            <path d="m90.99,115.22h-15.23v-15.43h15.23v15.43Z" stroke-width="0"/>
            <path d="m107.5,115.16v-15.28h15.39v15.28h-15.39Z" stroke-width="0"/>
            <path d="m154.86,99.77v15.35h-15.44v-15.35h15.44Z" stroke-width="0"/>
        </svg>
    )
}
