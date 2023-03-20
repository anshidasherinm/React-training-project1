import { labelActions, labelReducer } from "store/label/label-slice";
import {
  addLabel,
  deleteLabel,
  getLabelList,
  updateLabel,
} from "store/label/label-thunk";

describe("label slice", () => {
  describe("reducers", () => {
    const initialState = {
      labels: [],
      addingLabel: false,
      addingLabelError: false,
      loadingLabels: false,
      loadingLabelError: false,
      updatingLabel: false,
      updatingLabelError: false,
      deletingLabel: false,
      deletingLabelError: false,
    };

    it("sets fetching true when fetchList is pending", () => {
      const action = { type: getLabelList.pending.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        labels: [],
        addingLabel: false,
        addingLabelError: false,
        loadingLabels: true,
        loadingLabelError: false,
        updatingLabel: false,
        updatingLabelError: false,
        deletingLabel: false,
        deletingLabelError: false,
      });
    });

    it("sets fetching true when fetchList is fulfilled", () => {
      const action = { type: getLabelList.fulfilled.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        labels: [],
        loadingLabels: false,
      });
    });

    it("sets fetching true when fetchList is rejected", () => {
      const action = { type: getLabelList.rejected.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loadingLabels: false,
        loadingLabelError: true,
      });
    });

    it("renders adding pending", () => {
      const action = { type: addLabel.pending.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        addingLabel: true,
        addingLabelError: false,
      });
    });

    // it("renders adding fulfilled", () => {
    //   const action = { type: addLabel.fulfilled.type };
    //   const state = labelReducer(initialState, {
    //     payload: { name: "label 1" },
    //     meta: { arg: "-NPRUVpcfChyfpmH_JDd" },
    //   });

    //   expect(state).toEqual({
    //     ...initialState,
    //     labels: [
    //       {
    //         key: "-NPRUVpcfChyfpmH_JDd",
    //         name: "label 1",
    //       },
    //     ],
    //     addingLabel: false,
    //   });
    // });

    it("sets adding rejected", () => {
      const action = { type: addLabel.rejected.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        addingLabel: false,
        addingLabelError: true,
      });
    });

    it("render upadating label pending", () => {
      const action = { type: updateLabel.pending.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        updatingLabel: true,
        updatingLabelError: false,
      });
    });

    it("render upadating label rejected", () => {
      const action = { type: updateLabel.rejected.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        updatingLabel: false,
        updatingLabelError: true,
      });
    });

    it("render deleteing label pending", () => {
      const action = { type: deleteLabel.pending.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        deletingLabel: true,
        deletingLabelError: false,
      });
    });

    it("render deleting label rejected", () => {
      const action = { type: deleteLabel.rejected.type };
      const state = labelReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        deletingLabel: false,
        deletingLabelError: true,
      });
    });
  });
});
