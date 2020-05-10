import * as React from "react";
import * as s from "./main.scss";
import { GetGroupIdFromUserIdQueryVariables } from "../../../@types/gql";
import { ComponentsDashboard } from "./components/ComponentsDashboard";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

const Home: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={s.homeWrapper} data-testid="homeWrapper">
      <div className={s.home} data-testid="home">
        <ComponentsDashboard groupId={props.groupId} />
      </div>
    </div>
  );
};

export { Home as default };
