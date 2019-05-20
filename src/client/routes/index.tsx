import * as React from "react";
import { Query } from "react-apollo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  getGroupIdFromUserId,
  getUserIdFromSession
} from "../../server/schema/graphql/Queries.graphql";
import AuthConnector from "../modules/auth/AuthConnector";
import ControllerConnector from "../modules/controller/ControllerConnector";
import Loading from "../modules/utils/Loading";
import {
  GetGroupIdFromUserIdQuery,
  GetGroupIdFromUserIdVariables,
  GetUserIdFromSessionQuery
} from "../__types__/typeDefs";

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
                  component={() => <AuthConnector user={null} groupId={null} />}
                />
              );
            const user = data.getUserIdFromSession;
            return (
              <Query<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdVariables>
                query={getGroupIdFromUserId}
                variables={{ id: data.getUserIdFromSession.id }}
              >
                {({ data, loading }) => {
                  if (loading) return null;
                  if (!data || !data.getGroupIdFromUserId) return null;
                  return (
                    <>
                      <Route
                        exact={true}
                        path="/"
                        component={() => (
                          <AuthConnector
                            user={user}
                            groupId={data.getGroupIdFromUserId}
                          />
                        )}
                      />
                      <Route
                        exact={true}
                        path="/:space/:name"
                        component={() => (
                          <ControllerConnector
                            groupId={data.getGroupIdFromUserId}
                          />
                        )}
                      />
                    </>
                  );
                }}
              </Query>
            );
          }}
        </Query>
      </Switch>
    </BrowserRouter>
  );
};
