'use client'
import { colabNodeInterface } from '../data'
import styles from './styles.module.css'

interface colabNodePropsInterface {
    data: colabNodeInterface
}

export default function ColabNode(props: colabNodePropsInterface) {
    const { data } = props
    
    const handleColabNodeClick = (e: React.MouseEvent) => {
        const target = e.currentTarget
        console.log(target.classList)
    }

    return (
        <div onClick={handleColabNodeClick} className={styles.colabnodewrapper}>
            <p>
                {data.entity.name}
            </p>

            <p>
                {data.entity.sector}
            </p>

            <div className={styles.matchconfidence}>
                <p>
                    {data.matchConfidence * 100}%
                </p>
                <div className={styles.matchconfidencecolor} style={{ backgroundColor: `hsl(${data.matchConfidence * 120}, 100%, 32%)` }}>
                </div>
            </div>
        </div>
    )
}