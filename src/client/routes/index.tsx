import * as React from "react";
import { Query } from "react-apollo";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  getGroupIdFromUserId,
  getUserIdFromSession,
  getUsername,
} from "../../gql/Queries.graphql";
import { Loading } from "../modules/system/Loading";
import {
  GetUserIdFromSessionQuery,
  GetGroupIdFromUserIdQuery,
  GetGroupIdFromUserIdQueryVariables,
  GetUsernameQuery,
  GetUsernameQueryVariables,
} from "../gql";
import { Header } from "../modules/system/Header";
import { BASE_ROUTES } from "../utils/routes";
import { rootStore } from "../stores/RootStore";
const Auth = React.lazy(() => import("../modules/auth/ui"));
const Home = React.lazy(() => import("../modules/home/ui"));
const Controller = React.lazy(() => import("../modules/controller/ui"));

export const Routes: React.FC = () => {
  return (
    <Router history={rootStore.history}>
      <React.Suspense fallback={<Loading />}>
        <Query<GetUserIdFromSessionQuery> query={getUserIdFromSession}>
          {({ data, loading }) => {
            if (loading) return <Loading />;

            if (!data || !data.getUserIdFromSession) {
              return (
                <>
                  <Redirect to={BASE_ROUTES.HOME} />
                  <Auth />
                </>
              );
            }

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
                      <Query<GetUsernameQuery, GetUsernameQueryVariables>
                        query={getUsername}
                        variables={{
                          id: user.id,
                        }}
                      >
                        {({ data, loading }) => {
                          if (loading) return <Loading />;

                          if (!data || !data.getUsername) return null;

                          return <Header />;
                        }}
                      </Query>
                      <Switch>
                        <Route exact path="/">
                          <Home groupId={data.getGroupIdFromUserId} />
                        </Route>
                        <Route exact path={BASE_ROUTES.PROFILE}>
                          <div>
                            <h1>PROFILE</h1>
                          </div>
                        </Route>
                        <Route exact path={BASE_ROUTES.SETTINGS}>
                          <div>
                            <h1>SETTINGS</h1>
                          </div>
                        </Route>
                        <Route exact path="/:space/:name">
                          <Controller groupId={data.getGroupIdFromUserId} />
                        </Route>
                      </Switch>
                    </>
                  );
                }}
              </Query>
            );
          }}
        </Query>
      </React.Suspense>
    </Router>
  );
};
