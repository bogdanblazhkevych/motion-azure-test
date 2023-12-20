import styles from './styles.module.css'

export default function TalentSVG() {

    return(
        <svg className={styles.talentsvg} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1000 500">
            {/* <rect width="1000" height="500" fill="#f0f" stroke-width="0"/> */}
            <path className={`${styles.handone} ${styles.hand}`} d="m65,74l193,84s28,13-4,18-153.5-45.5-153.5-45.5c0,0,104,136,4,236l86,42,35-66s23-24,29-14,54,15,70,12-15,13-26,13-39-5-52-15-18-17-3-51,42-83,39-110c0,0,52-16,101,55,0,0,3,10,16,5s125-77,146-55,12,4,12,4c0,0-4-10-18-14s-55-4-78,17-10,20-50,31-40,27-40,27c0,0,6,40-35,85,0,0,67,7,73,30s25,20,25,20c0,0,4,9-10,10s-20-16-10-34c0,0,43,38,51,33s-31,32-25-12c0,0,34,3,35,15s15,11,20,9c1-2-39,29-24-15l50,26s26,13,23-37c0,0-2,19-15,9,0,0,61,41,38-50,0,0,3,13-14,29,0,0,80,51,34-46,0,0,6,14-4,17-7.29,2.19,32,25,41,16s20-14-10-43" />
            <path className={`${styles.handtwo} ${styles.hand}`} d="m908,104l-270,73s-12,3.43,0,7.71,70,3.29,70,85.29-62,90-66,80c0,0-9-2-4,5s9.5,15.5,40.5,5.5,73-21,88-17,54-4,61-16,27-2,27-2l16-10s3-4-4-3-6-23-6-23c0,0,32-122-100-121,0,0-94,10-122,22,0,0-9,3,2,4s48,8,46,71-48,66-48,66c0,0-12,1-3-8s48-13,32-58c-11-20-10-48-10-48,0,0-3-19-41-19s-69,0-75-4c0,0-11-5-15,3s-25.75,20.07-25.75,20.07c0,0-21.25,32.93-22.25,52.93,0,0-9,57,35,13,0,0,15-15,14-27,0,0-3.3-6.58,5.85-5.79s8.15-3.21,8.15-3.21c0,0,5.1-6,7.05,2.5s11.95,12.5,11.95,12.5c0,0,15,3,23,15s37-1,37-1c0,0,12-4-3-4s-38,2-21,18,20,21,20,21" />
        </svg>
    )
}