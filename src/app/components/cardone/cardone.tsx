import styles from './styles.module.css'

interface CardOnePropsInterface {
    heading: string,
    paragraph: string,
    textAlign?: "center" | "right" | "left",
    banner?: JSX.Element
}

export default function CardOne(props: CardOnePropsInterface){
    const { heading, paragraph, textAlign, banner } = props;

    return(
        <div className={styles.cardwrapper}>
            {banner && 
            <div className={styles.bannerwrapper}>
                {banner}
            </div>
            }
            <div className={styles.cardcontent} data-align={textAlign}>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}