import * as React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import { Form, Button, Dialog, Loader } from "@fluentui/react-northstar";
import { createGroup } from "../../../../gql";
import {
  CreateGroupMutationVariables,
  CreateGroupMutation,
} from "../../../gql";
import { DashboardWrapper } from "../../system/DashboardWrapper";
import { groups } from "../../../../gql/Queries.graphql";

const Groups = React.lazy(() => import("./Groups"));

const Dashboard: React.FC = () => {
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
    <DashboardWrapper
      wrapperChildren={
        <React.Suspense fallback={<Loader />}>
          <Groups />
        </React.Suspense>
      }
    >
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
    </DashboardWrapper>
  );
};

export { Dashboard as default };
