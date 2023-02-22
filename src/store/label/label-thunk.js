import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../utils";

const addLabel = createAsyncThunk("label/addLabel", async (data, thunkAPI) => {
  const response = await apiService(data, "POST", "label");
  return response;
});

const getLabelList = createAsyncThunk(
  "label/getLabel",
  async (data, thunkAPI) => {
    const response = await apiService(data, "GET", "label");
    return response;
  }
);

const updateLabel = createAsyncThunk(
  "label/updateLabel",
  async (data, thunkAPI) => {
    const response = await apiService(data, "PUT", "label");
    return response;
  }
);

const deleteLabel = createAsyncThunk(
  "label/deleteLabel",
  async (data, thunkAPI) => {
    const response = await apiService(data, "DELETE", "label");
    return response;
  }
);

export { addLabel, deleteLabel, getLabelList, updateLabel };
