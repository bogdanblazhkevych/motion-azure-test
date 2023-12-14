import LandingTemplate from "../components/landingtemplate/landingtemplate";
import FormPage from "../components/formpage/formpage";
import PartnerInfo from "./partnerinfo/partnerinfo";
import LandingTemplateTwo from "../components/landingtemplatetwo/landingtemplatetwo";

export default function Partner() {
    return (
        <main>
            {/* <LandingTemplate title="Motion global partner program"
                             paragraph="We are designing a partner program to help entrepreneurs and stakeholders connect and collaborate to build new products fast and efficiently, and successfully grow new companies."/> */}
            <LandingTemplateTwo title="Motion global partner program"
                                paragraph="Join a Thriving Tech Community to Enhance Your Brand and Accelerate Innovation Globally"
                                icon="partner"/>
            <PartnerInfo />
            <FormPage title="Thank you for your interest in the Motion Global Partner Program."
                      paragraph="Fill out the form below to learn more about the Motion Partner Program, a global community focused on customer success and growth. A member of our Partner Program team will contact you directly to verify your information and begin the membership process."/>
        </main>
    )
}