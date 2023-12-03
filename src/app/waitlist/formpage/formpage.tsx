import styles from './styles.module.css'
import Form from '@/app/components/form/form'
import FormCard from '@/app/components/formcard/formcard'

export default function WaitlistFormPage() {
    return(
        <div className={styles.formpagewrapper}>
            <div className={styles.formpagecontainer}>

                <Form />

                <FormCard title='Thank you for your interest in early access.'
                          paragraph='Fill out the form below to join the waitlist for exclusive early access to Motion products and features before public release. A member of our Early Access Program team will contact you directly to verify your information and provide preview access.'/>

            </div>
        </div>
    )
}