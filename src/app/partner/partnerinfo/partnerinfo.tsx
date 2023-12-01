import CardOne from '@/app/components/cardone/cardone'
import styles from './styles.module.css'

export default function PartnerInfo() {
    return (
        <div className={styles.partnerinfowrapper}>

            <div className={styles.partnerinfocontainer}>

                <div className={styles.cardscontainer}>

                    <CardOne heading='Access to Global Resources'
                        paragraph='Tap into world-class talent on demand with Access to the latest technologies and tools available.'
                        textAlign='left'
                        banner={GlobalResourcesSVG()} />

                    <CardOne heading='Centralized Access for Efficiency'
                        paragraph="Give easy access to Motionen's entire suite of integrated features designed to work together and expand offerings."
                        textAlign='left'
                        banner={CentralizedSVG()} />

                    <CardOne heading='Streamline Operations'
                        paragraph='Use our unified platform to integrate Motion into innovation processes and strategy with SaaS and Marketplace.'
                        textAlign='left' 
                        banner={InnovationSVG()}/>

                    <CardOne heading='Accelerate Innovation'
                        paragraph='Co-create and collaborate to optimize R&D projects, de-risk innovation, and accelerate your overall business model.'
                        textAlign='left' />

                    <CardOne heading='Expand Globally'
                        paragraph='Accelerate international expansion and enter new global markets with regional experts to find new sales channels.'
                        textAlign='left' />

                    <CardOne heading='Launch Quickly'
                        paragraph="Validate assumptions quickly, reduce time to market, and bring product to deployment faster."
                        textAlign='left' />



                </div>

            </div>

        </div>
    )
}

function GlobalResourcesSVG() {
    return (
        <svg viewBox="0 0 1000 500">
            <defs>
            </defs>
            <path id="worldoutline_1" data-name="worldoutline 1" d="M504.281,71.986s-180.295,0-180.295,180.3,180.3,180.3,180.3,180.3,180.3,0,180.3-180.3S504.281,71.986,504.281,71.986Z" />
            <path id="outeroutline_1" data-name="outeroutline 1" d="M504,72S378.328,108.044,378.328,252.218,504,432.437,504,432.437m0.327-359.874S630,108.607,630,252.782,504.327,433,504.327,433" />
            <path id="inneroutline" d="M503.93,72S450,108.044,450,252.218s53.93,180.219,53.93,180.219m0.14-359.874S558,108.607,558,252.782,504.07,433,504.07,433" />
            <path id="smallcircle_1" data-name="smallcircle 1" d="M72,32.349s-28.826,0-28.826,28.826S72,90,72,90s28.826,0,28.826-28.826S72,32.349,72,32.349Z" />
            <path id="lineto1_1" data-name="lineto1 1" d="M72,90v90H336" />
            <path id="lineto2" d="M172.812,252.516H324" />
            <path id="equator" d="M324,252.281H686.392" />
            <path id="smallcircle_2" data-name="smallcircle 2" d="M144,223.177s-28.826,0-28.826,28.825S144,280.828,144,280.828s28.826,0,28.826-28.826S144,223.177,144,223.177Z" />
            <path id="liento3_1" data-name="liento3 1" d="M119.813,404.643h168v-65h54" />
            <path id="smallcircle3" d="M90,378.489s-28.826,0-28.826,28.826S90,436.141,90,436.141s28.826,0,28.826-28.826S90,378.489,90,378.489Z" />
            <path id="smallcircle5" d="M864,223.677s28.826,0,28.826,28.825S864,281.328,864,281.328s-28.826,0-28.826-28.826S864,223.677,864,223.677Z" />
            <path id="lineto5_1" data-name="lineto5 1" d="M674,180H864v42" />
            <path id="lineto6_1" data-name="lineto6 1" d="M918,438v30H720V360H655" />
            <path id="smallcircle6" d="M918,378.989s28.826,0,28.826,28.826S918,436.641,918,436.641s-28.826,0-28.826-28.826S918,378.989,918,378.989Z" />
            <path id="smallcircle4" d="M929.312,25.177s28.826,0,28.826,28.826-28.826,28.826-28.826,28.826-28.825,0-28.825-28.826S929.312,25.177,929.312,25.177Z" />
            <path id="lineto4_1" data-name="lineto4 1" d="M504,72V54H900" />
        </svg>
    )
}

function CentralizedSVG() {
    return (

        <svg viewBox="0 0 1000 500">
            <defs>
            </defs>

            <path id="motionlogo_1" className={styles.motionlogopath} data-name="motionlogo 1" d="M576.962,160.709l2.782-16.67C652.215,167.757,603.81,235.4,603.81,235.4,632.923,165.743,576.962,160.709,576.962,160.709Zm-11.151,147.3s-15.053,13.834-57.263,34.281-78.736,17.141-78.736,17.141-56.577.956-72.6-35.506,25.288-90.9,25.288-90.9-29.329,41.267-14.817,74.287,65.748,32.154,65.748,32.154,33.079,3,71.305-15.522S556.592,292.9,556.592,292.9s91.724-68.35,66.674-124.182c-13.808-31.25-61.118-33.263-61.118-33.263s64.519-6.03,79.639,35.481C669.447,232.592,565.811,308.012,565.811,308.012Zm-123.466,23.2s-46.132,8.756-66.34-36.81c-13.162-41.432,35.012-84.775,35.012-84.775v17.847S341.142,311.742,442.345,331.211Z" />
            <path id="small1" d="M144,367.96s-31.861,0-31.861,31.861S144,431.681,144,431.681s31.861,0,31.861-31.86S144,367.96,144,367.96Z" />
            <path id="nodepaths_1" data-name="nodepaths 1" d="M175,385l168-69M178,114l209,87m438-87L660,183M825,386L606,296" />
            <path id="small2" d="M144.9,73.444s-31.86,0-31.86,31.861,31.86,31.861,31.86,31.861,31.861,0,31.861-31.861S144.9,73.444,144.9,73.444Z" />
            <path id="small4" d="M856.875,357.616s-31.861,0-31.861,31.861,31.861,31.861,31.861,31.861,31.861,0,31.861-31.861S856.875,357.616,856.875,357.616Z" />
            <path id="small3" d="M856.875,73.444s-31.861,0-31.861,31.861,31.861,31.861,31.861,31.861,31.861,0,31.861-31.861S856.875,73.444,856.875,73.444Z" />
        </svg>

    )
}

function InnovationSVG() {
    return (

        <svg viewBox="0 0 1000 500">
            <defs>
            </defs>

            <path id="bigcirclegear" d="M159.36,177.74s-71.827,0-71.827,71.828S159.36,321.4,159.36,321.4s71.828,0,71.828-71.827S159.36,177.74,159.36,177.74Z" />
            <path id="smallcirclegear" d="M159.211,210.27s-39.582,0-39.582,39.582,39.582,39.583,39.582,39.583,39.583,0,39.583-39.583S159.211,210.27,159.211,210.27Z" />
            <path id="gearllock_1" data-name="gearllock 1" d="M88.1,236.411H65.556v26.883H88.1" />
            <path id="gearllock2" d="M99.376,291.044L83.263,306.766l18.1,18.1,16.227-15.61" />
            <path id="gearllock3" d="M146.2,319.661v23.413h26.015V320.528" />
            <path id="gearllock4_" data-name="gearllock4\" d="M200.836,309.254l15.908,15.608,18.1-18.1-14.927-14.854" />
            <path id="gearlock8" d="M98.509,208.661L83.588,193.426l18.1-18.1,15.035,15.122" />
            <path id="gearlock7" d="M147.071,179.177L146.9,156.915H172.49l-0.271,23.129" />
            <path id="gearlock6" d="M202.571,190.451l14.5-15.12,18.1,18.1-14.385,15.233" />
            <path id="gearlock5" d="M231.188,262.427H252V236.411H230.32" />
            <path id="motionlogo_1" className={styles.motionlogopath} data-name="motionlogo 1" d="M859.169,188.246l2.592-12.973c67.525,18.458,22.424,71.1,22.424,71.1C911.311,192.164,859.169,188.246,859.169,188.246Zm-10.39,114.637s-14.026,10.766-53.355,26.678-73.363,13.34-73.363,13.34-52.715.744-67.646-27.632,23.562-70.739,23.562-70.739-27.327,32.116-13.806,57.813,61.261,25.024,61.261,25.024,30.822,2.33,66.439-12.081,48.318-24.16,48.318-24.16,85.464-53.193,62.124-96.643c-12.866-24.319-56.947-25.886-56.947-25.886s60.115-4.693,74.2,27.612C945.342,244.188,848.779,302.883,848.779,302.883Zm-115.04,18.054s-42.983,6.814-61.812-28.647c-12.264-32.244,32.623-65.975,32.623-65.975v13.89S639.444,305.786,733.739,320.937Z" />
            <path id="lineto2_1" data-name="lineto2 1" d="M230.312,331.359L628,331M230.312,168.469L782,168M278,249H609" />
        </svg>

    )
}