import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, wait } from "@testing-library/react";
import { renderWithRouter } from "../../../../../../utils/renderWithRouter";
import { Components } from "..";
import { act } from "react-dom/test-utils";
import { mockedGetThingsFromGroupId } from "../../../../../../utils/mockedQueries";

afterEach(cleanup);

describe("<Components /> test case", () => {
  test("Renders loading feedback and no components", async () => {
    const { container } = renderWithRouter(<Components groupId={"1"} />, {
      route: "/",
    });

    act(() => {
      expect(container.innerHTML).toMatch("loading...");
    });

    await wait(() => {
      act(() =>
        expect(container.innerHTML).toMatch("You have no components yet")
      );
    });
  });

  test("Renders component with mocked data", async () => {
    const { container, getByText, findAllByTestId } = renderWithRouter(
      <Components groupId={"1"} />,
      {
        route: "/",
      },
      mockedGetThingsFromGroupId
    );

    const items = await findAllByTestId(/component-[0-9]/);

    await wait(() => {
      expect(items).toHaveLength(3);
      expect(getByText("Living room")).toBeInTheDocument();
      expect(getByText("Balcony lamp")).toBeInTheDocument();
      expect(getByText("living-room/balcony-lamp")).toBeInTheDocument();
      expect(getByText("Ashley's room")).toBeInTheDocument();
      expect(getByText("TV")).toBeInTheDocument();
      expect(getByText("ashleys-room/tv")).toBeInTheDocument();
      expect(getByText("John's room")).toBeInTheDocument();
      expect(getByText("Aquarium's filter")).toBeInTheDocument();
      expect(getByText("johns-room/aquariums-filter")).toBeInTheDocument();
    });
  });
});
