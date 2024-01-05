import JobListing from "../components/joblisting/joblisting";

export default function MLPE() {
    const listing = {
        "jobTitle": "AI - Machine Learning Platform Engineer",
        "aboutUs": "Motion is an American French tech B2B, B2B2C company, solutions include SaaS, Artificial Intelligence, Analytics, and Online Marketplace. ​​\n\nWe are looking for an AI- Machine Learning Platform Engineer Our ideal candidate has experience with creating a working machine learning-powered platform from the ground up. The candidate will define the end-to-end vision of our machine learning strategy as it relates to testing and product development, you will contribute innovative ideas and ingenious implementations to the team and is capable of planning out scalable, maintainable data pipelines, services, and products. You will be interfacing with data scientists, engineering consumers, industry specialists, and business stakeholders through various areas of Motion! ecosystem.",
        "aboutTheRole": "As an artificial intelligence/machine learning engineer, you will join and lead our ML/AI platform team focusing on designing, implementing, and maintaining scalable features and services to support end-to-end ML/AI pipelines on Motion! platform. You will work closely with the users, systems designers, and developers. You will engage with engineering and operations teams to lead and develop machine-learning solutions for a variety of tasks and projects using a multitude of tools and techniques. You will also be trusted advisor for best practice machine learning development. You will collaborate with the ML/AI algorithms team and other engineering teams to bring industry-leading machine learning solutions to Motion ! customers. Your responsibilities will include: Architecting and developing machine learning solutions. Develop proof-of-concept apps that use machine learning on petabytes of operational data that provide analytical insight to engineering teams. Work closely with platform development teams to integrate ML tools/solutions to a high-performance production solution model.",
        "jobResponsibilities": [
          "Architecting and developing machine learning solutions.", 
          "Develop proof-of-concept apps that use machine learning on petabytes of operational data that provide analytical insight to engineering teams.",
          "Work closely with platform development teams to integrate ML tools/solutions to a high-performance production solution model."
        ],
        "qualifications": {
          "required": [
            "Minimum four years of solid hands-on experience applying machine learning techniques to build models integrated into applications. Additional experience with data visualization, data analytics, and data mining.",
            "Entrepreneurial minded, strong analytical problem-solving skills, and an aptitude for learning systems quickly.",
            "Strong software development skills with proficiency in Python (applied background in Spark, Hive, Cassandra, and knowledge of R is a plus).",
            "Development experience with cloud platforms such as Microsoft Azure, AWS. Linux stack and Docker.", 
            "2+ years in data structures, algorithms, highly concurrent programming, analysis of algorithm complexity",
            "Experience in cloud development principles and patterns, particularly loosely coupled architectures and micro-services",
            "Experienced use of machine learning and statistical-analysis libraries, such as GraphLab Create, scikit-learn, scipy, NetworkX, Spacy and NLTK.",
            "Experience with deep learning frameworks, such as mxnet, Torch, Caffe, and TensorFlow.",
            "Strong working knowledge of ML algorithms including decision trees, probability networks, association rules, clustering, regression, and neural networks.",
            "High level of autonomy and influence to unblock delivery of results (evaluate and solve difficult problems involving various teams ranging from data instrumentation to analytics tool development).", 
            "A strong desire to establish standards of “Best Practice”",
            "Ability to analyze existing database schema DDL/instance layout and determine impacts migration to new target schema/instance environment.", 
            "Ability to explain and present analyses machine learning concepts to a broad business and technical audience."
          ],
          "prefered": [] 
        },
        "location": "Paris, France \nHybrid: on-site and remote from other places in France, EU, and UK.",
        "compensation": "This is a paid position commensurate with experience and performance.",
        "apply": "👀 Psst... we are giving you a trick: stand out when you apply by attaching to your resume a pitch, prez, link to a intro video, or other original content of your choice suggesting your ideas for the position or your past achievements. The goal is to discover you more!\n\nTo apply, please send your CV / Resume along with a cover letter to talent (Code MLPE)."
      }
  return (
    <main>
      <JobListing jobListing={listing} />
    </main>
  )
}