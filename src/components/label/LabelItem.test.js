import { render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import "@testing-library/jest-dom";
import LabelItem from "components/label/LabelItem";

jest.mock("store/redux-hooks");
describe("TodoItem", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(jest.fn());
  });

  it("renders if the label input is there", () => {
    render(<LabelItem />);
    const labelInput = screen.getByTestId("label-name-input");
    expect(labelInput).toBeInTheDocument();
  });

  it("renders if the edit icon is there", () => {
    render(<LabelItem />);
    const labelEdit = screen.getByTestId("label-editIcon");
    expect(labelEdit).toBeInTheDocument();
  });

  it("renders if  remove icon is there", () => {
    render(<LabelItem />);
    const labelDelete = screen.getByTestId("label-deleteIcon");
    expect(labelDelete).toBeInTheDocument();
  });
});
