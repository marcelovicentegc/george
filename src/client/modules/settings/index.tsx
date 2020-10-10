import * as React from "react";
import { DashboardWrapper } from "../system/DashboardWrapper";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { ChangeUsername } from "./ChangeUsername";

const Settings = () => {
  const [awaiting, setAwaiting] = React.useState(false);

  return (
    <DashboardWrapper>
      <ChangeUsername awaiting={awaiting} setAwaiting={setAwaiting} />
      <ChangePassword awaiting={awaiting} setAwaiting={setAwaiting} />
      <DeleteAccount awaiting={awaiting} setAwaiting={setAwaiting} />
    </DashboardWrapper>
  );
};

export { Settings as default };
