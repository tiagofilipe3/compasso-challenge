import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList";

jest.mock("../../actions/user");

describe("UserList", () => {
  it("should render correctly", () => {
    const { getByText } = render(<UserList />);
    const linkElement = getByText(/Usuários GitHub/i);
    expect(linkElement).toBeInTheDocument();
  });
});
