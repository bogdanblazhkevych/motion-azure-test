'use client'
import styles from './styles.module.css'
import { useState } from 'react';

export interface FormDataInterface {
    firstName: string,
    lastName: string,
    companyName: string,
    title: string,
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

export default function Form() {
    const [formData, setFormData] = useState<FormDataInterface>({
        firstName: '',
        lastName: '',
        companyName: '',
        title: '',
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // submit formData to API 

        const response = await fetch('/api/submitform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log(response)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <div className={`${styles.nameinputgroup} ${styles.singleinputgroup}`}>
                <input
                    name="firstName"
                    // placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    required={true}
                />
                <label htmlFor="firstName">First Name</label>
            </div>

            <div className={`${styles.singleinputgroup} ${styles.lastnameinputgroup}`}>
                <input
                    name="lastName"
                    // placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lastName">Last Name</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.emailinputgroup}`}>

                <input
                    name="email"
                    // placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.phoneinputgroup}`}>

                <input
                    name="phoneNumber"
                    // placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phoneNumber">Phone Number</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.cityinputgroup}`}>

                <input
                    name="city"
                    // placeholder='City'
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="city">City</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.countryinputgroup}`}>

                <input
                    name="country"
                    // placeholder='Country'
                    value={formData.country}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="country">Country</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.companynameinputgroup}`}>

                <input
                    name="companyName"
                    // placeholder='Company Name'
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="companyName">Company Name</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.industryinputgroup}`}>

                <input
                    name="industry"
                    // placeholder='Industry'
                    value={formData.industry}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="industry">Industry</label>

            </div>

            <div className={`${styles.singleinputgroup} ${styles.roleinputgroup}`}>

                <input
                    name="role"
                    // placeholder='Role / Title'
                    value={formData.role}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="role">Role / Title</label>

            </div>


            <div className={`${styles.singleinputgroup} ${styles.websiteinputgroup}`}>
                <input
                    name="website"
                    // placeholder='Website'
                    value={formData.website}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="website">Website</label>

            </div>

            <div className={styles.formbuttons}>

                <div className={styles.singlebuttongroup}>

                    <input type="radio" id="ctype1" name="companyType" value="Partner providing services" onChange={handleChange} required />
                    <label htmlFor='ctype1'>Partner providing services</label>

                </div>

                <div className={styles.singlebuttongroup}>

                    <input type="radio" id="ctype2" name="companyType" value="Partner developing software solutions" onChange={handleChange} required />
                    <label htmlFor='ctype2'>Partner developing software solutions</label>

                </div>

                <div className={styles.singlebuttongroup}>
                    <input
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={() => setFormData({ ...formData, consent: !formData.consent })}
                        required
                    />

                    <label htmlFor='consent'>
                        I consent to receive future messages from Motion regarding Motion Platform.
                    </label>

                </div>


                <button type="submit" className={styles.submitbutton}>Submit</button>
            </div>
        </form>
    )
}