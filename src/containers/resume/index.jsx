import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';
import './styles.scss';

const Resume = () => {
    const personalData = {
        name: "Damiant Chauhan",
        contact: {
            phone: "(224) 578-6441",
            email: "Drakechauhan@gmail.com",
            github: "https://github.com/heyzppl",
            clearance: "Active Secret Clearance"
        },
        summary: "Highly Motivated IT professional with a proven track record in secure environments, possessing an active secret clearance. Knowledge in Linux, Network operations, and systems troubleshooting, with a strong foundation in Active Directory, VMware, and automation tools. Demonstrated ability to adapt to technical challenges and deliver critical solutions."
    };

    const workExperience = [
        {
            title: "Network Specialist",
            company: "DISA/I2x Technologies",
            location: "Hill AFB, UT",
            period: "September 2024 – Current",
            responsibilities: [
                "Monitored and resolved network circuit alarms using ADIMSS, ensuring optimal network uptime",
                "Utilized NetScout for in-depth network performance monitoring and troubleshooting",
                "Accessed and configured routers, SBCs, MG3Ks, and firewalls via SSH (Gnome/Bash terminal)",
                "Responsible for monitoring several wide area network soft switches across CENTCOM, PACOM, OCONUS, CONUS",
                "Performed daily packet captures using Netscout and analyzed on wireshark for our SBCs"
            ]
        },
        {
            title: "IT Specialist",
            company: "US District Court of Hawaii",
            location: "Honolulu, HI",
            period: "Apr 2023 - September 2024",
            responsibilities: [
                "Managed and updated Cisco Call Manager and VMware Horizon environments",
                "Resolved complex technical issues related to virtual desktop infrastructure (VDI) and network connectivity",
                "Implemented and maintained user groups within Outlook and Active Directory",
                "Utilized JIRA for project tracking and issue resolution",
                "Successfully replaced a malfunctioning Server IO to address a courtroom system issue"
            ]
        },
        {
            title: "Engineer Tech",
            company: "NAVSEA",
            location: "Norco, CA",
            period: "Apr 2022 – Apr 2023",
            responsibilities: [
                "Administered Active Directory, including user account management and security audits",
                "Configured and troubleshot Windows 10 OS, including patch management and system imaging (SCCM) and ACAS",
                "Ensured compliance with DOD STIG requirements and conducted vulnerability assessments using Tenable",
                "Familiarity with Ansible Playbooks for Red hat devices using YAML"
            ]
        },
        {
            title: "Security Forces",
            company: "USAF",
            location: "Cheyenne, WY",
            period: "Mar 2017 – Apr 2022",
            responsibilities: [
                "Demonstrated adaptability and problem-solving skills in high-pressure security environments",
                "Developed strong teamwork and leadership abilities",
                "Received training in cybersecurity protocols and security systems"
            ]
        }
    ];

    const education = {
        degree: "Bachelor of Science in Computer Science",
        school: "Oregon State University",
        graduation: "Spring 2025",
        coursework: [
            "Operating Systems",
            "Discrete Mathematics",
            "Data Structures",
            "Web Development",
            "Analysis of Algorithms",
            "Senior Capstone",
            "Intro to databases",
            "Software Engineering",
            "Computer Networks",
            "Mobile Software Development",
            "Cloud Application Development"
        ]
    };

    const certifications = [
        "CompTIA Security+",
        "Certified Scrum Master (CSM) Scrum Alliance",
        "AWS Certified Application Developer",
        "Discrete Mathematics (Moreno Valley College)"
    ];

    const projects = [
        {
            title: "Vigenere Cipher Program",
            description: "Developed C++ applications for Discrete mathematics",
            tech: "C++"
        },
        {
            title: "Microassembly Ladder Programs",
            description: "Created Ladder programs utilizing breadboard",
            tech: "Assembly"
        },
        {
            title: "Genre Classification Neural Network",
            description: "Built using TensorFlow",
            link: "https://github.com/Heyzppl/Top_n",
            tech: "TensorFlow"
        }
    ];

    return (
        <section id="resume" className="resume">
            <div className="resume__header">
                <PageHeaderContent
                    headerText="My Resume"
                    icon={<BsInfoCircleFill size={40} />}
                />
            </div>
            
            <div className="resume__content">
                <div className="resume__content__header">
                    <h1>{personalData.name}</h1>
                    <div className="contact-info">
                        <p>{personalData.contact.phone} | {personalData.contact.email}</p>
                        <p>GitHub: <a href={personalData.contact.github} target="_blank" rel="noopener noreferrer">{personalData.contact.github}</a></p>
                        <p className="clearance">{personalData.contact.clearance}</p>
                    </div>
                    <div className="summary">
                        <p>{personalData.summary}</p>
                    </div>
                </div>

                <Animate
                    play
                    duration={1.5}
                    delay={0.3}
                    start={{
                        transform: 'translateX(-200px)',
                        opacity: 0
                    }}
                    end={{
                        transform: 'translateX(0px)',
                        opacity: 1
                    }}
                >
                    <div className="resume__content__body">
                        <div className="experience">
                            <h2><FaBriefcase /> Professional Experience</h2>
                            {workExperience.map((job, index) => (
                                <div key={index} className="experience-item">
                                    <div className="title-row">
                                        <h3>{job.title}</h3>
                                        <span className="period">{job.period}</span>
                                    </div>
                                    <h4>{job.company} | {job.location}</h4>
                                    <ul>
                                        {job.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="education">
                            <h2><FaGraduationCap /> Education</h2>
                            <div className="education-item">
                                <h3>{education.degree}</h3>
                                <h4>{education.school} | {education.graduation}</h4>
                                <div className="coursework">
                                    <h4>Relevant Coursework:</h4>
                                    <p>{education.coursework.join(", ")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="certifications">
                            <h2><FaCertificate /> Certifications</h2>
                            <ul>
                                {certifications.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="projects">
                            <h2><FaCode /> Projects</h2>
                            <div className="projects-grid">
                                {projects.map((project, index) => (
                                    <div key={index} className="project-item">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                View Project
                                            </a>
                                        )}
                                        <span className="tech-tag">{project.tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Resume;