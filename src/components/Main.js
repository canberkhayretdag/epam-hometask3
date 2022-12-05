import React, { useState, useEffect, useParams, createContext, useCallback } from 'react'
import Body from './Body'
import Header from './Header'

export const MovieContext = createContext()

const useDataLoader = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(require('../data.json'))
  }, [])
  return data
}

function Main() {
  const [data, setData] = useState();
  const [reload, setReload] = useState(false)
  const [handledMovie, setHandledMovie] = useState()

  const movieHandler = useCallback ((id) => {
    data.movies.forEach(movie => {
      if (movie.id === id) {
        setReload(true)
        setTimeout(() => {
          setHandledMovie(movie)
          setReload(false)
        }, 1000);
      }
    });
  }, [data])

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

   if (data) { return(
    <MovieContext.Provider value={data}>
        <Header data={data} clearMovie={clearMovie} movie={handledMovie} movieHandler={movieHandler} dataHandler={dataHandler}  />
        <Body data={data} movieHandler={movieHandler} dataHandler={dataHandler} />
    </MovieContext.Provider>
  )} else {
    return <h1>Loading...</h1>
  }
}

export default Main