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

export const getGroupIdFromUserId = gql`
  query GetGroupIdFromUserId {
    getGroupIdFromUserId {
      id
    }
  }
`;

export const getThingsFromGroupId = gql`
  query GetThingsFromGroupId($id: String!) {
    getThingsFromGroupId(id: $id) {
      id
      space
      component
      topic
    }
  }
`;
