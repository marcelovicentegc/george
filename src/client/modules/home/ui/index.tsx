import * as React from "react";
import { Query } from "react-apollo";
import { getUserUsernameFromId } from "../../../../server/schema/graphql/Queries.graphql";
import {
  GetUserIdFromSessionGetUserIdFromSession,
  GetUserUsernameFromIdQuery,
  GetUserUsernameFromIdVariables
} from "../../../__types__/typeDefs";
import Nav from "./components/Nav";

interface Props {
  user: GetUserIdFromSessionGetUserIdFromSession;
}

const Home: React.FunctionComponent<Props> = props => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <Query<GetUserUsernameFromIdQuery, GetUserUsernameFromIdVariables>
          query={getUserUsernameFromId}
          variables={{ id: props.user.id }}
        >
          {({ data, loading }) => {
            if (loading) return null;
            if (!data || !data.getUserUsernameFromId) return null;
            return <Nav username={data.getUserUsernameFromId.username} />;
          }}
        </Query>
      </div>
    </div>
  );
};

export default Home;
