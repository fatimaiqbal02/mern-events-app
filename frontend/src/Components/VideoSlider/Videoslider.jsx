import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const VideoSlider = ({ title, description, videoSrc }) => {
  return (
    <div className="home-section__container">
      <div className="home-section__container__slide">
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

export default VideoSlider;
