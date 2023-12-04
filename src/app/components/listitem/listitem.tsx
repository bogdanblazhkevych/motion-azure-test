import styles from './styles.module.css'
import { IoCheckbox } from "react-icons/io5";

interface ListItemPropsInterface {
    text: string
}

export default function ListItem(props: ListItemPropsInterface) {
    const { text } = props

    return (
        <li>
            <div className={styles.listitem}>
                <div className={styles.listcheck}>
                    <IoCheckbox />
                </div>
                <p>
                    {text}
                </p>
            </div>
        </li>
    )
}