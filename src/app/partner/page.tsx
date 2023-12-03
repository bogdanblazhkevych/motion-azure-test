import LandingTemplate from "../components/landingtemplate/landingtemplate/landingtemplate/landingtemplate";
import FirstPage from "../homepagesections/firstpage/firstpage";
import FormPage from "./formpage/formpage";
import PartnerInfo from "./partnerinfo/partnerinfo";
import PartnerLanding from "./partnerlanding/partnerlanding";

export default function Partner() {
    return (
        <main>
            {/* <PartnerLanding /> */}
            <LandingTemplate title="Motion global partner program"
                             paragraph="We are designing a partner program to help entrepreneurs and stakeholders connect and collaborate to build new products fast and efficiently, and successfully grow new companies."/>
            <PartnerInfo />
            <FormPage />
        </main>
    )
}