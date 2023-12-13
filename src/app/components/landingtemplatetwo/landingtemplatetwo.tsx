import PartnerSVG from '../partnersvg/partnersvg';
import WaitlistSVG from '../waitlistsvg/waitlistsvg';
import styles from './styles.module.css'

interface LandingTemplatePropsInterface {
    title: string,
    paragraph: string,
    icon?: "partner" | "waitlist",
}

export default function LandingTemplateTwo(props: LandingTemplatePropsInterface) {
    const { title, paragraph, icon } = props;


    return (
        <div className={styles.landingwrapper}>

            <div className={styles.landingcontainer}>

                <div className={styles.textwrapper}>
                    <h1>
                        {title}
                    </h1>

                    <p>
                        {paragraph}
                    </p>
                </div>

                <div className={styles.iconwrapper}>
                    {icon === "partner" ? PartnerSVG() : WaitlistSVG()}
                </div>
            </div>

        </div>
    )
}




