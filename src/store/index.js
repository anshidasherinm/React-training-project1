import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/todo-slice";
import labelSlice from "./label/label-slice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    label: labelSlice.reducer,
  },
});
export default store;
