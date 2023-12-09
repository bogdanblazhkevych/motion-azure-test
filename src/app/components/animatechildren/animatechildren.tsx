'use client'

import styles from './styles.module.css'
import { ReactNode, useEffect, useRef } from 'react'
interface AnimateChildrenPropsInterface {
    children: ReactNode
}

export default function AnimateChildren({children}: AnimateChildrenPropsInterface) {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current;

        const wrapperObserver = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    wrapper?.classList.add(`${styles.wrapperOpen}`)
                }
            })
        }, { threshold: 0.1 });
    
        if (wrapper) {
            wrapperObserver.observe(wrapper);
        }
    }, []);

    return(
        <div className={styles.animatewrapper} ref={wrapperRef}>
            {children}
        </div>
    )
}