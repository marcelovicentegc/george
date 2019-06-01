import * as React from "react";
import "./main.scss";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdVariables,
  GetGroupIdFromUserIdGetGroupIdFromUserId
} from "../../../../../__types__/typeDefs";
import { Query } from "react-apollo";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const StatusBar: React.FunctionComponent<Props> = props => {
  return (
    <div className="status-bar-wrapper">
      <div className="status-bar">
        <Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdVariables>
          query={getThingsFromGroupId}
          variables={{
            id: props.groupId.id
          }}
        >
          {({ data, loading }) => {
            if (loading) return null;
            if (!data || !data.getThingsFromGroupId)
              return <span>You have no recent activity yet</span>;
            return data.getThingsFromGroupId.map(thing => {
              if (thing.triggerLog !== null) {
                return thing.triggerLog.map((log, i) => {
                  return (
                    <span key={i}>
                      {thing.component} on the {thing.space} turned
                      {log.state[0]} @ {log.date[0]}
                    </span>
                  );
                });
              }
            });
          }}
        </Query>
      </div>
    </div>
  );
};

export default StatusBar;
