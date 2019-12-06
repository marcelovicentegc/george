import gql from "graphql-tag";

export const typeDefs = gql`
  # https://github.com/apollographql/graphql-tools/issues/764

  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Group {
    id: String!
    name: String!
    users: [User]
    things: [Thing]
  }

  type Thing {
    id: ID!
    space: String!
    component: String!
    topic: String
    triggerLog: [TriggerLog]
  }

  type TriggerLog {
    id: ID!
    state: String!
    date: String!
    thingId: String!
  }

  type ThingWithTriggerLog {
    space: String!
    component: String!
    state: String!
    date: String!
  }

  type Query {
    getUserIdFromSession: User
    getUserUsernameFromId(id: String!): User
    getGroupIdFromUserIdFromSession: Group
    getGroupIdFromUserId(id: String!): Group
    getThingsFromGroupId(id: String!): [Thing]
    getThingFromTopic(topic: String!): Thing
    getTriggerLog(id: String!): [TriggerLog]
    getThingsWithTriggerLog(id: String!): [ThingWithTriggerLog]
  }

  type Mutation {
    loginUser(username: String!, password: String!): User
    logoutUser: Boolean!
    addThing(space: String!, component: String!): Boolean!
    toggleThing(toggle: String!, topic: String!): Boolean!
  }
`;
