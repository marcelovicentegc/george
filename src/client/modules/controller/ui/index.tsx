import * as React from "react";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { toggleThing } from "../../../../server/schema/graphql/Mutations.graphql";
import { getThingFromTopic } from "../../../../server/schema/graphql/Queries.graphql";
import {
  GetGroupIdFromUserIdGetGroupIdFromUserId,
  GetThingFromTopicQuery,
  GetThingFromTopicVariables,
  ToggleThingMutation,
  ToggleThingVariables
} from "../../../__types__/typeDefs";
import Loading from "../../utils/Loading";
import "./main.scss";

interface Props extends RouteComponentProps {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const Controller: React.FunctionComponent<Props> = props => {
  const [thingState, setThingState] = React.useState(false);
  const handleClick = () => {
    if (thingState === true) {
      setThingState(false);
    } else {
      setThingState(true);
    }
  };

  const topic = props.location.pathname.slice(1);

  return (
    <Query<GetThingFromTopicQuery, GetThingFromTopicVariables>
      query={getThingFromTopic}
      variables={{
        topic: topic
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
                <Mutation<ToggleThingMutation, ToggleThingVariables>
                  mutation={toggleThing}
                >
                  {mutate => (
                    <button
                      onClick={async () => {
                        handleClick();
                        await mutate({
                          variables: {
                            toggle: JSON.stringify(thingState),
                            topic: topic
                          }
                        });
                      }}
                    >
                      <span>{thingState ? "Off" : "On"}</span>
                    </button>
                  )}
                </Mutation>
                <span>{data.getThingFromTopic.topic}</span>
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};

export default withRouter(Controller);
