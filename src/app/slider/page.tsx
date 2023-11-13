'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import TestPage from './../testpage/testpage'

export default function Slider() {
  const [scrollY, setScrollY] = useState<number>(0);

  const animateTextDiv = useRef<HTMLDivElement>(null)
  const parentref = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    if (!animateTextDiv.current || !parentref.current) {
      return
    }

    const fullBackgroundHeight = viewportHeight * 3;
    const animateTextDivWidth = animateTextDiv.current.clientWidth;

    // transformX = startX + (endX - startX) * interpFactor
    // transformX = viewportWidth + ((-animateTextDivWidth / 2) - viewportWidth) * (scrollY / (3 * viewportHeight))
    animateTextDiv.current.style.transform = `translateX(${viewportWidth + ((-animateTextDivWidth / 1.5) - viewportWidth) * (scrollY / (fullBackgroundHeight))}px)`
  }, [scrollY])
  return (
    <main className={styles.main}>
      <TestPage />
      <div className={styles.transitionscrollwrapper} ref={parentref}>
        <div className={styles.transitionscrolltext}>
          <h1 className={styles.transitionh1} ref={animateTextDiv}>
            MOTION!
          </h1>
        </div>
      </div>
      <TestPage />
    </main>
  )
}
