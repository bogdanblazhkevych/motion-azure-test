import FirstPage from "../homepagesections/firstpage/firstpage";
import FormPage from "./formpage/formpage";
import PartnerInfo from "./partnerinfo/partnerinfo";
import PartnerLanding from "./partnerlanding/partnerlanding";

export default function Partner() {
    return (
        <main>
            <PartnerLanding />
            <PartnerInfo />
            <FormPage />
        </main>
    )
}