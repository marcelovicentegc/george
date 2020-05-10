import * as React from "react";
import { Query } from "react-apollo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  getGroupIdFromUserId,
  getUserIdFromSession,
  getUserUsernameFromId,
} from "../../server/schema/graphql/Queries.graphql";
import { Loading } from "../modules/system/Loading";
import {
  GetUserIdFromSessionQuery,
  GetGroupIdFromUserIdQuery,
  GetGroupIdFromUserIdQueryVariables,
  GetUserUsernameFromIdQuery,
  GetUserUsernameFromIdQueryVariables,
} from "../gql";
import { Header } from "../modules/system/Header";

const AuthConnector = React.lazy(() => import("../modules/auth/AuthConnector"));
const ControllerConnector = React.lazy(() =>
  import("../modules/controller/ControllerConnector")
);

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <React.Suspense fallback={<Loading />}>
          <Query<GetUserIdFromSessionQuery> query={getUserIdFromSession}>
            {({ data, loading }) => {
              if (loading) return <Loading />;

              if (!data || !data.getUserIdFromSession)
                return (
                  <Route exact path="/" component={() => <AuthConnector />} />
                );

              const user = data.getUserIdFromSession;

              return (
                <Query<
                  GetGroupIdFromUserIdQuery,
                  GetGroupIdFromUserIdQueryVariables
                >
                  query={getGroupIdFromUserId}
                  variables={{ id: data.getUserIdFromSession.id }}
                >
                  {({ data, loading }) => {
                    if (loading) return <Loading />;

                    if (!data || !data.getGroupIdFromUserId) return null;

                    return (
                      <>
                        <Query<
                          GetUserUsernameFromIdQuery,
                          GetUserUsernameFromIdQueryVariables
                        >
                          query={getUserUsernameFromId}
                          variables={{
                            id: user.id,
                          }}
                        >
                          {({ data, loading }) => {
                            if (loading) return <Loading />;

                            if (!data || !data.getUserUsernameFromId)
                              return null;

                            return <Header />;
                          }}
                        </Query>
                        <Route
                          exact
                          path="/"
                          component={() => (
                            <AuthConnector
                              user={user}
                              groupId={data.getGroupIdFromUserId}
                            />
                          )}
                        />
                        <Route
                          exact
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
        </React.Suspense>
      </Switch>
    </BrowserRouter>
  );
};
