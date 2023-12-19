'use client'
import getValueFromScrollPositon from '../utils';
import WaitlistLineSVG from '../waitlistlinesvg/waitlistlinesvg';
import styles from './styles.module.css';
import { useEffect, useRef } from "react";

interface WaitlistInfoCardPropsInterface {
    title: string,
    paragraphOne: string, 
    paragraphTwo: string,
    heading: string
}

export default function WaitlistInfoCard(props: WaitlistInfoCardPropsInterface) {
    const {title, paragraphOne, paragraphTwo, heading} = props

    const descriptionRef = useRef<HTMLDivElement>(null);
    const descriptionContentRef = useRef<HTMLDivElement>(null);

    function handleScroll() {
        if (!descriptionRef.current || !descriptionContentRef.current) {
            return
        }

        const visibleDescriptionHeight = window.innerHeight - descriptionRef.current.getBoundingClientRect().top

        const translateY = getValueFromScrollPositon(0, (descriptionRef.current.getBoundingClientRect().height / 2), visibleDescriptionHeight, 150, 0);
        const opacity = getValueFromScrollPositon(0, descriptionRef.current.getBoundingClientRect().height, visibleDescriptionHeight, 0, 100);

        descriptionContentRef.current.style.transform = `translateY(${translateY}px)`
        descriptionContentRef.current.style.opacity = `${opacity}%`
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div ref={descriptionRef} className={styles.description}>
            <div ref={descriptionContentRef} className={styles.descriptionContent}>
                <WaitlistLineSVG />
                <h5>
                    {heading}
                </h5>

                <h1>
                    {title}
                </h1>

                <p>
                    {paragraphOne}
                </p>

                <p>
                    {paragraphTwo}
                </p>
            </div>
        </div>
    )
}