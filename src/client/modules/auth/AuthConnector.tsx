import * as React from "react";
import { GetUserIdFromSessionGetUserIdFromSession } from "../../__types__/typeDefs";
import Home from "../home/ui";
import Auth from "./ui";

interface Props {
  user: GetUserIdFromSessionGetUserIdFromSession | null;
}

const AuthConnector: React.FunctionComponent<Props> = props => {
  return props.user === null ? <Auth /> : <Home user={props.user} />;
};

export default AuthConnector;
