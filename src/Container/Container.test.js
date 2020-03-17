import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "./Container";

describe("Container", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Container data-testid="container" />);
    getByTestId("container");
  });

  it("should change flex-direction", () => {
    const { getByTestId } = render(
      <Container column data-testid="container" />
    );
    const node = getByTestId("container");
    expect(node).toHaveStyle("flex-direction: column");
  });
});
