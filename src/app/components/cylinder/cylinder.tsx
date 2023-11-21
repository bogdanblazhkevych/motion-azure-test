import styles from './styles.module.css'

export default function Cylinder() {


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">
            <defs>
                {/* <style>
                    .cls-1, .cls-2 {
                        fill: none;
                    stroke: #000;
                    stroke-width: 1px;
      }

                    .cls-1 {
                        fill - rule: evenodd;
      }
                </style> */}
            </defs>
            <path className={styles.bigtop} fill="blue" d="M504,116.044c224.945,0,407.3,173.694,407.3,387.956S728.945,891.956,504,891.956,96.7,718.262,96.7,504,279.055,116.044,504,116.044Z" />
            <circle id="small1" className={styles.smallcircle} cx="504" cy="162" r="18" />
            <circle id="small2" className={styles.smallcircle} cx="504.5" cy="845.5" r="18" />
            <circle id="small3" className={styles.smallcircle} cx="144.5" cy="500" r="18" />
        </svg>
    )
}