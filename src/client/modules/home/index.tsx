import * as React from "react";
import { Dashboard } from "./Dashboard";
import { HomeWrapper } from "../system/HomeWrapper";

interface Props {
  groupId: string;
}

const Home: React.FunctionComponent<Props> = (props) => {
  return (
    <HomeWrapper>
      <Dashboard groupId={props.groupId} />
    </HomeWrapper>
  );
};

export { Home as default };
