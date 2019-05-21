import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { getThingFromTopic } from "../../../../server/schema/graphql/Queries.graphql";
import {
  GetGroupIdFromUserIdGetGroupIdFromUserId,
  GetThingFromTopicQuery,
  GetThingFromTopicVariables
} from "../../../__types__/typeDefs";
import Loading from "../../utils/Loading";
import Led from "./components/Led";
import "./main.scss";
// Here is where PUBLISH will occur to a specific topic (retrieved from the db)

interface Props extends RouteComponentProps {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const Controller: React.FunctionComponent<Props> = props => {
  return (
    <Query<GetThingFromTopicQuery, GetThingFromTopicVariables>
      query={getThingFromTopic}
      variables={{
        topic: props.location.pathname.slice(1)
      }}
    >
      {({ data, loading }) => {
        if (loading) return <Loading />;
        if (!data || !data.getThingFromTopic) {
          props.history.push("/");
        }
        return (
          <>
            <div className="controller-wrapper">
              <div className="controller">
                <span>{data.getThingFromTopic.topic}</span>
                <Led />
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};

export default withRouter(Controller);
