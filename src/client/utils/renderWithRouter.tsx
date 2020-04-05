import * as React from "react";
import { createMemoryHistory, MemoryHistory } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: MemoryHistory<any> } = {},
  mocks?: MockedResponse[]
) => {
  return {
    ...render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router history={history}>{ui}</Router>
      </MockedProvider>
    ),
    history,
  };
};

export const withApolloProvider = (
  ui: React.ReactElement,
  { mocks }: { mocks?: MockedResponse[] }
) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {ui}
  </MockedProvider>
);

export const withRouter = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: MemoryHistory<any> } = {}
) => {
  <Router history={history}>{ui}</Router>;
};
