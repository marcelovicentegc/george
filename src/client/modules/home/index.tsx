import * as React from "react";
import * as s from "./main.scss";
import { Dashboard } from "./Dashboard";

interface Props {
  groupId: string;
}

const Home: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={s.homeWrapper} data-testid="homeWrapper">
      <div className={s.home} data-testid="home">
        <Dashboard groupId={props.groupId} />
      </div>
    </div>
  );
};

export { Home as default };
