import { observer } from "mobx-react";
import * as React from "react";
import { Mutation } from "react-apollo";
import useOnClickOutside from "use-onclickoutside";
import { addThing } from "../../../../../../server/schema/graphql/Mutations.graphql";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import { ErrorMessage } from "../ErrorMessage";
import "./main.scss";
import { rootStoreContext } from "../../../../../stores/RootStore";
import {
  GetGroupIdFromUserIdQueryVariables,
  AddThingMutation,
  AddThingMutationVariables,
} from "../../../../../gql";

interface Props {
  groupId: GetGroupIdFromUserIdQueryVariables;
}

export const NewComponentForm: React.FunctionComponent<Props> = observer(
  (props) => {
    const [space, setSpace] = React.useState<string>();
    const [component, setComponent] = React.useState<string>();
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
      undefined
    );
    const [awaiting, setAwaiting] = React.useState(false);
    const { newComponentStore } = React.useContext(rootStoreContext);
    const newComponentForm = React.useRef();

    const hideNewComponentForm = () => {
      newComponentStore.form = false;
    };
    useOnClickOutside(newComponentForm, hideNewComponentForm);

    const isValid = () => {
      if (space && component) {
        return true;
      } else {
        return false;
      }
    };

    return (
      <div
        className="new-component-form-wrapper"
        data-testid="new-component-form-wrapper"
      >
        <Mutation<AddThingMutation, AddThingMutationVariables>
          mutation={addThing}
          onError={(error) => {
            setErrorMessage(error.message);
          }}
          refetchQueries={[
            {
              query: getThingsFromGroupId,
              variables: {
                id: props.groupId.id,
              },
            },
          ]}
          awaitRefetchQueries
        >
          {(mutate) => (
            <>
              {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
              <form
                className="new-component-form"
                data-testid="new-component-form"
                onSubmit={(e) => e.preventDefault()}
                ref={newComponentForm}
              >
                <div
                  className="input-wrapper"
                  data-testid="space-input-wrapper"
                >
                  <span>Space</span>
                  <input
                    type="text"
                    name="space"
                    placeholder="I.g. living room"
                    onChange={(e) => {
                      setErrorMessage(undefined);
                      setSpace(e.target.value);
                    }}
                    required
                  />
                </div>
                <div
                  className="input-wrapper"
                  data-testid="component-input-wrapper"
                >
                  <span>Component</span>
                  <input
                    type="text"
                    name="component"
                    placeholder="I.g. balcony lamp"
                    onChange={(e) => {
                      setErrorMessage(undefined);
                      setComponent(e.target.value);
                    }}
                    required
                  />
                </div>
                <div
                  className="submit-button-wrapper"
                  data-testid="submit-button-wrapper"
                >
                  <button
                    onClick={async () => {
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
                            hideNewComponentForm();
                          }
                        });
                      }
                    }}
                    className="submit-button"
                    data-testid="submit-button"
                  >
                    {awaiting ? (
                      <span className="awaiting" data-testid="sending">
                        Sending
                      </span>
                    ) : (
                      <span data-testid="send">Send</span>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </Mutation>
      </div>
    );
  }
);
