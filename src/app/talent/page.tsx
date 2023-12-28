
import LandingTemplate from "../components/landingtemplate/landingtemplate";
import LandingTemplateTwo from "../components/landingtemplatetwo/landingtemplatetwo";
import JobsBoard from "./jobsboard/jobsboard";

export default function Partner() {
    return (
        <main>
            {/* <LandingTemplate title="Careers with Motion"
                             paragraph="Join our high performance team of visionary technology experts and industry specialists with passion for innovation."/> */}
            <LandingTemplateTwo title={'Careers with Motion Platform'}
                                paragraph={'Join our team of visionary technology experts and industry specialists with passion for innovation.'}
                                icon="talent"/>
            <JobsBoard />
        </main>
    )
}