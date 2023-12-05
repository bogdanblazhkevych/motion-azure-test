 // function assertForm(input: unknown): asserts input is FormDataInterface {
    //     if (typeof input !== 'object' || !input) {
    //         throw new Error(`input must be an object`)
    //     }
    //     const fields = ['firstName', 'lastName', 'companyName', 'title', 'role', 'email', 'phoneNumber', 'industry', 'website', 'city', 'country', 'companyType', 'consent'];

    //     if (!('firstName' in input)) {
    //         throw new Error("firstName is missing from the input", {cause: 'firstName'})
    //     }
    //     if (!('lastName' in input)) {
    //         throw new Error("lastName is missing from the input")
    //     }
    //     if (!('companyName' in input)) {
    //         throw new Error("companyName is missing from the input")
    //     }
    //     if (!('title' in input)) {
    //         throw new Error("title is missing from the input")
    //     }
    //     if (!('role' in input)) {
    //         throw new Error("role is missing from the input")
    //     }
    //     if (!('email' in input)) {
    //         throw new Error("email is missing from the input")
    //     }
    //     if (!('phoneNumber' in input)) {
    //         throw new Error("phoneNumber is missing from the input")
    //     }
    //     if (!('industry' in input)) {
    //         throw new Error("industry is missing from the input")
    //     }
    //     if (!('website' in input)) {
    //         throw new Error("website is missing from the input")
    //     }
    //     if (!('city' in input)) {
    //         throw new Error("city is missing from the input")
    //     }
    //     if (!('country' in input)) {
    //         throw new Error("country is missing from the input")
    //     }
    //     if (!('companyType' in input)) {
    //         throw new Error("companyType is missing from the input")
    //     }
    //     if (!('consent' in input)) {
    //         throw new Error("consent is missing from the input")
    //     }

    //     if (typeof input.firstName !== 'string') {
    //         throw new Error('firstName must be a string')
    //     }
    //     if (typeof input.firstName !== 'string') {
    //         throw new Error('firstName must be a string');
    //     }
    //     if (typeof input.lastName !== 'string') {
    //         throw new Error('lastName must be a string');
    //     }
    //     if (typeof input.companyName !== 'string') {
    //         throw new Error('companyName must be a string');
    //     }
    //     if (typeof input.title !== 'string') {
    //         throw new Error('title must be a string');
    //     }
    //     if (typeof input.role !== 'string') {
    //         throw new Error('role must be a string');
    //     }
    //     if (typeof input.email !== 'string') {
    //         throw new Error('email must be a string');
    //     }
    //     if (typeof input.phoneNumber !== 'string') {
    //         throw new Error('phoneNumber must be a string');
    //     }
    //     if (typeof input.industry !== 'string') {
    //         throw new Error('industry must be a string');
    //     }
    //     if (typeof input.website !== 'string') {
    //         throw new Error('website must be a string');
    //     }
    //     if (typeof input.city !== 'string') {
    //         throw new Error('city must be a string');
    //     }
    //     if (typeof input.country !== 'string') {
    //         throw new Error('country must be a string');
    //     }
    //     if (input.companyType !== 'Partner developing software solutions' && input.companyType !== 'Partner providing services') {
    //         throw new Error('companyType is invalid');
    //     }
    //     if (typeof input.consent !== 'boolean') {
    //         throw new Error('consent must be a boolean');
    //     }

    //     const phoneRegex = /^\+(?:[0-9]?){6,14}[0-9]$/;
    //     if (!phoneRegex.test(input.phoneNumber)) {
    //         throw new Error('Invalid phone number format');
    //     }

    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(input.email)) {
    //         throw new Error('Invalid email format');
    //     }


    //     input
    // }