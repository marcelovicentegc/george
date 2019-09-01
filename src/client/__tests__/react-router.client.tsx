import * as React from "react";
import { createMemoryHistory, MemoryHistory } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router";

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  }: { route?: string; history?: MemoryHistory<any> } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
};
