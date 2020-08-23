import * as React from "react";
import { Loader } from "@fluentui/react-northstar";
import { HomeWrapper } from "../system/HomeWrapper";

const Dashboard = React.lazy(() => import("./Dashboard"));

const Groups: React.FC = () => {
  return (
    <HomeWrapper>
      <React.Suspense fallback={<Loader />}>
        <Dashboard />
      </React.Suspense>
    </HomeWrapper>
  );
};

export { Groups as default };
