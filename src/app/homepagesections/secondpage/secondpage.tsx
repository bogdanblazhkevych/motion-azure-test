import styles from './styles.module.css'
import Logo from '@/app/components/logo/page';
import CardThree from '@/app/components/cardthree/cardthree';
import GlobalSVGIcon from '@/app/components/svgicons/global/global';
import BrainSVGIcon from '@/app/components/svgicons/brain/brain';
import LockSVGIcon from '@/app/components/svgicons/lock/lock';
import Link from 'next/link';

export default function SecondPage() {
        return (
                <div className={styles.pagewrapper} id="opportunities">
                        <div className={styles.pagecontainer}>
                                <div className={styles.headingcontainer}>
                                        <div className={styles.textcontent}>
                                                <h3>
                                                        Opportunities
                                                </h3>
                                                <h1>
                                                        Get Started With Motion
                                                </h1>
                                                <p>
                                                        Embark on a journey of innovation by choosing a path below and be a part of something extraordinary.
                                                </p>
                                        </div>
                                        <div className={styles.spinlogo}>
                                                <Logo />
                                        </div>

                                </div>

                                <div className={styles.cardcontainer}>
                                        <Link href="/partner">
                                                <CardThree title="Global Partner"
                                                        paragraph="Become a Global Partner at Motion to build a global platform, accelerate innovation, and democratize business tools, making scaling equitable for all."
                                                        clickable={true}
                                                        svg={<GlobalSVGIcon />} />
                                                </Link>
                                        <Link href="/waitlist">
                                                <CardThree title="Developer Early Access"
                                                        paragraph="Calling product builders and developers worldwide! Join our community for early access to growth tools, connect globally, and achieve your ambitions."
                                                        clickable={true}
                                                        svg={<LockSVGIcon />} />
                                        </Link>
                                        <Link href="/talent">                                        
                                                <CardThree title="Talent Acquisition"
                                                        paragraph="Join Motion's mission! We're seeking talented, entrepreneurial team members passionate about using technology to transform business building."
                                                        clickable={true}
                                                        svg={<BrainSVGIcon />} />
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}