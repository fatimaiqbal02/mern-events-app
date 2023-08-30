import React from 'react';
import VideoSlider from '../Components/VideoSlider/VideoSlider.jsx';
import Subtitle from '../Components/Subtitle/Subtitle.jsx';
import EventTypes from '../Components/EventTypes/EventTypes.jsx';
import SearchBar from '../Components/SearchBar/SearchBar.jsx';
import Services from '../Components/Services/Services.jsx';
import FeaturedEventsList from '../Components/FeaturedEvents/FeaturedEventsList.jsx'
import Experience from '../Components/Experience/Experience.jsx';

const Home = () => {

  return (
    <>
    {/* ----------------------------------- VideoSlider section ---------------------------------------- */}
    <VideoSlider/>
    {/* ------------------x---------------- VideoSlider section --------------x-------------------------- */}
    {/* ----------------------------------- Event-types section ----------------------------------------- */}
    <Subtitle title={'Events We Organize'}/>
    <EventTypes/>
    {/* ------------------x---------------- Event-types section --------------x-------------------------- */}
    {/* ----------------------------------- Search Bar section ------------------------------------------ */}
    <SearchBar/>
    {/* ------------------x---------------- Search Bar section --------------x-------------------------- */}
    {/* ----------------------------------- Services section ------------------------------------------- */}
    <Subtitle title={'Why Choose Us'}/>
    <Services/>
    {/* ------------------x---------------- Services section --------------x---------------------------- */}
    {/* ----------------------------------- Featured-Events section ------------------------------------ */}
    <Subtitle title={'Featured Events'}/>
    <FeaturedEventsList/>
    {/* ------------------x---------------- Featured-Events section --------------x--------------------- */}
    {/* -------------------------------------- Experience section -------------------------------------- */}
    <Experience/>
    {/* ------------------x------------------- Experience section ----------------x--------------------- */}
    </>
  );
}

export default Home;
