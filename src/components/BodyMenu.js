import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setMovies, sortByDate, sortByRate } from '../redux/movies'

function BodyMenu() {
  const { movieList } = useSelector((state) => state.movies)
  const dispatch = useDispatch()
  return (
    <div className='body-menu-main'>
        <ul>
          <li>ALL</li>
          <li>DOCUMENTARY</li>
          <li>COMEDY</li>
          <li>HORROR</li>
          <li>CRIME</li>
          <li onClick={() => dispatch(sortByDate())} className='clickable'>Sort by Date</li>
          <li onClick={() => dispatch(sortByRate())} className='clickable'>Sort by Rating</li>
        </ul>
        <div className='body-menu-line'></div>
    </div>
  )
}

export default BodyMenu