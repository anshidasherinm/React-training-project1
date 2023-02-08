import { createSlice, current } from "@reduxjs/toolkit";

import {
  addLabel,
  deleteLabel,
  getLabelList,
  updateLabel,
} from "./label-thunk";

const labelSlice = createSlice({
  name: "label",
  initialState: {
    labels: [],
    groupLabels: [],
    addingLabel: false,
    addingLabelError: false,
    loadingLabels: false,
    loadingLabelError: false,
    updatingLabel: false,
    updatingLabelError: false,
    deletingLabel: false,
    deletingLabelError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add new Todo item
    builder.addCase(addLabel.pending, (state) => {
      state.addingLabel = true;
      state.addingLabelError = false;
    });
    builder.addCase(addLabel.fulfilled, (state, action) => {
      state.addingLabel = false;
      state.labels = [
        ...state.labels,
        { key: action.payload.name, ...action.meta.arg },
      ];
    });
    builder.addCase(addLabel.rejected, (state) => {
      state.addingLabel = false;
      state.addingLabelError = true;
    });

    // Get Label List
    builder.addCase(getLabelList.pending, (state) => {
      state.loadingLabels = true;
      state.loadingLabelError = false;
    });
    builder.addCase(getLabelList.fulfilled, (state, action) => {
      const labelItems = [];
      for (const key in action.payload) {
        labelItems.push({ key, ...action.payload[key] });
      }
      state.loadingLabels = false;
      state.labels = [...labelItems];
    });
    builder.addCase(getLabelList.rejected, (state) => {
      state.loadingLabels = false;
      state.loadingLabelError = true;
    });

    // Update todo Item
    builder.addCase(updateLabel.pending, (state) => {
      state.updatingLabel = true;
      state.updatingLabelError = false;
    });

    builder.addCase(updateLabel.fulfilled, (state, action) => {
      state.updatingLabel = false;
      const labels = state.labels.map((item) => {
        if (item.key === action.payload.key) {
          return action.payload;
        }
        return item;
      });
      state.labels = [...labels];
    });
    builder.addCase(updateLabel.rejected, (state) => {
      state.updatingLabel = false;
      state.updatingLabelError = true;
    });

    //Delete todo Item
    builder.addCase(deleteLabel.pending, (state) => {
      state.deletingLabel = true;
      state.deletingLabelError = false;
    });
    builder.addCase(deleteLabel.fulfilled, (state, action) => {
      state.deletingLabel = false;
      state.labels = [
        ...state.labels.filter((item) => item.key !== action.meta.arg.key),
      ];
    });
    builder.addCase(deleteLabel.rejected, (state) => {
      state.deletingLabel = false;
      state.deletingLabelError = true;
    });
  },
});

export const labelActions = labelSlice.actions;
export default labelSlice;
