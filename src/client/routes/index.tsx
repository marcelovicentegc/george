import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthConnector from "../modules/auth/AuthConnector";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={AuthConnector} />
      </Switch>
    </BrowserRouter>
  );
};
