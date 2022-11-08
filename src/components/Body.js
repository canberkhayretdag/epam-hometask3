import React from 'react'
import '../styles/body.css'
import BodyCards from './BodyCards'
import BodyMenu from './BodyMenu'

function Body() {
  return (
    <div className='body-main'>
        <BodyMenu />
        <BodyCards />
    </div>
  )
}

export default Body