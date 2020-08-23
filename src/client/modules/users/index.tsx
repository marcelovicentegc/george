import * as React from "react";
import * as s from "./main.scss";
import { Loader } from "@fluentui/react-northstar";

const Dashboard = React.lazy(() => import("./Dashboard"));

const Users: React.FC = () => {
  return (
    <div className={s.homeWrapper} data-testid="homeWrapper">
      <div className={s.home} data-testid="home">
        <React.Suspense fallback={<Loader />}>
          <Dashboard />
        </React.Suspense>
      </div>
    </div>
  );
};

export { Users as default };
