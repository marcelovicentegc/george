import * as React from "react";
import "./main.scss";

interface Props {
  username: string;
}

const Nav: React.FunctionComponent<Props> = props => {
  return (
    <nav>
      <span>{props.username}</span>
    </nav>
  );
};

export default Nav;
