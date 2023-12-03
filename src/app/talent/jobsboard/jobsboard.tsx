import styles from './styles.module.css'

export default function JobsBoard() {
    return (
        <div className={styles.jobsboardwrapper}>
            <div className={styles.jobsboardcontainer}>
                <table>
                    <thead>
                        <tr className={styles.trhead}>
                            <th>Job Role</th>
                            <th>Code</th>
                            <th>Location</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className={styles.trbody}>
                            <td>Business Development & Strategic Partnerships Manager</td>
                            <td>BDUS</td>
                            <td>New York, NY</td>
                        </tr>
                        <tr>
                            <td>Specialist, Business Project Manager - </td>
                            <td>SBPM</td>
                            <td>Remote</td>
                        </tr>
                        <tr>
                            <td>Business Development & Strategic Partnerships Manager</td>
                            <td>BDFR</td>
                            <td>France</td>
                        </tr>
                        <tr>
                            <td>AI - Machine Learning Platform Engineer</td>
                            <td>AIMLPE</td>
                            <td>France</td>
                        </tr>
                        <tr>
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