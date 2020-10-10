import * as React from "react";
import { DashboardWrapper } from "../system/DashboardWrapper";
import { HomeWrapper } from "../system/HomeWrapper";

const Settings = () => {
  return (
    <HomeWrapper>
      <DashboardWrapper>
        <h2>Change password</h2>
        <h2>Change profile pic</h2>
      </DashboardWrapper>
    </HomeWrapper>
  );
};

export { Settings as default };
