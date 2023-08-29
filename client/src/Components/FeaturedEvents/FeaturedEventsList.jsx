import React from 'react'
import EventCard from '../EventCard/EventCard'
import eventData from '../../assets/data/FeaturedEvents.js'
import './FeaturedEvents.css'

const FeaturedEventsList = () => {
  return (
    <div className='featured-event-section' >
      {eventData?.map(event=>(
        <div key={event._id}>
            <EventCard event={event}/>
        </div>
     ))} 
    </div>
  )
}

export default FeaturedEventsList
