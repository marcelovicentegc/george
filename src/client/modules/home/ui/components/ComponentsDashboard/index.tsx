import { observer } from "mobx-react-lite";
import * as React from "react";
import { GetGroupIdFromUserIdGetGroupIdFromUserId } from "../../../../../__types__/typeDefs";
import { Components } from "../Components";
import { NewComponentButton } from "../NewComponentButton";
import { NewComponentForm } from "../NewComponentForm";
import { StatusBar } from "../StatusBar";
import "./main.scss";
import { rootStoreContext } from "../../../../../stores/RootStore";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

export const ComponentsDashboard: React.FunctionComponent<Props> = observer(
  props => {
    const { newComponentStore } = React.useContext(rootStoreContext);
    newComponentStore.form;
    return (
      <>
        <StatusBar groupId={props.groupId} />
        <div
          className="components-dashboard-wrapper"
          data-testid="components-dashboard-wrapper"
        >
          <div
            className="components-dashboard"
            data-testid="components-dashboard"
          >
            <NewComponentButton />
            {newComponentStore.form && (
              <NewComponentForm groupId={props.groupId} />
            )}
          </div>
          <Components groupId={props.groupId} />
        </div>
      </>
    );
  }
);
