import { Button, Dialog, Form } from "@fluentui/react-northstar";
import * as React from "react";
import { useMutation } from "react-apollo";
import { toast } from "react-toastify";
import {
  ChangePasswordDocument,
  ChangePasswordMutation,
  DeleteUserDocument,
  DeleteUserMutation,
  LogoutUserDocument,
  LogoutUserMutation,
} from "../../gql";
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
  const [deleteUser] = useMutation<DeleteUserMutation>(DeleteUserDocument);
  const [logout] = useMutation<LogoutUserMutation>(LogoutUserDocument);

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
              }).then(() => {
                toast("Password changed with success");
              });
              setAwaiting(false);
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
        <Dialog
          cancelButton="No, go back"
          confirmButton={awaiting ? "Deleting..." : "Yes, delete!"}
          onConfirm={async () => {
            setAwaiting(true);
            await deleteUser().then(() => {
              toast("Deleted user with success! Logging out...");
              logout();
            });
            setAwaiting(false);
          }}
          content={
            "Are you sure you want to delete your user? This action is not reversible."
          }
          header="Delete user"
          trigger={<Button content="Delete user" />}
        />
      </DashboardWrapper>
    </HomeWrapper>
  );
};

export { Settings as default };
