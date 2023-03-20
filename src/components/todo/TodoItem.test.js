import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import "@testing-library/jest-dom";
import TodoItem from "components/todo/TodoItem";

jest.mock("store/redux-hooks");
describe("TodoItem", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(jest.fn());
  });
  it("renders if the checkbox is there", () => {
    render(<TodoItem />);

    const checkbox = screen.getByTestId("todo-checkbox");

    expect(checkbox).toBeInTheDocument();
  });
  it("renders if the itemText is there", () => {
    render(<TodoItem />);

    const todoTextItem = screen.getByTestId("todo-listItemtext");

    expect(todoTextItem).toBeInTheDocument();
  });
  it("renders if  remove icon are there", () => {
    render(<TodoItem />);

    const removeIcon = screen.getByTestId("todo-removeicon");

    expect(removeIcon).toBeInTheDocument();
  });

  test("renders if checkbox working fine", () => {
    render(<TodoItem />);

    const checkbox = screen
      .getByTestId("todo-checkbox")
      .querySelector('input[type="checkbox"]');
    const value = checkbox.checked;

    expect(checkbox).toHaveProperty("checked", value);
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", !value);
  });
});
