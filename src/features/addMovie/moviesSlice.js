import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    watchedMovies: [],
    watchListMovies: [],
  },
  reducers: {
    addMoviesToWatchList(state, action) {
      state.watchListMovies.push(action.payload);
    },
    addMovieToWatched(state, action){
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload.id
        );
     
        state.watchedMovies.push(action.payload)
    }

  },
});

export const selectAllWatchListMovies =(state) => state.movies.watchListMovies;

export const {addMoviesToWatchList, addMovieToWatched} = moviesSlice.actions

export default  moviesSlice.reducer;