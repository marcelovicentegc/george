import * as React from "react";
import { Query } from "react-apollo";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  GetGroupIdFromUserIdGetGroupIdFromUserId,
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdVariables
} from "../../../../../__types__/typeDefs";
import "./main.scss";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const Components: React.FunctionComponent<Props> = props => {
  return (
    <div className="components">
      <Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdVariables>
        query={getThingsFromGroupId}
        variables={{
          id: props.groupId.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <span>loading...</span>;
          if (
            !data ||
            !data.getThingsFromGroupId ||
            data.getThingsFromGroupId.length === 0
          ) {
            return (
              <div className="component">
                <span>You have no components yet</span>
              </div>
            );
          }
          return data.getThingsFromGroupId.map((thing, i) => {
            return (
              <div className="component" key={i}>
                <div className="component-name">
                  <span>{thing.space}</span>
                </div>
                <div className="component-topic">
                  <span>{thing.component}</span>
                </div>
              </div>
            );
          });
        }}
      </Query>
    </div>
  );
};

export default Components;
