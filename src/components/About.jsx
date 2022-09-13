import React from 'react'
import "./about.css";
import AboutImg from "../assets/about.jpg"
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">What Is CBD Oil?</h2>
        <span className="section__subtitle"></span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="myimg" className="about__img" />
            <div className="about__data">
            <Info />

                <p className="about__description">CBD is a chemical compound from the cannabis plant. It means cannabidiol. It is the second most prevalent of the active ingredients of cannabis. It’s a naturally occurring substance that’s used in products like oils and edibles to impart a feeling of relaxation and calm. Unlike its cousin tetrahydrocannabinol (THC), it’s not psychoactive.</p>
               
                
            </div>
        </div>
    </section>
  )
}

export default About