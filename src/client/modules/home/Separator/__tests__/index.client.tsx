import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { Separator } from "..";

afterEach(cleanup);

describe("<Separator /> test case", () => {
  test("Full component rendering/navigation", () => {
    const { getByTestId } = renderWithRouter(<Separator />);

    expect(getByTestId("separator")).toBeInTheDocument();
  });
});
