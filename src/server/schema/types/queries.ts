import gql from "graphql-tag";

export const queries = gql`
  type Query {
    getUserId: String
    getUsername(userId: String): String
    getGroupId(userId: String): Group
    getThings(groupId: String!): [Thing]
    getThing(topic: String!): Thing
    getTriggerLog(groupId: String!): [TriggerLog]
    getThingsWithTriggerLog(id: String!): [ThingWithTriggerLog]
  }
`;
