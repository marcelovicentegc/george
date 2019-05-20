import * as React from "react";
import { GetGroupIdFromUserIdGetGroupIdFromUserId } from "../../__types__/typeDefs";
import Controller from "./ui/index";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const ControllerConnector: React.FunctionComponent<Props> = props => (
  <Controller groupId={props.groupId} />
);

export default ControllerConnector;
