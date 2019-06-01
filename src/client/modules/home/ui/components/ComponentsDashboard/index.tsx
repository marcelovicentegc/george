import { observer } from "mobx-react-lite";
import * as React from "react";
import NewComponentStoreContext from "../../../../../stores/NewComponentStore.store";
import { GetGroupIdFromUserIdGetGroupIdFromUserId } from "../../../../../__types__/typeDefs";
import Components from "../Components";
import NewComponentButton from "../NewComponentButton";
import NewComponentForm from "../NewComponentForm";
import StatusBar from "../StatusBar";
import "./main.scss";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

const ComponentsDashboard: React.FunctionComponent<Props> = observer(props => {
  const NewComponentStore = React.useContext(NewComponentStoreContext);
  NewComponentStore.form;
  return (
    <div className="components-dashboard-wrapper">
      <div className="components-dashboard">
        <NewComponentButton />
        <StatusBar groupId={props.groupId} />
        {NewComponentStore.form ? (
          <NewComponentForm groupId={props.groupId} />
        ) : null}
      </div>
      <Components groupId={props.groupId} />
    </div>
  );
});

export default ComponentsDashboard;
