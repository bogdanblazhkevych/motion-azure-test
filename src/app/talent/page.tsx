
import LandingTemplateTwo from "../components/landingtemplatetwo/landingtemplatetwo";
import JobsBoard from "./jobsboard/jobsboard";

export default function Partner() {
    return (
        <main>
            <LandingTemplateTwo title={'Careers with Motion Platform'}
                                paragraph={'Join our team of visionary technology experts and industry specialists with passion for innovation.'}
                                icon="talent"/>
            <JobsBoard />
        </main>
    )
}