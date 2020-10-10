import { Button, Dialog, Form } from "@fluentui/react-northstar";
import * as React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import { createGroup } from "../../../../gql";
import { groups } from "../../../../gql/Queries.graphql";
import {
  CreateGroupMutation,
  CreateGroupMutationVariables,
} from "../../../gql";

export const AddGroup = () => {
  const [awaiting, setAwaiting] = React.useState(false);
  const [groupData, setGroupData] = React.useState<
    CreateGroupMutationVariables
  >({ name: "" });

  const isValid = () => {
    if (groupData.name) {
      return true;
    }

    return false;
  };

  return (
    <Mutation<CreateGroupMutation, CreateGroupMutationVariables>
      mutation={createGroup}
      onError={(error) => {
        toast(error.message);
      }}
      refetchQueries={[
        {
          query: groups,
        },
      ]}
      awaitRefetchQueries
    >
      {(mutate) => (
        <Dialog
          cancelButton="Cancel"
          confirmButton={awaiting ? "Submitting" : "Submit"}
          onConfirm={async () => {
            if (isValid() && !awaiting) {
              setAwaiting(true);
              await mutate({
                variables: {
                  name: groupData.name,
                },
              }).finally(() => {
                setAwaiting(false);
              });
            } else {
              toast("You must fill in every input field.");
            }
          }}
          content={
            <>
              <Form
                fields={[
                  {
                    label: "Name",
                    name: "name",
                    id: "name",
                    key: "name",
                    required: true,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      setGroupData({
                        name: e.target.value,
                      });
                    },
                  },
                ]}
              />
            </>
          }
          header="Add group"
          trigger={<Button circular content="+" />}
        />
      )}
    </Mutation>
  );
};
