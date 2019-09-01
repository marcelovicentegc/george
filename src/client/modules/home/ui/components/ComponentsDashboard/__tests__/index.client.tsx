import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, wait } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { ComponentsDashboard } from "..";

afterEach(cleanup);

describe("<ComponentsDashboard /> test case", () => {
  test("Full component rendering/navigation", async () => {
    const { getByTestId } = renderWithRouter(
      <ComponentsDashboard groupId={{ id: "1" }} />,
      {
        route: "/"
      }
    );

    await wait(() => {
      expect(getByTestId("components-dashboard-wrapper")).toBeInTheDocument();
      expect(getByTestId("components-dashboard")).toBeInTheDocument();
    });
  });
});
