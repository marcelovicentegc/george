import * as React from "react";
import { Main } from "../system/Main";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { ChangeUsername } from "./ChangeUsername";
import { Text } from "@fluentui/react-northstar";

const Settings = () => {
  const [awaiting, setAwaiting] = React.useState(false);

  return (
    <>
      <Main
        topSectionChildren={
          <Text>Here you can control your user settings.</Text>
        }
      >
        <ChangeUsername awaiting={awaiting} setAwaiting={setAwaiting} />
        <ChangePassword awaiting={awaiting} setAwaiting={setAwaiting} />
        <DeleteAccount awaiting={awaiting} setAwaiting={setAwaiting} />
      </Main>
    </>
  );
};

export { Settings as default };
