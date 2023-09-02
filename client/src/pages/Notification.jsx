import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/notification.css'
import { RiCheckboxCircleLine } from "react-icons/ri";

const Notification = ({ message = 'default' }) => {
  return (
    <section className='notification'>
      <div className="notification__container">
          <span><i><RiCheckboxCircleLine/></i></span>
          <h1 className="thankyou">Thank You</h1>
          <h3>{message}</h3>
          <button className='btn primary__btn'><Link to='/home'>Back to Home</Link></button>
      </div>
    </section>
  )
}

export default Notification
