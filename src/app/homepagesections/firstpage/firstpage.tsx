'use client'

import Logo from '@/app/components/logo/page'
import styles from './styles.module.css'
import City from '@/app/components/city/city'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function FirstPage(){
    const cityWrapperRef = useRef<HTMLDivElement>(null);
    const textcontainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const cityHeight = cityWrapperRef.current?.getBoundingClientRect().height ?? 0
        const calculatedTextWrapperHeight = windowHeight - cityHeight

        if (!textcontainerRef.current || !cityWrapperRef.current) return

        if (calculatedTextWrapperHeight > (windowHeight / 2)) {
            textcontainerRef.current.style.height = `${windowHeight / 2}px`    
        } else {
            textcontainerRef.current.style.height = `${calculatedTextWrapperHeight}px`
        }

        textcontainerRef.current.style.opacity = '100%'
        cityWrapperRef.current.style.opacity = '100%'

    }, [])

    return(
        <div className={styles.firstpagewrapper}>
            
            <div ref={textcontainerRef} className={styles.textcontainer}>
                <div className={styles.herotextwrapper}>
                    <div className={styles.logowrapper}>
                        <div className={styles.logocontainer}>
                            <Logo />
                        </div>
                    </div>
                    <h1 className={styles.herotitle}>
                        Technology For The Next <br className={styles.herotitlebr}/>Frontier of Innovation
                    </h1>
                    <div className={styles.buttonwrapper}>
                        <Link href={"#calltoaction"}>
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
