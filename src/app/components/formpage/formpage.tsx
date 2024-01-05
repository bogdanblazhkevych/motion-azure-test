'use client'

import styles from './styles.module.css'
import Form from '@/app/components/form/form';
import FormCard from '@/app/components/formcard/formcard';
import { useState } from 'react';

interface FormPagePropsInterface {
    title: string,
    paragraph: string
}

export default function FormPage(props: FormPagePropsInterface) {
    const { title, paragraph } = props;
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    return (
        <div id="form" className={styles.formpagewrapper}>
            <div className={styles.formpagecontainer}>
                <Form isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
                <FormCard title={isSubmitted ? "Thank you for signing up for the Motion Global Partner Program." : title} paragraph={isSubmitted ? "We appreciate your interest in learning more about the Motion Partner Program. A member of our Partner Program team received your form submission and will contact you directly to verify your information and begin the membership process." : paragraph}/>
            </div>
        </div>
    )
}