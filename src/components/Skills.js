import React from 'react';
import './styles/skills.css'
const Skills = () => {
    return (
        <div className='skills'>
            <div className="title">
            <h1>What I use</h1>
            </div>
            <div className="skills__use">
                <div className="skills__box">
                    <div className="skills__item">
                    <i className="fab fa-html5"></i>
                        <h3>HTML</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-css3-alt"></i>
                        <h3>CSS</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-sass"></i>
                        <h3>Sass</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-bootstrap"></i>
                        <h3>Bootstrap</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-js-square"></i>
                        <h3>Javascript</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-react"></i>
                        <h3>React</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-git-alt"></i>
                        <h3>Git</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-github"></i>
                        <h3>GitHub</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-figma"></i>
                        <h3>Figma</h3>
                    </div>
                    <div className="skills__item">
                    <i className="fab fa-npm"></i>
                        <h3>Npm</h3>
                    </div>
                </div>
            </div>
            <div className="skill__know">
                <div className="title">
                <h1>What you get</h1>
                </div>
                <div className="skill__get">
                    <div className="skills__block">
                    <i className="far fa-calendar-check"></i>
                    <h4>Quality</h4>
                    </div>
                    <div className="skills__block">
                    <i className="far fa-calendar-check"></i>
                    <h4>on time</h4>
                    </div>
                    <div className="skills__block">
                    <i className="far fa-calendar-check"></i>
                    <h4>Interactive</h4>
                    </div>
                    <div className="skills__block">
                    <i className="far fa-calendar-check"></i>
                    <h4>Modern</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
