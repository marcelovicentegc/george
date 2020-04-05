import * as React from "react";
import "./main.scss";
import { Mutation } from "react-apollo";
import { loginUser } from "../../../../server/schema/graphql/Mutations.graphql";
import { getUserIdFromSession } from "../../../../server/schema/graphql/Queries.graphql";
import { LoginUserMutation, LoginUserMutationVariables } from "../../../gql";

interface State {
  username: string;
  password: string;
  awaiting: boolean;
  errorMessage: string;
}

interface Props {}

export class Auth extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      awaiting: false,
      errorMessage: "",
    };
  }

  public render() {
    return (
      <div className="auth-wrapper">
        <div className="form-wrapper">
          <div className="form-header">
            <span>Welcome to George</span>
          </div>
          <Mutation<LoginUserMutation, LoginUserMutationVariables>
            mutation={loginUser}
            onError={(error) => this.setState({ errorMessage: error.message })}
            refetchQueries={[
              {
                query: getUserIdFromSession,
              },
            ]}
          >
            {(mutate) => (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-wrapper">
                  <span>Username</span>
                  <input
                    type="text"
                    name="username"
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                      this.setState({
                        errorMessage: undefined,
                      });
                    }}
                  />
                  {this.state.errorMessage && (
                    <span>{this.state.errorMessage}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                      this.setState({ errorMessage: undefined });
                    }}
                  />
                  {this.state.errorMessage && (
                    <span>{this.state.errorMessage}</span>
                  )}
                </div>
                <div className="button-wrapper">
                  <button
                    onClick={async () => {
                      this.setState({
                        awaiting: true,
                      });
                      await mutate({
                        variables: {
                          username: this.state.username,
                          password: this.state.password,
                        },
                      }).then(() => {
                        this.state.errorMessage &&
                          this.setState({
                            awaiting: false,
                          });
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
