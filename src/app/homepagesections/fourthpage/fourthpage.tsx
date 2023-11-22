'use client'

import Cylinder from '@/app/components/cylinder/cylinder'
import styles from './styles.module.css'
import { useEffect, useRef } from 'react'

export default function FourthPage() {
    const cylinderRef = useRef<HTMLDivElement>(null)
    const cylinderWrapperRef = useRef<HTMLDivElement>(null)
    const handleCylinderScroll = () => {
        console.log("scrolling...")
        console.log("offsetTop", cylinderRef.current?.getBoundingClientRect())
        console.log("scrolly: ", window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleCylinderScroll);
    }, [])

    return(
        <div className={styles.fourthpagewrapper}>
            <div className={styles.fourthpagecontainer}>
                <div className={styles.cardswrapper}>

                </div>

                <div className={styles.cylinderwrapper} ref={cylinderWrapperRef}>
                    <div className={styles.cylindercontainer} ref={cylinderRef}>
                        <Cylinder />
                    </div>
                </div>
            </div>
        </div>
    )
}