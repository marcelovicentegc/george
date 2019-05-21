import gql from "graphql-tag";

export const loginUser = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      username
    }
  }
`;

export const logoutUser = gql`
  mutation LogoutUser {
    logoutUser
  }
`;

export const addThing = gql`
  mutation AddThing($space: String!, $component: String!) {
    addThing(space: $space, component: $component)
  }
`;

export const toggleThing = gql`
  mutation ToggleThing($toggle: String!, $topic: String!) {
    toggleThing(toggle: $toggle, topic: $topic)
  }
`;
