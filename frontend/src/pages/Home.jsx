import React from 'react';
import VideoSlider from '../Components/VideoSlider/Videoslider';
import videosData from '../assets/data/videosData.js';

const Home = () => {
  return (
    <section className='home-section'>
      {videosData.map((item, index) => (
        <VideoSlider key={index} title={item.title} description={item.description} videoSrc={item.videoSrc}/>
      ))}
    </section>
  );
}

export default Home;
