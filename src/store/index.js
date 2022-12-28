import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import todosSlice from "./todos-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, todo: todosSlice.reducer },
});
export default store;
