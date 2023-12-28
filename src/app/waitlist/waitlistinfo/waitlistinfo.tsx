import AnimateChildren from '@/app/components/animatechildren/animatechildren';
import styles from './styles.module.css'
import WaitlistInfoCard from '@/app/components/waitlistinfocard/waitlistinfocard';

export default function WaitlistInfo() {
    return (
        <div id="waitlistinfo" className={styles.waitlistinfowrapper}>
            <div className={styles.waitlistinfocontainer}>

                <AnimateChildren>
                    <h1 className={styles.waitlistinfotitle}>
                        Exclusive Access, Influence, and Innovation
                    </h1>
                </AnimateChildren>

                <div className={styles.descriptioncontiner}>

                    <WaitlistInfoCard title='Sneak peek at pre-release products'
                                      paragraphOne="Get exclusive early access to Motion's newest automation platforms and solutions not yet available to the general public. Be the first to take a test drive."
                                      paragraphTwo="Experience the latest innovations before anyone else and pilot new technologies coming down the pipeline."
                                      heading="Preview"/>

                    <WaitlistInfoCard title='Give valuable feedback'
                                      paragraphOne="Directly influence Motion's product roadmap by providing feedback on early releases. Help shape the future direction of the offerings."
                                      paragraphTwo="Your input directly guides development priorities and the types of new features we build."
                                      heading="Improve"/>

                    <WaitlistInfoCard title='Test out new features'
                                      paragraphOne="Experience and experiment with the latest features Motion is developing. See what future functionality is on the roadmap."
                                      paragraphTwo="Test cutting-edge capabilities early and validate functionality before public launch."
                                      heading="EXPERIMENT"/>

                    <WaitlistInfoCard title='Join our private community of innovators'
                                      paragraphOne="Connect with and learn from other cutting-edge companies that are pushing the boundaries in cloud-AI automation."
                                      paragraphTwo="Collaborate with an exclusive network of leaders and share best practices on optimization."
                                      heading="Connect"/>

                </div>
            </div>
        </div>
    )
}
