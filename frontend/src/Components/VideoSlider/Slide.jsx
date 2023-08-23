import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Videoslider.css'

const Slide = ({ title, description, videoSrc, active }) => {
  return (
    <div className="video-slider">
      <div className={`video-slider__slide ${active ? 'active': ''}`}>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className='btn primary__btn'><Link to='/'>Learn More</Link></Button>
        </div>
        <video src={videoSrc} muted autoPlay loop></video>
      </div>
    </div>
  );
}

export default Slide;
