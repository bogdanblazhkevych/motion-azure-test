import CardOne from '@/app/components/cardone/cardone'
import styles from './styles.module.css'

export default function SecondPage() {
    return (
        <div className={styles.pagewrapper}>
                <div className={styles.pagecontainer}>
                        <div className={styles.textcontentwrapper}>
                                <h1>
                                        Unlock Opportunities with Motion!
                                </h1>
                                <p>
                                        Embark on a journey of innovation and collaboration with Motion. Whether you're interested in global partnerships, eager for early access to groundbreaking solutions, or exploring exciting career opportunities, our doors are open. Choose your path below and be a part of something extraordinary.        
                                </p>
                        </div>
        
                        <div className={styles.cardscontainer}>
                                <CardOne heading="Global Partner"
                                        paragraph="We at Motion are building a global platform to enable collaboration, accelerate innovation communities, and democratize access to business-building tools. Our goal is making scaling a business more equitable by allowing more people to leverage resources previously reserved for large corporations alone."
                                        textAlign='left'/>
                                <CardOne heading="Early Access"
                                        paragraph="We invite product builders and developers worldwide to join our platform's growing community and get early access to tools that ease growth. Connect with potential partners, customers and investors globally to advance your business or product. Leverage our community's collective knowledge to achieve your ambitions."
                                        textAlign='left'/>
                                <CardOne heading="Talent Acquisition"
                                        paragraph="We seek talented, entrepreneurial team members passionate about using technology to transform business building and scaling, making it more accessible. Join us in our ambitious mission to drive innovation democratization globally through collaboration and creativity. Together we can revolutionize and accelerate innovation."
                                        textAlign='left'/>
                        </div>
                </div>
        </div>
    )
}