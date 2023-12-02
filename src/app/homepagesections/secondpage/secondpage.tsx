import CardOne from '@/app/components/cardone/cardone'
import styles from './styles.module.css'

export default function SecondPage() {
        return (
                <div className={styles.pagewrapper}>
                        <div className={styles.pagecontainer}>
                                <div className={styles.textcontentwrapper}>
                                        <h1>
                                                Unlock Opportunities with Motion!
                                        </h1>
                                        <p>
                                                Embark on a journey of innovation and collaboration with Motion. Whether you're interested in global partnerships, eager for early access to groundbreaking solutions, or exploring exciting career opportunities, our doors are open. Choose your path below and be a part of something extraordinary.
                                        </p>
                                </div>

                                <div className={styles.cardscontainer}>
                                        <CardOne heading="Global Partner"
                                                paragraph="We at Motion are building a global platform to enable collaboration, accelerate innovation communities, and democratize access to business-building tools. Our goal is making scaling a business more equitable by allowing more people to leverage resources previously reserved for large corporations alone."
                                                textAlign='left'
                                                icon={globalSVG()}
                                                padding={true} 
                                                clickable={true}/>
                                        <CardOne heading="Early Access"
                                                paragraph="We invite product builders and developers worldwide to join our platform's growing community and get early access to tools that ease growth. Connect with potential partners, customers and investors globally to advance your business or product. Leverage our community's collective knowledge to achieve your ambitions."
                                                textAlign='left'
                                                icon={lockSVG()}
                                                clickable={true}/>
                                        <CardOne heading="Talent Acquisition"
                                                paragraph="We seek talented, entrepreneurial team members passionate about using technology to transform business building and scaling, making it more accessible. Join us in our ambitious mission to drive innovation democratization globally through collaboration and creativity. Together we can revolutionize and accelerate innovation."
                                                textAlign='left'
                                                icon={mindSVG()}
                                                clickable={true}/>
                                </div>
                        </div>
                </div>
        )
}

function mindSVG() {
        return (
                <div className={styles.svgiconcontainer}>
                        <svg viewBox="0 0 500 500">
                                <defs>
                                </defs>
                                <path id="head_1" data-name="head 1" d="M116.816,480.97H311.434v-39.4H260.093V426.044H367.55s27.462,0.5,27.462-27.462V319.776h45.371s10.746,2.251,10.746-10.746-39.4-115.821-39.4-115.821S413.883,98.151,347.253,54.7,196.958,16.856,171.739,23.657C83.437,47.472,60.7,128.732,60.7,128.732s-26.606,54.96,0,138.507c0,0,48.633,79.765,50.147,103.88S116.816,480.97,116.816,480.97Z" />
                                <path className={styles.bluepath} id="brain_1" data-name="brain 1" d="M309.646,117.3L185.123,312.918s-70.066,2.049-59.758-63.029c0,0-45.572-27-9.754-63.13,0,0-25.713-65.75,47.168-74.1,0,0,16.9-80.463,85.661-34.321C248.44,78.342,301.511,58.839,309.646,117.3Zm43.228,10.779s-16.246-13.941-27.975,4.484c-10.161,15.962,5.733,25.862,5.733,25.862s16.891,7.558,25.857-5.752C367.232,136.731,352.874,128.083,352.874,128.083ZM232.252,315.154s-15.382-13.31-27.473,6.112c-10,16.063,5.732,25.862,5.732,25.862s16.3,7.384,24.87-6.186C246.3,323.656,232.252,315.154,232.252,315.154Zm68.312-9.148s-14.98-13.613-27.463,6c-10.161,15.961,5.732,25.861,5.732,25.861s16.891,7.558,25.858-5.752C315.437,316.161,300.564,306.006,300.564,306.006Zm54.255-46.06s-15.429-14.674-28.46,5.439c-10.288,15.879,5.733,25.862,5.733,25.862s16.617,7.368,25.857-5.753C368.854,270.01,354.819,259.946,354.819,259.946Zm17.509-66.674s-15.174-13.309-26.9,5.116c-10.161,15.962,5.732,25.862,5.732,25.862s16.611,7.365,25.858-5.752C387.816,203.177,372.328,193.272,372.328,193.272Zm-164.565,84.08,15.795,10.054,1.155,24.337m1.917-64.03,53.308,33.935,5.287,20.025m-37.841-86.562,78.975,50.274m-58.221-82.876,53.308,33.934,20.38-3.686m-52.934-62.851,17.769,11.312,19.664-6.919m-86.61-42.639A25.141,25.141,0,0,0,255.5,136.981M182.245,143.1s17.576,17.66,42.1,10.14m-22.713.812s5.459,19.08-10.34,33.678m-35.307,51.1s15.6-7.415,32.943,7.088M169.9,236.589c0.487-.63,13.768-21.062,2.531-34.485" />
                        </svg>
                </div>
        )
}

function globalSVG() {
        return (
                <div className={styles.svgiconcontainer}>
                        <svg height="100%" width="100%" viewBox="0 0 500 500">
                                <defs>
                                </defs>
                                
                                <path d="M249.1000,16.648 C249.1000,16.648 16.945,16.648 16.945,249.704 C16.945,482.759 249.1000,482.759 249.1000,482.759 C249.1000,482.759 483.055,482.759 483.055,249.704 C483.055,16.648 249.1000,16.648 249.1000,16.648 Z"/>
                                <path d="M16.247,249.709 L483.753,249.709 M117.251,249.709 C117.251,249.709 117.251,379.571 247.114,483.462 M374.091,249.709 C374.091,249.709 376.977,379.571 247.114,483.462 M247.114,249.709 L247.114,483.462 "/>
                                <path className={styles.bluepath} d="M248.1000,47.916 C248.1000,47.916 202.848,47.916 202.848,94.165 C202.848,140.414 248.1000,140.414 248.1000,140.414 C248.1000,140.414 295.152,140.414 295.152,94.165 C295.152,47.916 248.1000,47.916 248.1000,47.916 ZM158.997,223.925 C158.997,223.925 248.1000,79.406 339.003,223.925 "/>


                        </svg>
                </div>
        )
}

function lockSVG() {
        return (
                <div className={styles.svgiconcontainer}>
                        <svg height="100%" viewBox="0 0 500 500">
                                <defs>
                                </defs>
                                <path id="lockcircle_1" data-name="lockcircle 1" d="M250,166.089s-155.36,0-155.36,155.36S250,476.809,250,476.809s155.36,0,155.36-155.36S250,166.089,250,166.089Z" />
                                <path className={styles.bluepath} id="checkcircle" d="M250,213.35s-108.1,0-108.1,108.1S250,429.547,250,429.547s108.1,0,108.1-108.1S250,213.35,250,213.35Z" />
                                <path className={styles.bluepath} id="lockcheck_1" data-name="lockcheck 1" d="M231.434,326.95L205.5,304.172s-31.648-7.533-25.935,25.625l40.344,42.71s9.793,9.45,23.053,0l77.806-76.877s5.842-35.416-28.817-28.474Z" />
                                <path id="locktop_1" data-name="locktop 1" d="M144.319,203.979V109.422s-3.77-86.214,111.243-86.214c111.34,0,100.119,91.776,100.119,91.776v89" />
                        </svg>
                </div>
        )
}