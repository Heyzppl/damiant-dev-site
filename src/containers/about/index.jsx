import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const personalDetails = [
    {
        label: "Name",
        value: "Damiant"
    },
    {
        label: "Age",
        value: "26"
    },
    {
        label: "Location",
        value: "California"
    },
    {
        label: "Email",
        value: "drakechauhan@gmail.com"
    }
];

const jobSummary = "Highly Motivated IT professional with a proven track record in secure environments, possessing an active secret clearance. Knowledge in Linux, Network operations, and systems troubleshooting, with a strong foundation in Active Directory, VMware, and automation tools. Demonstrated ability to adapt to technical challenges and deliver critical solutions.";

const About = () => {
    return (
        <section id="about" className='about'>
            <PageHeaderContent
                headerText = "About me"
                icon={<BsInfoCircleFill size={40} />}
            />
            
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>IT Professional</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalInformationHeaderText">
                            Personal Information
                        </h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;