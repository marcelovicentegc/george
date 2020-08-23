import * as React from "react";
import * as s from "./main.scss";
import { Table, Image, Flex, Text, Loader } from "@fluentui/react-northstar";
import { useGroupsQuery } from "../../../../gql";
import { rootStoreContext } from "../../../../stores/RootStore";
import { TableWrapper } from "../../../system/TableWrapper";
import { toast } from "react-toastify";
import { NotFound } from "../../../system/NotFound";

const Groups: React.FC = () => {
  const { routerStore } = React.useContext(rootStoreContext);
  const [awaiting, setAwaiting] = React.useState(false);
  const { data, loading } = useGroupsQuery({
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
    items: ["Group name"],
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
              key: i,
              items: [
                <T topic={group.name} key={i + "-name"}>
                  {group.name}
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

export { Groups as default };
