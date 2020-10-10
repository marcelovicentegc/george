import * as React from "react";
import { Dashboard } from "./Dashboard";

interface Props {
  groupId: string;
}

const Home: React.FunctionComponent<Props> = (props) => {
  return <Dashboard groupId={props.groupId} />;
};

export { Home as default };
