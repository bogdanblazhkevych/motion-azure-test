'use client'

import { useEffect, useRef } from 'react';
import styles from './styles.module.css'

interface AnmiateHeadingPropsInterface {
    heading: string,
    subheading: string
}

export default function AnimateHeading(props: AnmiateHeadingPropsInterface) {
    const { heading, subheading } = props;
    const headingRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const heading = headingRef.current;

        const headingObserver = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    heading?.classList.add(`${styles.headingOpen}`)
                }
            })
        }, { threshold: 0.1 });
    
        if (heading) {
            headingObserver.observe(heading);
        }
    }, []);


    return(
        <div ref={headingRef} className={styles.headingwrapper}>
            <h1>
                {heading}
            </h1>
            <p>
                {subheading}
            </p>
        </div>
    )

}