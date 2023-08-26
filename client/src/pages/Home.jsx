import React from 'react';
import VideoSlider from '../Components/VideoSlider/VideoSlider.jsx';
import Subtitle from '../Components/Subtitle/Subtitle.jsx';

const Home = () => {

  return (
    <>
    {/* ----------------------------------- VideoSlider section ------------------------------------------- */}
    <VideoSlider/>
    {/* ------------------x---------------- VideoSlider section --------------x---------------------------- */}
    {/* ----------------------------------- Event-types section ------------------------------------------- */}
    <Subtitle/>
    {/* ------------------x---------------- Event-types section --------------x---------------------------- */}
    </>
  );
}

export default Home;
