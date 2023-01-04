import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
  },
  todosLoadingStatus: null,
  loadingStatus: null,
  reducers: {
    // showNotification(state, action) {
    //   state.notification = {
    //     status: action.payload.status,
    //     title: action.payload.title,
    //     message: action.payload.message,
    //   };
    // },
    setTodosLoadingStatus(state, action) {
      state.todosLoadingStatus = action.payload;
    },
    setStatus(state, action) {
      state.loadingStatus = action.payload;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
