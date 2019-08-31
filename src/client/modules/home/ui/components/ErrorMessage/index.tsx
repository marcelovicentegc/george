import * as React from "react";
import "./main.scss";

interface Props {
  errorMessage: string | undefined;
}

const ErrorMessage: React.SFC<Props> = props => {
  return (
    <div className="error-message-wrapper">
      <div className="error">
        <span>{props.errorMessage}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
