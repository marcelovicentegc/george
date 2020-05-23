import * as React from "react";
import * as s from "./main.scss";
import { observer } from "mobx-react";
import { Components } from "../Components";
import {
  AddThingMutation,
  AddThingMutationVariables,
  Controller,
} from "../../../gql";
import { Button, Dialog, Form } from "@fluentui/react-northstar";
import { Mutation } from "react-apollo";
import { addThing } from "../../../../gql/Mutations.graphql";
import { getThings } from "../../../../gql/Queries.graphql";
import { toast } from "react-toastify";

interface Props {
  groupId: string;
}

export const ComponentsDashboard: React.FunctionComponent<Props> = observer(
  ({ groupId }) => {
    const [space, setSpace] = React.useState<string>();
    const [component, setComponent] = React.useState<string>();
    const [awaiting, setAwaiting] = React.useState(false);

    const isValid = () => {
      if (space && component) {
        return true;
      } else {
        return false;
      }
    };

    return (
      <>
        <div className={s.dashboardWrapper} data-testid="dashboardWrapper">
          <div className={s.dashboard} data-testid="dashboard">
            <Mutation<AddThingMutation, AddThingMutationVariables>
              mutation={addThing}
              onError={(error) => {
                toast(error.message);
              }}
              refetchQueries={[
                {
                  query: getThings,
                  variables: {
                    groupId,
                  },
                },
              ]}
              awaitRefetchQueries
            >
              {(mutate) => (
                <Dialog
                  className={s.dialog}
                  cancelButton="Cancel"
                  confirmButton={awaiting ? "Submitting" : "Submit"}
                  onConfirm={async () => {
                    if (isValid() && !awaiting) {
                      setAwaiting(true);
                      await mutate({
                        variables: {
                          space,
                          component,
                          controller: Controller.Switch,
                        },
                      }).finally(() => {
                        setAwaiting(false);
                      });
                    }
                  }}
                  content={
                    <>
                      <Form
                        fields={[
                          {
                            label: "Space",
                            name: "space",
                            id: "space",
                            key: "space",
                            required: true,
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setSpace(e.target.value);
                            },
                          },
                          {
                            label: "Component",
                            name: "component",
                            id: "component",
                            key: "component",
                            type: "component",
                            required: true,
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setComponent(e.target.value);
                            },
                          },
                        ]}
                      />
                    </>
                  }
                  header="Add component"
                  trigger={<Button circular content="+" />}
                />
              )}
            </Mutation>
          </div>
          <Components groupId={groupId} />
        </div>
      </>
    );
  }
);
