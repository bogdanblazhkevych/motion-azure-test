import styles from './styles.module.css'

export default function FifthPage() {
    return (
        <div className={styles.fifthpagewrapper}>
            <div className={styles.fifthpagecontainer}>
                <div className={styles.textwrapper}>
                    <h1>
                    One platform to govern and manage it all
                    </h1>

                    <p>
                    Innovation and product development are complex, costly, risky, and ever-evolving. To help you compete and succeed, we are building technology infrastructure, networks, and solutions to de-risk and fast-track innovation.
                    </p>

                    <ul className={styles.listcontainer}>
                        <li>
                            Real-time analytics & insights
                        </li>
                        <li>
                            Manage and optimize the innovation portfolio 
                        </li>
                        <li>
                            Access to the latest technologies and tools
                        </li>
                        <li>
                            Tap into world-class talent on demand
                        </li>
                        <li>
                            Co-creation and collaboration rooms to optimize R&D projects
                        </li>
                        <li>
                            New product development, rapid product prototyping and validation
                        </li>
                        <li>
                            Effective technology transfer and commercialization of innovation 
                        </li>
                        <li>
                            Validate and bring products to market quickly
                        </li>
                    </ul>
                </div>

                <div className={styles.artwrapper}>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 422 864.59">
                        <defs>
                            {getLinearGradient(0, 0, 0.033, 0.15, 0.033, 0.25)}
                            {getLinearGradient(1, 0, 0.033, 0.15, 0.033, 0.5)}
                            {getLinearGradient(2, 0, 0.033, 0.15, 0.033, 0.5)}
                            {getLinearGradient(3, 0, 0.033, 0.15, 0.033, 0.5)}
                        </defs>

                        <path className={styles.phoneborder} d="M3.66,431.67q0-178.56,0-357.11C3.67,28.27,31.75.1,77.91.09q121.2,0,242.4,0c9.64,0,19.29-.24,28.93,0,40.11.87,68.93,30,69,70.21.18,65.15.07,130.29.08,195.44q0,110.65,0,221.33,0,135,0,270c0,11.74.21,23.49,0,35.23-.62,43.26-28.08,71.49-71.2,72-45.74.56-91.5.14-137.25.14H107.15c-11.5,0-23,.19-34.48-.05-38.34-.78-68.92-32.27-69-70.61-.13-49,0-98,0-147.06v-215Zm16.82,1V793c0,32.32,22.24,54.93,54.5,55q135.81.13,271.61,0c32.8,0,55.13-22.62,55.13-55.34q0-360.33,0-720.65c0-32.71-22.35-55.31-55.1-55.34q-135.8-.14-271.61,0c-32.32,0-54.53,22.58-54.53,54.94Z"/>
                        <path className={styles.powerbutton} d="M421,376.27v-101h1v101Z"/>
                        <path className={styles.volumebutton} d="M1,315v63.18a6.36,6.36,0,0,1-1,0V314.92A6.56,6.56,0,0,1,1,315Z"/>
                        <path className={styles.volumebutton} d="M1,230.57v62.81H0V230.25C.71,230.36,1.15,230.46,1,230.57Z"/>
                        <path d="M212,57.44c-11.49,0-23,.13-34.47,0-9.18-.14-15.13-6-15.09-14.42s5.9-14.32,15.21-14.39q35.25-.24,70.51,0c8.61.06,14.47,6,14.59,14.08.12,8.62-5.56,14.53-14.71,14.69-12,.22-24,.06-36,.06Z"/>
                        {/* <path stroke="white" stroke-width="1px" d="M219.87,304.27V274l1.61,0v30.31Z"/> */}

                        <path className={`${styles.phonebackground}`} d="M20.48,432.71V71.6c0-32.36,22.21-54.91,54.53-54.94q135.81-.15,271.61,0c32.75,0,55.1,22.63,55.1,55.34q0,360.33,0,720.65c0,32.72-22.33,55.3-55.13,55.34Q210.8,848.14,75,848c-32.26,0-54.5-22.64-54.5-55ZM212,57.44v0c12,0,24,.16,36-.06,9.15-.16,14.83-6.07,14.71-14.69-.12-8-6-14-14.59-14.08q-35.25-.24-70.51,0c-9.31.07-15.17,5.9-15.21,14.39s5.91,14.28,15.09,14.42C189,57.57,200.51,57.44,212,57.44Z"/>

                        <path className={`${styles.freedomtower} ${styles.building}`} stroke="url(#draw-in-1)" transform="scale(1)" d="M157.6,787.08l10.84-543.3L214,232.65l45.53,8.91,13,545.52m-2.17-75.71H159.77m26-472V214.84h60.71v24.49M214,121.32V232.65L159.77,678m47.69-525.48h13m-13,33.4h13M214,232.65l56.37,443.1M177.4,260.13,214,241.56m34.67,18.57c-1.28,0-32.5-18.57-32.5-18.57M177.4,276.91l34.4-16.78m36.84,16.78L218.3,260.13m-40.9,33.31,30.06-16.53m41.18,16.53-28.17-16.53M177.4,311l30.06-17.53M248.64,311l-26-17.53M177.4,328.39,205.3,311m43.34,17.42-26-17.42m-45.24,33.3,25.73-18.1m45.51,18.1-23.83-18.1M177.4,361.79,201,344.27m47.68,17.52L227,344.27M177.4,377.83l21.39-16m49.85,16-19.5-18.26M177.4,394.86l19.22-17m52,17-17.33-17M177.4,411.39l17.06-16.53m54.18,16.53-15.16-16.53m-56.08,33.8,14.89-17.27m56.35,17.27-13-17.27M177.4,444.94l12.72-16.28m58.52,16.28-10.82-16.28M177.4,462.47,188,444.94m60.69,17.53L240,444.94M177.4,478.25l8.38-15.78m62.86,15.78-6.49-15.78M177.4,495.39l6.22-17.14m65,14.91-4.32-14.91">
                            <animateTransform attributeName="transform" type="scale" values="1;1.15;1;1" dur="10s" keyTimes="0;0.2;0.25;1" repeatCount="indefinite"/>      
                        </path>

                        <path className={`${styles.eiffeltower} ${styles.building}`} stroke="url(#draw-in-2)" d="M61.74,786.78h66.83s84.52-153.57,177.74,0h62.56L309.15,684.4V629h-182V684.4ZM149.9,629s12.33-61.5,19.9-98.12m2.85-11.37c1.33-6.43,2.84-14.22,2.84-14.22,35.55-128,27-255.95,27-255.95l-11.38-11.37V213.74l15.64-15.64V172.51l10-11.38V121.32M282.14,629s-12.87-62.16-20.35-98.36m-2.41-11.13c-1.74-8.45-2.84-14.22-2.84-14.22-35.55-128-27-255.95-27-255.95l11.38-11.37V213.74L225.26,198.1V172.51l-10-11.38V121.32M188.29,629c20.69-56.4,27-98.12,27-98.12M185.44,646c-13.65,42.93-32.85,94.25-56.87,140.77M216,530.83s8.88,42.65,26.3,98.12M248,646c14.23,42.41,34.68,95,58.3,140.77M94.44,735.59h58.3m129.4,0H339M115.77,701.47H319.11m-192-24.18h46.93m85.31,0h49.77M127.14,646h182M155.58,593.4h45.5m31.29,0H275M164.11,552.16H266.49M164.11,530.83H266.49l2.85-11.37H161.27Zm37-281.54h28.44m-28.44,12.8h28.44m-28.44,12.8h28.44m-28.44,14.22h28.44m-28.44,18.48h28.44m-28.44,21.33H231m-32.71,24.17h34.13m-35.55,24.18h37M194,402.86h41.23m-45.5,25.59H240.9m-55.46,25.6h59.72M182.6,479.64h66.83m-73.94,25.6h81.05m-66.83-291.5H240.9m-51.19,11.38H240.9m-51.19,12.8H240.9">

                        </path>

                        <path className={`${styles.bigben} ${styles.building}`} stroke="url(#draw-in-3)" d="M215,121.32V195.1l-28.38,73.78h5.68v48.24l-15.61,34.06v55.33H163.92v82.3l7.09,8.51v29.8l4.26,2.84v255.4H215m0-664V195.1l28.38,73.78H237.7v48.24l15.61,34.06v55.33h12.77v82.3L259,497.32v29.8L254.73,530v255.4H215m-39.73-180.2h79.46m-58.18,180.2V721.51m19.87,63.85V721.51m21.28,63.85V721.51m-41.86-29.8V627.86m19.87,63.85V627.86M237,691.71V627.86m-39.73-22.7V541.31m19.87,63.85V541.31m21.28,63.85V541.31m-63.14,150.4h79.46M171,527.12h88m-88-29.8h88m-75.21,0V425h63.85v72.36m-70.94-90.81h76.62M176.69,371h76.62m-76.62-19.86h76.62m-61-34.06h45.4m-45.4-48.24h45.4M215,441.28s20.86-6.06,20.86,20.44c0,21.59-20.86,20.86-20.86,20.86s-20.86-.07-20.86-17.38C194.14,439.48,215,441.28,215,441.28Zm0,7.09v17.74l11.35-3.55">

                        </path> 

                        <path className={`${styles.taipie} ${styles.building}`} stroke="url(#draw-in-4)" d="M215,121.32s-8.89,0-8.84,26.53v59s-8.85,3.44-8.85,20.63v14.74h-8.84S190,298.05,198.79,307H151.63l14.74,66.32H147.21l16.21,69.27H145.73l16.21,81.06H147.21l14.73,89.9-26.52,171H215m0-663.2s8.89,0,8.84,26.53v59s8.85,3.44,8.85,20.63v14.74h8.84S240,298.05,231.21,307h47.16l-14.74,66.32h19.16L266.58,442.6h17.69l-16.21,81.06h14.73l-14.73,89.9,26.52,171H215M157.52,758h53.06m-48.64-26.53h42.74m-36.84-26.53h29.47m-23.58-26.52h19.16m-14.73-89.9h23.58m-29.48-32.43h28m-23.58-59h26.53m-35.37-25.05,36.84.73m-19.16-44.95h25.06m-32.42-25.05h26.52m-22.1-47.16H209.1m-33.89-22.11h23.58M190,279h48.63M190,259.85h50.1m-42.74-17.68h35.38M206.16,206.8h17.68M278.37,758H225.32M274,731.46H231.21m36.85-26.53H238.58m23.58-26.52H243m14.74-89.9H234.16m29.47-32.43h-28m23.58-59H232.69m35.37-25.05H232.69m17.68-44.22H225.32m32.42-25.05H231.21m22.11-47.16H226.79m33.9-22.11H237.11M215,608.4s17.52-4.43,17.52,17.74-20.63,22.5-20.63,22.5-18.4.35-18.76-20.63C192.75,605.36,215,608.4,215,608.4Zm-53.06-2.21s7.62,6.4,33.9,8.84M159,629.77s11.15,9.5,36.84,8.84M229.74,615s22.21,1.48,38.32-7.37m-39.8,32.43s25,4.33,42.74-10.32">

                        </path>

                    </svg>
                </div>
            </div>
        </div>
    )
}

function getAnimateTransform(order: number, start: number, fill: number, fillout: number, pause: number, end?: number) {
    // const _id = `scale-in-${order + 1}`;
    const _start = order * 0.25;
    const _fill = _start + fill;
    const _fillout = _fill + fillout;
    const _pause = _fillout + pause;
    const _end = _start + 0.25

    return(
        <animateTransform attributeName="transform" type="scale" values="1;1.15;1;1" dur="10s" keyTimes="0;0.2;0.25;1" repeatCount="indefinite">

        </animateTransform>      
    )
}


function getLinearGradient(order: number, start: number, fill: number, fillout: number, pause: number, end?: number) {
    const _id = `draw-in-${order + 1}`;
    const _start = order * 0.25;
    const _fill = _start + fill;
    const _fillout = _fill + fillout;
    const _pause = _fillout + pause;
    const _end = _start + 0.25

    return(
        <linearGradient gradientUnits="objectBoundingBox" 
                        className={styles.pulseone}
                        id={_id}
                        x1="0%" 
                        y1="100%" 
                        x2="0%" 
                        y2="200%">

            <stop offset="0%" stop-color="white" stop-opacity="0"/>
            <stop offset="10%" stop-color="white" stop-opacity="0"/>

            <stop offset="10%" stop-color="#267e99"/>  
            <stop offset="50%" stop-color="#267e99"/>

            <stop offset="50%" stop-color="white"/>
            <stop offset="100%" stop-color="white"/>

            <animate attributeName="y1" values="100%;100%;-50%;-50%;-100%;-100%;-100%" dur="10s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="y2" values="100%;300%;300%;300%;0%;0%;0%;" dur="10s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" />
        </linearGradient>
    )
}