import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const skillsData = [
    {
        label: "FRONT END",
        skills: [
            {
                skillName: "HTML",
                percentage: "90"
            },
            {
                skillName: "CSS",
                percentage: "70"
            },
            {
                skillName: "JAVASCRIPT",
                percentage: "60"
            },
            {
                skillName: "REACT",
                percentage: "60"
            }
        ]
    },
    {
        label: "BACK END",
        skills: [
            {
                skillName: "NODE",
                percentage: "80"
            },  
            {
                skillName: "PYTHON",
                percentage: "85"
            }
        ]
    },
    {
        label: "DATABASES",
        skills: [
            {
                skillName: "SUPABASE",
                percentage: "85"
            },
            {
                skillName: "MYSQL",
                percentage: "75"
            }
        ]
    },
    {
        label: "SYSTEM & DEPLOYMENT",
        skills: [
            {
                skillName: "GIT",
                percentage: "85"
            },
            {
                skillName: "DOCKER",
                percentage: "50"
            },
            {
                skillName: "AWS",
                percentage: "65"
            },
            {
                skillName: "C++",
                percentage: "70"
            }
        ]
    },
    {
        label: "IT INFRASTRUCTURE",
        skills: [
            {
                skillName: "ACTIVE DIRECTORY",
                percentage: "85"
            },
            {
                skillName: "VMWARE",
                percentage: "80"
            },
            {
                skillName: "CISCO UNIFIED CALL MANAGER",
                percentage: "75"
            },
            {
                skillName: "NETWORKING (SWITCHES/ROUTERS)",
                percentage: "85"
            },
            {
                skillName: "WIDE AREA NETWORKS",
                percentage: "80"
            }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills__content-wrapper">
                {skillsData.map((item, i) => (
                    <Animate
                        key={i}
                        play
                        duration={1}
                        delay={0.3}
                        start={{
                            transform: 'translateX(-200px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <div className="skills__content-card">
                            <h6>{item.label}</h6>
                            <div className="skills__content-card-inner">
                                {item.skills.map((skillItem, j) => (
                                    <div key={j} className="skills__skill-item">
                                        <p className="skills__skill-item-name">{skillItem.skillName}</p>
                                        <div className="skills__skill-item-progress-bg">
                                            <div 
                                                className="skills__skill-item-progress"
                                                style={{ width: `${skillItem.percentage}%` }}
                                            />
                                            <span className="skills__skill-item-percentage">{skillItem.percentage}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Animate>
                ))}
            </div>
        </section>
    );
};

export default Skills;