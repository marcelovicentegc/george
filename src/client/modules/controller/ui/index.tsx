import * as React from "react";
import Led from "./components/Led";
import "./main.scss";
// Here is where PUBLISH will occur to a specific topic (retrieved from the db)

export default class Controller extends React.Component {
  render() {
    return (
      <div className="controller-wrapper">
        <div className="controller">
          <Led />
        </div>
      </div>
    );
  }
}
