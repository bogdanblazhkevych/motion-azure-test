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

    const svgDivWrapperRef = useRef<HTMLDivElement>(null);

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
        if (! cylinderWrapperRef.current || !cylinderContainerRef.current || !cylinderSVGRef.current || !lineThreeTopRef.current || !lineThreeBottomRef.current || !lineOneTopRef.current || !lineOneBottomRef.current || !lineTwoTopRef.current || !lineTwoBottomRef.current || !svgDivWrapperRef.current || !cardOneRef.current || !cardTwoRef.current || !cardThreeRef.current) return
        const percentage = (cylinderWrapperRef.current?.getBoundingClientRect().bottom - cylinderContainerRef.current?.getBoundingClientRect().bottom) / (cylinderWrapperRef.current?.getBoundingClientRect().height - cylinderContainerRef.current?.getBoundingClientRect().height)
        // const degree = percentage * -180 - 90;
        const degree = 180 - ((1 - percentage) * (180 + 90))

        // const progress = 1 - x; 
        // const angle = startAngle - (progress * range);

        // console.log("percent: ", percentage);

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

        const getOpacity = (percent: number, startPercent: number, endPercent: number) => {
            if (percent < startPercent && percent > endPercent) {
                return ((percent - startPercent) / (startPercent - endPercent)) * -100
            } else {
                return 100
            }
        }

        const getTranslateY = (percent: number, startPercent: number, endPercent: number) => {
            if (percent < startPercent && percent > endPercent) {
                return -50 - (((percent - startPercent) / (startPercent - endPercent)) * 50)
            } else {
                return 0
            }
        }

        if (cardOneRef.current?.getBoundingClientRect().top < (cardOneRef.current?.getBoundingClientRect().height * 0.2)){
            console.log("FIRING");
            cardOneRef.current.classList.add(`${styles.cardopen}`)
        }

        if (cardTwoRef.current?.getBoundingClientRect().top < (cardTwoRef.current?.getBoundingClientRect().height * 0.2)){
            console.log("FIRING");
            cardTwoRef.current.classList.add(`${styles.cardopen}`)
        }

        if (cardThreeRef.current?.getBoundingClientRect().top < (cardThreeRef.current?.getBoundingClientRect().height * 0.2)){
            console.log("FIRING");
            cardThreeRef.current.classList.add(`${styles.cardopen}`)
        }

        // console.log(cardOneRef.current?.getBoundingClientRect().top)

        //bring cylinder down
        const translateY = getTranslateY(percentage, 1, 0.85);
        svgDivWrapperRef.current.style.transform = `translateY(${translateY}%)`

        //fade cylinder in
        const opacity = getOpacity(percentage, 1, 0.85)
        cylinderContainerRef.current.style.opacity = `${opacity}%`

        //controlling line behavior
        const lineOneDashoffset = getDashoffset(percentage, 1200, 0.76, 0.66, 0.60, 0.56);
        lineOneTopRef.current.style.strokeDashoffset = `${lineOneDashoffset}`; 
        const lineOneBottomDashoffset = getDashoffset(percentage, 200, 0.85, 0.76, 0.56, 0.46);
        lineOneBottomRef.current.style.strokeDashoffset = `${lineOneBottomDashoffset}`; 

        const lineTwoDashoffset = getDashoffset(percentage, 1200, 0.38, 0.35, 0.24, 0.21);
        lineTwoTopRef.current.style.strokeDashoffset = `${lineTwoDashoffset}`; 
        const lineTwoBottomDashoffset = getDashoffset(percentage, 200, 0.45, 0.38, 0.21, 0.11);
        lineTwoBottomRef.current.style.strokeDashoffset = `${lineTwoBottomDashoffset}`; 

        const lineThreeDashoffset = getDashoffset(percentage, 1200, 0.02, 0, 0, 0);
        lineThreeTopRef.current.style.strokeDashoffset = `${lineThreeDashoffset}`; 
        const lineThreeBottomDashoffset = getDashoffset(percentage, 200, 0.10, 0.02, 0, 0);
        lineThreeBottomRef.current.style.strokeDashoffset = `${lineThreeBottomDashoffset}`; 


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
        const cylindercontainer = cylinderContainerRef.current;

        const cardOne = cardOneRef.current;

        const cylinderWrapperObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting && cylindercontainer) {
                    cylindercontainer.style.opacity = "0%"
                }
            })
        }, { threshold: 0.0, });
    
        if (cylinderWrapper) {
            cylinderWrapperObserver.observe(cylinderWrapper)
        }

        return () => {
          if (cylinderWrapper && cardOne) {
              cylinderWrapperObserver.unobserve(cylinderWrapper);
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
                                    paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building a company that will fundamentally change how R&D and Innovation teams work - a product called Motion Platform that will leverage AI-powered data analytics to empower leaders for successful decision-making and execution. It will connect companies of all sizes with innovators around the globe to meet their fast-paced innovation needs."/>                        
                    </div>
                    <div ref={cardOneRef} className={styles.card}>
                        <CardOne heading="A catalyst for startup success"
                                paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building a company that will fundamentally change how R&D and Innovation teams work - a product called Motion Platform that will leverage AI-powered data analytics to empower leaders for successful decision-making and execution. It will connect companies of all sizes with innovators around the globe to meet their fast-paced innovation needs."/>
                    </div>
                    <div ref={cardTwoRef} className={styles.card}>
                        <CardOne heading="Infrastructure for global connectedness"
                                paragraph="Designed for speed and efficiency, Motion directly connects thousands of companies - from startups to Fortune 500s, R&D organizations, government entities - with millions of innovators around the globe, including entrepreneurs, researchers, inventors, and investors. It offers an easy-to-use platform and products that allow users to collaborate, communicate and transact with innovators around the globe to meet their fast-paced innovation needs."/>
                    </div>
                    <div ref={cardThreeRef} className={styles.card}>
                        <CardOne heading="Tools to speed-up innovation"
                                paragraph="Using the latest technology and tools, Motion innovation infrastructure intelligently matches data and provides real-time analytics and insights capabilities. This allows users to collaborate, communicate, and transact anywhere, anytime through an easy-to-use platform. As part of our commitment to continued innovation, we are constantly evaluating opportunities and deliver even more value through emerging technologies such as AI and distributed ledgers."/>
                    </div>
                    {/* <div className={styles.invisiblecard}>
                        <CardOne heading="A catalyst for startup success"
                                    paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>                        
                    </div> */}
                </div>

                <div className={styles.cylinderwrapper} ref={cylinderWrapperRef}>
                    <div className={styles.cylindercontainer} ref={cylinderContainerRef}>
                        <Cylinder cylinderSVGRef={cylinderSVGRef} 
                                  lineThreeBottomRef={lineThreeBottomRef} 
                                  lineThreeTopRef={lineThreeTopRef}
                                  lineOneBottomRef={lineOneBottomRef} 
                                  lineOneTopRef={lineOneTopRef} 
                                  lineTwoBottomRef={lineTwoBottomRef} 
                                  lineTwoTopRef={lineTwoTopRef}
                                  svgDivWrapperRef={svgDivWrapperRef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}