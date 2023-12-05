import { NextRequest } from "next/server";
import { FormDataInterface } from "@/app/components/form/form";
import { IoBodyOutline } from "react-icons/io5";

export const POST = async (req: NextRequest) => {
    const body = await req.json()

    console.log(body);

    type FieldsInterface = 'firstName' | 'lastName' | 'companyName' | 'title' | 'role' | 'email' | 'phoneNumber' | 'industry' | 'website' | 'city' | 'country' | 'companyType' | 'consent'

    function assertInputFields<field extends string>(fields: readonly field[], input: unknown): asserts input is Record<field, unknown> {
        if (typeof input !== 'object' || !input) {
            throw new Error(`input must be an object`)
        }

        for (const field of fields){
            if (!(field in input)){
                throw new Error(`${field} is missing from the input`)
            }
        }
    }

    function assertString(input: unknown, field: FieldsInterface): asserts input is string{
        if (typeof input !==  'string') throw new Error(`${field} is not a string`);
        if (input.trim() === '') throw Error(`${field} is empty`);
        if (input.length < 3) throw Error(`${field} is too short`);
        if (input.length > 256) throw Error(`${field} is too long`);
    }

    function assertInput(input: unknown): asserts input is FormDataInterface {
        const fields = ['firstName', 'lastName', 'companyName', 'title', 'role', 'email', 'phoneNumber', 'industry', 'website', 'city', 'country', 'companyType', 'consent'] as const;

        assertInputFields(fields, input);
        assertString(input.firstName, 'firstName');
        assertString(input.lastName, 'lastName');
        assertString(input.companyName, 'companyName');
        assertString(input.title, 'title');
        assertString(input.industry, 'industry');
        assertString(input.website, 'website');
        assertString(input.city, 'city');
    }
    

    try {
        return Response.json({
            status: 200,
            contexts: "somethig"
        })
    } catch (error) {
        console.log("failed to get chat history", error)
        return Response.json({
            status: 400,
            contexts: {}
        })
    }
}
