import styles from './styles.module.css'

export default function LockSVGIcon() {
    return (
        <div className={styles.svgcontainer}>
            <svg viewBox="0 0 500 500">
                <defs>
                </defs>
                <path id="lockcircle_1" data-name="lockcircle 1" d="M250,166.089s-155.36,0-155.36,155.36S250,476.809,250,476.809s155.36,0,155.36-155.36S250,166.089,250,166.089Z" />
                <path id="lockcheck_1" data-name="lockcheck 1" d="M231.434,326.95L205.5,304.172s-31.648-7.533-25.935,25.625l40.344,42.71s9.793,9.45,23.053,0l77.806-76.877s5.842-35.416-28.817-28.474Z" />
                <path id="checkcircle" d="M250,213.35s-108.1,0-108.1,108.1S250,429.547,250,429.547s108.1,0,108.1-108.1S250,213.35,250,213.35Z" />
                <path id="locktop_1" data-name="locktop 1" d="M144.319,203.979V109.422s-3.77-86.214,111.243-86.214c111.34,0,100.119,91.776,100.119,91.776v89" />
                <g>
                    <path className={styles.bluepath} style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }} id="lockcircle_1" data-name="lockcircle 1" d="M250,166.089s-155.36,0-155.36,155.36S250,476.809,250,476.809s155.36,0,155.36-155.36S250,166.089,250,166.089Z" />
                    <path className={styles.bluepath} style={{ strokeDasharray: "700", strokeDashoffset: "700" }} id="checkcircle" d="M250,213.35s-108.1,0-108.1,108.1S250,429.547,250,429.547s108.1,0,108.1-108.1S250,213.35,250,213.35Z" />
                    <path className={styles.bluepath} style={{ strokeDasharray: "500", strokeDashoffset: "500" }} id="locktop_1" data-name="locktop 1" d="M144.319,203.979V109.422s-3.77-86.214,111.243-86.214c111.34,0,100.119,91.776,100.119,91.776v89" />
                    <path className={styles.bluepath} style={{ strokeDasharray: "410", strokeDashoffset: "410" }} id="lockcheck_1" data-name="lockcheck 1" d="M231.434,326.95L205.5,304.172s-31.648-7.533-25.935,25.625l40.344,42.71s9.793,9.45,23.053,0l77.806-76.877s5.842-35.416-28.817-28.474Z" />
                </g>
            </svg>
        </div>
    )
}