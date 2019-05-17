import { observer } from "mobx-react-lite";
import * as React from "react";
import { Mutation } from "react-apollo";
import useOnClickOutside from "use-onclickoutside";
import { addThing } from "../../../../../../server/schema/graphql/Mutations.graphql";
import NewComponentStoreContext from "../../../../../stores/NewComponentStore.store";
import {
  AddThingMutation,
  AddThingVariables
} from "../../../../../__types__/typeDefs";
import ErrorMessage from "../ErrorMessage";
import "./main.scss";

const NewComponentForm: React.FunctionComponent = observer(() => {
  const [name, setName] = React.useState();
  const [topic, setTopic] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState(undefined);
  const [awaiting, setAwaiting] = React.useState(false);
  const [success, setSucces] = React.useState(false);
  const NewComponentStore = React.useContext(NewComponentStoreContext);
  const newComponentForm = React.useRef();

  NewComponentStore.form;
  const hideNewComponentForm = () => {
    NewComponentStore.form = false;
  };
  console.log(NewComponentStore.form);

  useOnClickOutside(newComponentForm, hideNewComponentForm);

  if (success === true) {
    setTimeout(() => {
      // Alter global state in
    }, 3000);
  }

  return (
    <div className="new-component-form-wrapper">
      <Mutation<AddThingMutation, AddThingVariables>
        mutation={addThing}
        onError={error => {
          setErrorMessage(error.message);
        }}
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
                <span>Component name</span>
                <input
                  type="text"
                  onChange={e => {
                    setErrorMessage(undefined);
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-wrapper">
                <span>Component topic</span>
                <input
                  type="text"
                  onChange={e => {
                    setErrorMessage(undefined);
                    setTopic(e.target.value);
                  }}
                />
              </div>
              <div className="submit-button-wrapper">
                <button
                  onClick={async () => {
                    setAwaiting(true);
                    await mutate({
                      variables: {
                        name: name,
                        topic: topic
                      }
                    }).then(() => {
                      if (errorMessage === undefined) {
                        setAwaiting(false);
                        setSucces(true);
                        // Display success message and close this window 3s after displaying that message by altering
                        // the global state related to this pop up.
                      }
                    });
                  }}
                  className="submit-button"
                >
                  <span>Send</span>
                </button>
              </div>
            </form>
          </>
        )}
      </Mutation>
    </div>
  );
});

export default NewComponentForm;
