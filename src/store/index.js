import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import todoSlice from "./todo/todo-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, todo: todoSlice.reducer },
});
export default store;
