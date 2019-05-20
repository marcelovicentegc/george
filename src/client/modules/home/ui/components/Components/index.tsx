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
  const [help, setHelp] = React.useState(false);
  const helpText =
    "This is the topic which you need to subscribe your modules to";

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
          return (
            <>
              {help ? (
                <div className="help-box">
                  <span>{helpText}</span>
                </div>
              ) : null}
              {data.getThingsFromGroupId.map((thing, i) => {
                return (
                  <div className="component" key={i}>
                    <div className="component-space">
                      <span>{thing.space}</span>
                    </div>
                    <div className="component-itself">
                      <span>{thing.component}</span>
                    </div>
                    <div
                      className="component-topic"
                      onMouseEnter={() => setHelp(true)}
                      onMouseLeave={() => setHelp(false)}
                    >
                      <span>{thing.topic}</span>
                    </div>
                  </div>
                );
              })}{" "}
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default Components;
