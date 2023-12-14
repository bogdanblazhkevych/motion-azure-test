import { createStrokeGradient } from '../utils'
import styles from './styles.module.css'

export default function PartnerSVG() {
    return (
        <svg className={styles.waitlistsvg} viewBox='0 0 1000 500'>
            <defs>
                {createStrokeGradient(1, 2, 5, "end", "down")}
            </defs>

            <g className={styles.globelinesgroup}>
                <path d="m740.41,466.5C740.41-.5,467.31.5,467.31.5c0,0-122.46.64-203.15,141.69-39.33,68.74-68.58,171.3-68.58,324.31" />
                <path d="m610.69,466.5C610.69-.5,467.31.5,467.31.5c0,0-144-1-144,466" />
                <path d="m848.18,466.5C848.18-.5,467.31.5,467.31.5c0,0-379.5-1-379.5,466" />
                <path d="m935,467.5C935,.5,468,.5,468,.5,468,.5,1,.5,1,467.5" />
                <path d="m467.31,467.5V.5" />
                <path d="m0,466.5h934v-3.99" />
                <path d="m7.6,368.5h918.9" />
                <path d="m34.5,272.5h865.1" />
                <path d="m88.6,177.5h758.9" />
                <path d="m192.6,81.5h548.9" />
            </g>

            <g className={styles.bluelinesgroup}>
                <path stroke="url(#new-blue-pulse-1)" d="m809.32,240.47C712.44.22,467.31.5,467.31.5" />
                <path stroke="url(#new-blue-pulse-1)" d="m467.31.5s-122.46.64-203.15,141.69c-2.18,3.82-4.34,7.74-6.46,11.77" />
                <path stroke="url(#new-blue-pulse-1)" d="m537.25,56.85C501.86,1.77,467.31.5,467.31.5" />
                <path stroke="url(#new-blue-pulse-1)" d="m467.31.5s-118.14-.46-140.4,345.83" />
            </g>
            
            <g className={styles.personicon}>
                    <circle className={styles.smallcircle} cx="323.42" cy="368.51" r="16">
                        <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                        <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                    </circle>
                    <circle cx="323.42" cy="368.51" r="36.83" fill="#fff" stroke="#000" />
                    <path d="m323.31,351.44s-8.87,0-8.87,8.91,8.87,8.91,8.87,8.91c0,0,8.87,0,8.87-8.91s-8.87-8.91-8.87-8.91Zm-17.3,33.92s17.3-27.85,34.61,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
                </g>
                <g className={styles.personicon}>
                    <circle className={styles.smallcircle} cx="245.11" cy="177.5" r="16.67">
                        <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                        <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                    </circle>
                    <circle cx="245.11" cy="177.5" r="36.83" fill="#fff" stroke="#000" />
                    <path d="m245,160.44s-8.87,0-8.87,8.91,8.87,8.91,8.87,8.91c0,0,8.87,0,8.87-8.91s-8.87-8.91-8.87-8.91Zm-17.3,33.92s17.3-27.85,34.61,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
                </g>
                <g className={styles.personicon}>
                    <circle className={styles.smallcircle} cx="551.15" cy="82.16" r="16.67">
                        <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                        <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                    </circle>
                    <circle cx="551.15" cy="82.16" r="36.83" fill="#fff" stroke="#000" />
                    <path d="m551.04,65.1s-8.87,0-8.87,8.91,8.87,8.91,8.87,8.91c0,0,8.87,0,8.87-8.91s-8.87-8.91-8.87-8.91Zm-17.3,33.92s17.3-27.85,34.61,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
                </g>
                <g className={styles.personicon}>
                    <circle className={styles.smallcircle} cx="810.96" cy="272.5" r="16.67">
                        <animate attributeName="r" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="30;30;65;30"></animate>
                        <animate attributeName="opacity" dur="7s" keyTimes="0;0.285;0.857;1" repeatCount="indefinite" values="1;1;0;0"></animate>
                    </circle>
                    <circle cx="810.96" cy="272.5" r="36.83" fill="#fff" stroke="#000" />
                    <path d="m810.85,255.44s-8.87,0-8.87,8.91,8.87,8.91,8.87,8.91c0,0,8.87,0,8.87-8.91s-8.87-8.91-8.87-8.91Zm-17.3,33.92s17.3-27.85,34.61,0" fill="#fff" fill-rule="evenodd" stroke="#000" />
                </g>
        </svg>
    )
}

