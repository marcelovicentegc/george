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
import Button from "antd/lib/button";
import Table from "antd/lib/table";

interface Props extends RouteComponentProps {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const Controller: React.FunctionComponent<Props> = props => {
  const [thingState, setThingState] = React.useState<boolean>();

  const handleClick = () => {
    if (thingState === true) {
      setThingState(false);
    } else {
      setThingState(true);
    }
  };

  const topic = props.location.pathname.slice(1);

  let currentThingState: string;

  let dataSource: [
    {
      key: string;
      date: string;
      state: string;
    }
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state"
    }
  ];

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

        if (data.getThingFromTopic.triggerLog !== null) {
          if (data.getThingFromTopic.triggerLog.length === 0) {
            setThingState(false);
          } else {
            currentThingState =
              data.getThingFromTopic.triggerLog[
                data.getThingFromTopic.triggerLog.length - 1
              ].state;

            currentThingState === "off"
              ? setThingState(true)
              : setThingState(false);
          }
        }

        data.getThingFromTopic.triggerLog !== null &&
          data.getThingFromTopic.triggerLog.map(log => {
            if (dataSource === undefined) {
              return (dataSource = [
                {
                  key: log.id,
                  date: log.date,
                  state: log.state
                }
              ]);
            }
            if (dataSource !== undefined) {
              return dataSource.unshift({
                key: log.id,
                date: log.date,
                state: log.state
              });
            }
          });

        return (
          <div className="controller-wrapper">
            <div className="controller">
              <Mutation<ToggleThingMutation, ToggleThingVariables>
                mutation={toggleThing}
                refetchQueries={[
                  {
                    query: getThingFromTopic,
                    variables: {
                      topic: topic
                    }
                  }
                ]}
              >
                {mutate => (
                  <Button
                    type="primary"
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
                  </Button>
                )}
              </Mutation>
              <span>{data.getThingFromTopic.topic}</span>
            </div>
            <div className="log-wrapper">
              <div className="log">
                {console.log("dataSource: ", dataSource)}
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  rowKey={record => record.key}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default withRouter(Controller);
