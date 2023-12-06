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
                                    <Link href='/bdus'>
                                        Business Development & Strategic Partnerships Manager
                                    </Link>
                                </td>
                                <td>
                                    <Link href='/bdus'>
                                        BDUS
                                    </Link>
                                </td>
                                <td>
                                    <Link href='/bdus'>
                                        New York, NY
                                    </Link>
                                </td>
                        </tr>
                        <tr className={styles.trbody}>
                            <td>Specialist, Business Project Manager</td>
                            <td>SBPM</td>
                            <td>Remote</td>
                        </tr>
                        <tr className={styles.trbody}>
                            <td>Business Development & Strategic Partnerships Manager</td>
                            <td>BDFR</td>
                            <td>France</td>
                        </tr >
                        <tr className={styles.trbody}>
                            <td>AI - Machine Learning Platform Engineer</td>
                            <td>AIMLPE</td>
                            <td>France</td>
                        </tr>
                        <tr className={styles.trbody}>
                            <td>Machine Learning Engineer(s)- Intelligent Algorithms Experts</td>
                            <td>MLEIA</td>
                            <td>France</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}