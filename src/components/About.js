import React, { useEffect } from 'react';
import img from '../assets/IMG_9642.JPG'
import './styles/about.css'
const About = () => {
    useEffect(() => {
    document.title ="About"
  }, [])
    
    return (    
        <section className='about'>
            <div className="resume">
                <div className="resume__info">
                    <div className="resume__info_block">
                        <div className="box animate__animated animate__backInLeft">DID SOMETHING</div>
                        <div className="box animate__animated  animate__backInRight">2018</div>
                    </div>
                    <div className="resume__info_block">
                        <div className="box animate__animated animate__backInLeft">2019</div>
                        <div className="box animate__animated  animate__backInRight">DID SOMETHING</div>
                    </div>
                    <div className="resume__info_block">
                        <div className="box animate__animated animate__backInLeft">DID SOMETHING</div>
                        <div className="box animate__animated animate__backInRight">2020</div>
                    </div>
                    <div className="resume__info_block">
                        <div className="box animate__animated animate__backInLeft">2021</div>
                        <div className="box animate__animated  animate__backInRight">DID SOMETHING</div>
                    </div>
                    <div className="resume__info_block">
                        <div className="box animate__animated animate__backInLeft">DID SOMETHING</div>
                        <div className="box animate__animated  animate__backInRight">2022</div>
                    </div>
                </div>
            </div>
            <div className="right__about">
                <div className="right-image">
                    <img src={img} alt=""/>
                </div>
                <div className="right-info">
                <h1>AKMAL BAXODIROV</h1>
                <p>I'm a software engineer specialised in frontend development for complex scalable web apps.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
