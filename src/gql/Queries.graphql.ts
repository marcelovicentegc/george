import gql from "graphql-tag";

export const getUserId = gql`
  query GetUserId {
    getUserId
  }
`;

export const getUsername = gql`
  query GetUsername($userId: String) {
    getUsername(userId: $userId)
  }
`;

export const getUsers = gql`
  query GetUsers {
    getUsers {
      username
      permission
      profile {
        avatarUrl
      }
    }
  }
`;

export const getPermission = gql`
  query GetPermission($userId: String) {
    getPermission(userId: $userId)
  }
`;

export const getProfileAvatar = gql`
  query GetProfileAvatar($userId: String) {
    getProfileAvatar(userId: $userId)
  }
`;

export const getGroupIdFromUserId = gql`
  query GetGroupId($userId: String) {
    getGroupId(userId: $userId) {
      id
    }
  }
`;

export const getGroup = gql`
  query GetGroup($id: String!) {
    getGroup(id: $id) {
      name
      users {
        id
        username
        profile {
          avatarUrl
        }
      }
      things {
        id
        space
        component
      }
    }
  }
`;

export const groupNames = gql`
  query GroupNames {
    groupNames
  }
`;

export const groups = gql`
  query Groups {
    groups {
      name
      users {
        id
        username
        profile {
          avatarUrl
        }
      }
      things {
        id
        space
        component
      }
    }
  }
`;

export const getThings = gql`
  query GetThings($groupId: String!) {
    getThings(groupId: $groupId) {
      id
      space
      component
      topic
      triggerLog {
        date
        state
        thingId
      }
    }
  }
`;

export const getThing = gql`
  query GetThing($topic: String!) {
    getThing(topic: $topic) {
      id
      space
      component
      topic
      triggerLog {
        id
        state
        date
        thingId
        user {
          username
        }
      }
    }
  }
`;

export const getTriggerLog = gql`
  query GetTriggerLog($groupId: String!) {
    getTriggerLog(groupId: $groupId) {
      id
      state
      date
      thingId
      user {
        username
      }
    }
  }
`;

export const getThingsWithTriggerLog = gql`
  query GetThingsWithTriggerLog($id: String!) {
    getThingsWithTriggerLog(id: $id) {
      space
      component
      state
      date
    }
  }
`;
