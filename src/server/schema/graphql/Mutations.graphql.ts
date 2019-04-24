import gql from "graphql-tag";

export const toggleLed = gql`
  mutation ToggleLed($toggle: String!) {
    toggleLed(toggle: $toggle)
  }
`;
