import * as React from "react";
import * as styles from "./main.scss";
import { Main } from "../system/Main";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { ChangeUsername } from "./ChangeUsername";
import { Text, Divider, Box } from "@fluentui/react-northstar";
import { Row } from "../system/Row";

const Settings = () => {
  const [awaiting, setAwaiting] = React.useState(false);

  return (
    <>
      <Main
        topSectionChildren={
          <Text>Here you can control your account settings.</Text>
        }
      >
        <Box className={styles.box}>
          <Row>
            <ChangeUsername awaiting={awaiting} setAwaiting={setAwaiting} />
            <Divider vertical />
            <ChangePassword awaiting={awaiting} setAwaiting={setAwaiting} />
            <Divider vertical />
            <DeleteAccount awaiting={awaiting} setAwaiting={setAwaiting} />
          </Row>
        </Box>
      </Main>
    </>
  );
};

export { Settings as default };
