import * as React from "react";
import "./main.scss";
import Led from "./components/Led";

export default class Pi extends React.Component {
  render() {
    return (
      <div className="hello-world">
        <p>Hello world!</p>
        <Led />
      </div>
    );
  }
}
