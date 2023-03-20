const state = {
  todo: {
    items: [
      {
        checked: false,
        id: 714,
        key: "-NOqX_ZRWmYBbJS0hkJh",
        labelKey: "-NOqXGK_kreZB5AW_PFG",
        title: "study for exam",
      },
    ],
    allItems: [],
    addingTodoItem: false,
    addingTodoItemError: false,
    loadingList: false,
    loadingListError: false,
    updatingTodo: false,
    updatingTodoError: false,
    deletingTodoItem: false,
    deletingTodoItemError: false,
  },
  label: {
    labels: [{ id: 1463, key: "-NOqXGK_kreZB5AW_PFG", name: "School" }],
    addingLabel: false,
    addingLabelError: false,
    loadingLabels: false,
    loadingLabelError: false,
    updatingLabel: false,
    updatingLabelError: false,
    deletingLabel: false,
    deletingLabelError: false,
  },
};

export const testUseAppSelector = (f) => f(state);
