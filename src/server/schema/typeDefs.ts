import gql from "graphql-tag";

const typeDefs = gql`
  # https://github.com/apollographql/graphql-tools/issues/764
  type Query {
    getUserIdFromSession: User
    getUserUsernameFromId(id: String!): User
    getGroupIdFromUserIdFromSession: Group
    getGroupIdFromUserId(id: String!): Group
    getThingsFromGroupId(id: String!): [Thing]
    getThingFromTopic(topic: String!): Thing
  }

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
    state: String!
    date: String!
    thingId: String!
  }

  type Mutation {
    loginUser(username: String!, password: String!): User
    logoutUser: Boolean!
    addThing(space: String!, component: String!): Boolean!
    toggleThing(toggle: String!, topic: String!): Boolean!
  }
`;

export default typeDefs;
