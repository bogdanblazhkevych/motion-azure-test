'use client'

import { useEffect, useRef } from 'react';
import styles from './styles.module.css'
import WaitlistInfoCard from '@/app/components/waitlistinfocard/waitlistinfocard';

export default function WaitlistInfo() {
    return (
        <div className={styles.waitlistinfowrapper}>
            <div className={styles.waitlistinfocontainer}>
                <div className={styles.descriptioncontiner}>

                    <WaitlistInfoCard title='Sneak peek at pre-release products'
                                      paragraphOne="Get exclusive early access to Motion's newest automation platforms and solutions not yet available to the general public. Be the first to take a test drive."
                                      paragraphTwo="Experience the latest innovations before anyone else and pilot new technologies coming down the pipeline."
                                      heading="Preview"/>

                    <WaitlistInfoCard title='Give valuable feedback'
                                      paragraphOne="Directly influence Motion's product roadmap by providing feedback on early releases. Help shape the future direction of the offerings."
                                      paragraphTwo="Your input directly guides development priorities and the types of new features we build."
                                      heading="Improve"/>

                    <WaitlistInfoCard title='Test out new features'
                                      paragraphOne="Experience and experiment with the latest features Motion is developing. See what future functionality is on the roadmap."
                                      paragraphTwo="Test cutting-edge capabilities early and validate functionality before public launch."
                                      heading="Preview"/>

                    <WaitlistInfoCard title='Join our private community of innovators'
                                      paragraphOne="Connect with and learn from other cutting-edge companies that are pushing the boundaries in cloud-AI automation."
                                      paragraphTwo="Collaborate with an exclusive network of leaders and share best practices on optimization."
                                      heading="Connect"/>

                </div>
            </div>
        </div>
    )
}

const getValueFromScrollPositon = (startHeight: number, endHeight: number, currentHeight: number, startValue: number, endValue: number) => {
    if (currentHeight < startHeight) {
        return startValue
    }

    if (currentHeight > endHeight) {
        return endValue
    }

    const ratio = (endValue - startValue) / (endHeight - startHeight);

    const currentValue = startValue - (startHeight - currentHeight) * ratio;

    return currentValue
}

// function waitlistDescription(title: string, paragraphOne: string, paragraphTwo: string, heading: string) {
//     const descriptionRef = useRef<HTMLDivElement>(null);
//     const descriptionContentRef = useRef<HTMLDivElement>(null);

//     function handleScroll() {
//         if (!descriptionRef.current || !descriptionContentRef.current) {
//             return
//         }

//         const visibleDescriptionHeight = window.innerHeight - descriptionRef.current.getBoundingClientRect().top

//         const translateY = getValueFromScrollPositon(0, (descriptionRef.current.getBoundingClientRect().height / 2), visibleDescriptionHeight, 150, 0);
//         const opacity = getValueFromScrollPositon(0, descriptionRef.current.getBoundingClientRect().height, visibleDescriptionHeight, 0, 100);

//         descriptionContentRef.current.style.transform = `translateY(${translateY}px)`
//         descriptionContentRef.current.style.opacity = `${opacity}%`
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll)   
//         }
//     }, [])

//     return(
//         <div ref={descriptionRef} className={styles.description}>
//             <div ref={descriptionContentRef} className={styles.descriptionContent}>
//                 <h5>
//                     {heading}
//                 </h5>

//                 <h1>
//                     {title}
//                 </h1>

//                 <p>
//                     {paragraphOne}
//                 </p>

//                 <p>
//                     {paragraphTwo}
//                 </p>

//                 {lineSVG()}
//             </div>
//         </div>
//     )
// }

// function lineSVG() {

//     const svgRef = useRef<SVGSVGElement>(null)
//     const svgPathRef = useRef<SVGPathElement>(null)

//     const handleScroll = () => {
//         if (!svgRef.current || !svgPathRef.current) {
//             return
//         }

//         const visibleSVGHeight = window.innerHeight - svgRef.current.getBoundingClientRect().top;

//         const strokeOffset = getValueFromScrollPositon(0, svgRef.current.getBoundingClientRect().height, visibleSVGHeight, 800, 0);
//         svgPathRef.current.style.strokeDashoffset = `${strokeOffset}`
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll)   
//         }
//     }, [])

//     return (
//         <svg ref={svgRef} className={styles.linesvg} viewBox="0 0 500 500" preserveAspectRatio="none">
//             <path ref={svgPathRef} fill-rule="evenodd" stroke-width="3.79px" stroke-linecap="round" stroke-linejoin="miter" d="M4.395,3.895 L247.395,3.895 C247.395,3.895 490.395,3.895 490.395,244.895 C490.395,485.895 490.395,485.895 490.395,485.895 " />
//         </svg>
//     )
// }