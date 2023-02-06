import { createSlice } from "@reduxjs/toolkit";
import { fetchCastById } from "./asyncThunk";

const castSlice = createSlice({
  name: "cast",
  initialState: {
    movieCast: [],

    status: "",
    error: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCastById.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchCastById.fulfilled, (state, action) => {
      state.movieCast = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchCastById.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});
export default castSlice.reducer;
