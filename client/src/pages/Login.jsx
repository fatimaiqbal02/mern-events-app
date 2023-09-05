import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
});

  //handling form
  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const handleClick = e =>{
    e.preventDefault()
    console.log(credentials)
  }

  return (
    <div className='form__container'>
            <div className="login__container">

              <div className="login__content">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <form onSubmit={handleClick}>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  <button className='btn primary__btn auth__btn' type='submit'>Login</button>
                   <p>don't have an account? <Link to='/register'>Create</Link></p>
                </form>
              </div>
            </div>
    </div>
  )
}

export default Login
