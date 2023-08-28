import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import './Services.css'
import img1 from '../../assets/images/ServicesImage1.jpg' 
import img2 from '../../assets/images/ServicesImage2.jpg' 
import img3 from '../../assets/images/ServicesImage3.jpg' 
import img4 from '../../assets/images/ServicesImage4.jpg' 
import img5 from '../../assets/images/ServicesImage5.jpg' 

const servicesData = [
  {title: "Expert and Talented Team"},
  {title: "Expertise in Diverse Events"},
  {title: "Budget-Friendly Options"},
  {title: "Extensive Vendor Network"},
  {title: "Stress-Free Planning"},
  {title: "Expertise in Diverse Events"},
  {title: "Personalized Service"},
  {title: "Unforgettable Experiences"},
]

const Services = () => {
  return (
    <div className='services-section'>
      <div className="left">
        <img className='col2 row2'  src={img2} alt=""/>
        <img src={img4} alt="" />
        <img src={img3} alt="" />
        <img src={img1} alt="" />
        <img src={img5} alt="" />
      </div>
      <div className="right">
          {servicesData.map((item, index)=>(
            <div className="right-container" key={index}>
                <i><BsCheckCircle/></i>
                <div className='right-container__point'>{item.title}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services