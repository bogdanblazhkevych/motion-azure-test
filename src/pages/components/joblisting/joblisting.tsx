import styles from './styles.module.css'

interface JobListingPropsInterface {
    jobListing: {
        jobTitle: string,
        aboutUs: string,
        aboutTheRole: string,
        jobResponsibilities: string[],
        qualifications: {
            'required': string[],
            'prefered': string[]
        },
        location: string,
        compensation: string,
        apply: string
    }
}

export default function JobListing(props: JobListingPropsInterface) {
    const {jobListing} = props;

    return (
        <div className={styles.joblistingwrapper}>
            <div className={styles.joblistingcontainer}>
                <h1>
                    {jobListing.jobTitle}
                </h1>

                <div className={styles.section}>
                    <h3>
                        About us
                    </h3>
                    <p>
                        {jobListing.aboutUs}
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>
                        About the Role
                    </h3>
                    <p>
                        {jobListing.aboutTheRole}
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>
                        Job Responsibilities
                    </h3>
                    <ul>
                        {jobListing.jobResponsibilities.map((entry, index) => {
                            return (
                                <li>
                                    {entry}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                

                <div className={styles.section}>
                    <h3>
                        Qualifications
                    </h3>
                </div>

                <div className={styles.section}>
                    <h3>
                        Required
                    </h3>
                    <ul>
                        {jobListing.qualifications.required.map((entry, index) => {
                            return(
                                <li>
                                    {entry}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                
                <div className={styles.section}>
                    <h3>
                        Prefered
                    </h3>
                    <ul>
                        {jobListing.qualifications.prefered.map((entry, index) => {
                            return(
                                <li>
                                    {entry}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div className={styles.section}>
                    <h3>
                        Location
                    </h3>
                    <p>
                        {jobListing.location}
                    </p>
                </div>
                
                <div className={styles.section}>
                    <h3>
                        Compensation
                    </h3>
                    <p>
                        {jobListing.compensation}
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>
                        Apply
                    </h3>
                    <p>
                        {jobListing.apply}
                    </p>
                    <span className={styles.tallentemail}>
                        talent@motion-ise.com
                    </span>
                </div>

            </div>
        </div>
    )
}