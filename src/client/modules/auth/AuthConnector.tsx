import * as React from "react";
import { Home } from "../home/ui";
import { Auth } from "./ui";
import {
  GetUserIdFromSessionQueryVariables,
  GetGroupIdFromUserIdQueryVariables,
} from "../../gql";

interface Props {
  user?: GetUserIdFromSessionQueryVariables;
  groupId?: GetGroupIdFromUserIdQueryVariables;
}

const AuthConnector: React.SFC<Props> = ({ user, groupId }) => {
  if (!user || !groupId) {
    return <Auth />;
  } else return <Home groupId={groupId} />;
};

export { AuthConnector as default };
