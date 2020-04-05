import * as React from "react";
import "./main.scss";
import { GetGroupIdFromUserIdQueryVariables } from "../../../gql";
import { ComponentsDashboard } from "./components/ComponentsDashboard";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

export const Home: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="home-wrapper" data-testid="home-wrapper">
      <div className="home" data-testid="home">
        <ComponentsDashboard groupId={props.groupId} />
      </div>
    </div>
  );
};
