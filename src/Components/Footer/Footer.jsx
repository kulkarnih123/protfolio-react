import React from 'react'
import './Footer.css'
import HKG from '../../assets/HKG.png'
import user_icon from '../../assets/user_icon.svg'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='footer-logo' src={HKG} alt="" />
                    <p>I am a frontend developer from, India with 1+ years of experience and im ready to take works please feel free to contact</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2023 Hanumesh Kulkarni.All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer