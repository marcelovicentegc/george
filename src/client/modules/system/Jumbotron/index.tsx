import * as React from "react";
import * as s from "./main.scss";

export const Jumbotron: React.FC = ({ children }) => {
  return (
    <div className={s.jumbotronWrapper} data-testid="jumbotronWrapper">
      <div className={s.jumbotron} data-testid="jumbotron">
        {children}
      </div>
    </div>
  );
};
