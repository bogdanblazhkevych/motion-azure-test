import styles from './styles.module.css'
import Form from '@/app/components/form/form';
import FormCard from '@/app/components/formcard/formcard';

interface FormPagePropsInterface {
    title: string,
    paragraph: string
}

export default function FormPage(props: FormPagePropsInterface) {
    const { title, paragraph } = props;

    return (
        <div id="form" className={styles.formpagewrapper}>
            <div className={styles.formpagecontainer}>
                <Form />
                <FormCard title={title} paragraph={paragraph}/>
            </div>
        </div>
    )
}