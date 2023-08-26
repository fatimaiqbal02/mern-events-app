import React from 'react'
import './Subtitle.css'

const Subtitle = ({title}) => {
  return (
    <div className='subtitle-container'>
      <h2 className='subtitle-container__subtitle'>{title}</h2>
    </div>
  )
}

export default Subtitle
