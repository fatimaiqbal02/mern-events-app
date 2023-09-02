import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { RiMapPin2Line, RiPhoneLine, RiMailLine } from "react-icons/ri";

const quick__links = [
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

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
  {
    path: '/team',
    display: 'Team'
  }

]

const contact_detail = [
  {
    title: "Address",
    icon: <RiMapPin2Line/>,
    info:"Lahore, Pakistan"
  },
  {
    title: "Phone",
    icon: <RiPhoneLine/>,
    info:"0300-0329319"
  },
  {
    title: "Email",
    icon: <RiMailLine/>,
    info:"fatimaiqbalmirza002@gmail.com"
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className="footer-grid">
            <div className="footer__logo-section">

              <img src={logo} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, repellat.</p>

              <div className="social-links">
                <span>
                  <Link to='#'><i><FaTwitter/></i></Link>
                </span>
                <span>
                  <Link to='#'><i><FaFacebookF/></i></Link>
                </span>
                <span>
                  <Link to='#'><i><FaLinkedinIn/></i></Link>
                </span>
                <span>
                  <Link to='#'><i><FaInstagram/></i></Link>
                </span>
              </div>

            </div>

          <div className='footer__discover-section'>
            <h3 className="footer__link-title">Discover</h3>

            <div className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))
              }
            </div>
          </div>

          <div className='footer__quicklinks-section'>
            <h2 className="footer__link-title">Quick Links</h2>

            <div className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))
              }
            </div>
          </div>

          <div className='footer__contact-section'>
            <h5 className="footer__link-title">Contact</h5>

            <div className='footer__quick-links'>     
               {
                contact_detail.map((item, index) => (
                  <li className='contact-detail' key={index}>
                    <h6><span><i>{item.icon}</i></span>{item.title}:</h6>
                    <p>{item.info}</p>
                  </li>
                ))
               }
            </div>

          </div>
      </div>
      <div className='footer__copyright'>
              <p className="copyright">Copyright {year}, design and develop by Fatima Iqbal Mirza. All rights reserved</p>
      </div>  
    </footer>
  )
}

export default Footer
