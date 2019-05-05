import * as React from "react";
import "./main.scss";

export default class Auth extends React.Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="form-wrapper">
          <form>
            <div className="input-wrapper">
              <span>Username</span>
              <input type="text" />
            </div>
            <div className="input-wrapper">
              <span>Password</span>
              <input type="password" />
            </div>
            <div className="button-wrapper">
              <button>
                <span>Sign in</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
