import * as React from "react";
import "./main.scss";
import "antd/lib/button/style/index";
import "antd/lib/table/style/index";
import { render } from "react-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "react-apollo";
import { Routes } from "./routes/index";
import { Provider as MobxProvider } from "mobx-react";
import { rootStore } from "./stores/RootStore";
import { serverPort } from "./config";
import { Provider as ThemeProvider, themes } from "@fluentui/react-northstar";

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
      uri: `http://127.0.0.1:${serverPort}/api`,
      credentials: "include",
    }),
  ]),
  cache: new InMemoryCache(),
});

const App: React.SFC = () => {
  return (
    <ApolloProvider client={client}>
      <MobxProvider {...rootStore}>
        <ThemeProvider theme={themes.teams}>
          <Routes />
        </ThemeProvider>
      </MobxProvider>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
