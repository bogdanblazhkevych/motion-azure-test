import { createStrokeGradient } from '../utils'
import styles from './styles.module.css'

export default function City() {
    return (
        <svg id="city" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1800 800" className={styles.svgmain}>

            <g className={styles.cityfill}>
                <path d="m289.71,379.7h-94.43l-.59,8.8c-.03,67.64,0,135.27-.08,202.91l-.78,10.06h-14.01l.55-1.68v-79.66h-12.62v-29.35h-58.88v204.59h1578.73v-106.07l1.03-44.44-11.12-2.1c-.57-5.31,1.45-10.89-1.97-16.35h-26.63v18.45l-28.09.28v44.44h-51.69l-.13,43.4c-9.84,0-24.16.34-34,.34v-163.34c-28.95,0-56.81.68-86.27.68l-.3.4c0,24.53.11,52.2.19,79.26h-1.57c-7.85,0-15.7,0-23.55,0h-1.68v-40.25h-50.47v-81.75h-86.63v112.78h-80.34l.13.26c1.17,2.4,1.67,4.33,2.88,5.55l.09.09c9.1,9.17,10.48,20.32,10.13,32.67l-.62,27.32c-14.86,0-30.97.35-45.83.35h-1.28c-2.09-13.54-12.78-20.07-28.13-20.99l-.49-.06c-4.01-.15-6.84-.09-10.46.12v-1.7c-.01-13.39-.01-26.77-.01-40.25h-1.68c-32.24,0-64.49,0-97.57,0l-.32.08c0,14.8-.16,29.97-.16,43.95l-4.58-.38c-7.27-.63-14.58-1.43-21.86-1.59v-.97c0-37.46,0-74.91,0-112.78h0c-28.88,0-56.08,0-82.43,0h0c-3.38,1.81-2.56,4.05-2.54,6.1l.04.54c.24,30.19,1,60.13.21,90.28l-.24,7.5c-23.83,0-49.34-.04-73.17-.04h-1.68v-23.48h-1.68c-30,0-60,0-90,0l-1.21.02c-.13-6.16-.3-12.32-.35-18.47v-.04c-.06-5.73-1.52-10.4-5.18-12.13h.02s-41-27.99-40.51-27.8h-.06c-11.58,8.68-22.91,17.19-34.3,25.71l-.13.09s-10.58,7.98-10.34,8.19l.06.06c-1.4,7.5-1.69,16.74-1.61,24.31l-.59.05h-91.68v24.32h-1.68c-34.49,0-69.39-.03-104.29-.03h-.02c0,10.62-.05,20.65-.05,30.91l-.78.15c-3.92.43-8.22.66-12.16.77v-1.59c0-15.1-.11-30.32-.11-46.24h-.09c-5.86,0-10.77.03-17.05.03v-.41c0-18.13-.02-35.04-.02-53.21l-.05-.05c-2.95,0-5.83.07-8.77.07v-1.68c0-43.25.04-86.52.04-129.98l1.2.03c2.81,0,4.84-.03,7.81-.03l.41.03c-.66-5.3.77-9.77-.12-12.02l.04-.04c-2.88-4.02-5.07-2.71-7.3-3.04h-1.68v-6.68l.84-.03c2.54-.11,4.79.34,7.18-.88v-.14c1.65-3.68.42-7.05,1.1-11.52l-.08-.08c-3.28,0-5.08.05-7.36.05h-1.68v-8.38h1.68c2.28,0,3.93-.04,6.53-.04l.19-.06c0-10.9,0-20.94,0-31l-.02-.02c-2.66,0-4.44.09-6.69.09h-2.11c0-1.4-.01-2.81-.01-4.21l-.04-.05c-15.98,0-30.98,0-46.96,0l-.1.02c0,1.39-.04,2.85-.04,4.25l-1.63-.06c-2.22.47-4.73-1.32-7.17,2.4h0c0,4.83,0,11.27,0,17.45v-.02c2.49,1.95,5.35.78,7.58,1.19l1.26.04c0,3.06,0,6.14,0,9.2h-1.68c-2.24,0-4.49-.04-7.16-.04v.02c0,4.47.02,8.95.02,14.26h.41c2.59,0,4.41-.04,6.69-.04h1.68c0,3.36.08,6.72.08,10.07l-1.3.03c-2.24,0-4.88-.07-7.54-.07l-.02.02c0,6.71.02,13.36.02,19.89l.02.03c2.83,1.45,5.83,1,8.37,1.1l.37.03c0,42.89.12,85.71.12,128.4v1.45c-18.2,0-36.39.06-54.73.06h0c0,18.71-.05,36.56-.05,55.28h-.04c-5.01,0-9.16.01-14.17.01v.02c0,13.68-.04,26.49-.04,39.08l-.04.08c-5.32,3.27-9.92,1.4-14.68,1.96l-1.68.03v-225.16"/>
            </g>
            <g className={styles.citygroup} xmlns="http://www.w3.org/2000/svg">
                <path d="m208.53,510.85v79.08c4.49-.67,8.13.51,12.62-1.48v-78.02h13.46v78.12c4.77,1.58,8.69,1.58,13.46,0v-78.12h13.46v78.02c4.49,1.99,8.13.81,12.2,1.42v-94.11h-66.55c-1.57-4.19-1.57-7.55,0-11.74h68.28c2-4.47.81-8.11,1.48-12.58h-70.5v-11.74h69.81v-12.58h-69.02c-2-4.47-.81-8.11-1.42-12.16h69.88c1.44-4.33,1.44-8.25-.14-13h-68.38c-1.57-4.19-1.57-7.55,0-11.74h68.38c1.58-4.75,1.58-8.66,0-13.42h-67.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1519.8,485.69v35.64h-14.3v-35.22h-15.14v35.22h-13.88v-35.22h-13.88v47.79h56.77v13.83h-58.88v14.67h58.88v16.35h-58.88v13.83h58.88v15.51h-58.88v14.67h58.88v54.82c-4.72,1.17-8.99,1.89-13.46-.85v-39.13c-4.82-1.88-9.4-.53-14.72-1.19v41.2c-5.69,1.18-10.51,1.82-15.98-.86v-38.9h-15.29c.7,13.83-.87,27.25.99,40.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m738.42,571.22v109.42h-12.62v-109.84h-13.88v109.84h-13.04v-109.84h-13.46v109.84h-12.62v-109.42" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m929.35,484.02c9.2,1.85,18.51.6,27.76.78,12.62.24,25.24.06,38.27.06v11.32h-64.81c-2.85,4.33-2.85,8.25,0,12.58h64.81v11.32h-64.92c-3.09,4.47-2.3,8.11-.02,12.16h64.95v12.16h-66.45v10.9h66.45v12.58h-66.45v10.9h65.32c2.43,2.59,1.13,4.77,1.54,6.71" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m289.28,694.47v-314.85h-94.43c-1.18,2.55-.59,5.72-.59,8.8-.03,67.64,0,135.27-.08,202.91,0,2.78,1,5.74-.78,8.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m907.48,623.2v62.47h-11.78v-62.89h-12.62v62.89h-12.62v-62.89h-12.62v62.47" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1004.21,585.47v-112.78h-82.42c-3.38,1.81-2.52,4.23-2.5,6.29.24,30.19,1.39,60.39.6,90.55-1.02,38.86-.12,77.71-.6,116.55-.03,2.81-.53,5.7.82,8.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m417.97,558.64h-85.37v-16.77h85.79v-17.61h-84.53" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1370.92,588.83v-160.57h-86.63v111.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m179.94,599.73v-79.66h-12.62v-29.35h-58.88v204.59h1578.73v-106.07h-118.14c-1.54,14.34.92,28.43-1.3,42.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m386,376.69h25.8c1.58-4.75,1.58-8.66,0-13.42h-26.26c-2-4.47-.81-8.11-1.42-12.16h27.81c1.71-4.61.66-8.8,1.2-13.83h-28.39v-13h27.2c1.44-4.33,1.44-8.25-.14-13h-25.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m272.46,681.9v-77.56h-12.62v78.05c-4.39,1.9-8.13.91-11.78,1.18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m448.25,608.11v-46.12h-17.24v-53.66h-110.6v55.34h-14.3v39.16c-5.32,3.27-10.37,1.37-15.14,1.93" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m222.83,683.57h-25.76c-1.48-3.91-1.55-6.99-.37-10.9h27.39v-11.32h-27.18c-1.66-3.67-.71-7.13-1.13-11.32h27.57c1.48-3.91,1.55-6.99.37-10.9h-26.13" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m174.05,683.57h-25.76c-1.48-3.91-1.55-6.99-.37-10.9h27.39v-11.32h-27.18c-1.42-3.77-1.42-7.13.16-11.32h26.28c1.48-3.91,1.55-6.99.37-10.9h-26.13" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Path_pulse_" data-name="&amp;lt;Path pulse&amp;gt;" d="m1448,471c0,41.09.3,90.99.3,132.08,0,30.74.23,61.49-.15,92.23-.1,8.08.88,14.91,7.65,20.21,2.46,1.92,4.12,4.86,5.96,7.11,0,5.94-.12,11.53.04,17.12.1,3.61.16,6.97-3.39,9.25-4.16,2.67-4.23,6.17-1.7,10.04,11.21,3.4,12.5,2.31,10.87-9.66-1.79-.9-3.81-1.91-5.83-2.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1576.15,470.6h-127.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1535.78,472.28c-1.78,2.65-.78,5.61-.78,8.38-.08,47.51-.06,95.03-.06,142.54,0,20.96-.02,41.92.02,62.89,0,2.81-.53,5.7.82,8.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m210.22,349.02c-5.44,2.25-11.38-.57-17.05,1.77-.98,5.49-.98,11.08.09,17.09h95.6v-16.8c-6.12-2.1-12.17-1.03-18.08-1.21-19.9-.59-39.83,1.09-59.72-.86" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m565.16,577.93h-103.87v30.67c5.93,1.73,11.55,1.79,17.24.36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1381.86,511.69v64.98h13.46v-64.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1128.69,544.39h-97.57v42.76" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1217.84,561.16h132.89v133.32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m375.07,506.66v-207.94h47.1v207.94" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1421.39,393.46v183.21h-13.46v-64.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m392.73,393.46v114.03" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m407.03,393.46v113.19" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m670.29,522.59c-3.47.98-6.61,2.54-10.06,5.62,15.19,10.96,30.14,21.74,45.34,32.7,14.8-10.97,29.29-21.71,43.78-32.45" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m978.13,592.18c-16.26-1.94-32.52-.25-49.2-.94v11.84h41.63" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m382.64,608.95c-12.02,1.72-24.12.24-37.01.92v85.44" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m245.54,625.72c-37.57,0-75.14-.02-112.71.03-3.16,0-7-1.27-8.65,3.95,1.35,5.31,2.01,11.22-.4,17.82h-14.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,553.61h-90" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,553.61h-90" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m335.54,572.9v122.42" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m968.04,662.61c-12.9-1.9-25.79-.24-39.11-1v11.9h39.95" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m968.88,615.66c2.27-3.91,2.41-8.24,3.16-12.74,5.2-9.28,13.42-15.82,24.61-16.39,9.76-.49,19.64.65,29.42,1.5,27.46,2.4,54.95,3.95,82.42.69,10.92-1.3,21.75-3.1,32.82-2.43,19.27,1.16,31.25,11.14,28.01,32.75-1.5,10.03-4.49,19.85-4.53,30.15-.04,9.6,1.69,18.48,6.67,26.91,3.28,5.55,5.45,11.78,6.02,18.37" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m969.72,734.72c-4.57,1.81-8.22,4.69-6.49,9.99.67,2.07,2.99,4.4,6.49,4.4s5.52-2.32,6.48-4.44c1.03-2.28.91-5.69-2.28-7.44-4.47-2.45-4.27-6.57-4.26-10.9.1-35.77.05-71.55.06-107.33,0-.94.22-1.94-2.51-3.35h-38.29v11.17c13.3-.84,26.17.71,39.11-1.11" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m968.04,639.13c-12.94-1.82-25.81-.27-38.41-1.07-1.43,4.7-1.43,7.49-.33,11.13h38.74" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1446.62,629.91h-78.22" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1352.42,590.5h94.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m741.79,521.75c-10.98-10.15-24.16-17.26-36.29-26.55-11.58,8.66-22.97,17.19-34.36,25.71" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m917.57,577.09h-71.49" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m751.04,695.31c.66-41.08-.38-82.17.54-123.26.27-12.22-.32-24.59-.42-36.89-.05-5.73-1.55-10.01-5.22-11.74h-73.96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1687.17,587.99c1.9-13.97.26-27.95,1.03-43.18h-67.48v43.18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1446.62,678.54h-68.13" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1378.49,661.77c8.36,1.85,16.82.64,25.23.77,14.29.23,28.6.06,42.89.06" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1446.62,612.3c-10.05,1.83-20.19.57-30.28.78-10.93.24-21.87.05-32.8.05" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m735.9,535.16c-20.75-1.38-41.49-1.38-62.24,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m140.41,624.88c.34-7.54-1.2-15.16,1.04-23.48h89.31c2.54,7.37.83,15.09,1.33,22.64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1677.08,542.71c-.57-5.31,1.45-10.89-1.97-16.35h-26.63v16.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m109.29,576.25h56.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m163.96,541.03c-2.7-1.34-5.59-.82-8.41-.82-28.88-.03-57.75-.02-86.63-.02" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1446.62,645.84h-54.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m416.28,572.9c-1.92,11.74-.23,23.48-1.14,37.12,15.71-.75,30.27.53,44.88-1.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m383.48,572.9v36.99c10.91-.49,20.98.66,31.12-.93" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m155.55,557.8c-15.42.49-30.87-1.02-46.26.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m310.31,615.66c-3.25,1.42-5.92,3.49-7.47,6.1-.67,4.29,1.31,7.06,3.22,9.82q7.93,1.49,13.54-5.93c-.21-5.49-3.16-8.71-8.46-10" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1215.32,607.27h-44.58" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m423.85,302.9h7.15v31.02h-7.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m896.55,606.43c2.81-3.35,6.87-5.66,8.8-10.05-1.84-4.31-5.7-6.43-8.39-9.82-5.04,2.28-7.41,6.43-11.1,9.43,2.41,5.08,6.76,7.65,9.85,11.27" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m500.39,598.89c3.23,3.22,6.45,6.45,9.66,9.65,3.32-3.69,6.24-6.93,9.61-10.68-1.63-3.59-5.8-5.95-8.81-9.63-5.09,2.4-7.67,6.74-11.31,9.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1642.59,600.56c2.4,1.62,5.88,1.3,7.39,3.94,1.82,5.44,1.5,10.28-2.17,14.32-4.1,1.45-8.02,1.45-12.19-.02-4.58-4.35-4.48-9.45-1.45-14.89,1.96-2.37,5.08-2.16,7.57-3.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Pathpulse_" data-name="&amp;lt;Pathpulse&amp;gt;" d="m247.22,604.76v130.8l-.84.84c-5.57,2.81-7.74,6.75-4.2,12.58,11.47,3.48,13.08,2.12,10.85-9.67-1.77-.89-3.79-1.9-5.8-2.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1432.32,551.93v25.15h14.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Pathpulse_-2" data-name="&amp;lt;Pathpulse&amp;gt;" d="m1742.68,634.1c.77,7.88,6.18,5.76,11.05,5.59,1.22-2.4,2.23-4.41,3.26-6.46-1.49-2.97-3.88-5.07-5.82-6.4-6.22-1.15-7.6,2.86-9.34,6.43h-204.39" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Pathpulse_-3" data-name="&amp;lt;Pathpulse&amp;gt;" d="m845.24,478.15c4.39-3.2,8.21-6.59,4.21-12.58-11.47-3.48-13.08-2.12-10.85,9.67,1.77.89,3.79,1.9,5.8,2.91v216.33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1422.23,392.62c3.12-2.15,4.47-3.87,6.01-7.87-.77-3.51-3.82-4.93-7.3-6.56-1.62.8-3.54,1.74-5.18,2.54-2.49,6.15-1.24,10.42,5.62,11.89" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1577.83,471.44c1.45,2.86,2.66,5.99,7.61,5.87,2.49-.67,4.33-3.09,5.79-5.35.32-3.17-1-5.23-2.16-7.33-6.28-2.03-10.49-.63-12.08,5.97" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Pathpulse_-4" data-name="&amp;lt;Pathpulse&amp;gt;" d="m1159.81,376.69c8.7-7.4,8.35-10.38-1.68-14.25-8.7,6.17-8.57,8.36.84,14.25v97.33c-9.36,8.22-19.19,16.85-28.6,25.11v85.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Pathpulse_-5" data-name="&amp;lt;Pathpulse&amp;gt;" d="m211.06,310.45c5.03-3.5,8.43-7.4,3.5-13.4-11.34-1.53-12.25-.63-10.15,10.49,1.77.89,3.79,1.9,5.8,2.91v37.73" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m540.77,625.72h-36.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m504.6,678.54h36.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m540.77,642.49h-36.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m540.77,660.94h-36.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <g>
                    <path d="m593.75,439.58c4.68-2.14,9.73-4.27,6.62-10.85-1.11-2.35-3.41-3.63-6.62-3.53-4.81.15-5.08,4-6.68,6.85,1.16,4.32,5.54,6.29,7.52,9.45,0,25.19-.08,49.78.07,74.38.03,4.65-.45,8.58-5.11,10.92-7.18,3.6-13.12,9.43-21.04,11.72" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path d="m567,501c3.88-2.24,8.01-5.41,6.33-10.19-.73-2.08-3-4.41-6.5-4.41s-5.52,2.32-6.48,4.44c-1.03,2.28-.9,5.68,2.27,7.44,1.43.79,2.97,1.88,4.37,2.72l-.16.62v192.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </g>
                <path id="_Pathpulse_-6" data-name="&amp;lt;Pathpulse&amp;gt;" d="m661.04,530.97c-2.53,13.61-1.09,27.43-1.31,41.09-.38,23.46-.37,46.97-.06,70.42.47,36.06.14,72.11.53,108.17l-.2.35c-3.91-.54-5.53,3.31-7.6,5.26.87,3.98,1.22,7.78,6.11,8.69,3.86.72,6.42-1.85,7.34-4.32,1.5-4.01-1.62-7.94-5.85-9.63" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m351.52,572.9v35.22" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m367.5,572.9v35.22" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1215.32,642.49h-35.33" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m373.39,357.41h-7.15v19.95c2.83,1.45,5.45.91,7.99,1.02" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m399.46,572.9v34.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m319.56,650.87c-1.26-4.8-3.27-9.13-9.24-8.29-4.93.69-7.59,3.99-7.72,9.6,1.08,3.62,4.29,5.45,7.75,7.1,4.97-.18,7.33-3.58,9.2-7.57" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m431.42,572.9v34.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m373.39,302.9c-2.22.47-4.72-1.28-7.15,2.44v17.43c2.49,1.95,4.92.68,7.15,1.09" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m480.21,608.11c7.31.7,14.44,2.88,22.71,1.1v85.26" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m319.56,572.9v30.19" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path id="_Pathpulse_-7" data-name="&amp;lt;Pathpulse&amp;gt;" d="m397,244c-3.05-2.33-7.53-3.82-6.08-9.05,1.22-4.39,4.25-4.7,7.95-5.11,2.54,1.63,4.96,3.47,5.9,6.9-1.29,3.93-4.19,6.07-7.83,7.47l.06.79c0,17.33-.06,34.71-.06,52.04" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m109.29,611.47c9.8.55,19.67-1.1,29.44.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1064.76,624.88c-4.87-5.85-6.04-5.76-10.93.84,5.12,6.91,6.85,6.91,10.93,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1090,626.56c1.22,5.07,4.61,4.73,8.22,3.8,2.74-3.25,2.74-6.04-.08-9.38-3.9-.78-7.18-.33-8.14,4.74" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1118.59,624.88c-4.87-5.85-6.04-5.76-10.93.84,5.14,6.94,7.15,6.94,10.93,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1143.83,626.56c1.22,5.07,4.61,4.73,8.22,3.8,2.74-3.25,2.74-6.04-.08-9.38-3.9-.78-7.18-.33-8.14,4.74" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m988.23,649.2c5.09-1.21,4.74-4.59,3.82-8.19-3.26-2.73-6.06-2.73-9.41.08-.78,3.88-.33,7.15,4.75,8.11" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1042.06,649.2c5.09-1.21,4.74-4.59,3.82-8.19-3.26-2.73-6.06-2.73-9.41.08-.78,3.88-.33,7.15,4.75,8.11" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1130.37,603.08c-5.32.34-4.03,4.35-4.22,7.72,5.13,3.95,8.48,2.77,10.02-2.39.36-4.77-2.94-4.83-4.96-6.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1076.54,603.08c-5.32.34-4.03,4.35-4.22,7.72,5.13,3.95,8.48,2.77,10.02-2.39.36-4.77-2.94-4.83-4.96-6.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1149.72,649.2c7.16-3.11,4.95-6.93.87-10.95-3.02.26-5.43,1.39-6.66,3.25-.44,4.76,2.04,6.39,4.95,7.71" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1022.71,603.08c-5.32.34-4.03,4.35-4.22,7.72,5.13,3.95,8.48,2.77,10.02-2.39.36-4.77-2.94-4.83-4.96-6.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m423.85,361.6c2.24.33,4.69-1.05,7.57,2.97.89,2.25-.47,6.83.19,12.12h-8.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1095.89,649.2c5.09-1.21,4.74-4.59,3.72-8.58-3.98-2.22-7.22-2.55-9.54,1.23-.41,4.4,2.07,6.04,4.99,7.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1148.03,602.24c-1.54,1.86-4.45,2.74-4.25,5.91.12,3.25,2.62,4.11,4.6,5.36,7.45-5.49,7.45-7.49.49-11.26" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1148.87,675.19q-3.07,1.81-4.96,4.88c-.56,1.78.64,2.57,1.58,3.51.94.94,1.74,2.14,3.48,1.59,6.63-4.88,6.74-6.42.74-10.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1130.37,675.19c-5.32.34-4.03,4.35-4.22,7.72,5.13,3.95,8.48,2.77,10.02-2.39.36-4.77-2.94-4.83-4.96-6.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1094.2,602.24c-1.54,1.86-4.45,2.74-4.28,5.93.32,3.05,2.45,4.28,4.8,5.21,7.28-5.36,7.28-7.37.32-11.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1010.94,624.88c-1.87-1.53-2.75-4.44-5.93-4.25-3.2.17-4.18,2.56-5.33,4.65,5.45,7.35,7.18,7.35,11.26.44" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m60.5,533.49c-3.4,1.08-6.68,2-6.83,6.7-.11,3.5,2.36,5.04,4.39,6.6,2.46,1.88,6.46-.96,10.01-6.59-.82-3.65-3.66-5.29-6.73-6.71" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1076.54,675.19c-5.32.34-4.03,4.35-4.22,7.72,5.13,3.95,8.48,2.77,10.02-2.39.36-4.77-2.94-4.83-4.96-6.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1022.71,675.19c-5.32.34-4.03,4.35-4.22,7.72,5.13,3.95,8.48,2.77,10.02-2.39.36-4.77-2.94-4.83-4.96-6.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m986.54,602.24c-1.54,1.86-4.45,2.74-4.28,5.93.32,3.05,2.45,4.28,4.8,5.21,7.28-5.36,7.28-7.37.32-11.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1010.94,661.77c-1.21-1.83-1.33-4.58-4.6-5.11-5.53.84-7.97,3.51-4.54,9.51,4.01,1.51,7.32,1.02,9.14-3.57" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m124.43,648.36c.81,15.37,1.56,30.74,0,46.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1040.37,602.24c-1.54,1.86-4.45,2.74-4.27,5.93.28,3.09,2.47,4.25,4.77,5.23,7.3-5.38,7.3-7.38.34-11.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1651.85,678.54c-1.54-4.76-3.02-9.48-9.25-10.09-6.41-.63-8.45,4.12-10.94,8.42.64,5.7,3.09,9.87,9.49,10.98,4.31-1.45,9.9-1.59,9.85-8.46" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1651.85,567.86c-1.54-4.76-3.02-9.48-9.25-10.09-6.41-.63-8.45,4.12-11.02,8.56,1.3,5.47,2.71,10.9,10.18,10.76,5.54-.1,8.69-2.82,9.25-8.38" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1668.67,600.56c-9.64,4.77-12.3,11.32-6.71,16.75,2.8,2.72,6.47,3.52,10.04,2.43,3.83-1.17,6.79-3.62,6.78-8.28,0-4.03-.92-7.49-5.07-9.22-1.39-.58-2.8-1.12-4.2-1.68" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1614.84,600.56c-3.58,1.55-8.02,1.45-9.37,6.68-1.35,5.23-.84,9.3,4.34,11.74,5.02,2.36,9.23,1.1,12.62-3.31,3.26-4.23,1.99-8.2-.96-11.67-1.37-1.62-3.82-2.32-5.79-3.44" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1111.87,675.19c-3.54-.73-2.84,2.76-4.4,4.4.92,2.99,2.88,4.94,5.91,5.87,3.2-.55,4.57-2.53,5.3-4.5-.11-4.62-3.48-5.18-5.97-6.61" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1651.85,651.71c-1.54-4.76-3.02-9.48-9.25-10.09-6.41-.63-8.45,4.12-11.01,8.54,1.26,5.11,2.37,10.52,9.33,10.74,5.69.18,9.4-2.35,10.09-8.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m373.39,333.09h-7.15v14.25h7.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,660.94h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,660.94h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,607.27h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1587.08,600.56c-8.12,2.73-12.02,9.75-8.41,15.09,2.67,3.95,6.49,5.16,10.93,4.14,4.73-1.09,7.65-4.58,7.4-9.16-.27-5.13-2.86-9.28-9.07-9.23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,607.27h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,642.49h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,589.66c-8.96-.5-17.99,1.01-26.91-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,642.49c-8.97.46-17.99-.96-26.91.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,572.06c-8.92-1.85-17.95-.34-26.91-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,679.38c-8.92-1.85-17.95-.34-26.91-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,571.22c-8.96.5-17.99-1.01-26.91.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,678.54c-8.96.5-17.99-1.01-26.91.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m658.52,625.72h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m779.64,625.72h-26.91" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m657.68,589.66h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,625.72h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m423.01,354.89c2.54-.11,5.16.43,7.55-.79,1.65-3.68.46-7.31,1.13-11.79h-7.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m594.6,625.72h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,571.22h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,679.38c-8.64-1.78-17.39-.41-26.07-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1099.25,562.83v25.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1082.43,562.83c-1.78,8.62-.41,17.33-.84,25.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m594.6,642.49h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m594.6,678.54c-8.69.43-17.43-.94-26.07.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,589.66h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m594.6,607.27h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,642.49h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m568.52,589.66h26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1064.76,562.83v25.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m568.52,571.22h26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,607.27h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m594.6,660.94h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m842.72,660.94h-26.07" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1215.32,625.72h-25.23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1047.1,562.83c1.85,8.33.35,16.78.84,25.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m133.68,594.7c-8.08-1.86-16.27-.36-24.39-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1116.07,562.83c.45,7.82-.96,15.71.84,23.48" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1010.94,644.17c-.36-3.09-2.2-4.91-5.49-6-2.77.84-4.73,2.8-5.54,5.89-.46,2.34,1.38,3.38,2.67,4.23,4.14,2.74,5.98-1.11,8.36-3.28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1064.76,644.17c-.36-3.09-2.2-4.91-5.43-5.98-2.77.41-4.01,2.93-5.66,4.87.93,1.97.86,4.17,2.68,5.28,4.24,2.6,6.02-1.16,8.4-3.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1118.59,644.17c-.36-3.09-2.2-4.91-5.43-5.98-2.77.41-4.01,2.93-5.66,4.87.93,1.97.86,4.17,2.68,5.28,4.24,2.6,6.02-1.16,8.4-3.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1113.55,602.24c-3.1.36-4.92,2.19-6,5.41.41,2.76,2.94,3.99,4.89,5.64,7.78-4.28,7.84-4.68,1.95-11.05" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1059.72,602.24c-3.1.36-4.92,2.19-6,5.41.41,2.76,2.94,3.99,4.77,5.54,3.84-.51,5.81-2.47,7.72-7.35-1.88-1.2-3.77-2.4-5.65-3.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1005.89,602.24c-3.1.36-4.92,2.19-6,5.41.41,2.76,2.94,3.99,4.77,5.54,3.84-.51,5.81-2.47,7.72-7.35-1.88-1.2-3.77-2.4-5.65-3.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1005.05,674.35c-7.01,5.17-6.89,6.73.93,10.95,3.97.03,3.86-3.46,5.09-6.08-1.3-1.84-2.16-4.22-5.17-4.03" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1058.88,674.35c-1.72,1.64-6.45.28-4.36,5.94.03,2.29,2,4.24,4.47,5,4.79.03,4.68-3.46,5.91-6.07-1.3-1.84-2.16-4.22-5.17-4.03" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m271.62,328.06c1.83,6.64.38,13.42.84,20.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m137.88,663.45c-.47,6.7.99,13.48-.84,20.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m185.82,663.45v20.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m234.61,663.45v20.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1350.74,561.99c4-6.66,8.01-13.32,12.6-20.96h-159.38c1.27,2.52,1.75,4.55,3.01,5.81,9.18,9.19,10.57,20.37,10.22,32.76-.65,23.46-.18,46.95-.2,70.43,0,2.88.59,5.93-1.98,9.22h-29.97" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1216.16,660.1c1.44,5.13,1.39,10.17-.64,15.93h-33.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1216.16,676.87c1.91,20.38.31,40.81.84,61.21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1216.16,738.91c-8.51,6.03-8.38,8.32.84,14.25,9.29-5.98,9.44-8.63.84-14.25" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,660.94h-16.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,678.54h-16.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,589.66h-16.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m806.55,589.66h-16.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,643.33c-5.61-1.33-11.21-1.33-16.82,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,608.11c-5.53-1.79-11.22-.41-16.82-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,624.88c-5.53,1.79-11.22.41-16.82.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m234.61,638.3v16.77" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m185.82,638.3v16.77" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m137.04,638.3c1.33,5.59,1.33,11.18,0,16.77" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m621.51,571.22h-16.82" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m804.87,660.94h-15.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m804.87,625.72h-15.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m804.87,571.22h-15.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m804.87,607.27h-15.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m804.87,678.54h-15.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m804.87,642.49h-15.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1423.07,550.26h23.55" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m109.29,665.13h13.46" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m109.29,629.91h13.46" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m333.02,604.76c-8.69-.37-17.42.71-26.07-.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1372.6,510.01h47.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m858.7,597.21c2.66,4.06,6.09,7.35,9.23,9.24,3.25-3.23,6.48-6.45,9.29-9.24-2.96-2.94-6.32-6.29-10.12-10.07-2.79,2.78-6.01,6.01-9.24,9.23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m484.41,607.27c1.54-4.22,7.08-4.81,7.84-8.11-3.5-3.5-6.73-6.72-9.52-9.52-2.95,2.95-6.31,6.3-10.59,10.58,2.09,1.8,4.66,4,7.23,6.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m149.66,501.62c-2.97,2.63-5.94,5.26-8.49,7.53,3.28,3.27,6.08,6.06,8.49,8.47,2.42-2.41,5.22-5.2,8.88-8.85-2.39-2.13-5.21-4.64-8.03-7.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m126.11,501.62c-2.97,2.63-5.94,5.26-8.49,7.53,3.28,3.27,6.08,6.06,8.49,8.47,2.42-2.41,5.22-5.2,8.88-8.85-2.39-2.13-5.21-4.64-8.03-7.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1297.75,477.31c-.84.28-2.41.55-2.42.84-.13,7.55-.11,15.11-.11,23.06h13.04v-23.9h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m310.31,668.48c-4.72,1.71-8.66,4.45-7.4,10.02.76,3.38,2.67,6.73,7.4,6.82,4.48.09,7.01-1.48,8.55-5.9,1.43-4.09.35-7.25-2.81-9-1.27-.71-2.72-2.86-4.9-1.94" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1556.8,668.48c-7.95,7.21-9.02,12.03-3.3,16.69,2.79,2.27,6.24,3.69,10.03,1.76,3.79-1.93,6.12-4.81,5.86-9.23-.22-3.94-1.16-7.17-5.81-8.58-2.1-.64-4.01-.2-5.95-.64" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1585.4,668.48c-4.89,1.14-7.19,4.05-7.72,9.21-.48,4.69,2.41,7.01,5.27,9.14,4,2.99,9.48-.08,14.22-7.45-.72-6.55-3.34-11.2-10.93-10.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1612.32,668.48c-6.9,3.61-9.67,9.49-6.73,14.25,3.05,4.94,8.58,6.3,13.46,3.36,3.83-2.3,6.26-5.73,4.89-10.02-1.54-4.82-4.66-8.64-10.78-7.59" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1112.71,656.74c-4.37,1.9-6.5,4.61-3.19,9.49,4.03,1.7,7.11.56,9.06-3.3.2-3.87-1.76-5.59-5.03-6.19" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1666.15,668.48c-7.92,7.02-9.01,11.99-3.31,16.71,3.11,2.57,7.09,3.85,10.83,1.64,4.26-2.51,6.16-6.91,4.82-11.57-.42-1.45-.68-4.29-2.71-4.8-2.86-2.42-5.87-1.94-8.78-1.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1232.14,672.67c-5.31,2.91-1.07,7.27-3.08,11.32h34.39c1.44-3.21.25-6.85.92-11.32h-31.39" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1274.2,672.67c-3.2,3.41-.98,7.23-2,11.32h23.22c1.44-3.21.25-6.85.92-11.32h-21.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1306.16,672.67c-3.2,3.41-.98,7.23-2,11.32h34.39v-11.32h-31.54" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1329.71,598.89c-5.31,2.91-1.07,7.27-3.08,11.32h11.91v-10.4c-2.79-1.74-5.48-.56-7.99-.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m986.54,675.19c-2.19,1.02-4.38,2.04-4.26,5.07.14,3.23,2.61,4.12,4.1,5.05,3.9.01,4.92-2.18,6.04-3.89.15-3.87-1.41-5.93-5.04-6.22" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1288.5,598.89c-.56.28-1.56.49-1.62.85-1.59,10.1-1.15,20.16-.22,30.59h31.02c2.41-9.85.4-20.25,1.36-31.44h-29.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1129.53,656.74c-4.63,1.66-3.44,5.07-3.07,7.77,2.8,3.27,5.45,2.44,7.74,1.83,4.03-4.02,2.33-7.75-3.83-9.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1022.71,620.69c-6.16,5.45-6.13,5.8.94,10.12,2.81.01,3.83-2.18,4.93-3.88.2-3.92-1.76-5.64-5.03-6.24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1040.37,675.19c-2.19,1.02-4.38,2.04-4.26,5.07.14,3.24,2.62,4.12,4.6,5.36,7.65-5.64,7.65-6.59.5-10.43" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1130.37,620.69q-5.81,6,.94,10.12c2.81.01,3.83-2.18,4.93-3.88.2-3.92-1.76-5.64-5.03-6.24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1076.54,620.69c-6.16,5.45-6.13,5.8.94,10.12,2.81.01,3.83-2.18,4.93-3.88.2-3.92-1.76-5.64-5.03-6.24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1257.37,598.89c-5.31,2.91-1.07,7.27-3.08,11.32h20.32v-11.32h-16.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1094.2,675.19c-2.19,1.02-4.38,2.04-4.27,5.08.26,3.11,2.48,4.25,4.91,5.29,3.77-1.13,5.43-3.16,5.33-7.02-.11-4-2.72-3.31-5.13-3.35" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1148.03,656.74c-2.26.96-4.17,2.22-4.32,5.64,1.79,4.36,4.67,6.05,9.64,2.67,1.36-4.24.66-7.38-4.49-8.31" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1667.83,557.8c-4.56,1.48-8.55,3.42-8.44,9.22.08,3.83.87,6.46,4.93,8.65,4.03,2.18,7.05,1.54,10.19-.34,3.62-2.18,5.12-6.04,4.12-9.95-1.21-4.77-4.5-7.85-9.96-7.58" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1232.14,620.69c-5.75,5.48-.52,12.46-3.1,18.62,7.31,2.29,14.04,2.29,20.34.31v-18.93h-16.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m365.82,622.37c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m922.62,447.96c-5.7,4.22-.75,10.22-3,15.51h84.16v-15.51h-80.32" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m392.73,622.37c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m419.65,622.37c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m446.56,622.37c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1322.98,477.31c-1.07.22-2.46.4-2.47,1.68-.1,7.28-.05,14.55-.05,22.22h13.04v-23.9h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1666.15,641.65c-7.58,4.05-8.78,9.69-4.15,16.86,4.86,2.29,9.6,4.32,14.31-.87,2.58-2.85,3.32-6.32,2.25-9.21-1.81-4.93-5.95-7.51-11.58-6.78" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m471.8,622.37c-3.6,7.42-.62,15.09-1.99,23.06h15.03v-23.06h-12.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1348.21,442.93c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.04v-23.06h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1348.21,477.31c-1.07.22-2.46.4-2.47,1.68-.1,7.28-.05,14.55-.05,22.22h13.04v-23.27c-2.84-1.27-6.31-.37-9.67-.62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1612.32,641.65c-5.9,1.3-7.92,5.47-7.49,10.89.35,4.44,3.56,7.39,7.53,8.22,4.68.98,8.48-1.44,10.9-5.7,3.33-5.86-1.2-11.9-10.1-13.42" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1094.2,656.74c-2.26.96-4.17,2.22-4.31,5.51-.36,1.15.84,1.94,1.78,2.88.94.94,1.74,2.14,3.25,1.66,3.74.26,4.14-2.7,5.54-4.58-.96-3.21-2.31-5.22-5.42-5.47" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1585.4,641.65c-4.89,1.14-7.19,4.05-7.72,9.21-.48,4.69,2.41,7.01,5.27,9.14,4,2.99,9.48-.08,14.26-7.51-1.18-6.06-3.15-11.37-10.97-10.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1558.49,641.65c-8.8,4.61-11.07,10.61-5.86,15.9,3,3.04,6.63,4.51,10.9,2.54,4.29-1.98,6.5-5.45,5.8-10.04-.83-5.44-3.82-8.97-10-8.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1296.07,639.97c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.71-.11,9.49-.11,14.66h45v-23.06h-41.63" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1264.1,639.97c-1.94.3-3.29,1.41-3.32,3.35-.11,6.44-.04,12.88-.04,19.7h23.13v-23.06h-18.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1075.7,656.74c-4.63,1.66-3.44,5.07-3.07,7.77,2.8,3.27,5.45,2.44,8.62,1.59,1.65-4.83,3.26-9.27-4.71-9.36" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1322.98,442.93c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.04v-23.06h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1297.75,442.93c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.04v-23.06h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m365.82,657.58c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1348.21,510.85c-4.44,1.32-2.29,4.95-2.43,7.55-.3,5.31-.09,10.65-.09,16.35h13.04v-23.27c-2.84-1.27-6.31-.37-9.67-.62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1322.98,510.85c-1.07.22-2.46.4-2.47,1.68-.1,7.28-.05,14.55-.05,22.22h13.04v-23.9h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1297.75,510.85c-1.07.22-2.46.4-2.47,1.68-.1,7.28-.05,14.55-.05,22.22h13.04v-23.9h-9.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m392.73,657.58c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1264.1,619.01c-5.31,2.91-1.07,7.27-3.08,11.32h11.91v-10.4c-2.79-1.74-5.48-.56-7.99-.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1329.71,619.01c-5.31,2.91-1.07,7.27-3.08,11.32h11.91v-10.4c-2.79-1.74-5.48-.56-7.99-.92" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1058.88,656.74c-5.07,1.64-6.53,4.59-3.18,9.49,4.02,1.7,7.1.56,9.05-3.3.2-3.87-1.76-5.59-5.03-6.19" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1040.37,656.74c-2.26.96-4.17,2.22-4.29,5.11.17,3.19,2.65,4.07,3.92,4.87,4.83.34,5.23-2.62,6.63-4.51-.96-3.21-2.31-5.22-5.42-5.47" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m985.7,620.69c-4.63,1.66-3.44,5.07-3.07,7.77,2.8,3.27,5.45,2.44,7.74,1.83,4.03-4.02,2.33-7.75-3.83-9.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m419.65,657.58c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1232.14,598.05c-5.92,3.48-.61,8.45-3.75,13.87,5.71-.86,9.36.33,13-1.29,1.31-3.91,1.31-7.83-.01-11.78-2.69-1.32-5.59-.63-8.4-.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1021.87,656.74c-4.63,1.66-3.44,5.07-2.96,8.53,4.07,2.26,7.31,2.59,9.67-1.24.21-4.7-1.79-6.9-5.86-7.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1306.16,571.22c-4.21.7-3.32,3.96-3.35,6.71-.04,3.63-.01,7.27-.01,11.32h37.43v-17.17c-11.25-1.73-22.28-.45-33.22-.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1232.14,650.87c-5.31,2.91-1.07,7.27-3.08,11.32h20.32v-11.32h-16.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m986.54,656.74c-2.26.96-4.17,2.22-4.3,5.34.29,2.85,2.51,4,4.04,4.65,4.72.33,5.12-2.63,6.53-4.51-.97-3.21-2.31-5.22-5.42-5.47" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1259.06,571.22c-4.21.7-3.32,3.96-3.35,6.71-.04,3.63-.01,7.27-.01,11.32h37.43v-17.17c-11.25-1.73-22.28-.45-33.22-.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m446.56,657.58c-4.56,1.68-2.16,5.55-2.41,8.39-.42,4.73-.11,9.53-.11,14.66h13.88v-23.06h-10.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1232.14,571.22c-5.47,5.21-.88,11.85-3.03,18.03h18.59v-16.36c-4.9-3.01-9.95-1.11-14.72-1.67" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1131.21,638.3c-2.93.89-5.16,2.38-5.02,7.53.13,1.54,2.46,2.57,4.88,3.86,7.22-3.6,6.25-7.33.98-11.39" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m471.8,657.58c-3.6,7.42-.62,15.09-1.99,23.06h15.03v-23.06h-12.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1077.38,638.3c-2.93.89-5.16,2.38-5.02,7.53.13,1.54,2.46,2.57,4.88,3.86,7.22-3.6,6.25-7.33.98-11.39" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1023.55,638.3c-6.96,3.77-6.96,5.78.34,11.15,6.74-3.36,5.78-7.09.5-11.15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m537.4,588.83c-3.25,2.91-6.5,5.82-9.84,8.82,2.29,5.02,6.46,7.38,8.99,10.49,3.79-3.79,7.16-7.14,10.99-10.97-2.8-2.51-6.05-5.42-9.3-8.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <path d="m1039.53,620.69c-3.95,1.26-3.28,4.57-3.37,7.47,2.18,3.79,5.4,2.26,8.64,2.72,1.93-5.65,3.54-10.09-4.43-10.19" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>

            <g className={styles.strokegroup}>
                <defs>
                    {createStrokeGradient(1, 1, 2, "end", "up")}
                    {createStrokeGradient(2, 1.5, 3, "end", "down")}
                    {createStrokeGradient(3, 1.5, 2, "start", "down")}
                    {createStrokeGradient(4, 0.5, 5, "end", "up")}
                    {createStrokeGradient(5, 3, 1.5, "start", "up")}
                    {createStrokeGradient(6, 0.5, 1.5, "start", "down")}
                    {createStrokeGradient(7, 1, 5, "start", "up")}
                    {createStrokeGradient(8, 2, 1.5, "end", "up")}
                    {createStrokeGradient(9, 2.5, 1, "end", "up")}
                    {createStrokeGradient(10, 3, 2, "start", "right")}
                </defs>

                <path stroke="url(#new-blue-pulse-1" d="m247.22,604.76v130.8l-.84.84c-5.57,2.81-7.74,6.75-4.2,12.58,11.47,3.48,13.08,2.12,10.85-9.67-1.77-.89-3.79-1.9-5.8-2.91" />
                <path stroke="url(#new-blue-pulse-2" d="m845.24,478.15c4.39-3.2,8.21-6.59,4.21-12.58-11.47-3.48-13.08-2.12-10.85,9.67,1.77.89,3.79,1.9,5.8,2.91v216.33" />
                <path stroke="url(#new-blue-pulse-3" d="m1159.81,376.69c8.7-7.4,8.35-10.38-1.68-14.25-8.7,6.17-8.57,8.36.84,14.25v97.33c-9.36,8.22-19.19,16.85-28.6,25.11v85.51" />
                <path stroke="url(#new-blue-pulse-4" d="m211.06,310.45c5.03-3.5,8.43-7.4,3.5-13.4-11.34-1.53-12.25-.63-10.15,10.49,1.77.89,3.79,1.9,5.8,2.91v37.73" />
                <path stroke="url(#new-blue-pulse-5" d="m661.04,530.97c-2.53,13.61-1.09,27.43-1.31,41.09-.38,23.46-.37,46.97-.06,70.42.47,36.06.14,72.11.53,108.17l-.2.35c-3.91-.54-5.53,3.31-7.6,5.26.87,3.98,1.22,7.78,6.11,8.69,3.86.72,6.42-1.85,7.34-4.32,1.5-4.01-1.62-7.94-5.85-9.63" />
                <path stroke="url(#new-blue-pulse-6" d="m397,244c-3.05-2.33-7.53-3.82-6.08-9.05,1.22-4.39,4.25-4.7,7.95-5.11,2.54,1.63,4.96,3.47,5.9,6.9-1.29,3.93-4.19,6.07-7.83,7.47l.06.79c0,17.33-.06,34.71-.06,52.04" />
                <path stroke="url(#new-blue-pulse-7" d="m593.75,439.58c4.68-2.14,9.73-4.27,6.62-10.85-1.11-2.35-3.41-3.63-6.62-3.53-4.81.15-5.08,4-6.68,6.85,1.16,4.32,5.54,6.29,7.52,9.45,0,25.19-.08,49.78.07,74.38.03,4.65-.45,8.58-5.11,10.92-7.18,3.6-13.12,9.43-21.04,11.72" />
                <path stroke="url(#new-blue-pulse-8" d="m567,501c3.88-2.24,8.01-5.41,6.33-10.19-.73-2.08-3-4.41-6.5-4.41s-5.52,2.32-6.48,4.44c-1.03,2.28-.9,5.68,2.27,7.44,1.43.79,2.97,1.88,4.37,2.72l-.16.62v192.85" />
                <path stroke="url(#new-blue-pulse-9" d="m1448,471c0,41.09.3,90.99.3,132.08,0,30.74.23,61.49-.15,92.23-.1,8.08.88,14.91,7.65,20.21,2.46,1.92,4.12,4.86,5.96,7.11,0,5.94-.12,11.53.04,17.12.1,3.61.16,6.97-3.39,9.25-4.16,2.67-4.23,6.17-1.7,10.04,11.21,3.4,12.5,2.31,10.87-9.66-1.79-.9-3.81-1.91-5.83-2.92" />
                <path stroke="url(#new-blue-pulse-10" d="m1742.68,634.1c.77,7.88,6.18,5.76,11.05,5.59,1.22-2.4,2.23-4.41,3.26-6.46-1.49-2.97-3.88-5.07-5.82-6.4-6.22-1.15-7.6,2.86-9.34,6.43h-204.39"/>
            </g>
        </svg>
    )
}

