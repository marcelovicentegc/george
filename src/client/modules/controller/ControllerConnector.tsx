import * as React from "react";
import { GetGroupIdFromUserIdQueryVariables } from "../../gql";

const Controller = React.lazy(() => import("./ui"));

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

const ControllerConnector: React.SFC<Props> = ({ groupId }) => (
  <Controller groupId={groupId} />
);

export { ControllerConnector as default };
