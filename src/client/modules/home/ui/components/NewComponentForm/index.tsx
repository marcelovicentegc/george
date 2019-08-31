import { observer } from "mobx-react-lite";
import * as React from "react";
import { Mutation } from "react-apollo";
import useOnClickOutside from "use-onclickoutside";
import { addThing } from "../../../../../../server/schema/graphql/Mutations.graphql";
import { getThingsFromGroupId } from "../../../../../../server/schema/graphql/Queries.graphql";
import {
  AddThingMutation,
  AddThingVariables,
  GetGroupIdFromUserIdGetGroupIdFromUserId
} from "../../../../../__types__/typeDefs";
import { ErrorMessage } from "../ErrorMessage";
import "./main.scss";
import { rootStoreContext } from "../../../../../stores/RootStore";

interface Props {
  groupId: GetGroupIdFromUserIdGetGroupIdFromUserId;
}

export const NewComponentForm: React.FunctionComponent<Props> = observer(
  props => {
    const [space, setSpace] = React.useState<string>();
    const [component, setComponent] = React.useState<string>();
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
      undefined
    );
    const [awaiting, setAwaiting] = React.useState(false);
    const { newComponentStore } = React.useContext(rootStoreContext);
    const newComponentForm = React.useRef();

    newComponentStore.form;
    const hideNewComponentForm = () => {
      newComponentStore.form = false;
    };

    useOnClickOutside(newComponentForm, hideNewComponentForm);

    return (
      <div className="new-component-form-wrapper">
        <Mutation<AddThingMutation, AddThingVariables>
          mutation={addThing}
          onError={error => {
            setErrorMessage(error.message);
          }}
          refetchQueries={[
            {
              query: getThingsFromGroupId,
              variables: {
                id: props.groupId.id
              }
            }
          ]}
          awaitRefetchQueries={true}
        >
          {mutate => (
            <>
              {errorMessage !== undefined ? (
                <ErrorMessage errorMessage={errorMessage} />
              ) : null}
              <form
                className="new-component-form"
                onSubmit={e => e.preventDefault()}
                ref={newComponentForm}
              >
                <div className="input-wrapper">
                  <span>Space</span>
                  <input
                    type="text"
                    name="space"
                    placeholder="I.g. living room"
                    onChange={e => {
                      setErrorMessage(undefined);
                      setSpace(e.target.value);
                    }}
                  />
                </div>
                <div className="input-wrapper">
                  <span>Component</span>
                  <input
                    type="text"
                    name="component"
                    placeholder="I.g. balcony lamp"
                    onChange={e => {
                      setErrorMessage(undefined);
                      setComponent(e.target.value);
                    }}
                  />
                </div>
                <div className="submit-button-wrapper">
                  <button
                    onClick={async () => {
                      setAwaiting(true);
                      await mutate({
                        variables: {
                          space: space,
                          component: component
                        }
                      }).then(() => {
                        if (errorMessage === undefined) {
                          setAwaiting(false);
                          hideNewComponentForm();
                          // Display success message and close this window 3s after displaying that message by altering
                          // the global state related to this pop up.
                        }
                      });
                    }}
                    className="submit-button"
                  >
                    {awaiting ? (
                      <span className="awaiting">Sending</span>
                    ) : (
                      <span>Send</span>
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
