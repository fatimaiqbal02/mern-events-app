import React, { useEffect, useState } from 'react'
import {Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Header.css'

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/events',
    display: 'Events'
  }

]

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  //to close mobile menu on scroll
  const handleScroll = () =>{
    setIsMenuOpen(false)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    } 
  }, [])

  return (
    <header className='header'>
          
      <div className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </div>

      <div className="navbar__logo">
        <img src={logo} alt=""/>
      </div>

      <nav className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
        <ul>

          {nav__links.map((item, index)=>(
            <li className="navbar__links__item" key= {index} onClick={toggleMenu}>
              <NavLink to = {item.path} className= {navClass => navClass.isActive? "active__link": ""} 
              >{item.display}</NavLink>
            </li>
          ))}

        </ul>
      </nav>

      <div className="navbar__right__btns">   
        <Button className='btn secondary__btn'><Link to = '/login'>Login</Link></Button>
        <Button className='btn primary__btn'><Link to = '/register'>Register</Link></Button>
      </div>
  </header>
  )
}

export default Header