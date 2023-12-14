'use client'

import { useEffect, useRef } from 'react'
import styles from './styles.module.css'

export default function WaitlistSVG() {
    const motionChipRef = useRef<SVGPathElement>(null)
    const moitonChipGroupRef = useRef<SVGGElement>(null)

    useEffect(() => {
        if (!moitonChipGroupRef.current || !motionChipRef.current) return

        moitonChipGroupRef.current.classList.add(`${styles.motionchipgroupanimation}`)
        motionChipRef.current.classList.add(`${styles.chipanimation}`)
    }, [])

    return (
        <svg className={styles.waitlistsvg} viewBox="0 0 1000 500">
            <defs>
                {getGradient(1)}
                {getGradient(2)}
                {getGradient(3)}
                {getGradient(4)}
                {getGradient(5)}
                {getGradient(6)}
                {getGradient(7)}
                {getGradient(8)}
                {getGradient(9)}
                {getGradient(10)}
                {getGradient(11)}
                {getGradient(12)}
                {getGradient(13)}
                {getGradient(14)}
                {getGradient(15)}
                {getGradient(16)}
                {getGradient(17)}
                {getGradient(18)}
                {getGradient(19)}
                {getGradient(20)}
                {getGradient(21)}
                {getGradient(22)}
                {getGradient(23)}
                {getGradient(24)}
                {getGradient(25)}
                {getGradient(26)}
                {getGradient(27)}
                <linearGradient gradientUnits="objectBoundingBox"
                    id={`logofill`}
                    x1="0%"
                    y1="0%"
                    x2="-100%"
                    y2="0%">
                    <stop stop-color="#1F7994" stop-opacity="0"></stop>
                    <stop stop-color="#1F7994"></stop>
                    <animate attributeName="y2" values="0%;100%;" dur={`0.6s`} begin="0s" repeatCount="1" fill="freeze" />
                    <animate attributeName="x2" values="-100%;0%" dur={`0.6s`} begin="0s" repeatCount="1" fill="freeze" />
                </linearGradient>
            </defs>
            {/* <rect width="100px" height="100px" stroke="white" strokeWidth="2px" fill="url(#logofill)"></rect> */}
            <path className={styles.line} stroke="url(#radial-gradient-1)" d="m648,53.89c3.09,4.09,8.9,4.99,8.9,4.99,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-10.69,0-10.69,10.69,0,2.21,1.06,4.3,1.78,5.69h0l-70.1,53.1v362h-.52c-2.41.21-9.86,2.22-9.86,11.2,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-9.69-9.14-11.13-10.78-11.22"/>
            <path className={styles.line} stroke="url(#radial-gradient-26)" d="m612.9,382.99v57.9h0c-2.43.24-10.37,1.35-10.37,10.3,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-9.6-9.18-10.21-10.94-10.31" />
            <path className={styles.line} stroke="url(#radial-gradient-2)" d="m648,395.89c-2.42.25-10.69,1.73-10.69,10.69,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-8.77-7.2-10.35-9.78-10.63l-.91-.06v-34l-28.1-22.9" />
            <path className={styles.line} stroke="url(#radial-gradient-25)" d="m675,70.99c3.04,4.35,9.22,4.89,9.22,4.89,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-10.69,0-10.69,10.69,0,2.17.44,3.9,1.15,5.28l.33.51-61,46v180l72.9,54v44.9h0c-2.4.23-10.69,1.69-10.69,10.69,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-9.12-8.54-10.48-10.82-10.68"/>
            <path className={styles.line} stroke="url(#radial-gradient-3)" d="m648.9,273.99v9.9l81.1,61v43h0c-3.09.59-9.47,2.56-9.47,10.3,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-8.42-9.09-9.92-11.91-10.3"/>
            <path className={styles.line} stroke="url(#radial-gradient-24)" d="m696,277.99l72.9,54v16.9h0c-2.47.25-10.37,1.39-10.37,10.3,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-9.28-8.88-10.14-11.01-10.3"/>
            <path className={styles.line} stroke="url(#radial-gradient-4)" d="m328,269.99c-.46,9.98-10.69,11.2-10.69,11.2,0,0-10.69,0-10.69-10.69s10.69-10.69,10.69-10.69c0,0,10.1,0,10.66,9.81l.02.37h88.9l36-27h255l103,77.9h0c-1.07,1.52-2.37,4.06-2.37,6.85,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-5.15.68-8.32,3.84"/>
            <path className={styles.line} stroke="url(#radial-gradient-23)" d="m232.03,216.88c-.58-9.79-10.41-10.6-10.41-10.6,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,9.52-1.31,10.38-10.66h492l94.9,70.9h0c-.71,1.38-1.37,3.69-1.37,5.87,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-6.23.7-9.32,4.81"/>
            <path className={styles.line} stroke="url(#radial-gradient-5)" d="m785,225.89l43.9,31.1h0c-.81,1.43-1.59,3.78-1.59,6.14,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-5.98.67-9.1,4.55"/>
            <path className={styles.line} stroke="url(#radial-gradient-22)" d="m809,201.99l24.9,18.9h0c-.96,1.49-2.16,4.02-2.16,6.63,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-5.37.62-8.53,4.06"/>
            <path className={styles.line} stroke="url(#radial-gradient-6)" d="m791.9,164.99c3.17,3.18,8.32,3.89,8.32,3.89,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-10.69,0-10.69,10.69,0,2.62,1.4,5.3,2.37,6.8h0l-32.9,24.9H217l-.03-.67c-.63-9.72-10.66-9.72-10.66-9.72,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,10.34-.84,10.69-10.99"/>
            <path className={styles.line} stroke="url(#radial-gradient-21)" d="m774,138.99c3.16,3.5,8.81,3.96,8.81,3.96,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-10.69,0-10.69,10.69,0,2.66.54,4.7,1.53,6.2l.35.53-30.1,24.9h-341l-108-81.9h0c-3.09,4.04-8.68,4.89-8.68,4.89,0,0-10.69,0-10.69-10.69s10.69-10.69,10.69-10.69c0,0,10.69,0,10.69,10.69,0,2.05-1.37,4.46-2.01,5.79"/>
            <path className={styles.line} stroke="url(#radial-gradient-7)" d="m754.07,118.28c3.02,4.43,9.14,4.61,9.14,4.61,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-10.69,0-10.69,10.69,0,2.19.42,3.99,1.13,5.37l.24.42-23.9,18.9"/>
            <path className={styles.line} stroke="url(#radial-gradient-20)" d="m730.9,100.99c3.16,3.01,7.87,3.27,7.87,3.27,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-10.69,0-10.69,10.69,0,3.31,1.22,5.64,2.64,7.22l.18.2-48.9,36.9h-26"/>
            <path className={styles.line} stroke="url(#radial-gradient-8)" d="m678,105.89l23.9-18.9-.23-.52c-.7-1.38-1.14-3.1-1.14-5.27,0-10.69,10.69-10.69,10.69-10.69,0,0,10.69,0,10.69,10.69s-10.69,10.69-10.69,10.69c0,0-6.3-.61-9.34-4.95"/>
            <path className={styles.line} stroke="url(#radial-gradient-19)" d="m578,66.89l23.9-18.9-.31-.49c-.79-1.42-1.3-3.25-1.3-5.57,0-10.69,10.69-10.69,10.69-10.69,0,0,10.69,0,10.69,10.69s-10.69,10.69-10.69,10.69c0,0-5.98-.62-9.08-4.62"/>
            <path className={styles.line} stroke="url(#radial-gradient-9)" d="m542.06,46.93c2.47-.25,10.85-1.83,10.85-10.74,0-10.69-10.69-10.69-10.69-10.69,0,0-10.69,0-10.69,10.69,0,8.67,7.04,10.31,9.69,10.62l.68.08v283.1l-.98.07c-2.64.3-9.71,1.93-9.71,10.62,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69,0-8.73-7.96-10.42-10.57-10.71"/>
            <path className={styles.line} stroke="url(#radial-gradient-18)" d="m405.01,46.92c.85-1.45,1.95-3.51,1.95-5.93,0-10.69-10.69-10.69-10.69-10.69,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,5.53-.71,8.63-4.69h0l101.1,77v226.9l29,22h0c-1.04,1.51-1.74,4.3-1.74,7.04,0,10.69,10.69,10.69,10.69,10.69,0,0,10.69,0,10.69-10.69s-10.69-10.69-10.69-10.69c0,0-5.79.17-8.95,3.65"/>
            <path className={styles.line} stroke="url(#radial-gradient-10)" d="m366.11,57.85c.87-1.46,1.9-3.72,1.9-6.17,0-10.69-10.69-10.69-10.69-10.69,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,5.3-.24,8.42-4.11l.25-.27,94.9,70.9"/>
            <path className={styles.line} stroke="url(#radial-gradient-17)" d="m326.9,66.89c.74-1.4,2.01-4.46,2.01-6.69,0-10.69-10.69-10.69-10.69-10.69,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,4.8,0,7.97-3.22l.72-.78,81.1,61.1"/>
            <path className={styles.line} stroke="url(#radial-gradient-11)" d="m249.76,105.12c-1.29-8.61-10.54-8.61-10.54-8.61,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,10.69,0,10.69-10.69,0-.13,0-.25,0-.37v-.83s25,0,25,0l40.1,30.9"/>
            <path className={styles.line} stroke="url(#radial-gradient-16)" d="m254.9,136.89h-31.9v-.64c-.43-10.05-10.69-10.05-10.69-10.05,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,10.38-.47,10.69-10.69"/>
            <path className={styles.line} stroke="url(#radial-gradient-12)" d="m344,163.89h-126.2c-.55-9.87-11.22-10.69-11.22-10.69,0,0-10.96,0-10.96,10.69s10.96,10.69,10.96,10.69c0,0,10.75-.69,11.22-10.69"/>
            <path className={styles.line} stroke="url(#radial-gradient-15)" d="m389,243.89h-128.1c-.63-9.72-10.68-10.38-10.68-10.38,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,10.29-.9,10.68-10.99"/>
            <path className={styles.line} stroke="url(#radial-gradient-13)" d="m459.9,278.99l-26,19.9h-89.9c-.44-10.02-10.69-10.69-10.69-10.69,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,10.34-.54,10.69-10.69"/>
            <path className={styles.line} stroke="url(#radial-gradient-14)" d="m386,325.89c-.83-9.38-11.11-11.4-11.11-11.4,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,10.26-.62,11.11-9.98h70.9"/>
            <path className={styles.line} stroke="url(#radial-gradient-27)" d="m447.3,39.65c1.15-1.54,1.74-4.15,1.74-7.06,0-10.69-10.69-10.69-10.69-10.69,0,0-10.69,0-10.69,10.69s10.69,10.69,10.69,10.69c0,0,5.27.32,8.43-3.05l.21-.24,58.9,43.9v-40.9h-.46c-2.05-.16-10.23-1.14-10.23-10.49,0-10.69,10.69-10.69,10.69-10.69,0,0,10.69,0,10.69,10.69,0,9.35-8.27,10.37-10.32,10.51" fill="none"/>
            <g ref={moitonChipGroupRef} className={styles.motionchipgroup}>
                <path ref={motionChipRef} className={styles.chip} d="m505.9,163.89l.1,79.26,108-.16v-79.1h-108.1Z" />
                <path className={styles.motionicon} fill="url(#logofill)"d="m581.19,182.79l.77-3.97c20,5.65,6.64,21.77,6.64,21.77,8.03-16.6-7.41-17.8-7.41-17.8Zm-3.08,35.1s-4.15,3.3-15.8,8.17-21.72,4.08-21.72,4.08c0,0-15.61.23-20.03-8.46-4.42-8.69,6.98-21.66,6.98-21.66,0,0-8.09,9.83-4.09,17.7,4,7.87,18.14,7.66,18.14,7.66,0,0,9.13.71,19.67-3.7,10.55-4.41,14.31-7.4,14.31-7.4,0,0,25.31-16.29,18.4-29.59-3.81-7.45-16.86-7.93-16.86-7.93,0,0,17.8-1.44,21.97,8.46,7.63,14.69-20.96,32.67-20.96,32.67h0Zm-34.07,5.53s-12.73,2.09-18.3-8.77c-3.63-9.87,9.66-20.2,9.66-20.2v4.25s-19.28,20.08,8.64,24.72Z" />
            </g>
        </svg>
    )
}


const getGradient = (order: number) => {
    return(
            <radialGradient 
                id={`radial-gradient-${order}`}
                cx="56%"
                cy="41%"
                fr="0%"
                r="0%"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.3" stop-color="#323232" />
                <stop offset="0.5"stop-color="#1F7994" />
                <stop offset="0.8"stop-color="#1F7994" />
                <stop stop-color="black" />
                {/* <stop offset="0.3" stop-color="#A0A0A0" />
                <stop offset="0.5"stop-color="#1F7994" />
                <stop offset="0.8"stop-color="#1F7994" />
                <stop stop-color="black" /> */}
                <animate attributeName="r" values="0%;200%" begin={`${1.5 + order * 0.0185}s`} dur="2s" repeatCount="1" fill="freeze" />
            </radialGradient>
    )
}