import * as React from "react";
import {
  GetGroupIdFromUserIdGetGroupIdFromUserId,
  GetUserIdFromSessionGetUserIdFromSession,
} from "../../__types__/typeDefs";
import { Home } from "../home/ui";
import { Auth } from "./ui";

interface Props {
  user: GetUserIdFromSessionGetUserIdFromSession | null;
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId | null;
}

const AuthConnector: React.SFC<Props> = (props) => {
  return props.user === null ? <Auth /> : <Home groupId={props.groupId} />;
};

export { AuthConnector as default };
