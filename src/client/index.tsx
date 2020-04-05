import * as React from "react";
import { render } from "react-dom";
import "./main.scss";
import "antd/lib/button/style/index";
import "antd/lib/table/style/index";
import "antd-mobile/lib/notice-bar/style/index";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "react-apollo";
import { Routes } from "./routes/index";
import { Provider } from "mobx-react";
import { rootStore } from "./stores/RootStore";

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path, source, positions }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    createUploadLink({
      uri: "http://127.0.0.1:4000/api",
      credentials: "include",
    }),
  ]),
  cache: new InMemoryCache(),
});

const App: React.SFC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider {...rootStore}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
