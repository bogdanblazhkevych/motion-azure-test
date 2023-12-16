import styles from './styles.module.css'

export default function MarketSVG() {
    return(
        <svg className={styles.svgmain} viewBox="0 0 500 500">
            {/* <rect x="16.29" width="500" height="500" fill="#29abe2" stroke-width="0"/> */}
            <circle cx="118.68" cy="115.16" r="87" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="5"/>
            <path className={styles.dollarsign} d="m129.6,161.05c1.81-.41,4.13-.84,6.4-1.46,13.34-3.65,21.51-15.15,20.7-29.1-.74-12.89-10.32-23.71-23.47-25.41-7.36-.95-14.91-.51-22.37-.72-6.88-.19-10.39-3.05-10.3-8.34.09-5.21,3.66-7.95,10.59-7.99,10.11-.05,20.22.05,30.34-.04,8.17-.07,12.62-3.88,12.4-10.36-.2-6.17-4.41-9.35-12.49-9.42-3.92-.03-7.85,0-12.16,0-1.26-7.99,1.43-18.52-11.4-18.47-6.41.03-8.26,3.89-9.35,17.84-1.3.27-2.72.6-4.16.85-14.3,2.47-24.35,14.67-23.72,28.81.66,14.69,11.68,25.99,26.5,26.8,6.58.36,13.19.03,19.78.21,6.75.18,10.34,3.34,9.92,8.74-.49,6.14-4.59,7.89-10.09,7.87-10.55-.05-21.1-.08-31.65.01-7.25.07-11.45,3.79-11.47,9.84-.02,6.07,4.18,9.78,11.39,9.92,4.35.09,8.71.02,12.95.02,0,0,0,19.92,10.73,19.92,13.48,0,10.92-19.52,10.92-19.52Z"/>
            <polyline points="68.08 338.88 226.34 215.98 384.6 296.39 464.5 161.12"/>
            <circle cx="68.08" cy="338.88" r="24.65"/>
            <circle cx="226.34" cy="215.98" r="24.65"/>
            <circle cx="464.5" cy="161.12" r="24.65"/>
            <circle cx="384.6" cy="296.39" r="24.65"/>
            <path d="m39.55,498.73c0-1.93,0-3.55,0-5.17,0-30.26,0-60.53,0-90.79,0-9.15,3.32-12.51,12.31-12.51,11.07,0,22.14-.02,33.21,0,7.83.02,11.5,3.69,11.51,11.63.02,30.4.01,60.81.01,91.21,0,1.67,0,3.34,0,5.31"/>
            <path d="m276.94,498.73c0-3.29,0-6.06,0-8.83,0-51.65,0-103.31,0-154.96,0-15.62,3.32-21.35,12.31-21.36,11.07-.01,22.14-.03,33.21,0,7.83.03,11.5,6.3,11.51,19.86.02,51.89.01,103.79.01,155.68,0,2.85,0,5.7,0,9.06"/>
            <path d="m118.68,498.73c0-2.84,0-5.23,0-7.62,0-44.59,0-89.18,0-133.77,0-13.48,3.32-18.43,12.31-18.44,11.07-.01,22.14-.03,33.21,0,7.83.02,11.5,5.44,11.51,17.14.02,44.8.01,89.59.01,134.39,0,2.46,0,4.92,0,7.82"/>
            <path d="m356.08,498.73c0-2.84,0-5.23,0-7.62,0-44.59,0-89.18,0-133.77,0-13.48,3.32-18.43,12.31-18.44,11.07-.01,22.14-.03,33.21,0,7.83.02,11.5,5.44,11.51,17.14.02,44.8.01,89.59.01,134.39,0,2.46,0,4.92,0,7.82"/>
            <path d="m435.21,498.73c0-4.44,0-8.18,0-11.92,0-69.74,0-139.48,0-209.22,0-21.09,3.32-28.82,12.31-28.84,11.07-.02,22.14-.04,33.21,0,7.83.04,11.5,8.51,11.51,26.81.02,70.06.01,140.13.01,210.19,0,3.85,0,7.69,0,12.24"/>
            <path d="m197.81,498.73c0-3.84,0-7.07,0-10.3,0-60.29,0-120.58,0-180.87,0-18.23,3.32-24.92,12.31-24.93,11.07-.01,22.14-.04,33.21,0,7.83.03,11.5,7.36,11.51,23.18.02,60.57.01,121.14.01,181.71,0,3.32,0,6.65,0,10.58"/>
        </svg>
    )
}