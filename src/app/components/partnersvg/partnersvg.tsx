import { createStrokeGradient } from '../utils'
import styles from './styles.module.css'

export default function PartnerSVG() {
    return (
        <svg className={styles.waitlistsvg} viewBox='0 0 1000 500'>
            <defs>
                {createStrokeGradient(1, 2, 5, "end", "down")}
            </defs>

            <g className={styles.globelinesgroup}>
                <path d="m983.28,492.18C983.28,8.85,499.95,8.85,499.95,8.85c0,0-483.33,0-483.33,483.33" />
                <path d="m893.43,491.15C893.43,7.82,499.24,8.85,499.24,8.85c0,0-392.77-1.03-392.77,482.3" />
                <path d="m781.89,491.15C781.89,7.82,499.24,8.85,499.24,8.85c0,0-126.74.66-210.26,146.64-40.7,71.14-70.97,177.29-70.97,335.66" />
                <path d="m647.63,491.15C647.63,7.82,499.24,8.85,499.24,8.85c0,0-149.04-1.03-149.04,482.3" />
                <path d="m499.24,492.18V8.85" />
                <path d="m15.58,491.15h966.66v-4.13" />
                <path d="m23.45,389.72h951.04" />
                <path d="m51.29,290.37h895.36" />
                <path d="m107.28,192.04h785.44" />
                <path d="m214.92,92.69h568.1" />

            </g>

            <g className={styles.bluelinesgroup}>
                <path stroke="url(#new-blue-pulse-1)" d="m853.2,257.22C752.94,8.56,499.24,8.85,499.24,8.85" />
                <path stroke="url(#new-blue-pulse-1)" d="m499.24,8.85s-126.74.66-210.26,146.64c-2.26,3.95-4.49,8.01-6.68,12.18" />
                <path stroke="url(#new-blue-pulse-1)" d="m571.62,67.17c-36.62-57.01-72.38-58.32-72.38-58.32" />
                <path stroke="url(#new-blue-pulse-1)" d="m499.24,8.85s-122.27-.48-145.31,357.93" />
            </g>
            <g className={styles.personicon}>
                <circle className={styles.smallcircle} cx="350.31" cy="389.73" r="17.25" fill="#fff">
                    <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                    <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                </circle>
                <circle cx="350.31" cy="389.73" r="38.12" />
                <path d="m350.21,372.07s-9.18,0-9.18,9.22,9.18,9.22,9.18,9.22c0,0,9.18,0,9.18-9.22s-9.18-9.22-9.18-9.22Zm-17.91,35.11s17.91-28.82,35.82,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
            </g>
            <g className={styles.personicon}>
                <circle className={styles.smallcircle} cx="269.26" cy="192.04" r="17.25" fill="#fff" stroke="#000">
                    <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                    <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                </circle>
                <circle cx="269.26" cy="192.04" r="38.12" fill="#fff" stroke="#000" />
                <path d="m269.15,174.38s-9.18,0-9.18,9.22,9.18,9.22,9.18,9.22c0,0,9.18,0,9.18-9.22s-9.18-9.22-9.18-9.22Zm-17.91,35.11s17.91-28.82,35.82,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
            </g>
            <g className={styles.personicon}>
                <circle className={styles.smallcircle} cx="586" cy="93.37" r="17.25" fill="#fff" stroke="#000">
                    <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                    <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                </circle>
                <circle cx="586" cy="93.37" r="38.12" fill="#fff" stroke="#000" />
                <path d="m585.89,75.71s-9.18,0-9.18,9.22,9.18,9.22,9.18,9.22c0,0,9.18,0,9.18-9.22s-9.18-9.22-9.18-9.22Zm-17.91,35.11s17.91-28.82,35.82,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
            </g>
            <g className={styles.personicon}>
                <circle className={styles.smallcircle} cx="854.9" cy="290.37" r="17.25" fill="#fff" stroke="#000">
                    <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                    <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.5714;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                </circle>
                <circle cx="854.9" cy="290.37" r="38.12" fill="#fff" stroke="#000" />
                <path d="m854.79,272.7s-9.18,0-9.18,9.22,9.18,9.22,9.18,9.22c0,0,9.18,0,9.18-9.22s-9.18-9.22-9.18-9.22Zm-17.91,35.11s17.91-28.82,35.82,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
            </g>
        </svg>
    )
}

