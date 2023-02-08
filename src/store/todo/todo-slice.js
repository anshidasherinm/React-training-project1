import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { keyValue } from "../../components/TodoItem";
import { updateLabel, deleteLabel } from "../label/label-thunk";

import {
  addTodoItem,
  getTodoList,
  updateTodo,
  deleteTodo,
  deleteLabelsinTodos,
  updateLabelsinTodos,
} from "./todo-thunk";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    allItems: [],
    addingTodoItem: false,
    addingTodoItemError: false,
    loadingList: false,
    loadingListError: false,
    updatingTodo: false,
    updatingTodoError: false,
    deletingTodoItem: false,
    deletingTodoItemError: false,
    updatingLabelInTodoItem: false,
    updatingLabelInTodoItemError: false,
    deletingLabelInTodoItem: false,
    deletingLabelInTodoItemError: false,
    changed: false,
  },
  reducers: {
    groupByLabel(state, action) {
      state.items = [...state.allItems];
      let groupedLabels = [];
      groupedLabels = state.items.filter(
        (item) => item.labelKey === action.payload
      );

      state.items = [...groupedLabels];
    },

    setBacktoAllItems(state) {
      state.items = [...state.allItems];
    },
  },
  extraReducers: (builder) => {
    // Add new Todo item
    builder.addCase(addTodoItem.pending, (state) => {
      state.addingTodoItem = true;
      state.addingTodoItemError = false;
    });
    builder.addCase(addTodoItem.fulfilled, (state, action) => {
      state.addingTodoItem = false;
      state.items = [
        ...state.items,
        {
          key: action.payload.name,
          ...action.meta.arg,
        },
      ];
      state.allItems = state.items;
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
      const items = [];
      for (const key in action.payload) {
        items.push({ key, ...action.payload[key] });
      }
      state.loadingList = false;
      state.items = [...items];
      state.allItems = state.items;
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
      state.updatingTodo = false;
      const items = state.items.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
      state.items = [...items];
      state.allItems = state.allItems.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
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
      state.deletingTodoItem = false;
      state.items = [
        ...state.items.filter((item) => item.key !== action.meta.arg.key),
      ];
      state.allItems = [
        ...state.allItems.filter((item) => item.key !== action.meta.arg.key),
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
