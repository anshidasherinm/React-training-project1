import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import LabelForm from "components/label/LabelForm";
import "@testing-library/jest-dom";

jest.mock("store/redux-hooks");

describe("LabelForm", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(jest.fn());
  });
  it("renders if the textfield is there", () => {
    //Arrange
    render(<LabelForm />);

    // Get input field.
    const input = screen.getByTestId("input-label");

    // Assert that input and submit button are present.
    expect(input).toBeInTheDocument();
  });
  it("renders if  button are there", () => {
    render(<LabelForm />);

    const submitButton = screen.getByTestId("label-add");
    expect(submitButton).toBeInTheDocument();
  });

  it("enables the submit button when the form is filled out", () => {
    render(<LabelForm />);

    const labelInput = screen.getByTestId("input-label2");
    const submit = screen.getByTestId("label-add");

    fireEvent.change(labelInput, { target: { value: "label" } });
    fireEvent.click(submit);
    expect(labelInput.value).toBe("");
  });
});
