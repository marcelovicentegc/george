import gql from "graphql-tag";

export const queries = gql`
  type Query {
    getUserIdFromSession: User
    getUsername(id: String): String
    getGroupIdFromUserIdFromSession: Group
    getGroupIdFromUserId(id: String!): Group
    getThingsFromGroupId(id: String!): [Thing]
    getThingFromTopic(topic: String!): Thing
    getTriggerLog(id: String!): [TriggerLog]
    getThingsWithTriggerLog(id: String!): [ThingWithTriggerLog]
  }
`;
