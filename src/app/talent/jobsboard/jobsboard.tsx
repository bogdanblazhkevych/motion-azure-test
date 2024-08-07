import Link from 'next/link'
import styles from './styles.module.css'

export default function JobsBoard() {
    return (
        <div className={styles.jobsboardwrapper}>
            <div className={styles.jobsboardcontainer}>
                <table>
                    <thead className={styles.thead}>
                        <tr className={styles.trhead}>
                            <th>Job Role</th>
                            <th>Code</th>
                            <th>Location</th>
                        </tr>
                    </thead>

                    <tbody className={styles.tbody}>
                        <tr className={styles.trbody}>                
                            <td>
                                <Link href='/bdfr'>
                                    Business Development & Strategic Partnerships Manager
                                </Link>
                            </td>

                            <td>
                                <Link href='/bdfr'>
                                    BDFR
                                </Link>
                            </td>
                            <td>
                                <Link href='/bdfr'>
                                    France
                                </Link>
                            </td>
                        </tr >
                        <tr className={styles.trbody}>
                            <td>
                                <Link href='/mlpe'>
                                    AI - Machine Learning Platform Engineer 
                                </Link>
                            </td>
                            <td>
                                <Link href='/mlpe'>
                                    AIMLPE
                                </Link>
                            </td>
                            <td>
                                <Link href='/mlpe'>

                                    France
                                </Link>
                            </td>
                        </tr>
                        <tr className={styles.trbody}>
                            <td>
                                <Link href="/mleia">
                                    Machine Learning Engineer(s)- Intelligent Algorithms Experts
                                </Link>
                            </td>
                            <td>
                                <Link href="/mleia">
                                    MLEIA
                                </Link>
                            </td>
                            <td>
                                <Link href="/mleia">
                                    France
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}