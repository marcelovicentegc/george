import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, wait } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { StatusBar } from "..";
import { mockedGetThingsFromGroupId } from "../../../../../../utils/mockedQueries";

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

  test("Renders component with no data", async () => {
    const { getByText } = renderWithRouter(
      <StatusBar groupId={{ id: "1" }} />,
      {},
      []
    );

    await wait(() => {
      expect(getByText("There is no recent activity yet.")).toBeInTheDocument();
    });
  });

  test("Renders component with data", async () => {
    const { getByText } = renderWithRouter(
      <StatusBar groupId={{ id: "1" }} />,
      {},
      mockedGetThingsFromGroupId
    );

    await wait(() => {
      expect(
        getByText(
          "Aquarium's filter on the John's room turned Off @ 00-01-2020 12:00:00"
        )
      ).toBeInTheDocument();
    });
  });
});
