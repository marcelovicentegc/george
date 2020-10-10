import * as React from "react";
import { Loader } from "@fluentui/react-northstar";

const Dashboard = React.lazy(() => import("./Dashboard"));

const Groups = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Dashboard />
    </React.Suspense>
  );
};

export { Groups as default };
