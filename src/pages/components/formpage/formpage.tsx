import styles from './styles.module.css'
import Form from '@/pages/components/form/form';
import FormCard from '@/pages/components/formcard/formcard';

interface FormPagePropsInterface {
    title: string,
    paragraph: string
}

export default function FormPage(props: FormPagePropsInterface) {
    const { title, paragraph } = props;

    return (
        <div className={styles.formpagewrapper}>
            <div className={styles.formpagecontainer}>
                <Form/>
                {/* <FormCard title={title} paragraph={paragraph}/> */}
            </div>
        </div>
    )
}