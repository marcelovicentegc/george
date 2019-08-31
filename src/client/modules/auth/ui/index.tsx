import * as React from "react";
import { Mutation } from "react-apollo";
import { loginUser } from "../../../../server/schema/graphql/Mutations.graphql";
import { getUserIdFromSession } from "../../../../server/schema/graphql/Queries.graphql";
import {
  LoginUserMutation,
  LoginUserVariables
} from "../../../__types__/typeDefs";
import "./main.scss";

interface State {
  username: string;
  password: string;
  awaiting: boolean;
  errorMessage: string;
}

interface Props {}

export default class Auth extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      username: undefined,
      password: undefined,
      awaiting: false,
      errorMessage: undefined
    };
  }

  public render() {
    return (
      <div className="auth-wrapper">
        <div className="form-wrapper">
          <div className="form-header">
            <span>Dear smarthome 🏠</span>
          </div>
          <Mutation<LoginUserMutation, LoginUserVariables>
            mutation={loginUser}
            onError={error => this.setState({ errorMessage: error.message })}
            refetchQueries={[
              {
                query: getUserIdFromSession
              }
            ]}
          >
            {mutate => (
              <form onSubmit={e => e.preventDefault()}>
                <div className="input-wrapper">
                  <span>Username</span>
                  <input
                    type="text"
                    name="username"
                    onChange={e => {
                      this.setState({ username: e.target.value });
                      this.setState({
                        errorMessage: undefined
                      });
                    }}
                  />
                  {this.state.errorMessage !== undefined ? (
                    <span>{this.state.errorMessage}</span>
                  ) : null}
                </div>
                <div className="input-wrapper">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    onChange={e => {
                      this.setState({ password: e.target.value });
                      this.setState({ errorMessage: undefined });
                    }}
                  />
                  {this.state.errorMessage !== undefined ? (
                    <span>{this.state.errorMessage}</span>
                  ) : null}
                </div>
                <div className="button-wrapper">
                  <button
                    onClick={async () => {
                      this.setState({
                        awaiting: true
                      });
                      await mutate({
                        variables: {
                          username: this.state.username,
                          password: this.state.password
                        }
                      }).then(() => {
                        this.state.errorMessage !== null
                          ? this.setState({
                              awaiting: false
                            })
                          : null;
                      });
                    }}
                  >
                    {this.state.awaiting ? (
                      <span>Signing in</span>
                    ) : (
                      <span>Sign in</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}
