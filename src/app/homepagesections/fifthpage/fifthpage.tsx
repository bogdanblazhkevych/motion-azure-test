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

                        {/* FREEDOM TOWER */}
                        <path className={`${styles.freedomtoweraccents} ${styles.buildingaccents}`} stroke="url(#draw-in-1)" d="M213.46,220.38l-53.83,440.28m52.75-440.01l53.84,440.61m-107.97,59.09h109.66m-91.61-440.01l30.54-15.27m-30.54,31.93l29.15-15.27m-29.15,33.31l26.37-12.49m-26.37,29.15l24.98-11.1m-24.98,30.54l22.21-9.72m-22.21,24.98l19.43-8.33m-19.43,23.6l18.04-8.33m-18.04,24.98l15.27-5.55m-15.27,22.21l13.88-5.55m-13.88,23.6l11.1-4.16m-11.1,22.21l9.72-4.16m-9.72,20.82l6.94-2.78m-6.94,18.04l5.55-1.39m-5.55-216.54l33.31-18.04m39.32,33.12l-30.54-15.27m30.54,31.93l-29.15-15.27m29.15,33.31l-26.37-12.49m26.37,29.15l-24.98-11.1m24.98,30.54l-22.21-9.72m22.21,24.98l-19.43-8.33m19.43,23.6l-18.04-8.33m18.04,24.98l-15.27-5.55m15.27,22.21l-13.88-5.55m13.88,23.6l-11.1-4.16m11.1,22.21l-9.72-4.16m9.72,20.82l-6.94-2.78m6.94,18.04l-5.55-1.39m5.55-216.54l-33.31-18.04m-31-1.2l24.98-5.55m30.54,5.55l-25.22-5.55m-9.48-49.97h13.88m-13.88-34.7h13.88"> 
                            {getAnimateTransform(0, 0, 0.183, 0.033, 0.25)}
                        </path>

                        <path className={`${styles.freedomtower} ${styles.building}`} d="M212.37,125.99v94.39h-27.76v24.98l-18.04,4.16-11.1,546.89h59.69m-2.78-670.43v94.39h27.76v24.98l18.04,4.16,11.1,546.89h-54.13">
                            {getAnimateStroke(0, 800, 0, 0.0165, 0.15, 0.25)}
                            {getAnimateTransform(0, 0, 0.183, 0.033, 0.25)}
                        </path>
                        
                        {/* TAIPEI */}
                        <path className={`${styles.taipeiaccents} ${styles.buildingaccents}`} stroke="url(#draw-in-2)" d="M188.99,291.79h48.48m-48.48-19.1h49.95m-42.6-17.63h35.26m-26.44-35.26h17.63m-45.54,380.47h23.5m-29.38-32.32h27.91m-14.69-127.8h24.97m-32.32-24.97h26.44m-22.03-47.01h26.44m-33.79-22.03h23.5m58.76,254.14h-23.5m29.38-32.32h-27.91m14.69-127.8h-24.97m32.32-24.97h-26.44m22.03-47.01h-26.44m33.79-22.03h-23.5m-60.23,163.06h26.44m-35.26-24.97l36.72,.73m54.35,24.24h-26.44m35.26-24.97h-35.26m-17.63,134.41s17.47-2.94,17.47,19.15m0,0c0,22.09-20.57,22.44-20.57,22.44m0,0s-18.34,.34-18.7-20.57m0,0c-.38-22.58,21.8-21.02,21.8-21.02m-52.88-.73s7.59,6.38,33.79,8.81m-36.72,14.69s11.12,9.47,36.72,8.81m33.79-23.5s22.14,1.47,38.19-7.34m-39.66,32.32s24.93,4.32,42.6-10.28m-113.11,127.8h52.88m-48.48-26.44h42.6m-36.72-26.44h29.38m-23.5-26.44h19.1m85.2,79.33h-52.88m48.48-26.44h-42.6m36.72-26.44h-29.38m23.5-26.44h-19.1"> 
                            {getAnimateTransform(1, 0, 0.183, 0.033, 0.25)}
                        </path>

                        <path className={`${styles.taipei} ${styles.building}`} d="M212.49,135.23s-8.86,0-8.81,26.44v58.76s-8.81,3.43-8.81,20.57v14.69h-8.81s1.55,55.7,10.28,64.64h-47.01l14.69,66.1h-19.1l16.16,69.04h-17.63l16.16,80.79h-14.69l14.69,89.61-26.44,170.4h79.33m0-661.05s8.86,0,8.81,26.44v58.76s8.81,3.43,8.81,20.57v14.69h8.81s-1.55,55.7-10.28,64.64h47.01l-14.69,66.1h19.1l-16.16,69.04h17.63l-16.16,80.79h14.69l-14.69,89.61,26.44,170.4h-79.33m-17.63-540.59"> 
                            {getAnimateStroke(1, 900, 0, 0.0165, 0.15, 0.25)}
                            {getAnimateTransform(1, 0, 0.183, 0.033, 0.25)}
                        </path>


                        {/* BIG BEN */}
                        <path className={`${styles.bigbenaccents} ${styles.buildingaccents}`} stroke="url(#draw-in-3)" d="M171.23,612.97h81.18m-39.14,184.24v-65.28m-.72-30.46v-65.28m1.45-23.21v-65.28m-42.77,153.77h81.18m-84.14-168.61h90.01m-91.4-30.13h89.88m-76.83-73.99h65.24m-72.48-18.86h78.28m-78.28-36.27h78.28m-78.28-20.31h78.28m-62.34-34.82h46.39m-46.39-49.32h46.39m-1.88,197.16c0,22.08-21.31,21.33-21.31,21.33,0,0-21.31-.07-21.31-17.77m0,0c0-26.29,21.31-25.91,21.31-25.91,0,0,21.31-4.74,21.31,22.35m-21.31-13.65v18.13l11.6-3.63m-30.44,330.03v-65.28m42.04,65.28v-65.28m-42.77-30.46v-65.28m42.04,65.28v-65.28m-40.59-23.21v-65.28m42.04,65.28v-65.28m-55.81-44.97v-73.99m65.24,0v73.99"> 
                            {getAnimateTransform(2, 0, 0.183, 0.033, 0.25)}
                        </path>

                        <path className={`${styles.bigben} ${styles.building}`} d="M211.82,116.92v75.49l-29.04,75.49h5.81v49.36l-15.97,34.84v56.62h-13.07v84.2l7.26,8.71v30.49l4.36,2.9v261.32h40.65m0-679.44v75.49l29.04,75.49h-5.81v49.36l15.97,34.84v56.62h13.07v84.2l-7.26,8.71v30.49l-4.36,2.9v261.32h-40.65"> 
                            {getAnimateStroke(2, 800, 0, 0.0165, 0.15, 0.25)}
                            {getAnimateTransform(2, 0, 0.183, 0.033, 0.25)}
                        </path>


                        {/* EIFFEL TOWER */}
                        <path className={`${styles.eiffeltoweraccents} ${styles.buildingaccents}`} stroke="url(#draw-in-4)" d="M150.01,605.93s11.99-15.67,27.19-49.58m10.33-26.85c5.56-18.23,10.96-39.98,15.49-66.1m4.13-29.95c2.57-19.45,5.05-41.25,6.2-63m69.9,239.62s-10.26-9.96-27.55-53.71m-10.33-25.82c-5.86-18.54-11.57-40.83-16.29-66.76m-3.89-30.34c-4.01-19.17-5.49-39.56-6.67-61.95m-5.16-1.03h5.16m-121.88,265.44h36.15m-15.49-30.99h35.12m-20.66-23.76h33.05m3.1-86.76h28.92m-6.2-84.69h19.62m-15.49-18.59h17.56m-13.43-20.66h33.05m103.29,265.05h-36.15m15.49-30.99h-35.12m20.66-23.76h-33.05m-3.1-86.76h-28.92m6.2-84.69h-19.62m15.49-18.2h-17.56m-75.4,165.26h143.57m-134.27-26.85h123.94m-100.19-66.1h77.46m-69.2-29.95h60.94m-46.48-76.43h30.99m-28.92-15.49h26.85m-13.77-139.44v140.47"> 
                            {getAnimateTransform(3, 0, 0.183, 0.033, 0.25)}
                        </path>

                        <path className={`${styles.eiffeltower} ${styles.building}`} d="M214.89,576.49s-82.08-3.19-92.95,101.22H59.98s61.54-63.36,89.85-139.44c26.92-69.69,33.05-99.15,33.05-99.15,0,0,25.82-93.99,28.92-215.87h-9.29v-21.69h12.39v-33.05m0,407.98s82.1-3.7,92.97,100.7h61.97s-61.54-63.36-89.85-139.44c-26.92-69.69-33.07-98.64-33.07-98.64,0,0-25.82-93.99-28.92-215.87h9.29v-21.69h-12.39v-33.05"> 
                            {getAnimateStroke(3, 800, 0, 0.0165, 0.15, 0.25)}
                            {getAnimateTransform(3, 0, 0.183, 0.033, 0.25)}
                        </path>






                        {/* <path className={`${styles.freedomtower} ${styles.building}`} stroke="url(#draw-in-1)" transform="scale(1)" d="M157.6,787.08l10.84-543.3L214,232.65l45.53,8.91,13,545.52m-2.17-75.71H159.77m26-472V214.84h60.71v24.49M214,121.32V232.65L159.77,678m47.69-525.48h13m-13,33.4h13M214,232.65l56.37,443.1M177.4,260.13,214,241.56m34.67,18.57c-1.28,0-32.5-18.57-32.5-18.57M177.4,276.91l34.4-16.78m36.84,16.78L218.3,260.13m-40.9,33.31,30.06-16.53m41.18,16.53-28.17-16.53M177.4,311l30.06-17.53M248.64,311l-26-17.53M177.4,328.39,205.3,311m43.34,17.42-26-17.42m-45.24,33.3,25.73-18.1m45.51,18.1-23.83-18.1M177.4,361.79,201,344.27m47.68,17.52L227,344.27M177.4,377.83l21.39-16m49.85,16-19.5-18.26M177.4,394.86l19.22-17m52,17-17.33-17M177.4,411.39l17.06-16.53m54.18,16.53-15.16-16.53m-56.08,33.8,14.89-17.27m56.35,17.27-13-17.27M177.4,444.94l12.72-16.28m58.52,16.28-10.82-16.28M177.4,462.47,188,444.94m60.69,17.53L240,444.94M177.4,478.25l8.38-15.78m62.86,15.78-6.49-15.78M177.4,495.39l6.22-17.14m65,14.91-4.32-14.91">
                            {getAnimateTransform(0, 0, 0.183, 0.033, 0.25)}
                        </path>

                        <path className={`${styles.eiffeltower} ${styles.building}`} stroke="url(#draw-in-2)" d="M61.74,786.78h66.83s84.52-153.57,177.74,0h62.56L309.15,684.4V629h-182V684.4ZM149.9,629s12.33-61.5,19.9-98.12m2.85-11.37c1.33-6.43,2.84-14.22,2.84-14.22,35.55-128,27-255.95,27-255.95l-11.38-11.37V213.74l15.64-15.64V172.51l10-11.38V121.32M282.14,629s-12.87-62.16-20.35-98.36m-2.41-11.13c-1.74-8.45-2.84-14.22-2.84-14.22-35.55-128-27-255.95-27-255.95l11.38-11.37V213.74L225.26,198.1V172.51l-10-11.38V121.32M188.29,629c20.69-56.4,27-98.12,27-98.12M185.44,646c-13.65,42.93-32.85,94.25-56.87,140.77M216,530.83s8.88,42.65,26.3,98.12M248,646c14.23,42.41,34.68,95,58.3,140.77M94.44,735.59h58.3m129.4,0H339M115.77,701.47H319.11m-192-24.18h46.93m85.31,0h49.77M127.14,646h182M155.58,593.4h45.5m31.29,0H275M164.11,552.16H266.49M164.11,530.83H266.49l2.85-11.37H161.27Zm37-281.54h28.44m-28.44,12.8h28.44m-28.44,12.8h28.44m-28.44,14.22h28.44m-28.44,18.48h28.44m-28.44,21.33H231m-32.71,24.17h34.13m-35.55,24.18h37M194,402.86h41.23m-45.5,25.59H240.9m-55.46,25.6h59.72M182.6,479.64h66.83m-73.94,25.6h81.05m-66.83-291.5H240.9m-51.19,11.38H240.9m-51.19,12.8H240.9">
                            {getAnimateTransform(1, 0.25, 0.183, 0.033, 0.5)}
                        </path>

                        <path className={`${styles.bigben} ${styles.building}`} stroke="url(#draw-in-3)" d="M215,121.32V195.1l-28.38,73.78h5.68v48.24l-15.61,34.06v55.33H163.92v82.3l7.09,8.51v29.8l4.26,2.84v255.4H215m0-664V195.1l28.38,73.78H237.7v48.24l15.61,34.06v55.33h12.77v82.3L259,497.32v29.8L254.73,530v255.4H215m-39.73-180.2h79.46m-58.18,180.2V721.51m19.87,63.85V721.51m21.28,63.85V721.51m-41.86-29.8V627.86m19.87,63.85V627.86M237,691.71V627.86m-39.73-22.7V541.31m19.87,63.85V541.31m21.28,63.85V541.31m-63.14,150.4h79.46M171,527.12h88m-88-29.8h88m-75.21,0V425h63.85v72.36m-70.94-90.81h76.62M176.69,371h76.62m-76.62-19.86h76.62m-61-34.06h45.4m-45.4-48.24h45.4M215,441.28s20.86-6.06,20.86,20.44c0,21.59-20.86,20.86-20.86,20.86s-20.86-.07-20.86-17.38C194.14,439.48,215,441.28,215,441.28Zm0,7.09v17.74l11.35-3.55">
                            {getAnimateTransform(2, 0.5, 0.183, 0.033, 0.75)}
                        </path> 

                        <path className={`${styles.taipie} ${styles.building}`} stroke="url(#draw-in-4)" d="M215,121.32s-8.89,0-8.84,26.53v59s-8.85,3.44-8.85,20.63v14.74h-8.84S190,298.05,198.79,307H151.63l14.74,66.32H147.21l16.21,69.27H145.73l16.21,81.06H147.21l14.73,89.9-26.52,171H215m0-663.2s8.89,0,8.84,26.53v59s8.85,3.44,8.85,20.63v14.74h8.84S240,298.05,231.21,307h47.16l-14.74,66.32h19.16L266.58,442.6h17.69l-16.21,81.06h14.73l-14.73,89.9,26.52,171H215M157.52,758h53.06m-48.64-26.53h42.74m-36.84-26.53h29.47m-23.58-26.52h19.16m-14.73-89.9h23.58m-29.48-32.43h28m-23.58-59h26.53m-35.37-25.05,36.84.73m-19.16-44.95h25.06m-32.42-25.05h26.52m-22.1-47.16H209.1m-33.89-22.11h23.58M190,279h48.63M190,259.85h50.1m-42.74-17.68h35.38M206.16,206.8h17.68M278.37,758H225.32M274,731.46H231.21m36.85-26.53H238.58m23.58-26.52H243m14.74-89.9H234.16m29.47-32.43h-28m23.58-59H232.69m35.37-25.05H232.69m17.68-44.22H225.32m32.42-25.05H231.21m22.11-47.16H226.79m33.9-22.11H237.11M215,608.4s17.52-4.43,17.52,17.74-20.63,22.5-20.63,22.5-18.4.35-18.76-20.63C192.75,605.36,215,608.4,215,608.4Zm-53.06-2.21s7.62,6.4,33.9,8.84M159,629.77s11.15,9.5,36.84,8.84M229.74,615s22.21,1.48,38.32-7.37m-39.8,32.43s25,4.33,42.74-10.32">
                            {getAnimateTransform(3, 0.75, 0.183, 0.033, 1)}
                        </path> */}

                    </svg>
                </div>
            </div>
        </div>
    )
}

function getAnimateStroke(order: number, offset: number, start: number, strokein: number, strokeout: number, end: number) {
    //strokein should be before gradient fillin
    //strokeout should at gradien pause
    const _start = order * 0.25;
    const _strokein = _start + strokein;
    const _strokeout = _strokein + strokeout + strokein + 0.033;
    // const _pause = _fillout + pause;
    const _end = _start + 0.25 - 0.0165

    return(
        <animate attributeName="stroke-dashoffset" 
                          type="scale" 
                          values={`${offset};${offset};${0};${0};${offset};${offset}`}
                          dur="20s" 
                          keyTimes={`0;${_start};${_strokein};${_strokeout};${_end};1`} 
                          repeatCount="indefinite">
        </animate>      
    )

}

function getAnimateTransform(order: number, start: number, scalein: number, scaleout: number, end: number) {
    //scalein parameter should be getLinearGradient's fill + fillout value 
    const _start = order * 0.25;
    const _scalein = _start + scalein;
    const _scaleout = _scalein + scaleout;
    // const _pause = _fillout + pause;
    const _end = _start + 0.25

    return(
        <animateTransform attributeName="transform" 
                          type="scale" 
                          values="1;1;1.1;1;1;1" 
                          dur="20s" 
                          keyTimes={`0;${_start};${_scalein};${_scaleout};${_end};1`} 
                          repeatCount="indefinite">
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
                        y2="300%">

            <stop offset="0%" stop-color="white" stop-opacity="0"/>
            <stop offset="10%" stop-color="white" stop-opacity="0"/>

            <stop offset="10%" stop-color="#267e99"/>  
            <stop offset="50%" stop-color="#267e99"/>

            <stop offset="50%" stop-color="white" stop-opacity="0"/>
            <stop offset="100%" stop-color="white" stop-opacity="0"/>

            <animate attributeName="y1" values="100%;100%;-50%;-50%;-100%;-100%;-100%" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="y2" values="300%;300%;300%;300%;0%;0%;0%;" dur="20s" keyTimes={`0;${_start};${_fill};${_fillout};${_pause};${_end};1`} repeatCount="indefinite" calcMode="linear" />
        </linearGradient>
    )
}