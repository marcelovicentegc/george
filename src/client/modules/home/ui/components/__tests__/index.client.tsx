import * as React from "react";
import { render, getByTestId } from "@testing-library/react";
import Home from "../..";
import { renderWithRouter } from "../../../../../__tests__/react-router.client";
import "@testing-library/jest-dom/extend-expect";

describe("<Home /> test case", () => {
  test("Full component rendering/navigation", () => {
    const { container, getByTestId } = renderWithRouter(
      <Home groupId={{ id: "1" }} />
    );

    expect(getByTestId("home-wrapper")).toHaveTextContent("Hello world!");
  });
});
