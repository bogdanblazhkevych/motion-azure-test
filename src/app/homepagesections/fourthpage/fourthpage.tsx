'use client'

import Cylinder from '@/app/components/cylinder/cylinder'
import styles from './styles.module.css'
import { useEffect, useRef } from 'react'
import CardOne from '@/app/components/cardone/cardone'
import React from 'react'

export default function FourthPage() {
    const cardOneRef = useRef<HTMLDivElement>(null)
    const cardTwoRef = useRef<HTMLDivElement>(null)
    const cardThreeRef = useRef<HTMLDivElement>(null)

    const cylinderWrapperRef = useRef<HTMLDivElement>(null)
    const cylinderContainerRef = useRef<HTMLDivElement>(null)
    const cylinderSVGRef = useRef<SVGSVGElement>(null)

    const lineOneBottomRef = useRef<SVGLineElement>(null)
    const lineOneTopRef = useRef<SVGLineElement>(null)
    const lineTwoBottomRef = useRef<SVGLineElement>(null)
    const lineTwoTopRef = useRef<SVGLineElement>(null)
    const lineThreeBottomRef = useRef<SVGLineElement>(null)
    const lineThreeTopRef = useRef<SVGLineElement>(null)

    const handleCylinderScroll = () => {
        console.log("scrolling...")
        if (! cylinderWrapperRef.current || !cylinderContainerRef.current || !cylinderSVGRef.current || !lineThreeTopRef.current || !lineThreeBottomRef.current || !lineOneTopRef.current || !lineOneBottomRef.current || !lineTwoTopRef.current || !lineTwoBottomRef.current) return
        const percentage = (cylinderWrapperRef.current?.getBoundingClientRect().bottom - cylinderContainerRef.current?.getBoundingClientRect().bottom) / (cylinderWrapperRef.current?.getBoundingClientRect().height - cylinderContainerRef.current?.getBoundingClientRect().height)
        // const degree = percentage * -180 - 90;
        const degree = 180 - ((1 - percentage) * (180 + 90))

        // const progress = 1 - x; 
        // const angle = startAngle - (progress * range);

        console.log("percent: ", percentage);

        if (cylinderContainerRef.current.getBoundingClientRect().top > 0) return

        const getDashoffset = (percent: number, dashoffset: number, topUpperBound: number, topLowerBound: number, bottomUpperBound: number, bottomLowerBound: number) => {
            if (percent > topUpperBound) {
                return dashoffset
            } else if (percent < topUpperBound && percent > topLowerBound) {
                return (dashoffset - ((topUpperBound - percent) / (topUpperBound - topLowerBound)) * dashoffset)
            } else if (percent < topLowerBound && percent > bottomUpperBound) {
                return 0
            } else if (percent < bottomUpperBound && percent > bottomLowerBound) {
                return ((percent - bottomUpperBound) / (bottomUpperBound - bottomLowerBound)) * -dashoffset
            } else if (percent < bottomLowerBound) {
                return dashoffset
            }
        }

        const lineOneDashoffset = getDashoffset(percentage, 1200, 0.76, 0.66, 0.60, 0.56);
        lineOneTopRef.current.style.strokeDashoffset = `${lineOneDashoffset}`; 

        const lineTwoDashoffset = getDashoffset(percentage, 1200, 0.38, 0.35, 0.24, 0.21);
        lineTwoTopRef.current.style.strokeDashoffset = `${lineTwoDashoffset}`; 

        const lineThreeDashoffset = getDashoffset(percentage, 1200, 0.02, 0, 0, 0);
        lineThreeTopRef.current.style.strokeDashoffset = `${lineThreeDashoffset}`; 


        // cylinderContainerRef.current.style.transform = `scale(0.5)`
        cylinderSVGRef.current.style.transform = `rotateX(60deg) rotate(${degree}deg)`

        lineOneTopRef.current.style.transform = `rotate(${-degree}deg)`
        lineOneBottomRef.current.style.transform = `rotate(${-degree}deg)`
        lineTwoTopRef.current.style.transform = `rotate(${-degree}deg)`
        lineTwoBottomRef.current.style.transform = `rotate(${-degree}deg)`
        lineThreeTopRef.current.style.transform = `rotate(${-degree}deg)`
        lineThreeBottomRef.current.style.transform = `rotate(${-degree}deg)`
    }

    useEffect(() => {
        const cylinderWrapper = cylinderWrapperRef.current;
        const cylinderSVG = cylinderSVGRef.current
        const cardOne = cardOneRef.current
        // const lineOneTop = lineOneTopRef.current

        const cylinderWrapperObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry)
                if (entry.isIntersecting) {
                    // cylinderSVG?.classList.add(styles.svgshown)
                }
            })
        }, { threshold: 0.2 })

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry)
                if (entry.isIntersecting) {
                    console.log("added className")
                    // cylinderSVG?.classList.add(styles.svgnotransition)
                }
            })
        }, { threshold: 0.5 })
    
        if (cylinderWrapper && cylinderSVG && cardOne) {
            cylinderWrapperObserver.observe(cylinderWrapper)
            cardObserver.observe(cardOne)
        }

        return () => {
          if (cylinderWrapper && cylinderSVG && cardOne) {
              cylinderWrapperObserver.unobserve(cylinderWrapper)
          }
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleCylinderScroll);
    }, [])

    return(
        <div className={styles.fourthpagewrapper}>
            <div className={styles.fourthpagecontainer}>
                <div className={styles.cardswrapper}>
                    <div className={styles.invisiblecard}>
                        <CardOne heading="A catalyst for startup success"
                                    paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>                        
                    </div>
                    <div ref={cardOneRef}>
                        <CardOne heading="A catalyst for startup success"
                                paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                    </div>
                    <div ref={cardTwoRef}>
                        <CardOne heading="A catalyst for startup success"
                                paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                    </div>
                    <div ref={cardThreeRef}>
                        <CardOne heading="A catalyst for startup success"
                                paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                    </div>
                </div>

                <div className={styles.cylinderwrapper} ref={cylinderWrapperRef}>
                    <div className={styles.cylindercontainer} ref={cylinderContainerRef}>
                        <Cylinder cylinderSVGRef={cylinderSVGRef} 
                                  lineThreeBottomRef={lineThreeBottomRef} 
                                  lineThreeTopRef={lineThreeTopRef}
                                  lineOneBottomRef={lineOneBottomRef} 
                                  lineOneTopRef={lineOneTopRef} 
                                  lineTwoBottomRef={lineTwoBottomRef} 
                                  lineTwoTopRef={lineTwoTopRef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}