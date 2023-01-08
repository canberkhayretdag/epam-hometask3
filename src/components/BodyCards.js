import React, {useState, useContext} from 'react'
import SingleCard from './SingleCard'
import EditMovie from "./EditMovie";
import { MovieContext } from "./Main"
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../redux/movies'

function BodyCards({data, movieHandler, dataHandler}) {
  const [selectedMovie, setSelectedMovie] = useState();
  const { movieList } = useSelector((state) => state.movies)
  const handleSelect = (movie) => {
    setSelectedMovie(movie)
  }

  const db = useContext(MovieContext);

  return (
    <div className='body-cards-main row row-cols-3'>
        { 
          movieList.map((movie, index) => {
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