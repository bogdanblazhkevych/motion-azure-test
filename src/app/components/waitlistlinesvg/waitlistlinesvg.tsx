import getValueFromScrollPositon from '../utils';
import styles from './styles.module.css'
import { useEffect, useRef } from "react";

export default function WaitlistLineSVG() {

    const svgRef = useRef<SVGSVGElement>(null)
    const svgPathRef = useRef<SVGPathElement>(null)

    const handleScroll = () => {
        if (!svgRef.current || !svgPathRef.current) {
            return
        }

        const visibleSVGHeight = window.innerHeight - svgRef.current.getBoundingClientRect().top;

        const strokeOffset = getValueFromScrollPositon(0, svgRef.current.getBoundingClientRect().height, visibleSVGHeight, 800, 0);
        svgPathRef.current.style.strokeDashoffset = `${strokeOffset}`
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <svg ref={svgRef} className={styles.linesvg} viewBox="0 0 500 500" preserveAspectRatio="none">
            <path ref={svgPathRef} fill-rule="evenodd" stroke-width="3.79px" stroke-linecap="round" stroke-linejoin="miter" d="M4.395,3.895 L247.395,3.895 C247.395,3.895 490.395,3.895 490.395,244.895 C490.395,485.895 490.395,485.895 490.395,485.895 " />
        </svg>
    )
}