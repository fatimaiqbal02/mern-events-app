import React, {useState} from 'react';
import Videoslider from '../Components/VideoSlider/Videoslider';
import videosData from '../assets/data/videosData.js';
import '../styles/Home.css'

const Home = () => {

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
    {/* -----------------------------------Home section ------------------------------------------- */}
    <section className='home-section'>

      {videosData.map((item, index) => (
        <Videoslider key={index} title={item.title} 
                     description={item.description} videoSrc={item.videoSrc} active={index === slideNo}/>
      ))}

      <div id="next" onClick={nextSlide} ><i className="ri-arrow-drop-right-line"></i></div>
      <div id="prev" onClick={prevSlide}><i className="ri-arrow-drop-left-line"></i></div>

    </section>
    {/* ------------------x----------------Home section --------------x---------------------------- */}

    </>
  );
}

export default Home;
