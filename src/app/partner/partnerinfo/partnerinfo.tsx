import styles from './styles.module.css'
import AnimateChildren from '@/app/components/animatechildren/animatechildren'
import GlobalResourcesSVG from '@/app/components/svgbanners/globalresources/globalresources'
import CardThree from '@/app/components/cardthree/cardthree'
import CentralizedSVG from '@/app/components/svgbanners/centralized/centralized'
import InovationBannerSVG from '@/app/components/svgbanners/inovation/inovation'

export default function PartnerInfo() {
    return (
        <div id="partnerinfo" className={styles.partnerinfowrapper}>

            <div className={styles.partnerinfocontainer}>

                <AnimateChildren>
                    <div className={styles.textcontainer}>
                        <h1>
                            World-Class Capabilities At Your Fingertips
                        </h1>
                    </div>
                </AnimateChildren>

                <AnimateChildren>
                    <div className={styles.cardscontainer}>
                        <CardThree title="Global Partner" 
                                   paragraph="Become a Global Partner at Motion to accelerate innovation, and democratize business tools, making scaling equitable."
                                   clickable={false}
                                   svg={<GlobalResourcesSVG />}/>
                        <CardThree title="Centralized Access" 
                                   paragraph="Get easy access to Motion's entire integrated suite of features designed to work together and expand offerings."
                                   clickable={false}
                                   svg={<CentralizedSVG />}/>
                        <CardThree title="Streamline Operations" 
                                   paragraph="Use our unified platform to integrate Motion into innovation processes and strategy with SaaS and Marketplace."
                                   clickable={false}
                                   svg={<InovationBannerSVG />}/>
                        <CardThree title="Accelerate Innovation" 
                                   paragraph="Co-create and collaborate to optimize R&D projects, de-risk innovation, and accelerate your overall business model."
                                   clickable={false}/>
                        <CardThree title="Expand Globally" 
                                   paragraph="Accelerate international expansion and enter new global markets with regional experts to find new sales channels."
                                   clickable={false}/>
                        <CardThree title="Launch Quickly" 
                                   paragraph="Validate assumptions quickly, reduce time to market, and bring product to deployment faster."
                                   clickable={false}/>
                    </div>
                </AnimateChildren>
            </div>
        </div>
    )
}