import LandingTemplate from "../components/landingtemplate/landingtemplate/landingtemplate/landingtemplate";
import JobsBoard from "./jobsboard/jobsboard";

export default function Partner() {
    return (
        <main>
            <LandingTemplate title="Careers with Motion"
                             paragraph="Join our high performance team of visionary technology experts and industry specialists with passion for innovation."/>
            <JobsBoard />
        </main>
    )
}