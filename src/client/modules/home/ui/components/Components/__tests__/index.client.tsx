import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, wait } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { Components } from "..";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("<Components /> test case", () => {
  test("Renders loading feedback and no components", async () => {
    const { container } = renderWithRouter(
      <Components groupId={{ id: "1" }} />,
      {
        route: "/"
      }
    );

    act(() => {
      expect(container.innerHTML).toMatch("loading...");
    });

    await wait(() => {
      expect(container.innerHTML).toMatch("You have no components yet");
    });
  });
});
