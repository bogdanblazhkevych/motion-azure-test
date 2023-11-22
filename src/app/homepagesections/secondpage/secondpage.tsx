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
                                <CardOne heading="A catalyst for startup success"
                                        paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                                <CardOne heading="A catalyst for startup success"
                                        paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                                <CardOne heading="A catalyst for startup success"
                                        paragraph="We believe in leveling the playing field and empowering people to use technology for value. That's why we're building something special. A company that will be different from anything else on the market. Motion Platform, a product that will fundamentally change how R&D and Innovation teams work and empower leaders to leverage AI-powered data analytics for successful decision-making and execution."/>
                        </div>
                </div>
        </div>
    )
}