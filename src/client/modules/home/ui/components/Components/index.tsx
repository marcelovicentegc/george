import * as React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  GetGroupIdFromUserIdGetGroupIdFromUserId,
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdVariables
} from "../../../../../__types__/typeDefs";
import { Separator } from "../Separator";
import "./main.scss";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

export const Components: React.FunctionComponent<Props> = props => {
  const [help, setHelp] = React.useState(false);
  const helpText =
    "This is the topic which you need to subscribe the related module to.";

  return (
    <div className="components" data-testid="components">
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
              <div
                className="component no-component"
                data-testid="no-component"
              >
                <span>You have no components yet</span>
              </div>
            );
          }
          return (
            <>
              {help ? (
                <div className="help-box" data-testid="help-box">
                  <span>{helpText}</span>
                </div>
              ) : null}
              {data.getThingsFromGroupId.map((thing, i) => {
                return (
                  <React.Fragment key={i}>
                    <Link to={thing.topic}>
                      <div
                        className="component"
                        key={i}
                        data-testid={`component-${i}`}
                      >
                        <div
                          className="component-space"
                          data-testid={`component-space-${i}`}
                        >
                          <span>{thing.space}</span>
                        </div>
                        <div
                          className="component-itself"
                          data-testid={`component-itself-${i}`}
                        >
                          <span>{thing.component}</span>
                        </div>
                        <div
                          className="component-topic"
                          data-testid={`component-topic-${i}`}
                          onMouseEnter={() => setHelp(true)}
                          onMouseLeave={() => setHelp(false)}
                        >
                          <span>{thing.topic}</span>
                        </div>
                      </div>
                    </Link>
                    <Separator />
                  </React.Fragment>
                );
              })}
            </>
          );
        }}
      </Query>
    </div>
  );
};
