import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <div className='header-main'>
        <div className='header-search-section'>
            <div className="search-container">
                    <input className='search-input' type="text" placeholder="What do you want to watch?" name="search" />
                    <button className='search-button'>search</button>
            </div>
        </div>
    </div>
  )
}

export default Header