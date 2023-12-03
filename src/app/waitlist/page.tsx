import LandingTemplate from "../components/landingtemplate/landingtemplate/landingtemplate/landingtemplate";
import FormPage from "./../partner/formpage/formpage";
import WaitlistInfo from "./waitlistinfo/waitlistinfo";
import WaitlistLanding from "./waitlistlanding/waitlistlanding";

export default function Waitlist() {
    return (
        <main>
            {/* <WaitlistLanding /> */}
            {/* <FormPage /> */}
            <LandingTemplate title="Motion Early Access Program"
                             paragraph="Building the future of automation and innovation ecosystem connectedness."/>
            <WaitlistInfo />
            <FormPage />
        </main>
    )
}