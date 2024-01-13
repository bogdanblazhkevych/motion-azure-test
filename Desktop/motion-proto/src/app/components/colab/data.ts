type ColabModualDataInterface = ColabNodeInterface[];

export interface ColabNodeInterface {
    entity: EntityInterface,
    matchConfidence: number,
}

interface EntityInterface {
    name: string,
    sector: string,
    startDate: Date,
    description: string,
    ongoingProjects: number,
    marketCap: number,
    annualRevenue: number,
    connectionsMade: number
}

export const mockData: ColabModualDataInterface = [
    {
      entity: {
        name: "TrackLab",  
        sector: "Technology",
        startDate: new Date("2020-01-01"),
        description: "A AI and machine learning startup focused on analytics",
        ongoingProjects: 3,
        marketCap: 5000000,
        annualRevenue: 2000000, 
        connectionsMade: 53
      },
      matchConfidence: 0.95
    },
    {
      entity: {
       name: "MedCore",
       sector: "Healthcare",
       startDate: new Date("2018-05-15"),
       description: "A digital healthcare provider improving patient experiences",  
       ongoingProjects: 5,
       marketCap: 10000000,
       annualRevenue: 4500000,
       connectionsMade: 261
      },
      matchConfidence: 0.8
    },
    {
      entity: {
        name: "Fintel",
        sector: "Finance",
        startDate: new Date("2022-03-01"),
        description: "A fintech startup disrupting traditional financial services",
        ongoingProjects: 2,
        marketCap: 3000000,
        annualRevenue: 500000,
        connectionsMade: 127
      }, 
      matchConfidence: 0.9
    }
  ];