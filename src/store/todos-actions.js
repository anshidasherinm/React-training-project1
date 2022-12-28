import { uiActions } from "./ui-slice";
import { todoActions } from "./todos-slice";
export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-training-ad656-default-rtdb.firebaseio.com/todos.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      // console.log(data.items);
      return data;
    };

    try {
      const toDoDatas = await fetchData();
      // console.log(toDoDatas);
      if (toDoDatas === null) {
        throw new Error("Empty todo List");
      }
      dispatch(
        todoActions.replaceTodos({
          items: toDoDatas.items || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: error.message === "Empty todo List" ? "success" : "error",
          title: error.message === "Empty todo List" ? "Empty" : "Error!",
          message: error.message,
        })
      );
    }
  };
};

export const sendTodoData = (todo) => {
  //action craetor thunk
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Updating...",
        message: "Updating todo data! ",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-training-ad656-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: todo.items,
            // changed: cart.changed,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Updating todo data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success !",
          message: "Updated todo data successfully ",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};
