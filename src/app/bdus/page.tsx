import JobListing from "../components/joblisting/joblisting";

export default function BDUS () {
    const listing = {
        "jobTitle": "Senior Specialist, Business Project Manager",
        "aboutUs": "Motion is an American French tech B2B, B2B2C company, solutions include SaaS, Artificial Intelligence, Analytics, and Online Marketplace. ​​\n\nWe understand the value of innovation ecosystem connectedness and are building a company with the technical infrastructure and solutions to unlock the power of ecosystem connectedness to foster cross-border collaboration, accelerate innovation communities and provide efficient, simple, borderless access to technology and products aimed to make it easier for anyone to build and scale a business anytime from anywhere. In a unified platform where startups thrive, researchers, and investors cluster, opportunities to accelerate corporate innovation and the development of truly disruptive innovative products abound.",
        "aboutTheRole": "This role is evolving and responsibilities and tasks may expand in complexity and challenge. A high degree of flexibility and ability to handle ambiguity and changing priorities are required. It is anticipated that this position will involve extended work hours, potentially to include working evening and weekend hours, as needed by the team. This position will be within the strategic growth organization and will report to the Chief Product Officer and support the Product Development and Business Development efforts.",
        "jobResponsibilities": [
          "Work with business development, product development and project teams to deliver initiatives aligned with strategic priorities, managing logistics and coordinating efforts with various internal clients.",
          "Assist with project plan development and execution of key deliverables on several high-impact, high-visibility initiatives.",
          "Ability to anticipate potential challenges and communicate them effectively to leadership, teams and clients in a way that keep things on track to meeting objectives.",
          "Effectively organize information, prioritize and manage multiple projects, including but not limited to maintaining project schedules of work assigned to various divisions; monitoring and tracking the progress of assigned projects; creating and maintaining tracking and reporting tools as necessary; following up to obtain status report; preparing summaries of project status for review .",
          "Support projects and meetings by preparing reports, presentations, communications, collateral materials, and research using statistical and narrative data for presentation to senior leaders.",
          "Ability to identify, escalate or reveal significant roadblocks to leadership so that troubleshooting or problem-solving can take place to ensure goals are met.", 
          "Generate high-quality work products in multiple formats (e.g., presentation slides, excel project plan, word documents).",
          "Participate in special projects and events, recommending, implementing, and monitoring changes in work processes to ensure performance outcomes are achieved for the project(s).",
          "Manage relationships and interact professionally with senior leadership.",
          "Help strategic customer/user develop knowledge, understanding, and understanding of Motion’s products and services, using your business development and product management experience to collaborate with the client and help them turn their product ideas into workable requirements and user stories.",
          "Working with a cross-functional team of clients, designers, and developers to fully understand the strategic business and product development that create a product from ideas to delivery.",
          "Mentoring clients and other team members on Motion’s products and services and development best practices.",
          "Ensuring smooth client communication - you are a Motion’s key touchpoint with strategic customers/users.",
          "Addressing or escalating client concerns, monitoring the project health to address concerns before the client raises them.",
          "Collaborate with cross-functional teams to accomplish multiple assignments and deliverables on an ongoing basis under very tight deadlines.", 
          "Research and remain current on internal and external activities in Motion that may impact the company."
        ],
        "qualifications": {
          "required": [
            "Strong analytical and organizational skills, detail-oriented",
            "Ability to work in a high volume, fast-paced environment managing multiple projects simultaneously",
            "Creativity, strategic and analytical thinking, and flexibility are critical to the position given that the scope and variety of work will frequently change depending on the team’s priorities",
            "Ability to interact and communicate with multiple levels within the organization, including executive levels",
            "Ability to work effectively and collaborate remotely",
            "High degree of self-confidence, poise, maturity, discretion, diplomacy, and empathy", 
            "Motivated, resourceful and dependable",
            "Excellent interpersonal, written and verbal communication skills. You will need to be comfortable talking tech with developers, reviewing and offering feedback on designs with designers and clients, gathering product requirements from clients, handling customer feedback and distributing it back to the team.",
            "Ability to manage highly confidential data with the highest level of professionalism and integrity",
            "Strong software product and project management experience, in an environment where you were responsible for multiple concurrent projects. Familiarity with best practices in modern web and mobile design and development.",
            "Research competitor’s business model, products and benchmarks, and develop and present reports to management.",
            "Proficiency in MS Excel and Word; working knowledge of MS Projects a plus",
            "Bachelor's degree in business-related field; advanced degree a plus"
          ],
          "prefered": [
            "Experience in a client facing role, especially previous consulting / agency experience.",
            "Experience as a Scrum Master, Product Owner, or similar role (certification not required). Familiarity with Scrum & Agile development practices.",
            "Familiarity with Business Model Innovation processes.",
            "Experience in a R programing language with some technical skills",
            "Experience in product and project presentations before internal clients, customers/user and live audiences",
            "Exceptional analytical aptitude and attention to detail."
          ]
        },
        "location": "New York (USA)\nHybrid: on-site and remote from the United States, Canada, and France",
        "compensation": "This is a paid position commensurate with experience (a combination of equity, cash, and bonuses).",
        "apply": "Psst... we are giving you a trick: stand out when you apply by attaching to your resume a pitch, prez, link to a intro video, or other original content of your choice suggesting your ideas for the position or your past achievements. The goal is to discover you more! ​​\n\nTo apply, please send your CV / Resume along with a cover letter to talent (Code SBPM)"
      }
    return(
        <main>
            <JobListing jobListing={listing}/>
        </main>
    )
}