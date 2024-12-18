import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    showModal: (state) => {
      return !state;
    },
  },
});

const { actions, reducer } = modalSlice;

export const { showModal } = modalSlice.actions;
export default reducer;
