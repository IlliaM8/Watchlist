import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalNewWatchlist: false,
    modalAddCimena: false,
  },
  reducers: {
    setModalClose(state, action) {
      state.modalNewWatchlist = false;
      state.modalAddCimena = false;
    },
    setNewWatchlistActive(state, action) {
      state.modalNewWatchlist = true;
    },
    setAddCinemaActive(state, action) {
      state.modalAddCimena = true;
    },
  },
});
export const { setModalClose, setNewWatchlistActive, setAddCinemaActive } =
  modalSlice.actions;
export default modalSlice.reducer;
