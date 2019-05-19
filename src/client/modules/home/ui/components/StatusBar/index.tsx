import * as React from "react";
import "./main.scss";

const StatusBar: React.FunctionComponent = () => {
  return (
    <div className="status-bar-wrapper">
      <div className="status-bar">
        <span>Abajur turned off @ 13:45</span>
      </div>
    </div>
  );
};

export default StatusBar;
