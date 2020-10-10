import * as React from "react";
import { observer } from "mobx-react";
import { Components } from "./Components";
import { Main } from "../system/Main";
import { AddThing } from "./AddThing";

interface Props {
  groupId: string;
}

const Home: React.FunctionComponent<Props> = observer(({ groupId }) => {
  return (
    <Main topSectionChildren={<AddThing groupId={groupId} />}>
      <Components groupId={groupId} />
    </Main>
  );
});

export { Home as default };
