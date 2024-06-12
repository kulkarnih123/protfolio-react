import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import vishalk from '../../assets/vishalk.jpg'

const About=()=>{
    return(
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={vishalk} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a dedicated front-end developer with one year of experience, I have honed my skills in creating responsive and visually appealing websites. Proficient in HTML, CSS, and JavaScript, I bring a keen eye for design and a commitment to user experience. My experience includes working with popular frameworks like React, allowing me to build dynamic and interactive web applications.</p>
                        <p>I am passionate about learning new technologies and continuously improving my coding practices.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        {/* <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div> */}
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About