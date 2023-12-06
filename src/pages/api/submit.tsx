import type { NextApiRequest, NextApiResponse } from 'next'
import { FormFieldsInterface, FormDataInterface } from '../components/form/form';

async function validateBody(body: NextApiRequest) {
    // const body = await input.json()

    function assertInputFields<field extends string>(fields: readonly field[], input: unknown): asserts input is Record<field, unknown> {
        if (typeof input !== 'object' || !input) {
            throw new Error(`input must be an object`)
        }

        for (const field of fields) {
            if (!(field in input)) {
                throw new Error(`${field} is missing from the input`)
            }
        }
    }

    function assertString(input: unknown, field: FormFieldsInterface): asserts input is string {
        if (typeof input !== 'string') throw new Error(`${field} is not a string`);
        if (input.trim() === '') throw Error(`${field} is empty`);
        if (input.length < 3) throw Error(`${field} is too short`);
        if (input.length > 256) throw Error(`${field} is too long`);
    }

    function assertPhoneNumber(input: unknown): asserts input is FormDataInterface['phoneNumber'] {
        assertString(input, 'phoneNumber');

        const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm
        if (!phoneRegex.test(input)) {
            throw new Error('phoneNumber is invalid');
        }
    }

    function assertEmail(input: unknown): asserts input is FormDataInterface['email'] {
        assertString(input, 'email');

        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm
        if (!emailRegex.test(input)) {
            throw new Error('email is invalid');
        }
    }

    function assertInput(input: unknown): asserts input is FormDataInterface {
        const fields = ['firstName', 'lastName', 'companyName', 'title', 'role', 'email', 'phoneNumber', 'industry', 'website', 'city', 'country', 'companyType', 'consent'] as const;

        assertInputFields(fields, input);
        assertString(input.firstName, 'firstName');
        assertString(input.lastName, 'lastName');
        assertString(input.companyName, 'companyName');
        assertString(input.title, 'title');
        assertString(input.role, 'role');
        assertEmail(input.email);
        assertPhoneNumber(input.phoneNumber);
        assertString(input.industry, 'industry');
        assertString(input.website, 'website');
        assertString(input.city, 'city');
        assertString(input.country, 'country');
    }

    assertInput(body);
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json({ message: 'lol no GET' })
        case 'POST':
            validateBody(req.body)
            return res.status(200).json({ message: 'lol works' })
        default:
            return res.status(400).json({ message: 'Invalid method.' })
    }
}
