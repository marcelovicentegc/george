import gql from "graphql-tag";

export const types = gql`
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

  enum Controller {
    SWITCH
  }

  type Thing {
    id: ID!
    space: String!
    component: String!
    controller: Controller!
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
`;
