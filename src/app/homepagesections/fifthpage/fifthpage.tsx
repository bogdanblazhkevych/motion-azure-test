'use client'

import styles from './styles.module.css'
import ListItem from '@/app/components/listitem/listitem';
import { useEffect, useRef, useState } from 'react';
import { delay } from '@/app/components/utils';
import { FaRegCircle } from "react-icons/fa";

export default function FifthPage() {
    const phonePathRef = useRef<SVGPathElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const towerRef = useRef<SVGGElement>(null)
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
                console.log(entry)
                if (entry.isIntersecting) {
                    phonePathRef.current?.classList.add(`${styles.phonedraw}`)
                    await delay(3000)
                    phonePathRef.current?.classList.add(`${styles.phoneopen}`)
                    await delay(1000)
                    setToggleTowers(true);
                    towerRef.current?.classList.add(`${styles.showtower}`);
                    [phoneTextRefOne, phoneTextRefTwo, phoneTextRefThree, phoneTextRefFour, phoneTextRefFive].forEach((ref) => {
                        ref.current?.classList.add(`${styles.phonetextshow}`)
                    })
                    // phoneTextRef.current?.classList.add(`${styles.phonetextshow}`)
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
                    <h1>
                        One platform to govern and manage it all
                    </h1>

                    <p>
                        Innovation and product development are complex, costly, risky, and ever-evolving. To help you compete and succeed, we are building technology infrastructure, networks, and solutions to de-risk and fast-track innovation.
                    </p>

                    <ul className={styles.listcontainer}>
                        <ListItem text="Real-time analytics & insights" />
                        <ListItem text="Manage and optimize the innovation portfolio" />
                        <ListItem text="Access to the latest technologies and tools" />
                        <ListItem text="Tap into world-class talent on demand" />
                        <ListItem text="Co-creation and collaboration rooms to optimize R&D projects" />
                        <ListItem text="New product development, rapid product prototyping and validation" />
                        <ListItem text="Effective technology transfer and commercialization of innovation" />
                        <ListItem text="Validate and bring products to market quickly" />
                    </ul>
                </div>

                <div className={styles.artwrapper}>
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
                    <svg ref={svgRef} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 422 864.59">

                        {toggleTowers && 
                        <defs>
                                {getLinearGradient(toggleTowers, 0, 0, 0.033, 0.15, 0.033, 0.25)}
                                {getLinearGradient(toggleTowers, 1, 0, 0.033, 0.15, 0.033, 0.5)}
                                {getLinearGradient(toggleTowers, 2, 0, 0.033, 0.15, 0.033, 0.5)}
                                {getLinearGradient(toggleTowers, 3, 0, 0.033, 0.15, 0.033, 0.5)}                    
                        </defs>
                        }
                    
                        <path ref={phonePathRef} className={styles.phoneborder} d="M18.517,434.370 C18.517,554.552 18.515,674.734 18.519,794.916 C18.520,827.260 40.744,849.876 72.975,849.909 C163.449,850.001 253.923,850.007 344.397,849.906 C377.167,849.870 399.482,827.277 399.483,794.535 C399.491,554.171 399.489,313.807 399.480,73.443 C399.479,40.710 377.145,18.096 344.426,18.063 C253.953,17.972 163.478,17.967 73.005,18.061 C40.709,18.094 18.519,40.662 18.518,73.039 C18.515,193.482 18.517,313.926 18.517,434.370 Z"/>
                        {/* <path className={`${styles.phonenotch}`}d="M212,57.44c-11.49,0-23,.13-34.47,0-9.18-.14-15.13-6-15.09-14.42s5.9-14.32,15.21-14.39q35.25-.24,70.51,0c8.61.06,14.47,6,14.59,14.08.12,8.62-5.56,14.53-14.71,14.69-12,.22-24,.06-36,.06Z" />     */}

            

                        <g ref={towerRef} className={styles.buildingsgroup}>
                            {/* FREEDOM TOWER */}
                            <path className={`${styles.freedomtoweraccents} ${styles.buildingaccents}`} stroke="url(#draw-in-1)" d="M213.46,220.38l-53.83,440.28m52.75-440.01l53.84,440.61m-107.97,59.09h109.66m-91.61-440.01l30.54-15.27m-30.54,31.93l29.15-15.27m-29.15,33.31l26.37-12.49m-26.37,29.15l24.98-11.1m-24.98,30.54l22.21-9.72m-22.21,24.98l19.43-8.33m-19.43,23.6l18.04-8.33m-18.04,24.98l15.27-5.55m-15.27,22.21l13.88-5.55m-13.88,23.6l11.1-4.16m-11.1,22.21l9.72-4.16m-9.72,20.82l6.94-2.78m-6.94,18.04l5.55-1.39m-5.55-216.54l33.31-18.04m39.32,33.12l-30.54-15.27m30.54,31.93l-29.15-15.27m29.15,33.31l-26.37-12.49m26.37,29.15l-24.98-11.1m24.98,30.54l-22.21-9.72m22.21,24.98l-19.43-8.33m19.43,23.6l-18.04-8.33m18.04,24.98l-15.27-5.55m15.27,22.21l-13.88-5.55m13.88,23.6l-11.1-4.16m11.1,22.21l-9.72-4.16m9.72,20.82l-6.94-2.78m6.94,18.04l-5.55-1.39m5.55-216.54l-33.31-18.04m-31-1.2l24.98-5.55m30.54,5.55l-25.22-5.55m-9.48-49.97h13.88m-13.88-34.7h13.88">
                                {toggleTowers && getAnimateTransform(0, 0, 0.183, 0.033, 0.25)}
                            </path>

                            <path className={`${styles.freedomtower} ${styles.building}`} d="M212.37,125.99v94.39h-27.76v24.98l-18.04,4.16-11.1,546.89h59.69m-2.78-670.43v94.39h27.76v24.98l18.04,4.16,11.1,546.89h-54.13">
                                {toggleTowers && getAnimateStroke(0, 800, 0, 0.0165, 0.15, 0.25)}
                                {toggleTowers && getAnimateTransform(0, 0, 0.183, 0.033, 0.25)}
                            </path>

                            {/* TAIPEI */}
                            <path className={`${styles.taipeiaccents} ${styles.buildingaccents}`} stroke="url(#draw-in-2)" d="M188.99,291.79h48.48m-48.48-19.1h49.95m-42.6-17.63h35.26m-26.44-35.26h17.63m-45.54,380.47h23.5m-29.38-32.32h27.91m-14.69-127.8h24.97m-32.32-24.97h26.44m-22.03-47.01h26.44m-33.79-22.03h23.5m58.76,254.14h-23.5m29.38-32.32h-27.91m14.69-127.8h-24.97m32.32-24.97h-26.44m22.03-47.01h-26.44m33.79-22.03h-23.5m-60.23,163.06h26.44m-35.26-24.97l36.72,.73m54.35,24.24h-26.44m35.26-24.97h-35.26m-17.63,134.41s17.47-2.94,17.47,19.15m0,0c0,22.09-20.57,22.44-20.57,22.44m0,0s-18.34,.34-18.7-20.57m0,0c-.38-22.58,21.8-21.02,21.8-21.02m-52.88-.73s7.59,6.38,33.79,8.81m-36.72,14.69s11.12,9.47,36.72,8.81m33.79-23.5s22.14,1.47,38.19-7.34m-39.66,32.32s24.93,4.32,42.6-10.28m-113.11,127.8h52.88m-48.48-26.44h42.6m-36.72-26.44h29.38m-23.5-26.44h19.1m85.2,79.33h-52.88m48.48-26.44h-42.6m36.72-26.44h-29.38m23.5-26.44h-19.1">
                                {toggleTowers && getAnimateTransform(1, 0, 0.183, 0.033, 0.25)}
                            </path>

                            <path className={`${styles.taipei} ${styles.building}`} d="M212.49,135.23s-8.86,0-8.81,26.44v58.76s-8.81,3.43-8.81,20.57v14.69h-8.81s1.55,55.7,10.28,64.64h-47.01l14.69,66.1h-19.1l16.16,69.04h-17.63l16.16,80.79h-14.69l14.69,89.61-26.44,170.4h79.33m0-661.05s8.86,0,8.81,26.44v58.76s8.81,3.43,8.81,20.57v14.69h8.81s-1.55,55.7-10.28,64.64h47.01l-14.69,66.1h19.1l-16.16,69.04h17.63l-16.16,80.79h14.69l-14.69,89.61,26.44,170.4h-79.33m-17.63-540.59">
                                {toggleTowers && getAnimateStroke(1, 900, 0, 0.0165, 0.15, 0.25)}
                                {toggleTowers && getAnimateTransform(1, 0, 0.183, 0.033, 0.25)}
                            </path>


                            {/* BIG BEN */}
                            <path className={`${styles.bigbenaccents} ${styles.buildingaccents}`} stroke="url(#draw-in-3)" d="M171.23,612.97h81.18m-39.14,184.24v-65.28m-.72-30.46v-65.28m1.45-23.21v-65.28m-42.77,153.77h81.18m-84.14-168.61h90.01m-91.4-30.13h89.88m-76.83-73.99h65.24m-72.48-18.86h78.28m-78.28-36.27h78.28m-78.28-20.31h78.28m-62.34-34.82h46.39m-46.39-49.32h46.39m-1.88,197.16c0,22.08-21.31,21.33-21.31,21.33,0,0-21.31-.07-21.31-17.77m0,0c0-26.29,21.31-25.91,21.31-25.91,0,0,21.31-4.74,21.31,22.35m-21.31-13.65v18.13l11.6-3.63m-30.44,330.03v-65.28m42.04,65.28v-65.28m-42.77-30.46v-65.28m42.04,65.28v-65.28m-40.59-23.21v-65.28m42.04,65.28v-65.28m-55.81-44.97v-73.99m65.24,0v73.99">
                                {toggleTowers && getAnimateTransform(2, 0, 0.183, 0.033, 0.25)}
                            </path>

                            <path className={`${styles.bigben} ${styles.building}`} d="M211.82,116.92v75.49l-29.04,75.49h5.81v49.36l-15.97,34.84v56.62h-13.07v84.2l7.26,8.71v30.49l4.36,2.9v261.32h40.65m0-679.44v75.49l29.04,75.49h-5.81v49.36l15.97,34.84v56.62h13.07v84.2l-7.26,8.71v30.49l-4.36,2.9v261.32h-40.65">
                                {toggleTowers && getAnimateStroke(2, 800, 0, 0.0165, 0.15, 0.25)}
                                {toggleTowers && getAnimateTransform(2, 0, 0.183, 0.033, 0.25)}
                            </path>


                            {/* EIFFEL TOWER */}
                            <path className={`${styles.eiffeltoweraccents} ${styles.buildingaccents}`} stroke="url(#draw-in-4)" d="M150.01,605.93s11.99-15.67,27.19-49.58m10.33-26.85c5.56-18.23,10.96-39.98,15.49-66.1m4.13-29.95c2.57-19.45,5.05-41.25,6.2-63m69.9,239.62s-10.26-9.96-27.55-53.71m-10.33-25.82c-5.86-18.54-11.57-40.83-16.29-66.76m-3.89-30.34c-4.01-19.17-5.49-39.56-6.67-61.95m-5.16-1.03h5.16m-121.88,265.44h36.15m-15.49-30.99h35.12m-20.66-23.76h33.05m3.1-86.76h28.92m-6.2-84.69h19.62m-15.49-18.59h17.56m-13.43-20.66h33.05m103.29,265.05h-36.15m15.49-30.99h-35.12m20.66-23.76h-33.05m-3.1-86.76h-28.92m6.2-84.69h-19.62m15.49-18.2h-17.56m-75.4,165.26h143.57m-134.27-26.85h123.94m-100.19-66.1h77.46m-69.2-29.95h60.94m-46.48-76.43h30.99m-28.92-15.49h26.85m-13.77-139.44v140.47">
                                {toggleTowers && getAnimateTransform(3, 0, 0.183, 0.033, 0.25)}
                            </path>

                            <path className={`${styles.eiffeltower} ${styles.building}`} d="M214.89,576.49s-82.08-3.19-92.95,101.22H59.98s61.54-63.36,89.85-139.44c26.92-69.69,33.05-99.15,33.05-99.15,0,0,25.82-93.99,28.92-215.87h-9.29v-21.69h12.39v-33.05m0,407.98s82.1-3.7,92.97,100.7h61.97s-61.54-63.36-89.85-139.44c-26.92-69.69-33.07-98.64-33.07-98.64,0,0-25.82-93.99-28.92-215.87h9.29v-21.69h-12.39v-33.05">
                                {toggleTowers && getAnimateStroke(3, 800, 0, 0.0165, 0.15, 0.25)}
                                {toggleTowers && getAnimateTransform(3, 0, 0.183, 0.033, 0.25)}
                            </path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function getAnimateStroke(order: number, offset: number, start: number, strokein: number, strokeout: number, end: number) {
    //strokein should be before gradient fillin
    //strokeout should at gradien pause
    const _start = order * 0.25;
    const _strokein = _start + strokein;
    const _strokeout = _strokein + strokeout + strokein + 0.033;
    const _end = _start + 0.25 - 0.0165

    return (
        <animate attributeName="stroke-dashoffset"
            type="scale"
            values={`${offset};${offset};${0};${0};${offset};${offset}`}
            dur="20s"
            keyTimes={`0;${_start};${_strokein};${_strokeout};${_end};1`}
            repeatCount="indefinite">
        </animate>
    )

}

function getAnimateTransform(order: number, start: number, scalein: number, scaleout: number, end: number) {
    //scalein parameter should be getLinearGradient's fill + fillout value 
    const _start = order * 0.25;
    const _scalein = _start + scalein;
    const _scaleout = _scalein + scaleout;
    const _end = _start + 0.25

    return (
        <animateTransform attributeName="transform"
            type="scale"
            values="1;1;1.1;1;1;1"
            dur="20s"
            keyTimes={`0;${_start};${_scalein};${_scaleout};${_end};1`}
            repeatCount="indefinite">
        </animateTransform>
    )
}


function getLinearGradient(toggleTowers:boolean, order: number, start: number, fill: number, fillout: number, pause: number, end?: number) {
    const _id = `draw-in-${order + 1}`;
    const _start = order * 0.25;
    const _fill = _start + fill;
    const _fillout = _fill + fillout;
    const _pause = _fillout + pause;
    const _end = _start + 0.25

    if (!toggleTowers) {
        return <>
        </>
    }

    return (
        <linearGradient gradientUnits="objectBoundingBox"
            className={styles.pulseone}
            id={_id}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="300%">

            <stop offset="0%" stop-color="white" stop-opacity="0" />
            <stop offset="10%" stop-color="white" stop-opacity="0" />

            <stop offset="10%" stop-color="#267e99" />
            <stop offset="50%" stop-color="#267e99" />

            <stop offset="50%" stop-color="white" stop-opacity="0" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />

            <animate attributeName="y1" values="100%;100%;-50%;-50%;-100%;-100%;-100%" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="y2" values="300%;300%;300%;300%;0%;0%;0%;" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" />
        </linearGradient>
    )
}