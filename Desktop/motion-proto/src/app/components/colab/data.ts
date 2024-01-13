type ColabModualDataInterface = colabNodeInterface[];

export interface colabNodeInterface {
    entity: EntityInterface,
    matchConfidence: number,
}

interface EntityInterface {
    name: string,
    sector: string,
    startDate: Date,
    description: string
}

export const mockData: ColabModualDataInterface = [
    {
        entity: {
            name: "Company A",
            sector: "Technology",
            startDate: new Date("2020-01-01"),
            description: "A tech company founded in 2020"
        },
        matchConfidence: 0.95
    },
    {
        entity: {
            name: "Company B",
            sector: "Healthcare",
            startDate: new Date("2018-05-15"),
            description: "A healthcare company founded in 2018"
        },
        matchConfidence: 0.8
    },
    {
        entity: {
            name: "Company C",
            sector: "Finance",
            startDate: new Date("2022-03-01"),
            description: "A finance company founded in 2022"
        },
        matchConfidence: 0.9
    },
    {
        entity: {
            name: "Company D",
            sector: "Finance",
            startDate: new Date("2022-03-01"),
            description: "A finance company founded in 2022"
        },
        matchConfidence: 0.4
    }
];