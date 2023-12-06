import styles from './styles.module.css'
import { FaExternalLinkAlt } from "react-icons/fa";

interface CardOnePropsInterface {
    heading: string,
    paragraph: string,
    textAlign?: "center" | "right" | "left",
    icon?: JSX.Element,
    banner?: JSX.Element,
    mobileOnly?: boolean,
    padding?: boolean,
    clickable?: boolean,
    ref?: React.RefObject<HTMLDivElement>
}

export default function CardOne(props: CardOnePropsInterface){
    const { heading, paragraph, textAlign, banner, mobileOnly, icon, padding, clickable, ref } = props;

    return(
        <div className={styles.cardwrapper} data-clickable={clickable} ref={ref}>
            {clickable &&
            <div className={styles.linkicon}>
                <FaExternalLinkAlt />
            </div>
            }
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