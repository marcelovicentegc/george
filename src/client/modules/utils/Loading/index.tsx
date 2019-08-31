import * as React from "react";
import "./main.scss";

export const Loading: React.FunctionComponent = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
};
