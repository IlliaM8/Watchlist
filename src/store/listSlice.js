import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    myLists: [],
    buffer: {},
  },
  reducers: {
    createList(state, action) {
      state.myLists.push(action.payload);
    },
    removeList(state, action) {
      state.myLists = state.myLists.filter((o) => o.id !== action.payload);
    },

    addToBuffer(state, action) {
      state.buffer = action.payload;
    },
    removeBuffer(state, action) {
      state.buffer = {};
    },
    addList(state, action) {
      const { movie, id } = action.payload;

      state.myLists.find((list) => list.id === id).list.push(movie);
    },
  },
});
export default listSlice.reducer;
export const { createList, removeList, addToBuffer, removeBuffer, addList } =
  listSlice.actions;
