import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { NewComponentButton } from "..";

afterEach(cleanup);

describe("<NewComponentButton /> test case", () => {
  test("Full component rendering/navigation", () => {
    const { getByTestId } = renderWithRouter(<NewComponentButton />);

    expect(getByTestId("manage-component-button-wrapper")).toBeInTheDocument();
    expect(getByTestId("manage-component-button")).toBeInTheDocument();
  });
});
