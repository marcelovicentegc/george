import * as React from "react";

interface Props {
  function: "add" | "remove";
}

const ManageComponentsButton: React.FunctionComponent<Props> = props => {
  return (
    <div className="manage-component-button-wrapper">
      <button className={`manage-component-button ${props.function}`}>
        <span>{props.function}</span>
      </button>
    </div>
  );
};

export default ManageComponentsButton;
