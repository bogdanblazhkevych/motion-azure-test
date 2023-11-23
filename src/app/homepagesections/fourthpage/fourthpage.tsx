'use client'

import Cylinder from '@/app/components/cylinder/cylinder'
import styles from './styles.module.css'
import { useEffect, useRef } from 'react'
import CardOne from '@/app/components/cardone/cardone'
import React from 'react'

export default function FourthPage() {
    const lineref = useRef<SVGLineElement>(null)
    const linereftwo = useRef<SVGLineElement>(null)
    const cylinderSVGRef = useRef<SVGSVGElement>(null)
    const cylinderRef = useRef<HTMLDivElement>(null)
    const cylinderWrapperRef = useRef<HTMLDivElement>(null)
    const handleCylinderScroll = () => {
        console.log("scrolling...")
        // console.log("cylinderoffsetTop", cylinderRef.current?.getBoundingClientRect())
        // console.log("cylinderWrapperRefoffsettop ", cylinderWrapperRef.current?.getBoundingClientRect())
        if (! cylinderWrapperRef.current?.getBoundingClientRect() || !cylinderRef.current?.getBoundingClientRect() || !cylinderSVGRef.current || !lineref.current || !linereftwo.current) return
        const percentage = (cylinderWrapperRef.current?.getBoundingClientRect().bottom - cylinderRef.current?.getBoundingClientRect().bottom) / (cylinderWrapperRef.current?.getBoundingClientRect().height - cylinderRef.current?.getBoundingClientRect().height)
        // const degree = percentage * -180 - 90;
        const degree = 180 - ((1 - percentage) * (180 + 90))

        // const progress = 1 - x; 
        // const angle = startAngle - (progress * range);

        console.log("percent: ", percentage)
        console.log(degree)

        cylinderSVGRef.current.style.transform = `rotateX(60deg) rotate(${degree}deg)`
        lineref.current.style.transform = `rotate(${-degree}deg)`
        linereftwo.current.style.transform = `rotate(${-degree}deg)`


        // console.log("degrees: ", `${degree}deg`)
        // console.log((cylinderWrapperRef.current?.getBoundingClientRect().bottom - cylinderRef.current?.getBoundingClientRect().bottom) / (cylinderWrapperRef.current?.getBoundingClientRect().height - cylinderRef.current?.getBoundingClientRect().height)) 
        // console.log("distance: ", (cylinderWrapperRef.current?.getBoundingClientRect().height - cylinderRef.current?.getBoundingClientRect().height))
        // console.log(cylinderWrapperRef.current?.getBoundingClientRect().y - cylinderRef.current?.getBoundingClientRect().height)
        // console.log("scrolly: ", window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleCylinderScroll);
    }, [])

    return(
        <div className={styles.fourthpagewrapper}>
            <div className={styles.fourthpagecontainer}>
                <div className={styles.cardswrapper}>

                <CardOne heading="A catalyst for startup success"
                                        paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                <CardOne heading="A catalyst for startup success"
                                        paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>

                <CardOne heading="A catalyst for startup success"
                                        paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                </div>

                <div className={styles.cylinderwrapper} ref={cylinderWrapperRef}>
                    <div className={styles.cylindercontainer} ref={cylinderRef}>
                        <Cylinder cylinderSVGRef={cylinderSVGRef} lineref={lineref} linereftwo={linereftwo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}