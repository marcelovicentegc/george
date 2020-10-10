import { Button, Dialog, Dropdown, Form } from "@fluentui/react-northstar";
import * as React from "react";
import { Mutation } from "react-apollo";
import { toast } from "react-toastify";
import { addThing, getThings } from "../../../../gql";
import {
  AddThingMutation,
  AddThingMutationVariables,
  Controller,
} from "../../../gql";

interface Props {
  groupId: string;
}

export const AddThing = ({ groupId }: Props) => {
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
              });
              setAwaiting(false);
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
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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
  );
};
