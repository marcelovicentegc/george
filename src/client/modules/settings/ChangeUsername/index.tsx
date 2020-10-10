import { Button, Dialog, Form } from "@fluentui/react-northstar";
import * as React from "react";
import { useMutation } from "react-apollo";
import { toast } from "react-toastify";
import { ChangeUsernameDocument, ChangeUsernameMutation } from "../../../gql";

interface Props {
  awaiting: boolean;
  setAwaiting: (flag: boolean) => void;
}

export const ChangeUsername = ({ awaiting, setAwaiting }: Props) => {
  const [username, setUsername] = React.useState("");
  const [changeUsername] = useMutation<ChangeUsernameMutation>(
    ChangeUsernameDocument
  );

  return (
    <Dialog
      cancelButton="Cancel"
      confirmButton={awaiting ? "Submitting" : "Submit"}
      onConfirm={async () => {
        if (username) {
          setAwaiting(true);
          await changeUsername({
            variables: {
              username,
            },
          }).then(() => {
            toast("Username changed with success");
          });
          setAwaiting(false);
        } else {
          toast("You must fill every input.");
        }
      }}
      content={
        <>
          <Form
            fields={[
              {
                label: "New username",
                name: "username",
                id: "username",
                key: "username",
                required: true,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                },
              },
            ]}
          />
        </>
      }
      header="Change username"
      trigger={<Button content="Change username" />}
    />
  );
};
