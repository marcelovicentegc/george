import { observer } from "mobx-react-lite";
import * as React from "react";
import "./main.scss";
import { rootStoreContext } from "../../../../../stores/RootStore";

export const NewComponentButton: React.FunctionComponent = observer(() => {
  const { newComponentStore } = React.useContext(rootStoreContext);
  newComponentStore.form;

  return (
    <div
      className="manage-component-button-wrapper"
      onClick={() => {
        newComponentStore.form = true;
      }}
    >
      <button className="manage-component-button">
        <span>+</span>
      </button>
    </div>
  );
});
