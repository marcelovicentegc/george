import * as React from "react";
import Home from "../..";
import { renderWithRouter } from "../../../../../utils/renderWithRouter";
import "@testing-library/jest-dom/extend-expect";

describe("<Home /> test case", () => {
  test("Full component rendering/navigation", () => {
    const { container, getByTestId } = renderWithRouter(
      <Home groupId={{ id: "1" }} />
    );

    expect(getByTestId("home-wrapper")).toBeInTheDocument();
    expect(getByTestId("home")).toBeInTheDocument();
  });
});
