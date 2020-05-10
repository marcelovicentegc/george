import * as React from "react";
import * as s from "./main.scss";
import { Query } from "react-apollo";
import { getThingsFromGroupId } from "../../../../../../gql/Queries.graphql";
import {
  Table,
  TableRowProps,
  ShorthandCollection,
} from "@fluentui/react-northstar";
import {
  GetGroupIdFromUserIdQueryVariables,
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdQueryVariables,
} from "../../../../../@types/gql";
import { rootStoreContext } from "../../../../../stores/RootStore";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

export const Components: React.FunctionComponent<Props> = (props) => {
  const { routerStore } = React.useContext(rootStoreContext);
  const [help, setHelp] = React.useState(false);
  const helpText =
    "This is the topic which you need to subscribe the related module to.";

  const header = {
    items: ["Space", "Thing", "Topic"],
  };

  return (
    <div className={s.components} data-testid="components">
      <Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>
        query={getThingsFromGroupId}
        variables={{
          id: props.groupId.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <span>loading...</span>;
          if (
            !data ||
            !data.getThingsFromGroupId ||
            data.getThingsFromGroupId.length === 0
          ) {
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
          > = data.getThingsFromGroupId.map((thing, i) => {
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
    </div>
  );
};
