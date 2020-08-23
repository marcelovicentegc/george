import * as React from "react";
import * as s from "./main.scss";
import searching from "../../../assets/searching.png";
import { getThings } from "../../../../gql/Queries.graphql";
import {
  Table,
  Button,
  Image,
  Flex,
  Text,
  Loader,
} from "@fluentui/react-northstar";
import { useToggleThingMutation, useGetThingsQuery } from "../../../gql";
import { rootStoreContext } from "../../../stores/RootStore";
import { TableWrapper } from "../../system/TableWrapper";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { toast } from "react-toastify";

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
  const [awaiting, setAwaiting] = React.useState(false);
  const { data, loading } = useGetThingsQuery({
    variables: {
      groupId,
    },
    onError: (error) => toast(error.message),
  });

  const T = ({
    children,
    topic,
  }: {
    children: React.ReactNode;
    topic: string;
  }) => {
    return (
      <Text
        className={s.text}
        onClick={() => {
          !awaiting && routerStore.push(topic);
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
        <Flex data-testid="noComponent" column hAlign={"center"}>
          <Image src={searching} className={s.image} />
          <Text>It looks like you haven't added components yet.</Text>
        </Flex>
      )}

      {!loading && data && data.getThings && data.getThings.length > 0 && (
        <Table
          header={header}
          rows={data.getThings.map((thing, i) => {
            return {
              key: i,
              items: [
                <T topic={thing.topic} key={i + "-space"}>
                  {thing.space}
                </T>,
                <T topic={thing.topic} key={i + "-component"}>
                  {thing.component}
                </T>,
                <T topic={thing.topic} key={i + "-topic"}>
                  {thing.topic}
                </T>,
                thing.triggerLog[0] ? (
                  <Button
                    circular
                    content={capitalizeFirstLetter(
                      awaiting ? "..." : thing.triggerLog[0].state
                    )}
                    onClick={async () => {
                      setAwaiting(true);

                      await mutate({
                        variables: {
                          toggle: JSON.stringify(
                            thing.triggerLog[0].state === "on" ? false : true
                          ),
                          topic: thing.topic,
                        },
                      }).finally(() => {
                        setAwaiting(false);
                      });
                    }}
                  />
                ) : (
                  <>
                    <Text
                      onClick={() => {
                        !awaiting && routerStore.push(thing.topic);
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
