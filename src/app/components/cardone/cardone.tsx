import styles from './styles.module.css'

interface CardOnePropsInterface {
    heading: string,
    paragraph: string,
    textAlign?: "center" | "right" | "left",
    icon?: JSX.Element,
    banner?: JSX.Element,
    mobileOnly?: boolean,
    padding?: boolean,
    clickable?: boolean
}

export default function CardOne(props: CardOnePropsInterface){
    const { heading, paragraph, textAlign, banner, mobileOnly, icon, padding, clickable } = props;

    return(
        <div className={styles.cardwrapper} data-clickable={clickable}>
            {banner && 
            <div className={styles.bannerwrapper} data-mobile-only={mobileOnly}>
                {banner}
            </div>
            }
            {icon &&
            <div className={styles.iconwrapper} data-paddingtrue={padding}>
                {icon}
            </div>
            }
            <div className={styles.cardcontent} data-align={textAlign}>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}