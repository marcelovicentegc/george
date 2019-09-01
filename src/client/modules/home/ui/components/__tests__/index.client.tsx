import * as React from "react";
import { Home } from "../../";
import { renderWithRouter } from "../../../../../utils/renderWithRouter";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, wait } from "@testing-library/react";

afterEach(cleanup);

describe("<Home /> test case", () => {
  test("Full component rendering/navigation", async () => {
    const { getByTestId } = renderWithRouter(<Home groupId={{ id: "1" }} />, {
      route: "/"
    });

    await wait(() => {
      expect(getByTestId("home-wrapper")).toBeInTheDocument();
      expect(getByTestId("home")).toBeInTheDocument();
    });
  });
});
