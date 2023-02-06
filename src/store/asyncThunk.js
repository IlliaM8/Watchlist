import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCinemaTopRates = createAsyncThunk(
  "sinema/fetchSinemaTopRates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      if (!response.ok) {
        throw new Error("server Error");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const fetchCinemaByName = createAsyncThunk(
  "cinema/fetchCinemaByName",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const value = state.cinema.searchValue;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("server Error");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const fetchMovieById = createAsyncThunk(
  "cinema/fetchMovieById",
  async (id, { rejectWithValue, getState }) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchCastById = createAsyncThunk(
  "cinema/fetchCinemaById",
  async (id, { rejectWithValue, getState }) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("server Error");
      }
      const data = await response.json();

      return data.cast;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
