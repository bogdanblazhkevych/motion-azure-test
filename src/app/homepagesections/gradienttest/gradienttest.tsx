'use client'
import { useEffect, useRef } from 'react';
import styles from './styles.module.css'

export default function GradientTest() {
    return(
        <div className={styles.wrapper}>
            {/* <div className={styles.container}>
                <div className={`${styles.orb} ${styles.orbone}`}></div>
                <div className={`${styles.orb} ${styles.orbtwo}`}></div>
                <div className={`${styles.orb} ${styles.orbthree}`}></div>
                <div className={`${styles.orb} ${styles.orbfour}`}></div>
            </div> */}
            <div className={styles.testing}></div>
        </div>
    )
}



// const canvasRef = useRef<HTMLCanvasElement | null>(null);
// const orbs = [
//     { x: 0.75, y: 0.75, radius: 0.08, color: 'hsl(214, 65%, 35%)'},
//     { x: 0.9, y: 0.9, radius: 0.055, color: 'hsl(194, 65%, 35%)'},
//     { x: 0.2, y: 0.8, radius: 0.04, color: 'hsl(199, 65%, 35%)'},
// ];

// useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');

//     if (!context) return;
//     if (!canvas) return 
//     canvas.width = window.innerWidth / 3
//     canvas.height = window.innerHeight / 3

//     const animateOrbs = () => {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         orbs.forEach((orb, index) => {
//             const newX = orb.x * canvas.width
//             const newY = orb.y * canvas.height
//             const newRadius = orb.radius * canvas.width

//             drawOrb(context, newX, newY, newRadius, orb.color);
//         });

//         requestAnimationFrame(animateOrbs);
//     };

//     animateOrbs();
// }, []);

// const drawOrb = (context: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
//     context.beginPath();
//     context.arc(x, y, radius, 0, 2 * Math.PI);
//     // context.fillStyle = 'rgb(214, 65, 35)';
//     context.fillStyle = color;
//     // context.shadowColor = color;
//     // context.shadowBlur = 500;
//     // context.shadowOffsetX = 10;
//     context.filter = 'blur(30px)'
//     context.fill();
//     context.closePath();
// };
// return (
//     <div className={styles.gradienttestwrapper}>
//         <canvas ref={canvasRef} />
//     </div>
// )