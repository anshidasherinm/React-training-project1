import { render, screen } from "@testing-library/react";
import CompletedTodoList from "./CompletedTodoList";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import "@testing-library/jest-dom";
import NewTodoList from "./NewTodoList";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";

jest.mock("store/redux-hooks");
describe("NewRodoList", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    // const dispatch = jest.fn();
    useAppDispatch.mockReturnValue(jest.fn());
  });
  //   it("renders Add a todo ", () => {
  //     //Arrange
  //     render(<NewTodoList />);

  //     //Act
  //     //...nothing

  //     //Assert
  //     const emptyList = screen.getByText("Add a todo");
  //     expect(emptyList).toBeInTheDocument();
  //   });
  // });
  it("We show a todo  in NewTodoList", async () => {
    render(<NewTodoList />);

    const enzymeWrapper = shallow(
      <TodoItem
        id={714}
        key="-NOqX_ZRWmYBbJS0hkJh"
        title="study for exam"
        labelKey="-NOqXGK_kreZB5AW_PFG"
        checked={false}
      />
    );
    expect(enzymeWrapper.text()).toMatchSnapshot();
  });
});
