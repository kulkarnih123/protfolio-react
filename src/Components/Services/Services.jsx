import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'



const Services = ()=>{

    return(
       <div id='services' className="services">
        <div className="services-title">
            <h1>My Skills</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return  <a className='services-a' href={service.s_link} target='_blank'><div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <img  className='services-format-img'  key={index} src={service.s_img} alt="" />
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div></a>
            })}
        </div>
       </div>
    )
}
export default Services