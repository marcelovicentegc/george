import * as React from "react";
import * as s from "./main.scss";

interface DashboardWrapperProps {
  children: React.ReactNode;
  wrapperChildren?: React.ReactNode;
}

export const DashboardWrapper: React.FC<DashboardWrapperProps> = ({
  children,
  wrapperChildren,
}) => {
  return (
    <div className={s.dashboardWrapper} data-testid="dashboardWrapper">
      <div className={s.dashboard} data-testid="dashboard">
        {children}
      </div>
      {wrapperChildren}
    </div>
  );
};
