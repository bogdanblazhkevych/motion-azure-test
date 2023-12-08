'use client'

import { text } from 'stream/consumers';
import styles from './styles.module.css'
import { IoCheckbox } from "react-icons/io5";
import ListItem from '@/app/components/listitem/listitem';
import { useEffect, useRef, useState } from 'react';
import { delay } from '@/app/components/utils';
import { FaRegCircle } from "react-icons/fa";
import FreedomTower from '@/app/components/freedomtower/freedomtower';

export default function FifthPage() {
    const phonePathRef = useRef<SVGPathElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const towerRef = useRef<SVGGElement>(null)
    const phoneTextRefOne = useRef<HTMLDivElement>(null);
    const phoneTextRefTwo = useRef<HTMLDivElement>(null);
    const phoneTextRefThree = useRef<HTMLDivElement>(null);
    const phoneTextRefFour = useRef<HTMLDivElement>(null);
    const phoneTextRefFive = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const svg = svgRef.current;

        const svgObserver = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
                // console.log(entry)
                if (entry.isIntersecting) {
                    phonePathRef.current?.classList.add(`${styles.phonedraw}`)
                    await delay(3000)
                    phonePathRef.current?.classList.add(`${styles.phoneopen}`)
                    await delay(1000)
                    towerRef.current?.classList.add(`${styles.showtower}`);
                    [phoneTextRefOne, phoneTextRefTwo, phoneTextRefThree, phoneTextRefFour, phoneTextRefFive].forEach((ref) => {
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
                        <path ref={phonePathRef} className={styles.phoneborder} d="M18.517,434.370 C18.517,554.552 18.515,674.734 18.519,794.916 C18.520,827.260 40.744,849.876 72.975,849.909 C163.449,850.001 253.923,850.007 344.397,849.906 C377.167,849.870 399.482,827.277 399.483,794.535 C399.491,554.171 399.489,313.807 399.480,73.443 C399.479,40.710 377.145,18.096 344.426,18.063 C253.953,17.972 163.478,17.967 73.005,18.061 C40.709,18.094 18.519,40.662 18.518,73.039 C18.515,193.482 18.517,313.926 18.517,434.370 Z"/>

                        <g ref={towerRef} className={styles.buildingsgroup}>
                            <FreedomTower buildingIndex={0}/>
                            <FreedomTower buildingIndex={1}/>
                            <FreedomTower buildingIndex={2}/>
                            <FreedomTower buildingIndex={3}/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export function getAnimateStroke(ref:React.RefObject<SVGAnimateElement>, order: number, offset: number, start: number, strokein: number, strokeout: number, end: number) {
    //strokein should be before gradient fillin
    //strokeout should at gradien pause
    const _start = order * 0.25;
    const _strokein = _start + strokein;
    const _strokeout = _strokein + strokeout + strokein + 0.033;
    const _end = _start + 0.25 - 0.0165
    // console.log("animation is in")
    ref.current?.beginElement()
    // console.log(ref.current)

    return (
        <animate attributeName="stroke-dashoffset"
            type="scale"
            values={`${offset};${offset};${0};${0};${offset};${offset}`}
            dur="20s"
            keyTimes={`0;${_start};${_strokein};${_strokeout};${_end};1`}
            repeatCount="indefinite"
            // begin="indefinite"
            // fill="freeze"
            ref={ref}>
        </animate>
    )
}


export function getAnimateTransform(ref:React.RefObject<SVGAnimateTransformElement>, order: number, start: number, scalein: number, scaleout: number, end: number) {
    //scalein parameter should be getLinearGradient's fill + fillout value 
    const _start = order * 0.25;
    const _scalein = _start + scalein;
    const _scaleout = _scalein + scaleout;
    const _end = _start + 0.25
    ref.current?.beginElement()
    return (
        <animateTransform attributeName="transform"
            type="scale"
            values="1;1;1.1;1;1;1"
            dur="20s"
            keyTimes={`0;${_start};${_scalein};${_scaleout};${_end};1`}
            repeatCount="indefinite"
            ref={ref}>
        </animateTransform>
    )
}


export function getLinearGradient(ref:React.RefObject<SVGAnimateElement>, secondRef:React.RefObject<SVGAnimateElement>, order: number, start: number, fill: number, fillout: number, pause: number, end?: number) {
    const _id = `draw-in-${order}`;
    const _start = order * 0.25;
    const _fill = _start + fill;
    const _fillout = _fill + fillout;
    const _pause = _fillout + pause;
    const _end = _start + 0.25
    console.log("HERE GRADIENTR ", ref.current)
    ref.current?.beginElement();
    secondRef.current?.beginElement();


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

            <animate attributeName="y1" values="100%;100%;-50%;-50%;-100%;-100%;-100%" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" ref={ref}/>
            <animate attributeName="y2" values="300%;300%;300%;300%;0%;0%;0%;" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" ref={secondRef}/>
        </linearGradient>
    )
}