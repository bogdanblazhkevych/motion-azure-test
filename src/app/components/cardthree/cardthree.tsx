import styles from './styles.module.css'

interface CardThreePropsInterface {
    title: string,
    paragraph: string,
    svg?: JSX.Element,
    clickable: boolean
}

export default function CardThree(props: CardThreePropsInterface) {
    const {title, paragraph, svg, clickable} = props
    return (
        <div className={styles.newcardwrapper}>
            {svg}
            <h1 className={styles.cardh1}>{title}</h1>
            <p className={styles.cardp}>{paragraph}</p>
        </div>
    )
}