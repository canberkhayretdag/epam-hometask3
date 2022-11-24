import React, {useState} from 'react'
import SingleCard from './SingleCard'
import EditMovie from "./EditMovie";

function BodyCards({data, movieHandler, dataHandler}) {
  const [selectedMovie, setSelectedMovie] = useState();

  const handleSelect = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <div className='body-cards-main row row-cols-3'>
        { 
        data.movies.map((movie, index) => {
            return (
              <>
                <SingleCard data={data} movieHandler={movieHandler} movie={movie} movieNumber={index} key={index} dataHandler={dataHandler} handleSelect={handleSelect} />
                <>
                  { selectedMovie ? 
                    <EditMovie data={data} selectedMovie={selectedMovie} movieNumber={index} dataHandler={dataHandler} />
                    :
                    <></>
                  }
                </>
              </>
            )
        })
        }
        
    </div>
  )
}

export default BodyCards