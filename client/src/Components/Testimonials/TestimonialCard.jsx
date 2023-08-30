import React from 'react'
import './Testimonials.css'

const TestimonialCard = ({review, imgSrc, name, title}) => {
  return (
    <div className="testimonial">
        <p className='review'>{review}</p>

        <div className="testimonial__content">
            <img src={imgSrc} className= 'testimonial__img' alt="" />
            <div>
                <h6 className='testimonial__name'>{name}</h6>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
