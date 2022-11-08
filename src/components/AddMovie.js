import React, {useState} from "react";

function AddMovie({data, dataHandler}) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [runtime, setRuntime] = useState('')
  const [poster, setPoster] = useState('')

  const addMovie = async () => {
    let id = data.movies[data.movies.length - 1].id + 1;
    const movie = {
        'id': id,
        'Title': title,
        'Year': year,
        'Runtime': runtime,
        'Poster': poster
    }
    await data.movies.push(movie)
    dataHandler(data)
  }

  return (
    <div
      class="modal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content modal-main">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Movie
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
                onChange={(e) => setRuntime(e.target.value)}
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
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button onClick={() => addMovie()} type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
