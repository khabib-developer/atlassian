import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: null,
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
  },
});

export const { setProject } = toDoSlice.actions;

export default toDoSlice.reducer;
