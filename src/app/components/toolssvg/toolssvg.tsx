import styles from './styles.module.css'

export default function ToolsSVG() {
  return (
    <svg className={styles.svgmain} viewBox="0 0 470.66 429.96">

      <path
        className={styles.window}
        d="m8.39,77.4h453.23m-.25,291.43c0,7.14.01,14.04,0,20.94-.03,17.81-9.36,27.33-27.06,27.33-132.95.03-265.9.03-398.84,0-17.73,0-26.99-9.46-26.99-27.34,0-116.17.15-232.35-.17-348.52-.05-16.61,9.67-29.47,28.19-28.23,1.22.08,2.46-.09,4.35-.18l16.15.2h6.46c122.55,0,245.1,0,367.65,0,1.9,0,3.79,0,5.69.02,0,0,24.84,1.5,24.84,32.58v306.28l-.25,16.91Z"
      />

      <path className={styles.topbar}d="m149.99,45.54h270.24" />

      <circle
        className={`${styles.topdot} ${styles.strokepath}`}
        cx="48.68" cy="45.54" r="7.79" />
      <circle className={`${styles.topdot} ${styles.strokepath}`}
        cx="117.86" cy="45.54" r="7.79" />
      <circle className={`${styles.topdot} ${styles.strokepath}`}
        cx="83.44" cy="45.54" r="7.79" />

      <polyline
        className={styles.range}
        points="87.44 355.9 308.42 355.9 308.42 319.67 308.42 389.04 308.42 355.9 381.67 355.9"
      />

      <polyline
        className={styles.range}
        points="87.44 245.08 234.52 245.08 234.6 208.84 234.6 281.56 234.52 245.08 381.67 245.08"
      />

      <polyline
        className={styles.range}
        points="87.44 134.07 158.34 134.07 158.34 97.93 157.73 170.46 158.34 134.07 381.67 134.07"
      />

    </svg>
  )
}