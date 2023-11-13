'use client'
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css'
import Slider from './slider/page';
import TestPage from './testpage/testpage'

export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);

  const animateTextDiv = useRef<HTMLDivElement>(null)
  const parentref = useRef<HTMLDivElement>(null)

  // const handleScroll = () => {
  //   setScrollY(window.scrollY)
  // }

  // useEffect(() => {
  //   // console.log(window.innerHeight)

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   const viewportHeight = window.innerHeight;
  //   const viewportWidth = window.innerWidth;

  //   if (!animateTextDiv.current || !parentref.current) {
  //     return
  //   }

  //   const fullBackgroundHeight = viewportHeight * 3;
  //   const animateTextDivWidth = animateTextDiv.current.clientWidth;

  //   // transformX = startX + (endX - startX) * interpFactor
  //   // transformX = viewportWidth + ((-animateTextDivWidth / 2) - viewportWidth) * (scrollY / (3 * viewportHeight))
  //   animateTextDiv.current.style.transform = `translateX(${viewportWidth + ((-animateTextDivWidth / 1.5) - viewportWidth) * (scrollY / (fullBackgroundHeight))}px)`
  // }, [scrollY])
  return (
    <main className={styles.main}>
      {/* <TestPage />
      <div style={{
        width: "100vw",
        height: "300vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pisiton: "relative"
      }} ref={parentref}>
        <div style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          // border: "1px solid blue",
          top: "0",
          zIndex: "-1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          overflow: "visible",
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
          backgroundPosition: "50% 50%",
          backgroundSize: "1.1rem 1.1rem",
        }}>
          <h1 style={{
            color: "#7F7F7F",
            fontSize: "50rem",
            textAlign: "center",
            transform: "translateX(100vw)",
            textWrap: "no-wrap",
            display: "inline",
            width: "fit-content"
            // whiteSpace: "nowrap"
          }} ref={animateTextDiv}>
            MOTION!
          </h1>
        </div>

      </div>
      <TestPage /> */}
      <Slider />
    </main>
  )
}
