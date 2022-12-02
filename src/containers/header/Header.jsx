import React from 'react'
import './header.css'
import header from '../../assets/header.jpg'

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">KANDY API COTTAGE</h1>

      <p>Escape to the Cottage with you and your loved ones and enjoy the place like it’s your own house.</p>

      {/* <div className='header-content__people'>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}

    </div>
    <div className='header-image'>
      <img src={header} alt='header' />
    </div>
  </div>
  )


export default Header