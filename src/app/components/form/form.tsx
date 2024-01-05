'use client'
import styles from './styles.module.css'
import { Dispatch, SetStateAction, useRef, useState } from 'react';

export interface FormDataInterface {
    firstName: string,
    lastName: string,
    companyName: string,
    role: string,
    email: string,
    phoneNumber: string,
    industry: string,
    website: string,
    city: string,
    country: string,
    companyType: 'Partner developing software solutions' | 'Partner providing services',
    consent: boolean
}

export type FormFieldsInterface = 'firstName' | 'lastName' | 'companyName' | 'role' | 'email' | 'phoneNumber' | 'industry' | 'website' | 'city' | 'country' | 'companyType' | 'consent'

interface FormPropsInterface {
    isSubmitted: boolean;
    setIsSubmitted: Dispatch<SetStateAction<boolean>>
}

export default function Form(props: FormPropsInterface) {
    const { isSubmitted, setIsSubmitted } = props
    const [formData, setFormData] = useState<FormDataInterface>({
        firstName: '',
        lastName: '',
        companyName: '',
        role: '',
        email: '',
        phoneNumber: '',
        industry: '',
        website: '',
        city: '',
        country: '',
        companyType: 'Partner developing software solutions' || 'Partner providing services',
        consent: false
    });

    // const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [errormessage, setErrorMessage] = useState<string | null>(null)
    // const errorMessageRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        e.target.parentElement?.classList.remove(`${styles.inputerror}`)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        document.getElementById("errorMessageDiv")?.classList.remove(`${styles.showerrormessage}`)
        const response = await fetch('https://motion-form-function.azurewebsites.net/api/httptrigger1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        let parsedResponse:{
            submitted: boolean,
            error: string | null
        } = await response.json()

        if (parsedResponse.error) {
            const fields = ['firstName', 'lastName', 'companyName', 'role', 'email', 'phoneNumber', 'industry', 'website', 'city', 'country', 'companyType', 'consent'];
            const errorMessageArray = parsedResponse.error.split(' ')
            const errorField = errorMessageArray[0]
            const errorFieldMap:{
                [key: string]: string
            } = {
                "firstName": "first name",
                "lastName": "last name",
                "companyName": "company name",
                "phoneNumber": "phone number",
                "companyType": "company type"
            }
            const normalizedErrorField = errorFieldMap[errorField] ? errorFieldMap[errorField] : errorField
            errorMessageArray[0] = normalizedErrorField
            if (fields.includes(errorField)) {
                setErrorMessage(errorMessageArray.join(' '));
                document.getElementById(errorField)?.classList.add(`${styles.inputerror}`);
            }
            document.getElementById("errorMessageDiv")?.classList.add(`${styles.showerrormessage}`)
        } else {
            setIsSubmitted(true)
        }
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div id="errorMessageDiv" className={styles.errormessage}>
                {errormessage}
            </div>

            <div id="firstName" className={`${styles.nameinputgroup} ${styles.singleinputgroup}`}>
                <input
                    name="firstName"
                    // placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />
                <label htmlFor="firstName">First Name</label>
            </div>

            <div id="lastName" className={`${styles.singleinputgroup} ${styles.lastnameinputgroup}`}>
                <input
                    name="lastName"
                    // placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="lastName">Last Name</label>

            </div>

            <div id="email" className={`${styles.singleinputgroup} ${styles.emailinputgroup}`}>

                <input
                    name="email"
                    // placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="email">Email</label>

            </div>

            <div id="phoneNumber" className={`${styles.singleinputgroup} ${styles.phoneinputgroup}`}>

                <input
                    name="phoneNumber"
                    // placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="phoneNumber">Phone Number</label>

            </div>

            <div id="city" className={`${styles.singleinputgroup} ${styles.cityinputgroup}`}>

                <input
                    name="city"
                    // placeholder='City'
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="city">City</label>

            </div>

            <div id="country" className={`${styles.singleinputgroup} ${styles.countryinputgroup}`}>

                <input
                    name="country"
                    // placeholder='Country'
                    value={formData.country}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="country">Country</label>

            </div>

            <div id="companyName" className={`${styles.singleinputgroup} ${styles.companynameinputgroup}`}>

                <input
                    name="companyName"
                    // placeholder='Company Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="companyName">Company Name</label>

            </div>

            <div id="industry" className={`${styles.singleinputgroup} ${styles.industryinputgroup}`}>

                <input
                    name="industry"
                    // placeholder='Industry'
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="industry">Industry</label>

            </div>

            <div id="role" className={`${styles.singleinputgroup} ${styles.roleinputgroup}`}>

                <input
                    name="role"
                    // placeholder='Role / Title'
                    value={formData.role}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="role">Role / Title</label>

            </div>

            <div id="website" className={`${styles.singleinputgroup} ${styles.websiteinputgroup}`}>
                <input
                    name="website"
                    // placeholder='Website'
                    value={formData.website}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted ? true : false}
                />

                <label htmlFor="website">Website</label>

            </div>

            <div className={styles.formbuttons}>

                <div className={styles.buttonlabeltopwrapper}>
                    <div className={styles.buttonlabeltopleftbar}>
                    </div>
                    <div className={`${styles.buttonlabeltoptext} ${isSubmitted && styles.buttonlabeltoptextdisabled}`}>
                        I am a
                    </div>
                    <div className={styles.buttonlabeltoprightbar}>
                    </div>
                </div>

                <div className={styles.singlebuttongroup}>

                    <input 
                        type="radio"
                        id="ctype1" 
                        name="companyType" 
                        value="Partner providing services" 
                        onChange={handleChange} 
                        required
                        disabled={isSubmitted ? true : false} 
                        />
                    <label htmlFor='ctype1'>Partner providing services</label>

                </div>

                <div className={styles.singlebuttongroup}>

                    <input 
                        type="radio" 
                        id="ctype2" 
                        name="companyType" 
                        value="Partner developing software solutions" 
                        onChange={handleChange} 
                        required 
                        disabled={isSubmitted ? true : false} 
                        />
                    <label htmlFor='ctype2'>Partner developing software solutions</label>

                </div>

                <div className={styles.buttonlabelbottomwrapper}>
                    <div className={styles.buttonlabelbottombar}></div>
                </div>

                <div className={styles.singlebuttongroup}>
                    <input
                        name="consent"
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={() => setFormData({ ...formData, consent: !formData.consent })}
                        required
                        disabled={isSubmitted ? true : false}
                    />

                    <label htmlFor='consent'>
                        I consent to receive future messages regarding Motion Platform.
                    </label>

                </div>


                <button 
                    type="submit" 
                    className={styles.submitbutton}
                    disabled={isSubmitted ? true : false} 
                    >{
                    isSubmitted ? "Thank You" : "Submit"
                }</button>
            </div>
        </form>
    )
}