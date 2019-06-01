import * as React from "react";
import "./main.scss";

interface Props {
  date: string;
  state: string;
}

const Log: React.FunctionComponent<Props> = props => {
  return (
    <div className="log">
      <span>{props.date}</span>
      <span>{props.state}</span>
    </div>
  );
};

export default Log;
