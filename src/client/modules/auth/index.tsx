import * as React from "react";
import * as s from "./main.scss";
import { Mutation } from "react-apollo";
import { loginUser, getUserId } from "../../../gql";
import { LoginUserMutation, LoginUserMutationVariables } from "../../gql";
import {
  Card,
  CardBody,
  Form,
  Button,
  Text,
  CardHeader,
} from "@fluentui/react-northstar";

interface State {
  username: string;
  password: string;
  awaiting: boolean;
  errorMessage: string;
}

interface Props {}

class Auth extends React.Component<Props, State> {
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
      <div className={s.auth}>
        <div className={s.cardWrapper}>
          <Mutation<LoginUserMutation, LoginUserMutationVariables>
            mutation={loginUser}
            onError={(error) => this.setState({ errorMessage: error.message })}
            refetchQueries={[
              {
                query: getUserId,
              },
            ]}
          >
            {(mutate) => (
              <Card className={s.card}>
                <CardHeader>
                  <Text weight="bold">Login</Text>
                </CardHeader>
                <CardBody>
                  <Form
                    fields={[
                      {
                        label: "Username",
                        name: "username",
                        id: "username",
                        key: "username",
                        required: true,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                          this.setState({ username: e.target.value });
                          this.setState({
                            errorMessage: undefined,
                          });
                        },
                      },
                      {
                        label: "Password",
                        name: "password",
                        id: "password",
                        key: "password",
                        type: "password",
                        required: true,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                          this.setState({ password: e.target.value });
                          this.setState({ errorMessage: undefined });
                        },
                      },
                      {
                        control: {
                          as: Button,
                          content: this.state.awaiting
                            ? "Signing in"
                            : "Sign in",
                          key: "submit",
                        },
                      },
                    ]}
                    onSubmit={async () => {
                      this.setState({
                        awaiting: true,
                      });
                      await mutate({
                        variables: {
                          username: this.state.username,
                          password: this.state.password,
                        },
                      }).then(() => {
                        this.setState({
                          awaiting: false,
                          errorMessage: this.state.errorMessage || "",
                        });
                      });
                    }}
                  />
                  {this.state.errorMessage && (
                    <span>{this.state.errorMessage}</span>
                  )}
                </CardBody>
              </Card>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}

export { Auth as default };
