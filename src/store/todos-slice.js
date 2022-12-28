import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceTodos(state, action) {
      state.items = action.payload.items;
    },

    addItemtodo(state, action) {
      const newItem = action.payload;
      state.changed = true;
      state.items = [...state.items, newItem];
      // console.log(state.items);//
    },
    removeItemFromTodos(state, action) {
      const id = action.payload;
      const items = state.items.filter((item) => item.id !== id);
      state.items = items;
      state.changed = true;
    },
    addCheckHandler(state, action) {
      const id = action.payload;
      // console.log(id);
      const newTodoList = state.items.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      state.items = newTodoList;
      state.changed = true;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
