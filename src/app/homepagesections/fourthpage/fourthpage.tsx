'use client'

import Cylinder from '@/app/components/cylinder/cylinder'
import styles from './styles.module.css'
import { useEffect, useRef } from 'react'
import CardOne from '@/app/components/cardone/cardone'
import React from 'react'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import getValueFromScrollPositon, { getValueFromScrollPositonDecreasing } from '@/app/components/utils'

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
        if (! cylinderWrapperRef.current || !cylinderContainerRef.current || !cylinderSVGRef.current || !lineThreeTopRef.current || !lineThreeBottomRef.current || !lineOneTopRef.current || !lineOneBottomRef.current || !lineTwoTopRef.current || !lineTwoBottomRef.current || !svgDivWrapperRef.current || !cardOneRef.current || !cardTwoRef.current || !cardThreeRef.current || window.innerWidth < 768) return
        const percentage = (cylinderWrapperRef.current?.getBoundingClientRect().bottom - cylinderContainerRef.current?.getBoundingClientRect().bottom) / (cylinderWrapperRef.current?.getBoundingClientRect().height - cylinderContainerRef.current?.getBoundingClientRect().height)
        const degree = 180 - ((1 - percentage) * (180 + 90))

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

        const cardOneTranslateY = getValueFromScrollPositonDecreasing(150, (100 - 150), (cardOneRef.current.getBoundingClientRect().top - 150), 150, 0)
        const cardOneOpacity = getValueFromScrollPositonDecreasing(150, (100 - 150), (cardOneRef.current.getBoundingClientRect().top - 150), 0, 100)
        cardOneRef.current.style.transform = `translateY(${cardOneTranslateY}px)`
        cardOneRef.current.style.opacity = `${cardOneOpacity}%`


        const cardTwoTranslateY = getValueFromScrollPositonDecreasing(300, (-50), (cardTwoRef.current.getBoundingClientRect().top - 150), 150, 0)
        const cardTwoOpacity = getValueFromScrollPositonDecreasing(300, (-50), (cardTwoRef.current.getBoundingClientRect().top - 150), 0, 100)
        cardTwoRef.current.style.transform = `translateY(${cardTwoTranslateY}px)`
        cardTwoRef.current.style.opacity = `${cardTwoOpacity}%`

        const cardThreeTranslateY = getValueFromScrollPositonDecreasing(200, (0), (cardThreeRef.current.getBoundingClientRect().top - 150), 150, 0)
        const cardThreeOpacity = getValueFromScrollPositonDecreasing(200, (0), (cardThreeRef.current.getBoundingClientRect().top - 150), 0, 100)
        cardThreeRef.current.style.transform = `translateY(${cardThreeTranslateY}px)`
        cardThreeRef.current.style.opacity = `${cardThreeOpacity}%`

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
                                paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building a company that will fundamentally change how R&D and Innovation teams work - a product called Motion Platform that will leverage AI-powered data analytics to empower leaders for successful decision-making and execution. It will connect companies of all sizes with innovators around the globe to meet their fast-paced innovation needs."
                                banner={chipBrainSVG()}
                                mobileOnly={true}/>
                    </div>
                    <div ref={cardTwoRef} className={styles.card}>
                        <CardOne heading="Infrastructure for global connectedness"
                                paragraph="Designed for speed and efficiency, Motion directly connects thousands of companies - from startups to Fortune 500s, R&D organizations, government entities - with millions of innovators around the globe, including entrepreneurs, researchers, inventors, and investors. It offers an easy-to-use platform and products that allow users to collaborate, communicate and transact with innovators around the globe to meet their fast-paced innovation needs."
                                banner={connectednessSVG()}
                                mobileOnly={true}/>
                    </div>
                    <div ref={cardThreeRef} className={styles.card}>
                        <CardOne heading="Tools to speed-up innovation"
                                paragraph="Using the latest technology and tools, Motion innovation infrastructure intelligently matches data and provides real-time analytics and insights capabilities. This allows users to collaborate, communicate, and transact anywhere, anytime through an easy-to-use platform. As part of our commitment to continued innovation, we are constantly evaluating opportunities and deliver even more value through emerging technologies such as AI and distributed ledgers."
                                banner={graphSVG()}
                                mobileOnly={true}/>
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
                                  lineTwoTopRef={lineTwoTopRef}
                                  svgDivWrapperRef={svgDivWrapperRef}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


function chipBrainSVG() {
    return(
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1000 500">
                    <defs>
                    </defs>
                    <path id="brain_1" data-name="brain 1" d="M506.5,178.716V324.154s-36.5,24.682-53.012-13.222c0,0-33.31,1.065-26.507-30.116,0,0-35.862-26.128,0-55.09,0,0-18.214-48.266,33.87-47.01C460.846,178.716,482.424,150.522,506.5,178.716Zm26.586-8.857s-13.332-1.9-13.332,11.795c0,11.867,11.78,11.752,11.78,11.752s11.518-1.69,11.781-11.752C543.624,169.6,533.081,169.859,533.081,169.859Zm-0.816,139.6S519.6,307.6,519.749,321.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C542.593,309.231,532.265,309.463,532.265,309.463Zm33.167-27.848s-12.551-2.157-12.551,12.423c0,11.867,11.781,11.752,11.781,11.752s11.518-1.69,11.781-11.752C576.757,281.979,565.432,281.615,565.432,281.615Zm13.234-42.644s-13.147-2.566-13.268,12.464c-0.1,11.867,11.781,11.752,11.781,11.752s11.309-1.7,11.78-11.752C589.516,239.57,578.666,238.971,578.666,238.971ZM565.432,197.8s-12.551-1.931-12.551,11.768c0,11.868,11.781,11.753,11.781,11.753s11.3-1.7,11.781-11.753C577,197.822,565.432,197.8,565.432,197.8ZM506.5,297.71h11.781l8.835,12.488M506.5,275.674h39.76l9.572,8.815M506.5,251.435h58.9M506.5,227.2h39.76l9.572-8.814M506.5,202.955h13.254l8.1-10.283m-60.376,6.611a15.826,15.826,0,0,0,16.935,8.079m-36.815,27.913s15.3,3.424,25.771-8.815m-11.781,8.08a21.9,21.9,0,0,1,5.89,21.3M466,294.772s5.773-9.176,19.879-7.345M472.626,288.9c0.045-.5.191-15.781-10.308-19.1"/>
                    <path id="chiplines" d="M166.265,366.463S153.6,364.6,153.749,378.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C176.593,366.231,166.265,366.463,166.265,366.463ZM140,174m-10.735-13.537S116.6,158.6,116.749,172.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C139.593,160.231,129.265,160.463,129.265,160.463ZM862,388V326M235.265,275.463S222.6,273.6,222.749,287.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C245.593,275.231,235.265,275.463,235.265,275.463Zm627,113S849.6,386.6,849.749,400.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C872.593,388.231,862.265,388.463,862.265,388.463Zm-225,6S624.6,392.6,624.749,406.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C647.593,394.231,637.265,394.463,637.265,394.463Zm-214-386S410.6,6.6,410.749,20.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C433.593,8.231,423.265,8.463,423.265,8.463ZM577,56H543M693,173V135M423.265,429.463S410.6,427.6,410.749,441.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C433.593,429.231,423.265,429.463,423.265,429.463Zm109-386S519.6,41.6,519.749,55.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.583,11.11-11.649C542.593,43.231,532.265,43.463,532.265,43.463Zm83.166,245.008h32.477m47.357-178.008S682.6,108.6,682.749,122.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C705.593,110.231,695.265,110.463,695.265,110.463ZM166,367V327m459,80H577m83.265-131.537S647.6,273.6,647.749,287.95c0.119,11.867,11.78,11.753,11.78,11.753s11.147-1.584,11.11-11.649C670.593,275.231,660.265,275.463,660.265,275.463ZM165,327l219.569-.052M246,288l138.569,0.471M255,212l129.569-.482M140,173H384M615.431,326.948L863,327M615.431,288.471h32.477M348,250l36.569-.006M616,211h54m-54.569-37.959L693,173M423.046,365.425L423,431m38.523-65.575L462,403m38-37.575V472.9m38.477-107.477L538,440m38.954-74.575L577,408M423,32l0.046,102.564M462,72l-0.477,62.564M500,55.087v79.477M538,100l0.477,34.564m38.477-79.477v79.477m38.477,115.43h32.477m-32.477,38.477h32.477"/>
                    <path id="chipbase_1" data-name="chipbase 1" d="M384.444,173V326.99s0,38.5,38.5,38.5H576.933s38.5,0,38.5-38.5V173s0-38.5-38.5-38.5H422.942S384.444,134.5,384.444,173Z"/>
                    <path className={styles.bluepath} id="brainwire1_1" data-name="brainwire1 1" d="M532.748,170.781s-13.36-1.9-13.36,11.795c0,11.867,11.8,11.752,11.8,11.752s11.542-1.69,11.8-11.752C543.312,170.521,532.748,170.781,532.748,170.781Zm-26.641,33.1h13.281l8.115-10.283M467,200.2a15.864,15.864,0,0,0,16.97,8.08"/>
                    <path className={styles.bluepath}id="brainwire2_1" data-name="brainwire2 1" d="M565.981,198.177s-12.566-1.927-12.566,11.743c0,11.842,11.8,11.727,11.8,11.727s11.318-1.694,11.795-11.727C577.562,198.2,565.981,198.177,565.981,198.177Zm-59.008,29.334h39.808l9.583-8.8M448,235.573s15.314,3.417,25.8-8.8m-11.8,8.062a21.813,21.813,0,0,1,5.9,21.256"/>
                    <path className={styles.bluepath}id="brainwire3_1" data-name="brainwire3 1" d="M578.725,239.131s-13.072-2.619-13.193,12.717c-0.1,12.11,11.714,11.993,11.714,11.993s11.245-1.733,11.714-11.993C589.513,239.741,578.725,239.131,578.725,239.131Zm-71.761,12.717h58.568"/>
                    <path className={styles.bluepath}id="brainwire4_1" data-name="brainwire4 1" d="M565.609,282.4s-12.561-2.142-12.561,12.332c0,11.782,11.791,11.668,11.791,11.668s11.529-1.679,11.791-11.668C576.945,282.762,565.609,282.4,565.609,282.4Zm-58.989-5.9h39.795l9.581,8.75"/>
                    <path className={styles.bluepath}id="brainwire5_1" data-name="brainwire5 1" d="M532.59,309.954s-12.723-1.878-12.578,12.6c0.12,11.97,11.838,11.855,11.838,11.855s11.2-1.6,11.164-11.751c-0.046-12.934-10.424-12.7-10.424-12.7m-25.9-11.855h11.838l8.879,12.6M466,295.135s5.8-9.256,19.977-7.409"/>
            </svg>
    )
}

function connectednessSVG() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1000 500">
            <defs>
            </defs>
            <path id="persons_1" data-name="persons 1" d="M356,294.012s-72,0-72,72,72,72,72,72,72,0,72-72S356,294.012,356,294.012Zm0,13.619s-27.69,0-27.69,27.691S356,363.012,356,363.012s27.69,0,27.69-27.69S356,307.631,356,307.631ZM300,415.012s54-86.527,108,0m-268-358s-72,0-72,72,72,72,72,72,72,0,72-72S140,57.012,140,57.012Zm0,16.619s-27.69,0-27.69,27.691S140,129.012,140,129.012s27.69,0,27.69-27.69S140,73.631,140,73.631ZM86,179.012s54-86.527,108,0m378-119s-72,0-72,72,72,72,72,72,72,0,72-72S572,60.012,572,60.012Zm0,13.619s-27.69,0-27.69,27.691S572,129.012,572,129.012s27.69,0,27.69-27.69S572,73.631,572,73.631ZM518,179.012s54-86.527,108,0m234,120s-72,0-72,72,72,72,72,72,72,0,72-72S860,299.012,860,299.012Zm0,13.619s-27.69,0-27.69,27.691S860,368.012,860,368.012s27.69,0,27.69-27.69S860,312.631,860,312.631ZM806,418.012s54-86.527,108,0"/>
            <path className={styles.bluepath} id="Line_1" data-name="Line 1" d="M143.646,202.354l0.708-.708,142,142-0.708.708Z"/>
            <path className={styles.bluepath} id="person1" d="M140,57.668s-72,0-72,72,72,72,72,72,72,0,72-72S140,57.668,140,57.668Zm0,16.619s-27.69,0-27.69,27.69S140,129.668,140,129.668s27.69,0,27.69-27.69S140,74.288,140,74.288ZM86,179.668s54-86.527,108,0"/>
            <path className={styles.bluepath} id="person2_1" data-name="person2 1" d="M860,299.387s-72,0-72,72,72,72,72,72,72,0,72-72S860,299.387,860,299.387Zm0,13.619s-27.69,0-27.69,27.691S860,368.387,860,368.387s27.69,0,27.69-27.69S860,313.006,860,313.006ZM806,418.387s54-86.527,108,0"/>
            <path className={styles.bluepath} id="perosn3_1" data-name="perosn3 1" d="M356,294.107s-72,0-72,72,72,72,72,72,72,0,72-72S356,294.107,356,294.107Zm27.69,41.31c0-27.69-27.69-27.69-27.69-27.69s-27.69,0-27.69,27.69S356,363.107,356,363.107s27.69,0,27.69-27.69M300,415.107s54-86.527,108,0"/>
            <path className={styles.bluepath}id="Line_4" data-name="Line 4" d="M644.687,125.39l0.626-.78,219,174-0.626.78Z"/>
            <path id="Line_2" data-name="Line 2" d="M212,126v-1H500v1H212Z"/>
            <path className={styles.bluepath}id="Line_3" data-name="Line 3" d="M425.336,342.37l-0.672-.74,151-137,0.672,0.74Z"/>
        </svg>
    )
}

function graphSVG() {
    return(

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1000 500">
        <defs>
        </defs>
        <path id="graph_1" data-name="graph 1" d="M923.441,426.983s-23.072,0-23.072,23.067,23.072,23.067,23.072,23.067,23.072,0,23.072-23.067S923.441,426.983,923.441,426.983ZM72.559,44.123s-23.072,0-23.072,23.067S72.559,90.256,72.559,90.256s23.072,0,23.072-23.067S72.559,44.123,72.559,44.123Zm0,46.134V450.125H900.444"/>
        <path id="path1_1" data-name="path1 1" d="M72,348l216,84,126-79,162,67.625L720,342l144,96.625"/>
        <path className={`${styles.bluepath} ${styles.motionpath}`} id="paththreeeee_1" data-name="paththreeeee 1" d="M72,390l72-138,216,36L504,162l198,54L864,108"/>
        <path id="linetwo_1" data-name="linetwo 1" d="M72,414l144-72,288,90,72-108L702,432l162-54"/>
        </svg>
    )
}