import FormPage from "./../partner/formpage/formpage";
import WaitlistInfo from "./waitlistinfo/waitlistinfo";
import WaitlistLanding from "./waitlistlanding/waitlistlanding";

export default function Waitlist() {
    return (
        <main>
            <WaitlistLanding />
            {/* <FormPage /> */}
            <WaitlistInfo />
            <FormPage />
        </main>
    )
}