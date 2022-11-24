import React from 'react'
import '../styles/body.css'
import BodyCards from './BodyCards'
import BodyMenu from './BodyMenu'

function Body({data, movieHandler, dataHandler}) {
  return (
    <div className='body-main'>
        <BodyMenu />
        <BodyCards data={data} movieHandler={movieHandler} dataHandler={dataHandler} />
    </div>
  )
}

export default Body