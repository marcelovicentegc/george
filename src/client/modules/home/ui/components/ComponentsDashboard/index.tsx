import { observer } from "mobx-react-lite";
import * as React from "react";
import NewComponentStoreContext from "../../../../../stores/NewComponentStore.store";
import NewComponentButton from "../NewComponentButton";
import NewComponentForm from "../NewComponentForm";
import "./main.scss";

const ComponentsDashboard: React.FunctionComponent = observer(() => {
  const NewComponentStore = React.useContext(NewComponentStoreContext);
  NewComponentStore.form;
  return (
    <div className="components-dashboard-wrapper">
      <div className="components-dashboard">
        <NewComponentButton />
        {NewComponentStore.form ? <NewComponentForm /> : null}
      </div>
    </div>
  );
});

export default ComponentsDashboard;
