import * as React from "react";
import "./main.scss";
import { Mutation, Query } from "react-apollo";
import { toggleThing, getThing } from "../../../../gql";
import { TableWrapper } from "./components/TableWrapper";
import { Button } from "@fluentui/react-northstar";
import { rootStoreContext } from "../../../stores/RootStore";
import { Loading } from "../../system/Loading";
import {
  GetThingQuery,
  GetThingQueryVariables,
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

const Controller: React.FunctionComponent = () => {
  const [thingState, setThingState] = React.useState<boolean>();
  const [awaiting, setAwaiting] = React.useState(false);
  const { controllerStore, routerStore } = React.useContext(rootStoreContext);

  const handleClick = () => {
    if (thingState === true) {
      setThingState(false);
    } else {
      setThingState(true);
    }
  };

  const topic = routerStore.location.pathname.slice(1);

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
    <Query<GetThingQuery, GetThingQueryVariables>
      query={getThing}
      variables={{
        topic,
      }}
    >
      {({ data, loading }) => {
        if (loading) return <Loading />;
        if (!data || !data.getThing) {
          routerStore.history.push("/");
        }

        controllerStore.setDataSource(null);

        if (data.getThing.triggerLog) {
          if (data.getThing.triggerLog.length === 0) {
            setThingState(false);
          } else {
            currentThingState =
              data.getThing.triggerLog[data.getThing.triggerLog.length - 1]
                .state;

            currentThingState === "off"
              ? setThingState(true)
              : setThingState(false);
          }
        }

        data.getThing.triggerLog &&
          data.getThing.triggerLog.map((log) => {
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
                    query: getThing,
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
              <span>{data.getThing.topic}</span>
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

export { Controller as default };
