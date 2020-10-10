import { Button, Dialog } from "@fluentui/react-northstar";
import * as React from "react";
import { useMutation } from "react-apollo";
import { toast } from "react-toastify";
import {
  DeleteUserDocument,
  DeleteUserMutation,
  LogoutUserDocument,
  LogoutUserMutation,
} from "../../../gql";

interface Props {
  awaiting: boolean;
  setAwaiting: (flag: boolean) => void;
}

export const DeleteAccount = ({ awaiting, setAwaiting }: Props) => {
  const [deleteUser] = useMutation<DeleteUserMutation>(DeleteUserDocument);
  const [logout] = useMutation<LogoutUserMutation>(LogoutUserDocument);

  return (
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
        "Are you sure you want to delete your account? This action is not reversible."
      }
      header="Delete account"
      trigger={<Button content="Delete account" />}
    />
  );
};
