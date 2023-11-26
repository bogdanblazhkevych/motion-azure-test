import styles from './styles.module.css'
import { RefObject, useRef } from 'react'

type CylinderProps = {
    cylinderSVGRef: React.RefObject<SVGSVGElement>;
    lineThreeBottomRef: React.RefObject<SVGLineElement>;
    lineThreeTopRef: React.RefObject<SVGLineElement>;
    lineOneBottomRef: React.RefObject<SVGLineElement>; 
    lineOneTopRef: React.RefObject<SVGLineElement>;
    lineTwoBottomRef: React.RefObject<SVGLineElement>;
    lineTwoTopRef: React.RefObject<SVGLineElement>;
    svgDivWrapperRef: React.RefObject<HTMLDivElement>;
}

export default function Cylinder(props: CylinderProps) {
    const {cylinderSVGRef, lineOneBottomRef, lineOneTopRef, lineTwoBottomRef, lineTwoTopRef, lineThreeBottomRef, lineThreeTopRef, svgDivWrapperRef} = props
    return (
        <>
        {/* <div ref={cylinderSVGRef}> */}
        <div className={styles.testwrapper} ref={svgDivWrapperRef}>
        {/* <div style={{transform: 'scale(0.5'}}> */}
        
            <svg className={styles.cylinderbottomsvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <ellipse className={styles.cylinderbottom} cx="500" cy="500" rx="404.106" r="400" />
            </svg>

            <svg className={styles.cylinderfillsvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <path className={styles.cylinderfill} d="M 96 490.831 
                                                               L 96 242.815 
                                                               L 904 242.815 
                                                               L 904 490.831"/>
            </svg>


            <svg ref={cylinderSVGRef} className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                <defs>
                </defs>
                {/* <path className={styles.bigtop} fill="blue" d="M504,116.044c224.945,0,407.3,173.694,407.3,387.956S728.945,891.956,504,891.956,96.7,718.262,96.7,504,279.055,116.044,504,116.044Z" /> */}
                <ellipse className={styles.bigtop} cx="500" cy="500" rx="404.106" r="400" />
                <circle id="small1" className={styles.smallcircle} cx="504" cy="845.5" r="18" />
                <circle id="small2" className={styles.smallcircle} cx="144.5" cy="500" r="18" />
                <circle id="small3" className={styles.smallcircle} cx="504" cy="162" r="18" />


                <line ref={lineOneBottomRef} className={styles.linebottom} x1="504" y1="845.5" x2="504" y2="733.5"/>
                <line ref={lineOneTopRef} className={styles.linetop} x1="504" y1="733.5" x2="-500" y2="733.5"/>

                <line ref={lineTwoBottomRef} className={styles.linebottom} x1="144.5" y1="500" x2="144.5" y2="388"/>
                <line ref={lineTwoTopRef} className={styles.linetop} x1="140" y1="388" x2="-900" y2="388"/>

                <line ref={lineThreeBottomRef} className={styles.linebottom} x1="504" y1="162" x2="504" y2="50"/>
                <line ref={lineThreeTopRef}className={styles.linetop} x1="504" y1="50" x2="-500" y2="50"/>

            </svg>
        </div>
        </>
    )
}
