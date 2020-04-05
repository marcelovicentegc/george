import * as React from "react";
import "./main.scss";
import { observer } from "mobx-react";
import { Components } from "../Components";
import { NewComponentButton } from "../NewComponentButton";
import { NewComponentForm } from "../NewComponentForm";
import { StatusBar } from "../StatusBar";
import { rootStoreContext } from "../../../../../stores/RootStore";
import { GetGroupIdFromUserIdQueryVariables } from "../../../../../gql";
// import { StatusBarErrorBoundary } from "../StatusBarErrorBoundary";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

export const ComponentsDashboard: React.FunctionComponent<Props> = observer(
  (props) => {
    const { newComponentStore } = React.useContext(rootStoreContext);
    newComponentStore.form;
    return (
      <>
        {/* <StatusBarErrorBoundary> */}
        <StatusBar groupId={props.groupId} />
        {/* </StatusBarErrorBoundary> */}
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
