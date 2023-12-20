import Link from 'next/link';
import PartnerSVG from '../partnersvg/partnersvg';
import TalentSVG from '../talentsvg/talentsvg';
import WaitlistSVG from '../waitlistsvg/waitlistsvg';
import styles from './styles.module.css'

interface LandingTemplatePropsInterface {
    title: string,
    paragraph: string,
    icon?: "partner" | "waitlist" | "talent",
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

                    {icon !== "talent" && <div className={styles.linkscontainer}>
                        <Link href={`#form`}>
                            <button type="submit" className={styles.submitbutton}>Sign Up Now</button>
                        </Link>
                        <Link href={`#${icon}info`}>
                            <h3 className={styles.linktext}>
                                Learn More
                            </h3>
                        </Link>
                    </div>}
                </div>

                <div className={styles.iconwrapper}>
                    {icon === "partner" && <PartnerSVG />}
                    {icon === "waitlist" && <WaitlistSVG />}
                    {icon === "talent" && <TalentSVG />}

                    {/* {icon === "partner" ? <PartnerSVG /> : <WaitlistSVG />} */}
                </div>

            </div>

        </div>
    )
}




