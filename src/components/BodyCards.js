import React, {useState} from 'react'
import SingleCard from './SingleCard'

function BodyCards() {
  const [data, setData] = useState(require('../data.json'));

  return (
    <div className='body-cards-main row row-cols-3'>
        { 
        data.movies.map((movie, index) => {
            return <SingleCard movie={movie} key={index} />
        })
        }
    </div>
  )
}

export default BodyCards