import * as React from "react";
import * as s from "./main.scss";
import { observer } from "mobx-react";
import { Components } from "../Components";
import {
  AddThingMutation,
  AddThingMutationVariables,
  Controller,
} from "../../../gql";
import { Button, Dialog, Form, Dropdown } from "@fluentui/react-northstar";
import { Mutation } from "react-apollo";
import { addThing } from "../../../../gql/Mutations.graphql";
import { getThings } from "../../../../gql/Queries.graphql";
import { toast } from "react-toastify";

interface Props {
  groupId: string;
}

export const Dashboard: React.FunctionComponent<Props> = observer(
  ({ groupId }) => {
    const [space, setSpace] = React.useState<string>();
    const [component, setComponent] = React.useState<string>();
    const [controller, setController] = React.useState<Controller>(
      Controller.Switch
    );
    const [controllerOptions, setControllerOptions] = React.useState<string[]>(
      []
    );
    const [awaiting, setAwaiting] = React.useState(false);
    React.useEffect(() => {
      const options: string[] = [];

      // tslint:disable-next-line:forin
      for (const option in Controller) {
        options.push(option);
      }

      setControllerOptions(options);
    }, []);

    const isValid = () => {
      if (space && component && controller) {
        return true;
      } else {
        return false;
      }
    };

    const controllerLabelId = "choose-controller";
    const controllerId = "choose-controller-id";

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
                          controller,
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
                            label: "Controller",
                            name: "controller",
                            key: controllerId,
                            type: "controller",
                            control: {
                              as: Dropdown,
                              items: controllerOptions,
                              "aria-labelledby": controllerLabelId,
                              placeholder: "Choose a controller type",
                              searchInput: {
                                id: controllerId, // id needs to end up on the search input.
                              },
                              id: undefined, // not on the main wrapper element.
                            },
                            required: true,
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setController(e.target.value as Controller);
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
