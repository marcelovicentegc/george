import * as React from "react";
import { GetGroupIdFromUserIdGetGroupIdFromUserId } from "../../__types__/typeDefs";

const Controller = React.lazy(() => import("./ui"));

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const ControllerConnector: React.SFC<Props> = (props) => (
  <Controller groupId={props.groupId} />
);

export { ControllerConnector as default };
