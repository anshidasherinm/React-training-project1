import { render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import CompletedTodoList from "./CompletedTodoList";
import "@testing-library/jest-dom";
import { getTodoList } from "store/todo/todo-thunk";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";

jest.mock("store/redux-hooks");
jest.mock("store/todo/todo-thunk");

describe("CompletedTodoList", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(jest.fn());
  });
  //   it("renders No completed todos ", () => {
  //     //Arrange
  //     render(<CompletedTodoList />);

  //     //Act
  //     //...nothing

  //     //Assert
  //     const emptyList = screen.getByText(/No completed todos/i);
  //     expect(emptyList).toBeInTheDocument();
  //   });
  it("We show a todo todo in CompletedTodo", async () => {
    render(<CompletedTodoList />);

    const enzymeWrapper = shallow(
      <TodoItem
        id={714}
        key="-NOqX_ZRWmYBbJS0hkJh"
        title="study for exam"
        labelKey="-NOqXGK_kreZB5AW_PFG"
        checked={true}
      />
    );
    expect(enzymeWrapper.text()).toMatchSnapshot(); // 1
  });
});
