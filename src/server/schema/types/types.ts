import gql from "graphql-tag";

export const types = gql`
  scalar Upload

  enum Permission {
    ADMIN
    COMMON
  }

  type User {
    id: ID!
    profile: Profile!
    username: String!
    password: String!
    permission: Permission!
    activity: [TriggerLog]
  }

  type Profile {
    id: ID!
    avatar: Upload
    avatarUrl: String
    name: String
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
    user: User!
    thingId: String!
  }

  type ThingWithTriggerLog {
    space: String!
    component: String!
    state: String!
    date: String!
  }
`;
