import FormPage from "../components/formpage/formpage";
import WaitlistInfo from "./waitlistinfo/waitlistinfo";
import LandingTemplateTwo from "../components/landingtemplatetwo/landingtemplatetwo";

export default function Waitlist() {
    return (
        <main>
            <LandingTemplateTwo title={'Motion Developer Access Program'}
                                paragraph={'Join thousands of business and product builders  already waiting to get early access to Motion.'}
                                icon="waitlist"/>
            <WaitlistInfo />
            <FormPage title="Thank you for your interest in early access."
                      paragraph="Fill out the form below to join the waitlist for exclusive early access to Motion products and features before public release. A member of our Early Access Program team will contact you directly to verify your information and provide preview access."/>
        </main>
    )
}