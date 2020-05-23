import * as React from "react";
import * as s from "./main.scss";
import { Mutation, Query } from "react-apollo";
import { toggleThing, getThing } from "../../../gql";
import { Button, Table } from "@fluentui/react-northstar";
import { rootStoreContext } from "../../stores/RootStore";
import { Loading } from "../system/Loading";
import {
  GetThingQuery,
  GetThingQueryVariables,
  ToggleThingMutation,
  ToggleThingMutationVariables,
} from "../../gql";
import { TableWrapper } from "../system/TableWrapper";

export type DataSource = [
  {
    key: string;
    items: string[];
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

  const header = {
    items: ["Date", "State"],
  };

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
                  items: [log.date, log.state],
                },
              ]);
            } else if (controllerStore.dataSource) {
              return controllerStore.dataSource.unshift({
                key: log.id,
                items: [log.date, log.state],
              });
            }
          });

        return (
          <div className={s.dashboardWrapper}>
            <div className={s.dashboard}>
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
                    circular
                    content={awaiting ? "..." : thingState ? "Off" : "On"}
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
                  />
                )}
              </Mutation>
            </div>
            <TableWrapper id={s.logWrapper}>
              <Table
                header={header}
                rows={controllerStore.dataSource}
                aria-label="Static table"
              />
            </TableWrapper>
          </div>
        );
      }}
    </Query>
  );
};

export { Controller as default };
