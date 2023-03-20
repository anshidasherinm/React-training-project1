import { getByTestId, render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import "@testing-library/jest-dom";
import TodoForm from "./TodoForm";
jest.mock("store/redux-hooks");
describe("TodoForm", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(jest.fn());
  });
  it("renders if the textfield is there", () => {
    render(<TodoForm />);
    const input = screen.getByTestId("input-todo-title");
    expect(input).toBeInTheDocument();
  });
  it("renders if the select is there", () => {
    render(<TodoForm />);

    const select = screen.getByTestId("label-select");
    expect(select).toBeInTheDocument();
  });
  it("renders if  button are there", () => {
    //Arrange
    render(<TodoForm />);

    // Get input field.

    const submitButton = screen.getByTestId("todo-add");

    // Assert that submit button is present.
    expect(submitButton).toBeInTheDocument();
  });
});
