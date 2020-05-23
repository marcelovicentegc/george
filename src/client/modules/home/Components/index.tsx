import * as React from "react";
import * as s from "./main.scss";
import { Query } from "react-apollo";
import { getThings } from "../../../../gql/Queries.graphql";
import {
  Table,
  TableRowProps,
  ShorthandCollection,
} from "@fluentui/react-northstar";
import { GetThingsQuery, GetThingsQueryVariables } from "../../../gql";
import { rootStoreContext } from "../../../stores/RootStore";
import { TableWrapper } from "../../system/TableWrapper";

interface Props {
  groupId: string;
}

export const Components: React.FunctionComponent<Props> = ({ groupId }) => {
  const { routerStore } = React.useContext(rootStoreContext);
  const [help, setHelp] = React.useState(false);
  const helpText =
    "This is the topic which you need to subscribe the related module to.";

  const header = {
    items: ["Space", "Thing", "Topic"],
  };

  return (
    <TableWrapper id={s.componentsWrapper} data-testid="components">
      <Query<GetThingsQuery, GetThingsQueryVariables>
        query={getThings}
        variables={{
          groupId,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <span>loading...</span>;
          if (!data || !data.getThings || data.getThings.length === 0) {
            return (
              <div
                className="component no-component"
                data-testid="no-component"
              >
                <span>You have no components yet</span>
              </div>
            );
          }

          const rows: ShorthandCollection<
            TableRowProps,
            never
          > = data.getThings.map((thing, i) => {
            return {
              key: i,
              items: [thing.space, thing.component, thing.topic],
              onClick: () => routerStore.push(thing.topic),
            };
          });

          return (
            <>
              {help && (
                <div className="help-box" data-testid="help-box">
                  <span>{helpText}</span>
                </div>
              )}
              <Table header={header} rows={rows} aria-label="Static table" />
            </>
          );
        }}
      </Query>
    </TableWrapper>
  );
};
