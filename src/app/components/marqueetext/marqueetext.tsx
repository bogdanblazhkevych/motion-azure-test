'use client'
import styles from './styles.module.css'

import { useEffect, useRef, useState } from "react";
import { delay } from '../utils';

export default function MarqueeText() {
    const [count, setCount] = useState<number>(1)
    const newyorkRef = useRef<HTMLSpanElement>(null)
    const londonRef = useRef<HTMLSpanElement>(null)
    const taipeiRef = useRef<HTMLSpanElement>(null)
    const parisRef = useRef<HTMLSpanElement>(null)

    const refList = [newyorkRef, londonRef, taipeiRef, parisRef]

    const changeText = async () => {
        const currentIndex = count % refList.length;
        const prevIndex = (count - 1) % refList.length;

        const textIn = refList[currentIndex].current;
        const textOut = refList[prevIndex].current;

        if (!textIn || !textOut) {
            return
        }

        textOut.classList.remove(`${styles.textin}`)
        await delay(600)
        textIn.classList.add(`${styles.textin}`)
        await delay(4400)
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        changeText()
    }, [count])

    return(
        <div className={styles.marqueewrapper}>
            <span ref={newyorkRef} className={styles.textout}>Paris</span>
            <span ref={londonRef} className={styles.textout}>New York</span>
            <span ref={taipeiRef} className={styles.textout}>London</span>
            <span ref={parisRef} className={styles.textout}>TaiPei</span>
        </div>
    )
}