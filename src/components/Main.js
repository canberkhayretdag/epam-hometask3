import React, { useState, useEffect, useParams, createContext, useCallback } from 'react'
import Body from './Body'
import Header from './Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../redux/movies'

export const MovieContext = createContext()

function Main() {
  const [data, setData] = useState();
  const [reload, setReload] = useState(false)
  const [handledMovie, setHandledMovie] = useState()

  const { movieList } = useSelector((state) => state.movies)
  const dispatch = useDispatch()

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

  useEffect(() => {

    const editData = (data) => {
      dispatch(setMovies(data));
    }

    const fetchData = async () => {
      const result = await axios
      .get("http://localhost:4000/movies")
      .then((response) => {
        editData(response.data.data)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    }
    fetchData()
  }, [])

   if (movieList) { return(
    <MovieContext.Provider value={movieList}>
        <Header data={movieList} clearMovie={clearMovie} movie={handledMovie} movieHandler={movieHandler} dataHandler={dataHandler}  />
        <Body data={movieList} movieHandler={movieHandler} dataHandler={dataHandler} />
    </MovieContext.Provider>
  )} else {
    return <h1>Loading...</h1>
  }
}

export default Main