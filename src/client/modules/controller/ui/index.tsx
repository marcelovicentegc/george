import * as React from "react";
import "./main.scss";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { toggleThing } from "../../../../server/schema/graphql/Mutations.graphql";
import { getThingFromTopic } from "../../../../server/schema/graphql/Queries.graphql";
import { TableWrapper } from "./components/TableWrapper";
import { Button } from "@fluentui/react-northstar";
import { rootStoreContext } from "../../../stores/RootStore";
import { Loading } from "../../system/Loading";
import {
  GetGroupIdFromUserIdQueryVariables,
  GetThingFromTopicQuery,
  GetThingFromTopicQueryVariables,
  ToggleThingMutation,
  ToggleThingMutationVariables,
} from "../../../gql";

export type DataSource = [
  {
    key: string;
    date: string;
    state: string;
  }
];

export type Column = {
  title: string;
  dataIndex: string;
  key: string;
};

interface Props extends RouteComponentProps {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

const Controller: React.FunctionComponent<Props> = (props) => {
  const [thingState, setThingState] = React.useState<boolean>();
  const [awaiting, setAwaiting] = React.useState(false);
  const { controllerStore } = React.useContext(rootStoreContext);

  const handleClick = () => {
    if (thingState === true) {
      setThingState(false);
    } else {
      setThingState(true);
    }
  };

  const topic = props.location.pathname.slice(1);

  let currentThingState: string;

  const columns: Column[] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
  ];

  return (
    <Query<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>
      query={getThingFromTopic}
      variables={{
        topic,
      }}
    >
      {({ data, loading }) => {
        if (loading) return <Loading />;
        if (!data || !data.getThingFromTopic) {
          props.history.push("/");
        }

        controllerStore.setDataSource(null);

        if (data.getThingFromTopic.triggerLog) {
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

        data.getThingFromTopic.triggerLog &&
          data.getThingFromTopic.triggerLog.map((log) => {
            if (!controllerStore.dataSource) {
              return controllerStore.setDataSource([
                {
                  key: log.id,
                  date: log.date,
                  state: log.state,
                },
              ]);
            } else if (controllerStore.dataSource) {
              return controllerStore.dataSource.unshift({
                key: log.id,
                date: log.date,
                state: log.state,
              });
            }
          });

        return (
          <div className="controller-wrapper">
            <div className="controller">
              <Mutation<ToggleThingMutation, ToggleThingMutationVariables>
                mutation={toggleThing}
                refetchQueries={[
                  {
                    query: getThingFromTopic,
                    variables: {
                      topic,
                    },
                  },
                ]}
              >
                {(mutate) => (
                  <Button
                    onClick={async () => {
                      if (!awaiting) {
                        setAwaiting(true);
                        handleClick();
                        await mutate({
                          variables: {
                            toggle: JSON.stringify(thingState),
                            topic,
                          },
                        }).finally(() => setAwaiting(false));
                      }
                    }}
                  >
                    {awaiting ? "..." : thingState ? "Off" : "On"}
                  </Button>
                )}
              </Mutation>
              <span>{data.getThingFromTopic.topic}</span>
            </div>
            <div className="log-wrapper">
              <div className="log">
                <TableWrapper
                  dataSource={controllerStore.dataSource}
                  columns={columns}
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
