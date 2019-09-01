import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, wait } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { StatusBar } from "..";

afterEach(cleanup);

describe("<StatusBar /> test case", () => {
  test("Full component rendering/navigation", async () => {
    const { getByTestId } = renderWithRouter(
      <StatusBar groupId={{ id: "1" }} />
    );

    await wait(() => {
      expect(getByTestId("status-bar-wrapper")).toBeInTheDocument();
      expect(getByTestId("status-bar")).toBeInTheDocument();
    });
  });
});
