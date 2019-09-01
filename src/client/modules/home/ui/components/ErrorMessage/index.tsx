import * as React from "react";
import "./main.scss";

interface Props {
  errorMessage: string | undefined;
}

export const ErrorMessage: React.SFC<Props> = props => {
  return (
    <div className="error-message-wrapper" data-testid="error-message-wrapper">
      <div className="error-message" data-testid="error-message">
        <span>{props.errorMessage}</span>
      </div>
    </div>
  );
};
