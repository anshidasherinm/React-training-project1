import { render, screen } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { testUseAppSelector } from "store/test-app-selector";
import "@testing-library/jest-dom";
import * as redux from "react-redux";
import { shallow } from "enzyme";
import LabelContainer from "components/label/LabelContainer";
import LabelItem from "components/label/LabelItem";

jest.mock("store/redux-hooks");
describe("LabelContainer", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    // const dispatch = jest.fn();
    useAppDispatch.mockReturnValue(jest.fn());
  });
  //   it("renders No Labels", () => {
  //     //Arrange
  //     render(<LabelContainer />);

  //     //Act
  //     //...nothing

  //     //Assert
  //     const emptyList = screen.getByText("No Labels");
  //     expect(emptyList).toBeInTheDocument();
  //   });

  // it("renders No Labels", () => {
  //   //Arrange
  //   render(<LabelContainer />);
  //   const useSelectorMock = jest
  //     .spyOn(redux, "useSelector")
  //     .mockReturnValueOnce([
  //       // { id: 1463, key: "-NOqXGK_kreZB5AW_PFG", name: "School" },
  //     ]);

  //   //Act
  //   //...nothing

  //   //Assert
  //   const emptyList = screen.getByText("No Labels");
  //   expect(emptyList).toBeInTheDocument();
  // });

  it("renders a label", async () => {
    render(<LabelContainer />);
    const enzymeWrapper = shallow(
      <LabelItem id={1463} key="-NOqXGK_kreZB5AW_PFG" name="School" />
    );
    expect(enzymeWrapper.text()).toMatchSnapshot();
  });
});
