'use client'
import { useRef } from 'react';
import styles from './styles.module.css'
import useTransitionScroll from './hooks/useTransitionScroll';

export default function Slider() {
  const animateTextDiv = useRef<HTMLDivElement>(null)
  const parentref = useRef<HTMLDivElement>(null)

  useTransitionScroll(parentref, animateTextDiv)

  return (
    <>
      <div className={styles.scrollwrapper} ref={parentref}>
        <div className={styles.scrolltext}>
          <h1 className={styles.animatedheading} ref={animateTextDiv}>
            MOTION!
          </h1>
        </div>
      </div>
    </>
  )
}
