import styles from './styles.module.css'

interface CardOnePropsInterface {
    heading: string,
    paragraph: string
}

export default function CardOne(props: CardOnePropsInterface){
    const { heading, paragraph } = props;

    return(
        <div className={styles.cardwrapper}>
            <div className={styles.cardcontent}>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}