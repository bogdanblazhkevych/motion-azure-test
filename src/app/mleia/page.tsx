import JobListing from "../components/joblisting/joblisting";

export default function MLEIA() {
    const listing = {
        "jobTitle": "Machine Learning Engineers (Intelligent Algorithms Experts)",
        "aboutUs": "Motion is an American French tech B2B, B2B2C company, solutions include SaaS, Artificial Intelligence, Analytics, and Online Marketplace. ​​\n\nWe are looking for Machine Learning Engineers (Intelligent Algorithms Experts). You will be engaged to solve complex business problems with high-quality machine learning solutions. You will have a deep understanding of the various approaches, algorithms, and state of the art practices in machine learning and will maintain focus on delivering commercially impactful solutions to the innovation and start-up ecosystems. You work will directly affect technology and they way it will be used by some of the top companies, public and private institutions in the world. This is your chance to be part of the next great venture-backed start-up.",
        "aboutTheRole": "",
        "jobResponsibilities": [
          "Working closely and seamlessly with core development experts within the team (local and globally)",
          "Understand end to end data requirements covering structured and unstructured data and design solutions which can be used for building superior data-drive experiences", 
          "Choosing, extending and innovating ML solutions for various industries problems",
          "Building re-usable ML models, frameworks, assets, Industry solutions, reference architecture, design, development and QA best practices",
          "Building model diagnostics, choice justification paradigms, testing and training approaches",
          "Create personalized recommendation models that affect all of our core product flows",
          "Develop/extend machine-learning algorithms customized to our domain", 
          "Propose and build user segmentation models that give the company insight into our customers",
          "Work closely with machine learning engineers to productionalize models",
          "Work remotely with engineering, R&D, and technology teams",
          "Travel on short notice to customer meetings and engagements"
        ],
        "qualifications": {
          "required": [
            "Demonstrated expertise in machine learning", 
            "Passionate about all things AI, machine learning and data science",
            "​Familiarity with statistical modeling techniques",
            "Successfully trained and deployed a deep learning machine model, with measurably improved performance over baseline, either in industry or as a personal project",
            "Experience in Data science and Machine learning using Python, R, Java, C#, Spark, AutoML, TensorFlow, Amazon AML, Microsoft machine learning studio, PyTorch and any graph DB",
            "You are up-to-date on the latest deep neural net research and architectures, both in understanding the theory and motivations behind the techniques, as well as how to implement them in the ML framework of your choice",  
            "Experience in using cloud based APIs and specialty processors like GPUs and TPUs",
            "Should have strong analytics and strategic thinking skills and have demonstrated ability to communicate complex ideas through pointed analysis and data visualization",
            "Should have worked on big data initiatives & scalable data architecture like Hadoop, Hive, Cloudera, Spark", 
            "Proven development to production track record of implementing various ML solutions",
            "Self-starter who wants to get involved, make a difference, and deliver",
            "Ability and willingness to multi-task and learn new technologies quickly", 
            "Demonstrated ability to innovate on out of the box models",
            "Possess strong problem solving and critical thinking skills",
            "2-3 years researching and practicing machine learning/statistical modeling based solutions"  
          ],
          "prefered": []
        },
        "location": "Paris, France \nHybrid: on-site and remote from other places in France, EU, and UK.",
        "compensation": "Authorized Contract - Based on experience",
        "apply": "To apply, please send your CV / Resume along with a cover letter to talent (Code MLEIA)" 
      }
  return (
    <main>
      <JobListing jobListing={listing} />
    </main>
  )
}