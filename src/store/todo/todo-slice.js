import { createSlice } from "@reduxjs/toolkit";
import { keyValue } from "../../components/TodoItem";
import { addTodoItem, getTodoList, updateTodo, deleteTodo } from "./todo-thunk";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    addingTodoItem: false,
    addingTodoItemError: false,
    loadingList: false,
    loadingListError: false,
    updatingTodo: false,
    updatingTodoError: false,
    deletingTodoItem: false,
    deletingTodoItemError: false,
    // key: null,
    // not using now
    changed: false,
  },
  reducers: {
    // setKey(state, action) {
    //   console.log(action.payload);
    //   state.key = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // Add new Todo item
    builder.addCase(addTodoItem.pending, (state) => {
      state.addingTodoItem = true;
      state.addingTodoItemError = false;
    });
    builder.addCase(addTodoItem.fulfilled, (state, action) => {
      console.log({ state, action });
      state.addingTodoItem = false;
      state.items = [
        ...state.items,
        { key: action.payload.name, ...action.meta.arg },
      ];
    });
    builder.addCase(addTodoItem.rejected, (state) => {
      state.addingTodoItem = false;
      state.addingTodoItemError = true;
    });
    // Get Todo List
    builder.addCase(getTodoList.pending, (state) => {
      state.loadingList = true;
    });
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      console.log(state, action.payload);
      const items = [];
      for (const key in action.payload) {
        items.push({ key, ...action.payload[key] });
      }
      state.loadingList = false;
      state.items = [...items];
    });
    builder.addCase(getTodoList.rejected, (state) => {
      state.loadingList = false;
      state.loadingListError = true;
    });
    // Update todo Item
    builder.addCase(updateTodo.pending, (state) => {
      state.updatingTodo = true;
      state.updatingTodoError = false;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      console.log({ state, action });
      state.updatingTodo = false;
      const items = state.items.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
      state.items = [...items];
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.updatingTodo = false;
      state.updatingTodoError = true;
    });

    //Delete todo Item
    builder.addCase(deleteTodo.pending, (state) => {
      state.deletingTodoItem = true;
      state.deletingTodoItemError = false;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      console.log({ state, action });
      console.log(action.meta.arg.key);
      state.deletingTodoItem = false;
      state.items = [
        ...state.items.filter((item) => item.key !== action.meta.arg.key),
      ];
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.deletingTodoItem = false;
      state.deletingTodoItemError = true;
    });
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
