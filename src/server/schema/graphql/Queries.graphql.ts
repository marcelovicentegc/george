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

export const getGroupIdFromUserIdFromSession = gql`
  query GetGroupIdFromUserIdFromSession {
    getGroupIdFromUserIdFromSession {
      id
    }
  }
`;

export const getGroupIdFromUserId = gql`
  query GetGroupIdFromUserId($id: String!) {
    getGroupIdFromUserId(id: $id) {
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
      triggerLog {
        date
        state
        thingId
      }
    }
  }
`;

export const getThingFromTopic = gql`
  query GetThingFromTopic($topic: String!) {
    getThingFromTopic(topic: $topic) {
      id
      space
      component
      topic
      triggerLog {
        id
        state
        date
        thingId
      }
    }
  }
`;

export const getTriggerLog = gql`
  query GetTriggerLog($id: String!) {
    getTriggerLog(id: $id) {
      id
      state
      date
      thingId
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
