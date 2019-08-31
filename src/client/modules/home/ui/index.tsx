import * as React from "react";
import { GetGroupIdFromUserIdGetGroupIdFromUserId } from "../../../__types__/typeDefs";
import { ComponentsDashboard } from "./components/ComponentsDashboard";
import "./main.scss";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const Home: React.FunctionComponent<Props> = props => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <ComponentsDashboard groupId={props.groupId} />
      </div>
    </div>
  );
};

export default Home;
