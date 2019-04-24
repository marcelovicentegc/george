import * as React from "react";
import { Mutation } from "react-apollo";
import { toggleLed } from "../../../../../../server/schema/graphql/Mutations.graphql";
import {
  ToggleLedMutation,
  ToggleLedVariables
} from "../../../../../__types__/typeDefs";

const Led: React.FunctionComponent = () => {
  const [ledState, setLedState] = React.useState(false);
  const handleClick = () => {
    if (ledState === true) {
      setLedState(false);
    } else {
      setLedState(true);
    }
  };

  return (
    <div className="led">
      <Mutation<ToggleLedMutation, ToggleLedVariables> mutation={toggleLed}>
        {mutate => (
          <button
            onClick={async () => {
              handleClick();
              await mutate({
                variables: { toggle: JSON.stringify(ledState) }
              });
            }}
          >
            <span>{ledState ? "Off" : "On"}</span>
          </button>
        )}
      </Mutation>
    </div>
  );
};

export default Led;
