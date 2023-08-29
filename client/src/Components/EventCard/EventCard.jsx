import React from 'react'
import { Link } from 'react-router-dom'
import './EventCard.css'
import { RiStarFill, RiMapPinLine } from "react-icons/ri";
import calculateAvgRating from '../../utils/avgRating'

const EventCard = ({ event }) => {

    const { _id, name, venue, address, photo, desc, price, minGuestSize, maxGuestSize, featured, reviews } = event
    const{totalrating, avgRating} = calculateAvgRating(reviews)

    /* const totalrating = reviews?.reduce((acc,item)=> acc + item.rating,0);
    const avgRating = totalrating == 0? "": totalrating ==1? totalrating: totalrating/reviews?.length; */

    return (
        <div className='card'>
            <div className="event__img">
                <img src={photo} alt="event-img" />
                {featured && <span>Featured</span>}
            </div>

            <div className='card-body'>
                <div className="card__top">
                    <span className="event__rating">
                        <i><RiStarFill/></i>
                        {avgRating === 0? null: avgRating}
                        {totalrating === 0? ('Not Rated'): (<span>({reviews.length})</span>)}
                    </span>

                    <h5 className="event__title"><Link to={`/events/${_id}`}>{name}</Link></h5>

                    <span className="event__location">
                        <div className='venue'><i><RiMapPinLine/></i>{venue}</div>
                        <div className='address'>{address}</div>
                    </span>
                </div>

                <div className="card__bottom">
                    <h5>${price}<span> /per person</span></h5>
                    <button className="btn booking__btn">
                        <Link to={`/events/${_id}`}> Book now </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard
