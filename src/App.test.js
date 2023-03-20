import { render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import "@testing-library/jest-dom";
import App from "./App";

jest.mock("store/redux-hooks");
describe("App", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    // const dispatch = jest.fn();
    useAppDispatch.mockReturnValue(jest.fn());
  });

  it("renders My Todo App text", () => {
    render(<App />);
    const linkElement = screen.getByText(/My Todo App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
