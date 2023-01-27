import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import todoSlice from "./todo/todo-slice";
import labelSlice from "./label/label-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    todo: todoSlice.reducer,
    label: labelSlice.reducer,
  },
});
export default store;
