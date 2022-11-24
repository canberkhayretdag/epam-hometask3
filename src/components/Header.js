import React from 'react'
import '../styles/header.css'
import AddMovie from './AddMovie'
import MovieDetails from './MovieDetails'

function Header({data, clearMovie, movie, movieHandler, dataHandler}) {
  if (movie) {
    return (
      <MovieDetails clearMovie={clearMovie} movie={movie} />
    )
  } else {
    return (
      <div className='header-main'>
      
          <div className='header-search-section'>
          <span className='btn btn-warning add-movie-button' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Movie</span>
              <div className="search-container">
                      <input className='search-input' type="text" placeholder="What do you want to watch?" name="search" />
                      <button className='search-button'>search</button>
              </div>
          </div>
        <AddMovie data={data} dataHandler={dataHandler} />
      </div>
      
    )
  }

}

export default Header