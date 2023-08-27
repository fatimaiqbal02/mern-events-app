import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Events from '../pages/Events'
import EventDetails from '../pages/EventDetails'
import Notification from '../pages/Notification'
import SearchResultList from '../pages/SearchResultList'
import Gallery from '../pages/Gallery'
import Team from '../pages/Team'


const Routers = () => {
  return (
    <Routes>
        <Route path = '/' element = {<Navigate to = '/home'/>} />
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/team' element = {<Team/>} />
        <Route path = '/gallery' element = {<Gallery/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/register' element = {<Register/>} />
        <Route path = '/events' element = {<Events/>} />
        <Route path = '/events/:id'  element = {<EventDetails/>} />
        <Route path = '/events/search'  element = {<SearchResultList/>} />
        <Route path = '/notification' element = {<Notification/>} />

    </Routes>
  )
}

export default Routers
