import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movieList: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.movieList = action.payload;
        },
        sortByDate: (state) => {
            state.movieList = state.movieList.sort((m1, m2) => m1.id - m2.id)
            console.log(state.movieList)
        },
        sortByRate: (state) => {
            state.movieList = state.movieList.sort((m1, m2) => m1.vote_average - m2.vote_average)
        }
    }
})

export const { setMovies, sortByDate, sortByRate } = movieSlice.actions

export default movieSlice.reducer