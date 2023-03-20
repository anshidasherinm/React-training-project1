import { todoReducer } from "store/todo/todo-slice";
import {
  addTodoItem,
  deleteTodo,
  getTodoList,
  updateTodo,
} from "store/todo/todo-thunk";

describe("todo slice", () => {
  describe("reducers", () => {
    const initialState = {
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
    };

    it("sets fetching true when todolist is pending", () => {
      const action = { type: getTodoList.pending.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loadingList: true,
      });
    });

    it("sets fetching true when todolist is fulfilled", () => {
      const action = { type: getTodoList.fulfilled.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loadingList: false,
      });
    });

    it("sets fetching rejected", () => {
      const action = { type: getTodoList.rejected.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loadingList: false,
        loadingListError: true,
      });
    });

    it("renders adding pending", () => {
      const action = { type: addTodoItem.pending.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        addingTodoItem: true,
        addingTodoItemError: false,
      });
    });

    it("renders adding rejected", () => {
      const action = { type: addTodoItem.rejected.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        addingTodoItem: false,
        addingTodoItemError: true,
      });
    });

    it("sets updation pending", () => {
      const action = { type: updateTodo.pending.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        updatingTodo: true,
        updatingTodoError: false,
      });
    });

    it("sets updation fulfilled", () => {
      const action = { type: updateTodo.fulfilled.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        updatingTodo: false,
      });
    });

    it("sets updation rejected", () => {
      const action = { type: updateTodo.rejected.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        updatingTodo: false,
        updatingTodoError: true,
      });
    });

    it("sets deletion pending", () => {
      const action = { type: deleteTodo.pending.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        deletingTodoItem: true,
        deletingTodoItemError: false,
      });
    });

    it("sets deletion fulfilled", () => {
      const action = { type: deleteTodo.fulfilled.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        deletingTodoItem: false,
      });
    });

    it("sets deletion rejected", () => {
      const action = { type: deleteTodo.rejected.type };
      const state = todoReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        deletingTodoItem: false,
        deletingTodoItemError: true,
      });
    });
  });
});
