import * as React from "react";
import * as s from "./main.scss";
import { Table, Text, Loader, List } from "@fluentui/react-northstar";
import { useGroupsQuery } from "../../../gql";
import { rootStoreContext } from "../../../stores/RootStore";
import { TableWrapper } from "../../system/TableWrapper";
import { toast } from "react-toastify";
import { NotFound } from "../../system/NotFound";

const Groups: React.FC = () => {
  const { routerStore } = React.useContext(rootStoreContext);
  const [awaiting, setAwaiting] = React.useState(false);
  const { data, loading } = useGroupsQuery({
    onError: (error) => toast(error.message),
  });

  const T = ({
    children,
    group,
  }: {
    children: React.ReactNode;
    group: string;
  }) => {
    return (
      <Text
        className={s.text}
        onClick={() => {
          !awaiting && routerStore.push(group);
        }}
      >
        {children}
      </Text>
    );
  };

  const header = {
    items: ["Group name", "Users", "Things"],
  };

  return (
    <TableWrapper id={s.componentsWrapper} data-testid="groups">
      {loading && <Loader />}
      {(!data || !data.groups || data.groups.length === 0) && (
        <NotFound label={"It looks like there are no groups yet."} />
      )}

      {!loading && data && data.groups && data.groups.length > 0 && (
        <Table
          header={header}
          rows={data.groups.map((group, i) => {
            return {
              className: s.row,
              key: i,
              items: [
                <T group={group.name} key={i + "-name"}>
                  {group.name}
                </T>,
                <List
                  key={i}
                  className={s.list}
                  items={
                    group.users.length > 0
                      ? group.users.flatMap((user, usersIndex) => {
                          return { content: user.username, key: usersIndex };
                        })
                      : [{ content: "There is no one here yet :(", key: 0 }]
                  }
                />,
                <List
                  key={i}
                  className={s.list}
                  items={
                    group.things.length > 0
                      ? group.things.flatMap((thing, thingsIndex) => {
                          return {
                            content: thing.space + "/" + thing.component,
                            key: thingsIndex,
                          };
                        })
                      : [
                          {
                            content: "There aren't components here yet :(",
                            key: 0,
                          },
                        ]
                  }
                />,
              ],
            };
          })}
          aria-label="Static table"
        />
      )}
    </TableWrapper>
  );
};

export { Groups as default };
