import React from 'react'
import "./Hero.css"
import vkg_profile from '../../assets/vkg_profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero=()=>{
    return(
        <div id='home' className='hero'>
            <img className='hero-profile' src={vkg_profile} alt="" />
            <h1><span> I'm Hanumesh Kulkarni,</span> frontend developer based in INDIA.</h1>
            <p>I am a frontend developer from Bangalore, INDIA with 1 year of experience</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume"><a className='hero-resume-link' href='https://drive.google.com/file/d/10moJT7erf02UnOsSHvZmF_yKfzD8vvoL/view?usp=drivesdk' target="_blank"> My resume</a></div>
            </div>
        </div>
    )
}
export default Hero