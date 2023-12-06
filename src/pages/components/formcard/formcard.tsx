import styles from './styles.module.css'
import Logo from '../logo/page';

interface FormCardPropsInterface {
    title: string,
    paragraph: string
}

export default function FormCard(props: FormCardPropsInterface) {
    const { title, paragraph } = props;

    return (
        <div className={styles.textcontainer}>
            <h1>{title}</h1>

            <p>{paragraph}</p>

            <div className={styles.logowrapper}>
                <div className={styles.logocontainer}>
                    <Logo />
                </div>
            </div>
        </div>
    )

}