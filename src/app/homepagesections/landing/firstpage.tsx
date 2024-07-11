'use client'

import styles from './styles.module.css'
import City from '@/app/components/city/city'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Landing(){
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
        if (window.innerWidth < 450) {
            textcontainerRef.current.style.height = `${windowHeight}px`
        } else if (calculatedTextWrapperHeight > (windowHeight / 2)) {
            textcontainerRef.current.style.height = `${windowHeight / 2}px`    
        } else {
            textcontainerRef.current.style.height = `${windowHeight / 2}px`    
        }
        firstPageWrapperRef.current.style.height = `${windowHeight + windowHeight * 0.07}px`
        firstPageWrapperRef.current.classList.add(`${styles.curtainclosed}`)

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
            <div ref={textcontainerRef} className={styles.textcontainer}>
                <div ref={textWrapperRef} className={styles.herotextwrapper}>
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
        </div>
    )
}
