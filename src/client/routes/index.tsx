import * as React from "react";
import { Query } from "react-apollo";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  getGroupIdFromUserId,
  getUserId,
  getUsername,
} from "../../gql/Queries.graphql";
import { Loading } from "../modules/system/Loading";
import {
  GetUserIdQuery,
  GetGroupIdQuery,
  GetGroupIdQueryVariables,
  GetUsernameQuery,
  GetUsernameQueryVariables,
  useGetPermissionQuery,
  Permission,
} from "../gql";
import { Header } from "../modules/system/Header";
import { BASE_ROUTES } from "../utils/routes";
import { rootStore } from "../stores/RootStore";

const Auth = React.lazy(() => import("../modules/auth"));
const Home = React.lazy(() => import("../modules/home"));
const Controller = React.lazy(() => import("../modules/controller"));
const Users = React.lazy(() => import("../modules/users"));
const Groups = React.lazy(() => import("../modules/groups"));
const Settings = React.lazy(() => import("../modules/settings"));

export const Routes: React.FC = () => {
  const {
    data: permissionData,
    loading: permissionLoading,
  } = useGetPermissionQuery();

  return (
    <Router history={rootStore.history}>
      <React.Suspense fallback={<Loading />}>
        <Query<GetUserIdQuery> query={getUserId}>
          {({ data, loading }) => {
            if (loading) return <Loading />;

            if (!data || !data.getUserId) {
              return (
                <>
                  <Redirect to={BASE_ROUTES.HOME} />
                  <Auth />
                </>
              );
            }

            const userId = data.getUserId;

            return (
              <Query<GetGroupIdQuery, GetGroupIdQueryVariables>
                query={getGroupIdFromUserId}
                variables={{ userId }}
              >
                {({ data, loading }) => {
                  if (loading) return <Loading />;

                  if (!data || !data.getGroupId) return null;

                  const groupId = data.getGroupId.id;

                  return (
                    <>
                      <Query<GetUsernameQuery, GetUsernameQueryVariables>
                        query={getUsername}
                        variables={{
                          userId,
                        }}
                      >
                        {({ data, loading }) => {
                          if (loading) return <Loading />;

                          if (!data || !data.getUsername) return null;

                          return <Header />;
                        }}
                      </Query>
                      <Switch>
                        <Route exact path="/:space/:name">
                          <Controller />
                        </Route>
                        <Route exact path="/">
                          <Home groupId={groupId} />
                        </Route>
                        <Route exact path={BASE_ROUTES.SETTINGS}>
                          <Settings />
                        </Route>
                        {permissionData &&
                          permissionData.getPermission &&
                          permissionData.getPermission === Permission.Admin && (
                            <>
                              <Route exact path={BASE_ROUTES.USERS}>
                                <Users />
                              </Route>
                              <Route exact path={BASE_ROUTES.GROUPS}>
                                <Groups />
                              </Route>
                            </>
                          )}
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
