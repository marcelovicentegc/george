import * as React from "react";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdVariables,
  GetGroupIdFromUserIdGetGroupIdFromUserId
} from "../../../../../__types__/typeDefs";
import { Query } from "react-apollo";
import { NoticeBar } from "antd-mobile";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const StatusBar: React.FunctionComponent<Props> = props => {
  const [statusMessage, setStatusMessage] = React.useState(undefined);

  return (
    <div className="status-bar-wrapper">
      <div className="status-bar">
        <NoticeBar
          icon={null}
          marqueeProps={{
            loop: true,
            text: statusMessage
          }}
        />
        <Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdVariables>
          query={getThingsFromGroupId}
          variables={{
            id: props.groupId.id
          }}
        >
          {({ data, loading }) => {
            if (loading) return null;
            if (!data || !data.getThingsFromGroupId) {
              setStatusMessage("There is no recent activity yet.");
            }
            return data.getThingsFromGroupId.map(thing => {
              if (thing.triggerLog !== null) {
                return thing.triggerLog.map(log => {
                  setStatusMessage(
                    `${thing.component} on the ${thing.space} turned ${
                      log.state
                    } @ ${log.date}`
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
