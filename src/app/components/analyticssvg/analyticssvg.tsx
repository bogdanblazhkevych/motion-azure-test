import styles from './styles.module.css'

export default function AnalyticsSVG() {
    return(
        <svg className={styles.svgmain} viewBox="0 0 500 500">
            <path className={`${styles.laptopborder} ${styles.strokepath}`} d="m457.09,377.61h32.18c-.51,10.53-.13,20.8-1.73,30.75-1.54,9.55-10.48,15.97-20.43,16.85-2,.18-4.03.15-6.05.15-140.46,0-280.92,0-421.39,0-18.73,0-27.72-8.95-27.72-27.6,0-6.48,0-12.97,0-19.84h31.73v-6.16c0-92.16-.06-184.32.16-276.49.01-5.51,1.38-11.5,3.82-16.42,3.42-6.92,10.18-10.15,17.9-10.88,2-.19,4.03-.14,6.05-.14,119.2,0,238.4,0,357.6,0,18.94,0,27.89,8.97,27.89,27.95,0,91.85,0,183.7,0,275.55v6.29Zm-413.42.3c127.12,0,286.31-.3,413.42-.3M43.67,288.96h206.33m0,0h207.09M43.75,136.59h413.34"/>
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m170.58,322.24h-94.87"/>
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m170.58,353.9h-94.87" />
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m361.64,322.14h-94.87"/>
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m361.64,353.84h-94.87"/>
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m234.13,322.14h-31.72"/>
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m234.13,353.84h-31.72"/>
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m425.1,353.9h-31.72" />
            <path className={`${styles.bottombar} ${styles.strokepath}`} d="m425.1,322.14h-31.72"/>
            <path className={`${styles.linechart} ${styles.strokepath}`} d="m76.36,246.58c11.86-11.9,24.09-24.16,36.21-36.32,7.27,7.3,14.99,15.05,22.72,22.82,13.69-13.78,26.75-26.94,39.94-40.22,8.48,8.58,16.21,16.38,24,24.26,9.07-9.12,17.65-17.75,26.41-26.57" />
            <path className={`${styles.piechartlarge} ${styles.strokepath}`} d="m361.94,187.58c17.37-1.5,37.68,13.19,39.26,36.39,1.57,22.9-15.86,41.89-39,42.34-22.09.43-40.64-17.65-39.87-39.34" />
            <path className={`${styles.piechartsmall} ${styles.strokepath}`} d="m345.31,210.59h-46.87c-4.12-28.36,18.06-50.68,46.87-47.07v47.07Z" />
            <path className={`${styles.topbar} ${styles.strokepath}`} d="m173.86,104.01h253.8" />
            <circle className={`${styles.topdot} ${styles.strokepath}`} cx="78.71" cy="104.01" r="7.32"/>
            <circle className={`${styles.topdot} ${styles.strokepath}`} cx="143.69" cy="104.01" r="7.32"/>
            <circle className={`${styles.topdot} ${styles.strokepath}`} cx="111.36" cy="104.01" r="7.32"/>
        </svg>
    )
}