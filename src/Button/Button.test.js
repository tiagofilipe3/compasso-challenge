import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("calls onClick prop on button click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button id="btnClick" onClick={onClick}>
        Button
      </Button>
    );

    fireEvent.click(getByText("Button"));
    expect(onClick).toBeCalled();
  });

  it("should render correctly", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button id="btnRender" onClick={onClick}>
        Button
      </Button>
    );

    getByText("Button");
  });
});
