'use client'
import { useEffect, useRef } from 'react';
import styles from './styles.module.css'

export default function Gradient() {
    const wrapperRef = useRef<HTMLDivElement>(null)

    function handleResize(){
        if (!wrapperRef.current){
            return
        }
        wrapperRef.current.style.height = `${window.innerHeight}px`
    }

    useEffect(() => {
        handleResize()
        if (window.innerWidth > 550) {
            window.addEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.testing}></div>
        </div>
    )
}