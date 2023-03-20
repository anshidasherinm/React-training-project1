import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "store/todo/todo-slice";
import labelSlice from "store/label/label-slice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    label: labelSlice.reducer,
  },
});

export default store;
