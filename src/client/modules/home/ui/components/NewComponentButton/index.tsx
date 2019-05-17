import { observer } from "mobx-react-lite";
import * as React from "react";
import NewComponentStoreContext from "../../../../../stores/NewComponentStore.store";
import "./main.scss";

const NewComponentButton: React.FunctionComponent = observer(() => {
  const NewComponentStore = React.useContext(NewComponentStoreContext);
  NewComponentStore.form;

  return (
    <div
      className="manage-component-button-wrapper"
      onClick={() => {
        NewComponentStore.form = true;
      }}
    >
      <button className="manage-component-button">
        <span>+</span>
      </button>
    </div>
  );
});

export default NewComponentButton;
