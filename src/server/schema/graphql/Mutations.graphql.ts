import gql from "graphql-tag";

export const toggleLed = gql`
  mutation ToggleLed($toggle: String!) {
    toggleLed(toggle: $toggle)
  }
`;

export const toggleAbajur = gql`
  mutation ToggleAbajur($toggle: String!) {
    toggleAbajur(toggle: $toggle)
  }
`;

export const toggleAC = gql`
  mutation ToggleAC($toggle: String!) {
    toggleAC(toggle: $toggle)
  }
`;
