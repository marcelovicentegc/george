import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { ErrorMessage } from "..";

afterEach(cleanup);

describe("<ErrorMessage /> test case", () => {
  test("Full component rendering/navigation", () => {
    const errorMessage = "Oooops, this is an error message";
    const { getByTestId, getByText } = renderWithRouter(
      <ErrorMessage errorMessage={errorMessage} />
    );

    expect(getByTestId("error-message-wrapper")).toBeInTheDocument();
    expect(getByTestId("error-message")).toBeInTheDocument();
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
