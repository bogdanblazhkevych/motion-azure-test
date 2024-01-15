'use client'

import styles from './styles.module.css'
import City from '@/app/components/city/city'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import GradientTest from '../gradienttest/gradienttest'

export default function FirstPage(){
    const cityWrapperRef = useRef<HTMLDivElement>(null);
    const textcontainerRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const textTitleRef = useRef<HTMLHeadingElement>(null);
    const textParagraphRef = useRef<HTMLParagraphElement>(null);
    const firstPageWrapperRef = useRef<HTMLDivElement>(null);

    function handleResize(){
        const windowHeight = window.innerHeight;
        const cityHeight = cityWrapperRef.current?.getBoundingClientRect().height ?? 0
        const calculatedTextWrapperHeight = windowHeight - cityHeight

        if (!textcontainerRef.current || !cityWrapperRef.current || !textParagraphRef.current || !textTitleRef.current || !textWrapperRef.current || !firstPageWrapperRef.current) return
        // set height of text container
        if (window.innerWidth < 450) {
            textcontainerRef.current.style.height = `${windowHeight}px`
        } else if (calculatedTextWrapperHeight > (windowHeight / 2)) {
            textcontainerRef.current.style.height = `${windowHeight / 2}px`    
        } else {
            // textcontainerRef.current.style.height = `${calculatedTextWrapperHeight}px`
            textcontainerRef.current.style.height = `${windowHeight / 2}px`    
        }
        firstPageWrapperRef.current.style.height = `${windowHeight + windowHeight * 0.07}px`
        firstPageWrapperRef.current.classList.add(`${styles.curtainclosed}`)

        // set width of paragraph 
        const titleWidth = textTitleRef.current.getBoundingClientRect().width;
        textParagraphRef.current.style.width = `${titleWidth}px`
    }

    useEffect(() => {
        handleResize()
        if (window.innerWidth > 550) {
            window.addEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div ref={firstPageWrapperRef} className={styles.firstpagewrapper}>
            {/* <GradientTest /> */}
            <div ref={textcontainerRef} className={styles.textcontainer}>
                <div ref={textWrapperRef} className={styles.herotextwrapper}>
                    {/* <div className={styles.logocontainer}>
                        <svg viewBox="0 0 500 500">
                            <path className={styles.logopath} d="M367.293,135.92l4.239-21.942C481.98,145.2,408.21,234.229,408.21,234.229,452.578,142.546,367.293,135.92,367.293,135.92Zm-17,193.886s-22.941,18.209-87.269,45.123S143.034,397.49,143.034,397.49,56.81,398.748,32.389,350.756,70.927,231.114,70.927,231.114s-44.7,54.318-22.581,97.78,100.2,42.323,100.2,42.323,50.413,3.941,108.669-20.432,79.032-40.863,79.032-40.863,139.789-89.965,101.613-163.454c-21.043-41.132-93.145-43.782-93.145-43.782s98.328-7.937,121.371,46.7C508.242,230.535,350.3,329.806,350.3,329.806ZM162.134,360.342s-70.306,11.524-101.1-48.451c-20.059-54.535,53.36-111.584,53.36-111.584V223.8S7.9,334.716,162.134,360.342Z" />
                        </svg>
                    </div> */}
                    <h1 ref={textTitleRef} className={styles.herotitle}>
                        Technology For The Next Frontier of <span className={styles.textgradient}>Innovation</span>
                    </h1>
                    <p ref={textParagraphRef}>
                        We are building something special shaping the future of automation to unleash the next wave of innovation ​and productivity. One platform, Every ecosystem, Any device.
                    </p>
                    <div className={styles.buttonwrapper}>
                        <Link href={"#opportunities"}>
                            <button type="submit" className={styles.submitbutton}>Build the future with Motion!</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.svgwrapper} ref={cityWrapperRef}>
                <div className={styles.svgcontainer}>
                    <City />
                </div>
            </div>
            {/* <div className={styles.testing}></div> */}
        </div>
    )
}
