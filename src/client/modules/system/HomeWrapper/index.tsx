import * as React from "react";
import * as s from "./main.scss";

export const HomeWrapper: React.FC = ({ children }) => {
  return (
    <div className={s.homeWrapper} data-testid="homeWrapper">
      <div className={s.home} data-testid="home">
        {children}
      </div>
    </div>
  );
};
