import * as React from "react";
import * as s from "./main.scss";

interface MainProps {
  children: React.ReactNode;
  topSectionChildren?: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children, topSectionChildren }) => {
  return (
    <div className={s.dashboardWrapper} data-testid="dashboardWrapper">
      <div className={s.dashboard} data-testid="dashboard">
        {topSectionChildren}
      </div>
      {children}
    </div>
  );
};
