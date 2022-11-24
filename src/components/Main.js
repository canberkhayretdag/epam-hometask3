import React, {useState, useEffect, useParams} from 'react'
import Body from './Body'
import Header from './Header'

function Main() {
  const [data, setData] = useState(require('../data.json'));
  const [reload, setReload] = useState(false)
  const [handledMovie, setHandledMovie] = useState()

  const movieHandler = (id) => {
    data.movies.forEach(movie => {
      if (movie.id === id) {
        setReload(true)
        setTimeout(() => {
          setHandledMovie(movie)
          setReload(false)
        }, 1000);
      }
    });
  }

  const clearMovie = () => {
    setReload(true)
    setTimeout(() => {
      setHandledMovie()
      setReload(false)
    }, 1000);
  }

  const dataHandler = (newData) => {
    setReload(true)
    setTimeout(() => {
      setData(newData)
      setReload(false)
    }, 1000);
  }

   if (!reload) { return(
    <>
        <Header data={data} clearMovie={clearMovie} movie={handledMovie} movieHandler={movieHandler} dataHandler={dataHandler}  />
        <Body data={data} movieHandler={movieHandler} dataHandler={dataHandler} />
    </>
  )} else {
    return <h1>Loading...</h1>
  }
}

export default Main