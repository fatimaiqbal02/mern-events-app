import React from 'react'
import Slider from 'react-slick'
import './Testimonials.css'
import TestimonialCard from './TestimonialCard'
import testimonialData from '../../assets/data/testimonials.js'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive : [
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        {testimonialData.map((item, index) => (
        <TestimonialCard key={index} review={item.review} 
                     imgSrc={item.imgSrc} name={item.name} title={item.title}/>
      ))}
    </Slider>
  )
}

export default Testimonials
