import gql from "graphql-tag";

export const getUserIdFromSession = gql`
  query GetUserIdFromSession {
    getUserIdFromSession {
      id
    }
  }
`;

export const getUserUsernameFromId = gql`
  query GetUserUsernameFromId($id: String!) {
    getUserUsernameFromId(id: $id) {
      username
    }
  }
`;
