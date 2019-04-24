import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PiConnector from "../modules/pi/PiConnector";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={PiConnector} />
      </Switch>
    </BrowserRouter>
  );
};
