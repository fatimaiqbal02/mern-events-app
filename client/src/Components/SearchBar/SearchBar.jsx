import React,{useRef} from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom' 
import { Button } from 'reactstrap'

const SearchBar = () => {

  const nameRef = useRef('')
  const areaRef = useRef(0)
  const maxGuestSizeRef = useRef(0)
  const navigate = useNavigate()

  const searchHandler = ()=>{
    const name = nameRef.current.value
    const area= areaRef.current.value
    const maxGuestSize = maxGuestSizeRef.current.value

    if(name === '' || area === '' || maxGuestSize === ''){
        return alert('All feilds are required!!')
    }

    navigate(`/events/search?name=${name}&area=${area}&maxGuestSize=${maxGuestSize}`)
  }

  return (
    <section className='search-bar'>
        <div className="form">
          <form className='form__grid'>
            <h1>Are u looking for a perfect venue near you to organize event? We got you.</h1>
            <input type="text" placeholder='Event Type' ref={nameRef}/>
            <input type="text" placeholder='Area' ref={areaRef}/>
            <input type="number" placeholder='Max Guests' name="" id="" ref={maxGuestSizeRef}/>
            <Button className='primary__btn search-bar__btn' type='submit' onClick={searchHandler}>Search Event </Button>
            
          </form>
        </div>
    </section>
  )
}

export default SearchBar