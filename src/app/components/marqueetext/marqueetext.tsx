'use client'
import { Dela_Gothic_One } from 'next/font/google';
import styles from './styles.module.css'

import { useEffect, useRef, useState } from "react";
import { delay } from '../utils';

export default function MarqueeText() {
    const [count, setCount] = useState<number>(1)
    const [currentText, setCurrentText] = useState<string>('');
    const newyorkRef = useRef<HTMLSpanElement>(null)
    const londonRef = useRef<HTMLSpanElement>(null)
    const taipeiRef = useRef<HTMLSpanElement>(null)
    const parisRef = useRef<HTMLSpanElement>(null)

    const textList = ["New York", "London", "Tai Pei", "Paris"]
    const refList = [newyorkRef, londonRef, taipeiRef, parisRef]

    const changeText = async () => {
        const currentIndex = count % refList.length;
        console.log("current index:", currentIndex)
        const prevIndex = (count - 1) % refList.length;
        console.log("prev index:", prevIndex)

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