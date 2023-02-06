import { createSlice, current } from "@reduxjs/toolkit";
import {
  fetchCinemaByName,
  fetchCinemaTopRates,
  fetchMovieById,
} from "./asyncThunk";

const cinemaSlice = createSlice({
  name: "cinema",
  initialState: {
    searchValue: "",
    isSearching: false,

    currentMovie: false,

    movieQuary: [],
    popularMovie: [],
    history: [],

    status: "",
    error: "null",
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setIsSerching(state, action) {
      state.isSearching = action.payload;
    },
    setHistory(state, action) {
      let dublIndex = state.history.findIndex(
        (obj) => obj.id === state.currentMovie.id
      );
      state.history.push(state.currentMovie);
      if (dublIndex !== -1) {
        state.history.splice(dublIndex, 1);
      }
    },
    clearHistory(state, action) {
      state.history.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCinemaTopRates.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchCinemaTopRates.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.popularMovie = action.payload;
    });
    builder.addCase(fetchCinemaTopRates.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(fetchCinemaByName.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchCinemaByName.fulfilled, (state, action) => {
      state.movieQuary = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchCinemaByName.rejected, (state, action) => {
      state.status = "rejected";
      state.movieQuary = action.payload;
      state.error = action.payload;
    });

    builder.addCase(fetchMovieById.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.currentMovie = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchMovieById.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});
export const { setSearchValue, setIsSerching, setHistory, clearHistory } =
  cinemaSlice.actions;
export default cinemaSlice.reducer;
