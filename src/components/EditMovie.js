import React, {useState, useEffect} from "react";

function EditMovie({data, selectedMovie, dataHandler}) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [runtime, setRuntime] = useState('')
  const [poster, setPoster] = useState('')

  const editMovie = () => {
    const movie = {
        'Title': title,
        'Year': year,
        'Runtime': runtime,
        'Poster': poster
    }
    data.movies[selectedMovie.id] = movie
    dataHandler(data)
  }

  const removeMovie = () => {
    let idx = 0;
    for (let i = 0; i < data.movies.length; i++) {
        if (data.movies[i].id === selectedMovie.id) idx = i;
    }
    data.movies.splice(idx, 1)
    dataHandler(data)
  }

  useEffect(() => {
    console.log(selectedMovie)
  })

  return (
    <div
      class="modal"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content modal-main">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Edit Movie
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Movie Title
              </label>
              <input
                placeholder={selectedMovie.Title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Year
              </label>
              <input
                placeholder={selectedMovie.Year}
                onChange={(e) => setYear(e.target.value)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Runtime
              </label>
              <input
                placeholder={selectedMovie.Runtime}
                onChange={(e) => setPoster(e.target.value)}
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Poster Url
              </label>
              <input
                placeholder={selectedMovie.Poster}
                onChange={(e) => setPoster(e.target.value)}
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div class="modal-footer">
          <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => removeMovie()}
            >
              Remove
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={() => editMovie()} type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMovie;
