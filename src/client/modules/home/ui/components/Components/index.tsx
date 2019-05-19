import * as React from "react";
import { Query } from "react-apollo";
import {
  getGroupIdFromUserId,
  getThingsFromGroupId
} from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  GetGroupIdFromUserIdQuery,
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdVariables
} from "../../../../../__types__/typeDefs";
import "./main.scss";

const Components: React.FunctionComponent = () => {
  return (
    <div className="components">
      <Query<GetGroupIdFromUserIdQuery> query={getGroupIdFromUserId}>
        {({ data, loading }) => {
          if (loading) return null;
          if (!data || !data.getGroupIdFromUserId) return null;
          const groupId = data.getGroupIdFromUserId.id;
          console.log("GetGroupIdFromUserIdQuery: ", data);
          return (
            <Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdVariables>
              query={getThingsFromGroupId}
              variables={{
                id: groupId
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
                        <span>{thing.name}</span>
                      </div>
                      <div className="component-topic">
                        <span>{thing.topic}</span>
                      </div>
                    </div>
                  );
                });
              }}
            </Query>
          );
        }}
      </Query>
    </div>
  );
};

export default Components;
