import AnalyticsSVG from '@/app/components/analyticssvg/analyticssvg'
import styles from './styles.module.css'
import InovationSVG from '@/app/components/inovationsvg/inovationsvg'
import ToolsSVG from '@/app/components/toolssvg/toolssvg'
import MarketSVG from '@/app/components/marketsvg/marketsvg'
import AnimateChildren from '@/app/components/animatechildren/animatechildren'

export default function SixthPage() {
    return(
        <div className={styles.sixthpagewrapper}>
            <div className={styles.sixthpagecontainer}>
                <AnimateChildren>
                    <h1 className={styles.pagetitle}>
                        Innovation is hard, but it doesnt have to be.
                    </h1>
                </AnimateChildren>

                <div className={styles.maincontentcontainer}>
                    <AnimateChildren>
                        <div className={styles.gridcard}>
                            {cardTwo("analytics", "Real-Time-Analytics", "Harness the power of real-time analytics for swift, data-driven decisions. Monitor and optimize key metrics instantly, staying ahead in a rapidly evolving digital world.")}
                        </div>
                    </AnimateChildren>
                    <AnimateChildren>
                        <div className={styles.gridsvg}>
                            <AnalyticsSVG />
                        </div>
                    </AnimateChildren>

                    <AnimateChildren>
                        <div className={styles.gridcard}>
                            {cardTwo("Innovation", "Innovation & Development", "Journey from innovative ideas to tangible prototypes. Merge creativity with practical development, leading to groundbreaking products and market-ready solutions.")}
                        </div>
                    </AnimateChildren>
                    <AnimateChildren>
                        <div className={styles.gridsvg}>
                            <InovationSVG />
                        </div>
                    </AnimateChildren>

                    <AnimateChildren>
                        <div className={styles.gridcard}>
                            {cardTwo("Resources", "Access Cutting-Edge Tools", "Access the latest technologies and elite talent. Equip yourself with a comprehensive toolbox for success in today's competitive environment, blending tech with expertise.")}   
                        </div>
                    </AnimateChildren>
                    <AnimateChildren>
                        <div className={styles.gridsvg}>
                            <ToolsSVG />
                        </div>
                    </AnimateChildren>

                    <AnimateChildren>
                        <div className={styles.gridcard}>
                            {cardTwo("Launch", "Accelerate Market Entry", "Speed your product from concept to market. Streamline the path from validation to commercialization, ensuring rapid, impactful market entry. Embrace the pace for a standout launch.")}
                        </div>
                    </AnimateChildren>
                    <AnimateChildren>
                        <div className={styles.gridsvg}>
                            <MarketSVG />
                        </div>
                    </AnimateChildren>
                </div>
            </div>
        </div>
    )
}



function cardTwo(heading: string, title: string, paragraph: string) {
    return(
        <div className={styles.cardwrapper}>
            <div className={styles.cardcontainer}>
                <h5 className={styles.heading}>
                    {heading}
                </h5>

                <h1 className={styles.title}>
                    {title}
                </h1>

                <p className={styles.paragraph}>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}