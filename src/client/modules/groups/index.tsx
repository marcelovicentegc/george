import * as React from "react";
import { Loader } from "@fluentui/react-northstar";
import { Main } from "../system/Main";
import { AddGroup } from "./AddGroup";

const Groups = React.lazy(() => import("./Groups"));

const Dashboard: React.FC = () => {
  return (
    <Main topSectionChildren={<AddGroup />}>
      <React.Suspense fallback={<Loader />}>
        <Groups />
      </React.Suspense>
    </Main>
  );
};

export { Dashboard as default };
