import * as React from "react";
import * as s from "./main.scss";
import { Table, Text, Loader, Avatar } from "@fluentui/react-northstar";
import { useGetUsersQuery } from "../../../../gql";
import { rootStoreContext } from "../../../../stores/RootStore";
import { TableWrapper } from "../../../system/TableWrapper";
import { toast } from "react-toastify";
import { NotFound } from "../../../system/NotFound";

const Users: React.FC = () => {
  const { routerStore } = React.useContext(rootStoreContext);
  const [awaiting, setAwaiting] = React.useState(false);
  const { data, loading } = useGetUsersQuery({
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
    items: ["Username", "Avatar"],
  };

  return (
    <TableWrapper id={s.componentsWrapper} data-testid="components">
      {loading && <Loader />}
      {(!data || !data.getUsers || data.getUsers.length === 0) && (
        <NotFound label={"It looks like there are no users yet."} />
      )}

      {!loading && data && data.getUsers && data.getUsers.length > 0 && (
        <Table
          header={header}
          rows={data.getUsers.map((user, i) => {
            return {
              key: i,
              items: [
                <T topic={user.username} key={i + "-username"}>
                  {user.username}
                </T>,
                <T topic={user.username + "-avatarUrl"} key={i + "-avatarUrl"}>
                  {user.profile.avatarUrl ? (
                    <Avatar image={user.profile.avatarUrl} />
                  ) : (
                    <Avatar name={user.username.toUpperCase()} />
                  )}
                </T>,
              ],
            };
          })}
          aria-label="Static table"
        />
      )}
    </TableWrapper>
  );
};

export { Users as default };
