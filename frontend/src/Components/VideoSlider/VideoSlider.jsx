import React, {useState} from 'react';
import Slide from './Slide.jsx';
import videosData from '../../assets/data/videosData.js';
import './Videoslider.css'

const VideoSlider = () => {

  const [slideNo, setSlideNo] = useState(0)

  const nextSlide = ()=>{
    setSlideNo((prevSlide) =>{
      return (prevSlide + 1) % videosData.length
    })
  }

  const prevSlide= ()=>{
    setSlideNo((prevSlide) =>{
      return prevSlide === 0 ? videosData.length - 1 : prevSlide - 1
    })
  }

  return (
    <>
    <section className='video-slider-section'>
      {videosData.map((item, index) => (
        <Slide key={index} title={item.title} 
                     description={item.description} videoSrc={item.videoSrc} active={index === slideNo}/>
      ))}

      <div id="next" onClick={nextSlide} ><i className="ri-arrow-drop-right-line"></i></div>
      <div id="prev" onClick={prevSlide}><i className="ri-arrow-drop-left-line"></i></div>

    </section>
    </>
  );
}

export default VideoSlider;
