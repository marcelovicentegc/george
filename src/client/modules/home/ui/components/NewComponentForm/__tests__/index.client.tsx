import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { NewComponentForm } from "..";

afterEach(cleanup);

describe("<NewComponentForm /> test case", () => {
  test("Full component rendering/navigation", () => {
    const { getByTestId } = renderWithRouter(
      <NewComponentForm groupId={{ id: "1" }} />
    );

    expect(getByTestId("new-component-form-wrapper")).toBeInTheDocument();
    expect(getByTestId("new-component-form")).toBeInTheDocument();
    expect(getByTestId("space-input-wrapper")).toBeInTheDocument();
    expect(getByTestId("component-input-wrapper")).toBeInTheDocument();
    expect(getByTestId("submit-button-wrapper")).toBeInTheDocument();
    expect(getByTestId("submit-button")).toBeInTheDocument();
    expect(getByTestId("send")).toBeInTheDocument();
  });
});
