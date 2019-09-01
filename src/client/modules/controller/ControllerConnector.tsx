import * as React from "react";
import { GetGroupIdFromUserIdGetGroupIdFromUserId } from "../../__types__/typeDefs";
import Controller from "./ui/index";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

export const ControllerConnector: React.SFC<Props> = props => (
  <Controller groupId={props.groupId} />
);
