import React from 'react';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <div className="typing-text">
                    <h1>{'<'}Hello, I'm</h1>
                    <h1>Damiant</h1>
                    <h1>a IT Professional{'/>'}</h1>
                </div>
                <Animate
                    play
                    duration={1}
                    delay={3}
                    start={{
                        transform: 'translateY(50px)',
                        opacity: 0
                    }}
                    end={{
                        transform: 'translateY(0)',
                        opacity: 1
                    }}
                >
                    <Link to="/contact" className="contact-btn">
                        Get in touch
                    </Link>
                </Animate>
            </div>
        </section>
    )
}

export default Home;

