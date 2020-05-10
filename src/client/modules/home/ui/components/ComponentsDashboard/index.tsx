import * as React from "react";
import * as s from "./main.scss";
import { observer } from "mobx-react";
import { Components } from "../Components";
import { rootStoreContext } from "../../../../../stores/RootStore";
import {
  GetGroupIdFromUserIdQueryVariables,
  AddThingMutation,
  AddThingMutationVariables,
} from "../../../../../gql";
import { Button, Dialog, Form } from "@fluentui/react-northstar";
import { Mutation } from "react-apollo";
import { addThing } from "../../../../../../server/schema/graphql/Mutations.graphql";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import { ErrorMessage } from "../ErrorMessage";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

export const ComponentsDashboard: React.FunctionComponent<Props> = observer(
  ({ groupId }) => {
    const { newComponentStore } = React.useContext(rootStoreContext);
    const [space, setSpace] = React.useState<string>();
    const [component, setComponent] = React.useState<string>();
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
      undefined
    );
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
            <Dialog
              cancelButton="Cancel"
              content={
                <Mutation<AddThingMutation, AddThingMutationVariables>
                  mutation={addThing}
                  onError={(error) => {
                    setErrorMessage(error.message);
                  }}
                  refetchQueries={[
                    {
                      query: getThingsFromGroupId,
                      variables: {
                        id: groupId.id,
                      },
                    },
                  ]}
                  awaitRefetchQueries
                >
                  {(mutate) => (
                    <>
                      {errorMessage && (
                        <ErrorMessage errorMessage={errorMessage} />
                      )}
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
                          {
                            control: {
                              as: Button,
                              content: awaiting ? "Submitting" : "Submit",
                              key: "submit",
                              loader: awaiting,
                            },
                          },
                        ]}
                        onSubmit={async () => {
                          if (isValid() && !awaiting) {
                            setAwaiting(true);
                            await mutate({
                              variables: {
                                space,
                                component,
                              },
                            }).then(() => {
                              if (!errorMessage) {
                                setAwaiting(false);
                              }
                            });
                          }
                        }}
                      />
                    </>
                  )}
                </Mutation>
              }
              header="Add component"
              trigger={<Button circular content="+" />}
            />
          </div>
          <Components groupId={groupId} />
        </div>
      </>
    );
  }
);
