import * as React from "react";
import { Query } from "react-apollo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUserIdFromSession } from "../../server/schema/graphql/Queries.graphql";
import AuthConnector from "../modules/auth/AuthConnector";
import Loading from "../modules/utils/Loading";
import { GetUserIdFromSessionQuery } from "../__types__/typeDefs";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Query<GetUserIdFromSessionQuery> query={getUserIdFromSession}>
          {({ data, loading }) => {
            if (loading) return <Loading />;
            if (!data || !data.getUserIdFromSession)
              return (
                <Route
                  exact={true}
                  path="/"
                  component={() => <AuthConnector user={null} />}
                />
              );
            return (
              <Route
                exact={true}
                path="/"
                component={() => (
                  <AuthConnector user={data.getUserIdFromSession} />
                )}
              />
            );
          }}
        </Query>
      </Switch>
    </BrowserRouter>
  );
};
