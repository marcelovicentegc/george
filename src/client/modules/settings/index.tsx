import { Button, Dialog, Form } from "@fluentui/react-northstar";
import * as React from "react";
import { useMutation } from "react-apollo";
import { toast } from "react-toastify";
import { ChangePasswordDocument, ChangePasswordMutation } from "../../gql";
import { DashboardWrapper } from "../system/DashboardWrapper";
import { HomeWrapper } from "../system/HomeWrapper";

const Settings = () => {
  const [awaiting, setAwaiting] = React.useState(false);
  const [passwords, setPasswords] = React.useState({
    password: "",
    passwordConfirmation: "",
  });
  const [changePassword] = useMutation<ChangePasswordMutation>(
    ChangePasswordDocument
  );

  return (
    <HomeWrapper>
      <DashboardWrapper>
        <Dialog
          cancelButton="Cancel"
          confirmButton={awaiting ? "Submitting" : "Submit"}
          onConfirm={async () => {
            if (
              passwords.password &&
              passwords.passwordConfirmation &&
              passwords.passwordConfirmation === passwords.password
            ) {
              setAwaiting(true);
              await changePassword({
                variables: {
                  password: passwords.password,
                  passwordConfirmation: passwords.passwordConfirmation,
                },
              });
              setAwaiting(false);
              toast("Password changed with success");
            } else {
              toast("You must fill every input and they need to match.");
            }
          }}
          content={
            <>
              <Form
                fields={[
                  {
                    label: "New password",
                    name: "password",
                    id: "password",
                    key: "password",
                    type: "password",
                    required: true,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      setPasswords({ ...passwords, password: e.target.value });
                    },
                  },
                  {
                    label: "Password confirmation",
                    name: "passwordConfirmation",
                    id: "passwordConfirmation",
                    key: "passwordConfirmation",
                    type: "password",
                    required: true,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      setPasswords({
                        ...passwords,
                        passwordConfirmation: e.target.value,
                      });
                    },
                  },
                ]}
              />
            </>
          }
          header="Change password"
          trigger={<Button content="Change password" />}
        />
      </DashboardWrapper>
    </HomeWrapper>
  );
};

export { Settings as default };
