import * as React from "react";
import * as s from "./main.scss";
import { getThings } from "../../../../../gql/Queries.graphql";
import { Table, Button, Text, Loader } from "@fluentui/react-northstar";
import { useToggleThingMutation, useGetThingsQuery } from "../../../../gql";
import { rootStoreContext } from "../../../../stores/RootStore";
import { TableWrapper } from "../../../system/TableWrapper";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";
import { toast } from "react-toastify";
import { NotFound } from "../../../system/NotFound";

interface Props {
  groupId: string;
}

export const Components: React.FunctionComponent<Props> = ({ groupId }) => {
  const { routerStore } = React.useContext(rootStoreContext);
  const [mutate] = useToggleThingMutation({
    refetchQueries: [
      {
        query: getThings,
        variables: {
          groupId,
        },
      },
    ],
    awaitRefetchQueries: true,
    onError: (error) => toast(error.message),
  });
  const [awaiting, setAwaiting] = React.useState("-1");
  const { data, loading } = useGetThingsQuery({
    variables: {
      groupId,
    },
    onError: (error) => toast(error.message),
  });

  const T = ({
    children,
    topic,
    id,
  }: {
    children: React.ReactNode;
    topic: string;
    id: string;
  }) => {
    return (
      <Text
        className={s.text}
        onClick={() => {
          awaiting !== id && routerStore.push(topic);
        }}
      >
        {children}
      </Text>
    );
  };

  const header = {
    items: ["Space", "Thing", "Topic", "State"],
  };

  return (
    <TableWrapper id={s.componentsWrapper} data-testid="components">
      {loading && <Loader />}
      {(!data || !data.getThings || data.getThings.length === 0) && (
        <NotFound label={"It looks like you haven't added components yet."} />
      )}

      {!loading && data && data.getThings && data.getThings.length > 0 && (
        <Table
          header={header}
          rows={data.getThings.map((thing, i) => {
            return {
              key: i,
              items: [
                <T topic={thing.topic} key={i + "-space"} id={thing.id}>
                  {thing.space}
                </T>,
                <T topic={thing.topic} key={i + "-component"} id={thing.id}>
                  {thing.component}
                </T>,
                <T topic={thing.topic} key={i + "-topic"} id={thing.id}>
                  {thing.topic}
                </T>,
                thing.triggerLog[0] ? (
                  <Button
                    circular
                    content={
                      awaiting === thing.id
                        ? ""
                        : capitalizeFirstLetter(thing.triggerLog[0].state)
                    }
                    loading={awaiting === thing.id}
                    onClick={async () => {
                      setAwaiting(thing.id);

                      await mutate({
                        variables: {
                          toggle: JSON.stringify(
                            thing.triggerLog[0].state === "on" ? false : true
                          ),
                          topic: thing.topic,
                        },
                      }).finally(() => {
                        setAwaiting("-1");
                      });
                    }}
                  />
                ) : (
                  <>
                    <Text
                      onClick={() => {
                        awaiting !== thing.id && routerStore.push(thing.topic);
                      }}
                      className={s.text}
                    >
                      Never triggered
                    </Text>
                  </>
                ),
              ],
            };
          })}
          aria-label="Static table"
        />
      )}
    </TableWrapper>
  );
};
