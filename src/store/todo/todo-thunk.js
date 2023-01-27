import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils/";

const addTodoItem = createAsyncThunk(
  "todo/addTodoItem",
  async (data, thunkAPI) => {
    const response = await apiService(data, "POST");
    return response;
  }
);

const getTodoList = createAsyncThunk(
  "todo/getTodoList",
  async (data, thunkAPI) => {
    const response = await apiService(data, "GET");
    // console.log(response);
    return response;
  }
);

const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (data, thunkAPI) => {
    const response = await apiService(data, "PUT");
    return response;
  }
);

const updateLabelsinTodos = createAsyncThunk(
  "todo/updateLabelInTodos",
  async (data, thunkAPI) => {
    const response = await apiService(data, "PUT", "todo", true);
    console.log(data);
    console.log(response);
  }
);

const deleteLabelsinTodos = createAsyncThunk(
  "todo/deleteLabelsinTodos",
  async (data, thunkAPI) => {
    const response = await apiService(data, "PUT", "todo", true);
    console.log(data);
    console.log(response);
  }
);

const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await apiService(data, "DELETE");
    return response;
  }
);

export {
  addTodoItem,
  getTodoList,
  updateTodo,
  deleteTodo,
  updateLabelsinTodos,
  deleteLabelsinTodos,
};
