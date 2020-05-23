import gql from "graphql-tag";

export const queries = gql`
  type Query {
    getUserId: String
    getUsers: [User]
    getUsername(userId: String): String
    getProfileAvatar(userId: String): String
    getGroupId(userId: String): Group
    getThings(groupId: String!): [Thing]
    getThing(topic: String!): Thing
    getTriggerLog(groupId: String!): [TriggerLog]
    getThingsWithTriggerLog(id: String!): [ThingWithTriggerLog]
  }
`;
